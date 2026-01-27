import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Certificate() {
    const { studentId } = useParams()
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`/api/certificate/${studentId}`)
            .then(res => setData(res.data))
            .catch(err => setError(err.response?.data?.message || 'Error loading certificate'))
    }, [studentId])

    if (error) {
        return (
            <div className="container">
                <div className="alert alert-warning">{error}</div>
            </div>
        )
    }

    if (!data) {
        return <div className="container"><p>Loading...</p></div>
    }

    return (
        <div className="container">
            <div className="certificate-container">
                <div className="cert-header">Certificate of Completion</div>

                <div className="cert-body">
                    <p>This is to certify that</p>
                    <div className="cert-name">{data.student.name}</div>
                    <p>Roll Number: {data.student.roll_number}</p>
                    <p>has successfully completed the</p>
                    <h3 style={{ color: '#667eea', margin: '20px 0' }}>{data.student.technology}</h3>
                    <p>course with a score of {data.student.test_score}/3</p>
                    <p style={{ marginTop: '40px' }}>
                        <strong>Date:</strong> {data.date}
                    </p>
                    <p><strong>Batch:</strong> {data.student.batch_group}</p>
                </div>

                <div style={{ marginTop: '40px', borderTop: '2px solid #667eea', paddingTop: '20px', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                        SMART-LEARN - Student Technology Guidance Platform
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button onClick={() => window.print()} className="btn">
                    Print Certificate
                </button>
            </div>
        </div>
    )
}

export default Certificate
