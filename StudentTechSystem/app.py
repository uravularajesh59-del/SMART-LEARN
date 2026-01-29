from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)
# Use environment variable for Secret Key (Production Best Practice)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'default_dev_secret_key') 
# Use environment variable for Database URL (Production Best Practice)
# Fix SQLAlchemy URL handling for Postgres (Render usage)
uri = os.environ.get('DATABASE_URL', 'sqlite:///database.db')
if uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)
app.config['SQLALCHEMY_DATABASE_URI'] = uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- Database Models ---
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    roll_number = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), nullable=False)
    mobile = db.Column(db.String(15), nullable=False)
    dob = db.Column(db.Date, nullable=False)
    technology = db.Column(db.String(50), nullable=False)
    batch_group = db.Column(db.String(50), nullable=False)
    test_score = db.Column(db.Integer, default=0)
    is_certified = db.Column(db.Boolean, default=False)
    registration_date = db.Column(db.DateTime, default=datetime.utcnow)

# --- Routes ---

@app.route('/')
def index():
    technologies = {
        'Python': {
            'name': 'Python Programming',
            'desc': 'Learn the most versatile language for AI, Data Science, and Web.',
            'scope': 'High demand in AI/ML, Backend Dev, Automation.',
            'videos': [
                {'id': '_uQrJ0TkZlc', 'title': 'Python Full Course for Beginners'},
                {'id': 'rfscVS0vtbw', 'title': 'Python Tutorial - Python for Beginners'},
                {'id': 't2_Q2BRzeEE', 'title': 'Python Project - Build a Real App'}
            ]
        },
        'Web Dev': {
            'name': 'Web Development',
            'desc': 'Master HTML, CSS, JS and build modern websites.',
            'scope': 'Essential for Frontend, Backend, and Full Stack roles.',
            'videos': [
                {'id': 'zJSY8tbf_ys', 'title': 'Web Development Full Course'},
                {'id': 'mU6anWqZJcc', 'title': 'Learn HTML5 and CSS3 From Scratch'},
                {'id': 'Ec3gKbf5hQ4', 'title': 'JavaScript Tutorial for Beginners'}
            ]
        },
        'Data Science': {
            'name': 'Data Science',
            'desc': 'Analyze data to drive decision making with Statistics and ML.',
            'scope': 'Data Analyst, Data Scientist, Business Intelligence.',
            'videos': [
                {'id': 'ua-CiDNNj30', 'title': 'Data Science Full Course'},
                {'id': 'X3paOmcrTjQ', 'title': 'Data Science for Beginners'},
                {'id': '-ETQ97mXXF0', 'title': 'Python for Data Science'}
            ]
        },
        'Java': {
            'name': 'Java Development',
            'desc': 'Build robust, scalable enterprise applications.',
            'scope': 'Enterprise Backend, Android App Development.',
            'videos': [
                {'id': 'A74TOX803D0', 'title': 'Java Programming for Beginners'},
                {'id': 'eIrMbAQSU34', 'title': 'Java Tutorial for Beginners'},
                {'id': 'grEKMHGYyns', 'title': 'Java Full Course'}
            ]
        }
    }
    return render_template('index.html', technologies=technologies)

@app.route('/course/<roll_number>')
def course(roll_number):
    student = Student.query.filter_by(roll_number=roll_number).first_or_404()
    
    # Re-define technologies dict here or access from a global scope if moved
    # For simplicity, duplicating the data structure or moving to global is best.
    # Let's move it to a helper function or global variable in next step if needed,
    # but for now I will define the relevant tech data here to ensure it works.
    
    tech_videos = {
        'Python': [
            {'id': '_uQrJ0TkZlc', 'title': 'Python Full Course for Beginners'},
            {'id': 'rfscVS0vtbw', 'title': 'Python Tutorial - Python for Beginners'},
            {'id': 't2_Q2BRzeEE', 'title': 'Python Project - Build a Real App'}
        ],
        'Web Dev': [
            {'id': 'zJSY8tbf_ys', 'title': 'Web Development Full Course'},
            {'id': 'mU6anWqZJcc', 'title': 'Learn HTML5 and CSS3 From Scratch'},
            {'id': 'Ec3gKbf5hQ4', 'title': 'JavaScript Tutorial for Beginners'}
        ],
        'Data Science': [
            {'id': 'ua-CiDNNj30', 'title': 'Data Science Full Course'},
            {'id': 'X3paOmcrTjQ', 'title': 'Data Science for Beginners'},
            {'id': '-ETQ97mXXF0', 'title': 'Python for Data Science'}
        ],
        'Java': [
            {'id': 'A74TOX803D0', 'title': 'Java Programming for Beginners'},
            {'id': 'eIrMbAQSU34', 'title': 'Java Tutorial for Beginners'},
            {'id': 'grEKMHGYyns', 'title': 'Java Full Course'}
        ]
    }
    
    videos = tech_videos.get(student.technology, [])
    
    return render_template('course.html', student=student, videos=videos)

