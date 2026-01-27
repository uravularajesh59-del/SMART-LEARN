import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        axios.get('/api/technologies')
            .then(res => setTechnologies(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="container">
            <div className="hero-section">
                <h1>Welcome to SMART-LEARN</h1>
                <p className="subtitle">
                    Explore the latest technologies, watch introduction videos, and enroll in the course that suits your career goals.
                    We provide automatic grouping and certification upon completion.
                </p>
            </div>

            <h2>Available Technologies</h2>

            <div className="card-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="card">
                        <div className="video-container">
                            <iframe
                                src={`https://www.youtube.com/embed/${tech.video_id}`}
                                frameBorder="0"
                                allowFullScreen
                                title={tech.name}
                            ></iframe>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{tech.name}</h3>
                            <p>{tech.desc}</p>
                            <p><strong>Scope:</strong> {tech.scope}</p>
                            <Link to={`/register/${tech.key}`} className="btn btn-block">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
