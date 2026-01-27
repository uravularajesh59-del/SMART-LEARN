import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const { techKey } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        roll_number: '',
        email: '',
        mobile: '',
        dob: ''
    })
    const [message, setMessage] = useState({ type: '', text: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/register', {
                ...formData,
                technology: techKey
            })

            if (response.data.success) {
                setMessage({ type: 'success', text: response.data.message })
                setTimeout(() => navigate('/'), 2000)
            }
        } catch (error) {
            setMessage({
                type: 'error',
                text: error.response?.data?.message || 'Registration failed'
            })
        }
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2>Register for {techKey}</h2>

                {message.text && (
                    <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Roll Number</label>
                        <input
                            type="text"
                            name="roll_number"
                            className="form-control"
                            value={formData.roll_number}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            className="form-control"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="form-control"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-block">Submit Registration</button>
                </form>
            </div>
        </div>
    )
}

export default Register
