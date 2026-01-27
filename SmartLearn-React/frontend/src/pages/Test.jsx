import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Test() {
    const { studentId } = useParams()
    const navigate = useNavigate()
    const [student, setStudent] = useState(null)
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        // Fetch student data
        axios.get(`/api/student/by-id/${studentId}`)
            .then(res => {
                setStudent(res.data.student)
                // Fetch questions for this technology
                return axios.get(`/api/test/${res.data.student.technology}`)
            })
            .then(res => {
                setQuestions(res.data.questions)
                setAnswers(new Array(res.data.questions.length).fill(''))
            })
            .catch(err => console.error(err))
    }, [studentId])

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers]
        newAnswers[index] = answer
        setAnswers(newAnswers)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('/api/test/submit', {
                studentId,
                answers,
                technology: student.technology
            })

            if (response.data.success) {
                navigate(`/result/${studentId}`)
            }
        } catch (error) {
            console.error('Test submission failed:', error)
        }
    }

    if (!student || questions.length === 0) {
        return <div className="container"><p>Loading...</p></div>
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2>{student.technology} Assessment Test</h2>
                <p><strong>Student:</strong> {student.name}</p>
                <p><strong>Roll Number:</strong> {student.roll_number}</p>

                <form onSubmit={handleSubmit}>
                    {questions.map((question, index) => (
                        <div key={index} className="form-group" style={{ marginBottom: '30px' }}>
                            <label style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                                {index + 1}. {question.q}
                            </label>
                            {question.options.map((option, optIndex) => (
                                <div key={optIndex} style={{ marginLeft: '20px', marginTop: '10px' }}>
                                    <label style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <input
                                            type="radio"
                                            name={`question_${index}`}
                                            value={option}
                                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                                            required
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}

                    <button type="submit" className="btn btn-block">Submit Test</button>
                </form>
            </div>
        </div>
    )
}

export default Test