@app.route('/register/<tech_key>', methods=['GET', 'POST'])
def register(tech_key):
    if request.method == 'POST':
        name = request.form['name']
        roll_number = request.form['roll_number']
        email = request.form['email']
        mobile = request.form['mobile']
        dob_str = request.form['dob']
        
        # Convert DOB string to date object
        dob = datetime.strptime(dob_str, '%Y-%m-%d').date()
        
        # Automatic Grouping Logic
        batch_group = f"{tech_key}_Batch_{datetime.now().year}"
        
        # Check if already registered
        existing_student = Student.query.filter_by(roll_number=roll_number).first()
        if existing_student:
             flash('Student with this Roll Number already exists! Redirecting to course.', 'info')
             return redirect(url_for('course', roll_number=roll_number))

        new_student = Student(
            name=name,
            roll_number=roll_number,
            email=email,
            mobile=mobile,
            dob=dob,
            technology=tech_key,
            batch_group=batch_group
        )
        
        db.session.add(new_student)
        db.session.commit()
        
        flash('Registration Successful! Please complete the video course before taking the test.', 'success')
        return redirect(url_for('course', roll_number=roll_number))
        
    return render_template('register.html', tech_key=tech_key)

@app.route('/admin')
def admin_dashboard():
    # Simple hardcoded admin check could be added here, skipping for simplicity as requested
    students = Student.query.all()
    
    # Grouping logic for display
    batches = {}
    for student in students:
        if student.batch_group not in batches:
            batches[student.batch_group] = []
        batches[student.batch_group].append(student)
        
    return render_template('admin_dashboard.html', students=students, batches=batches)

@app.route('/test_login', methods=['GET', 'POST'])
def test_login():
    if request.method == 'POST':
        roll_number = request.form['roll_number']
        student = Student.query.filter_by(roll_number=roll_number).first()
        if student:
            if student.is_certified:
                 flash('You have already completed the test and certified!', 'info')
                 return redirect(url_for('certificate', student_id=student.id))
            return redirect(url_for('take_test', student_id=student.id))
        else:
            flash('Student not found. Please register first.', 'danger')
            
    return render_template('test_login.html')

@app.route('/test/<int:student_id>', methods=['GET', 'POST'])
def take_test(student_id):
    student = Student.query.get_or_404(student_id)
    
    # Mock Questions based on Tech
    questions = {
        'Python': [
            {'q': 'What is the correct file extension for Python files?', 'options': ['.py', '.yt', '.pt', '.pn'], 'ans': '.py'},
            {'q': 'Which keyword is used to create a function in Python?', 'options': ['function', 'def', 'create', 'fun'], 'ans': 'def'},
             {'q': 'How do you insert comments in Python code?', 'options': ['//', '#', '/*', '--'], 'ans': '#'}
        ],
        'Web Dev': [
            {'q': 'What does HTML stand for?', 'options': ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'None'], 'ans': 'Hyper Text Markup Language'},
            {'q': 'Which character is used to indicate an end tag?', 'options': ['^', '/', '<', '*'], 'ans': '/'},
            {'q': 'Which HTML attribute is used to define inline styles?', 'options': ['class', 'style', 'font', 'styles'], 'ans': 'style'}
        ],
        'Data Science': [
            {'q': 'Which library is primarily used for data manipulation in Python?', 'options': ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'], 'ans': 'Pandas'},
            {'q': 'What acts as the input to a machine learning model?', 'options': ['Labels', 'Features', 'Predictions', 'Graphs'], 'ans': 'Features'},
            {'q': 'Supervised learning deals with...', 'options': ['Labeled data', 'Unlabeled data', 'Missing data', 'None'], 'ans': 'Labeled data'}
        ],
        'Java': [
            {'q': 'Which data type is used to create a variable that should store text?', 'options': ['String', 'Txt', 'string', 'Text'], 'ans': 'String'},
            {'q': 'How do you create a variable with the numeric value 5?', 'options': ['num x = 5', 'int x = 5', 'x = 5', 'float x = 5'], 'ans': 'int x = 5'},
            {'q': 'Which method can be used to find the length of a string?', 'options': ['getSize()', 'length()', 'len()', 'getLength()'], 'ans': 'length()'}
        ]
    }
    
    tech_questions = questions.get(student.technology, questions['Python']) # Default to Python if not found

    if request.method == 'POST':
        score = 0
        for i, q in enumerate(tech_questions):
            selected_option = request.form.get(f'question_{i}')
            if selected_option == q['ans']:
                score += 1
        
        # Update DB
        student.test_score = score
        # Simple logic: If score > 1 (out of 3), pass
        if score >= 2:
            student.is_certified = True
        
        db.session.commit()
        return redirect(url_for('result', student_id=student.id))

    return render_template('test.html', student=student, questions=tech_questions)

@app.route('/result/<int:student_id>')
def result(student_id):
    student = Student.query.get_or_404(student_id)
    return render_template('result.html', student=student)

@app.route('/certificate/<int:student_id>')
def certificate(student_id):
    student = Student.query.get_or_404(student_id)
    if not student.is_certified:
        flash("You are not eligible for a certificate yet. Please retake the test.", 'warning')
        return redirect(url_for('index'))
    return render_template('certificate.html', student=student, date=datetime.now().date())

# Initialize DB
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
