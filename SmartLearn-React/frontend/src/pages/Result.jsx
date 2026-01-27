import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function Result() {
    const { studentId } = useParams()
    const [student, setStudent] = useState(null)

    useEffect(() => {
        axios.get(`/api/student/by-id/${studentId}`)
            .then(res => setStudent(res.data.student))
            .catch(err => console.error(err))
    }, [studentId])

    if (!student) {
        return <div className="container"><p>Loading...</p></div>
    }

    const passed = student.is_certified === 1
    const percentage = (student.test_score / 3) * 100

    return (
        <div className="container">
            <div className="form-container" style={{ textAlign: 'center' }}>
                <h2>Test Results</h2>

                <div style={{ margin: '30px 0' }}>
                    <h3 style={{ color: passed ? '#4facfe' : '#f5576c' }}>
                        {passed ? '✅ Congratulations!' : '❌ Not Passed'}
                    </h3>
                </div>

                <div style={{ background: '#f8f9fd', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                    <p><strong>Student:</strong> {student.name}</p>
                    <p><strong>Roll Number:</strong> {student.roll_number}</p>
                    <p><strong>Technology:</strong> {student.technology}</p>
                    <p><strong>Score:</strong> {student.test_score} / 3</p>
                    <p><strong>Percentage:</strong> {percentage.toFixed(2)}%</p>
                </div>

                {passed ? (
                    <div>
                        <p style={{ color: '#4facfe', fontSize: '1.1rem', marginBottom: '20px' }}>
                            You have successfully passed the test!
                        </p>
                        <Link to={`/certificate/${studentId}`} className="btn btn-success">
                            View Certificate
                        </Link>
                    </div>
                ) : (
                    <div>
                        <p style={{ color: '#f5576c', marginBottom: '20px' }}>
                            Sorry, you need to score at least 2/3 to pass. Please try again.
                        </p>
                        <Link to="/test-login" className="btn">
                            Retake Test
                        </Link>
                    </div>
                )}

                <Link to="/" style={{ display: 'block', marginTop: '20px', color: '#667eea' }}>
                    Return to Home
                </Link>
            </div>
        </div>
    )
}

export default Result
