import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function TestLogin() {
    const [rollNumber, setRollNumber] = useState('')
    const [message, setMessage] = useState({ type: '', text: '' })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.get(`/api/student/${rollNumber}`)

            if (response.data.success) {
                const student = response.data.student

                if (student.is_certified) {
                    setMessage({ type: 'info', text: 'You have already completed the test and certified!' })
                    setTimeout(() => navigate(`/certificate/${student.id}`), 2000)
                } else {
                    navigate(`/test/${student.id}`)
                }
            }
        } catch (error) {
            setMessage({
                type: 'error',
                text: 'Student not found. Please register first.'
            })
        }
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2>Test Login</h2>
                <p>Enter your Roll Number to take the test</p>

                {message.text && (
                    <div className={`alert alert-${message.type === 'error' ? 'danger' : 'info'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Roll Number</label>
                        <input
                            type="text"
                            className="form-control"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value)}
                            required
                            placeholder="Enter your roll number"
                        />
                    </div>

                    <button type="submit" className="btn btn-block">Start Test</button>
                </form>
            </div>
        </div>
    )
}

export default TestLogin
