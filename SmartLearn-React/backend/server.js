import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize SQLite database
const db = new Database('smartlearn.db');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create Students table
db.exec(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    roll_number TEXT UNIQUE NOT NULL,
    email TEXT NOT NULL,
    mobile TEXT NOT NULL,
    dob TEXT NOT NULL,
    technology TEXT NOT NULL,
    batch_group TEXT NOT NULL,
    test_score INTEGER DEFAULT 0,
    is_certified INTEGER DEFAULT 0,
    registration_date TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

console.log('✅ Database initialized');

// ===== ROUTES =====

// GET - Technologies data
app.get('/api/technologies', (req, res) => {
  const technologies = [
    {
      name: 'Python Programming',
      desc: 'Learn the most versatile language for AI, Data Science, and Web.',
      scope: 'High demand in AI/ML, Backend Dev, Automation.',
      video_id: 'rfscVS0vtbw',
      key: 'Python'
    },
    {
      name: 'Web Development',
      desc: 'Master HTML, CSS, JS and build modern websites.',
      scope: 'Essential for Frontend, Backend, and Full Stack roles.',
      video_id: 'zJSY8tbf_ys',
      key: 'Web Dev'
    },
    {
      name: 'Data Science',
      desc: 'Analyze data to drive decision making with Statistics and ML.',
      scope: 'Data Analyst, Data Scientist, Business Intelligence.',
      video_id: 'X3paOmcrTjQ',
      key: 'Data Science'
    },
    {
      name: 'Java Development',
      desc: 'Build robust, scalable enterprise applications.',
      scope: 'Enterprise Backend, Android App Development.',
      video_id: 'A74TOX803D0',
      key: 'Java'
    }
  ];
  res.json(technologies);
});

// POST - Register student
app.post('/api/register', (req, res) => {
  const { name, roll_number, email, mobile, dob, technology } = req.body;

  // Check if student already exists
  const existing = db.prepare('SELECT * FROM students WHERE roll_number = ?').get(roll_number);
  if (existing) {
    return res.status(400).json({
      success: false,
      message: 'Student with this Roll Number already exists!'
    });
  }

  // Create batch group
  const year = new Date().getFullYear();
  const batch_group = `${technology}_Batch_${year}`;

  // Insert student
  const insert = db.prepare(`
    INSERT INTO students (name, roll_number, email, mobile, dob, technology, batch_group)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  try {
    const result = insert.run(name, roll_number, email, mobile, dob, technology, batch_group);
    res.json({
      success: true,
      message: `Registration Successful! You have been assigned to ${batch_group}`,
      studentId: result.lastInsertRowid
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Registration failed', error: error.message });
  }
});

// GET - Student by roll number
app.get('/api/student/:rollNumber', (req, res) => {
  const student = db.prepare('SELECT * FROM students WHERE roll_number = ?').get(req.params.rollNumber);

  if (!student) {
    return res.status(404).json({ success: false, message: 'Student not found' });
  }

  res.json({ success: true, student });
});

// GET - Test questions by technology
app.get('/api/test/:technology', (req, res) => {
  const questions = {
    'Python': [
      { q: 'What is the correct file extension for Python files?', options: ['.py', '.yt', '.pt', '.pn'], ans: '.py' },
      { q: 'Which keyword is used to create a function in Python?', options: ['function', 'def', 'create', 'fun'], ans: 'def' },
      { q: 'How do you insert comments in Python code?', options: ['//', '#', '/*', '--'], ans: '#' }
    ],
    'Web Dev': [
      { q: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'None'], ans: 'Hyper Text Markup Language' },
      { q: 'Which character is used to indicate an end tag?', options: ['^', '/', '<', '*'], ans: '/' },
      { q: 'Which HTML attribute is used to define inline styles?', options: ['class', 'style', 'font', 'styles'], ans: 'style' }
    ],
    'Data Science': [
      { q: 'Which library is primarily used for data manipulation in Python?', options: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'], ans: 'Pandas' },
      { q: 'What acts as the input to a machine learning model?', options: ['Labels', 'Features', 'Predictions', 'Graphs'], ans: 'Features' },
      { q: 'Supervised learning deals with...', options: ['Labeled data', 'Unlabeled data', 'Missing data', 'None'], ans: 'Labeled data' }
    ],
    'Java': [
      { q: 'Which data type is used to create a variable that should store text?', options: ['String', 'Txt', 'string', 'Text'], ans: 'String' },
      { q: 'How do you create a variable with the numeric value 5?', options: ['num x = 5', 'int x = 5', 'x = 5', 'float x = 5'], ans: 'int x = 5' },
      { q: 'Which method can be used to find the length of a string?', options: ['getSize()', 'length()', 'len()', 'getLength()'], ans: 'length()' }
    ]
  };

  const techQuestions = questions[req.params.technology] || questions['Python'];
  res.json({ success: true, questions: techQuestions });
});

// POST - Submit test
app.post('/api/test/submit', (req, res) => {
  const { studentId, answers, technology } = req.body;

  // Get questions for this technology
  const questionsResponse = db.prepare('SELECT * FROM students WHERE id = ?').get(studentId);
  if (!questionsResponse) {
    return res.status(404).json({ success: false, message: 'Student not found' });
  }

  // Calculate score
  let score = 0;
  const questions = {
    'Python': [
      { ans: '.py' },
      { ans: 'def' },
      { ans: '#' }
    ],
    'Web Dev': [
      { ans: 'Hyper Text Markup Language' },
      { ans: '/' },
      { ans: 'style' }
    ],
    'Data Science': [
      { ans: 'Pandas' },
      { ans: 'Features' },
      { ans: 'Labeled data' }
    ],
    'Java': [
      { ans: 'String' },
      { ans: 'int x = 5' },
      { ans: 'length()' }
    ]
  };

  const correctAnswers = questions[technology] || questions['Python'];
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index].ans) {
      score++;
    }
  });

  // Update student record
  const isCertified = score >= 2 ? 1 : 0;
  const update = db.prepare('UPDATE students SET test_score = ?, is_certified = ? WHERE id = ?');
  update.run(score, isCertified, studentId);

  res.json({
    success: true,
    score,
    totalQuestions: 3,
    passed: score >= 2,
    message: score >= 2 ? 'Congratulations! You passed!' : 'Please try again.'
  });
});

// GET - All students (Admin)
app.get('/api/admin/students', (req, res) => {
  const students = db.prepare('SELECT * FROM students ORDER BY registration_date DESC').all();

  // Group by batch
  const batches = {};
  students.forEach(student => {
    if (!batches[student.batch_group]) {
      batches[student.batch_group] = [];
    }
    batches[student.batch_group].push(student);
  });

  res.json({ success: true, students, batches });
});

// GET - Certificate data
app.get('/api/certificate/:studentId', (req, res) => {
  const student = db.prepare('SELECT * FROM students WHERE id = ?').get(req.params.studentId);

  if (!student) {
    return res.status(404).json({ success: false, message: 'Student not found' });
  }

  if (!student.is_certified) {
    return res.status(403).json({ success: false, message: 'Student is not certified yet' });
  }

  res.json({
    success: true,
    student,
    date: new Date().toLocaleDateString()
  });
});

// Serve static assets in production
const frontendBuildPath = join(__dirname, '../frontend/dist');
app.use(express.static(frontendBuildPath));

// Add a catch-all route to serve index.html for React Router
app.get('*', (req, res, next) => {
  // If the request is for an API route, don't serve index.html
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(join(frontendBuildPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 SMART-LEARN Node.js Backend Server');
  console.log(`📡 Server running on port ${PORT}`);
  console.log(`📊 Database: smartlearn.db`);
  console.log('✨ Ready to accept requests!');
});
