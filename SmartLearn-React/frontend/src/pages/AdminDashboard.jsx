import { useState, useEffect } from 'react'
import axios from 'axios'

function AdminDashboard() {
    const [data, setData] = useState({ students: [], batches: {} })

    useEffect(() => {
        axios.get('/api/admin/students')
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '30px' }}>
                Admin Dashboard
            </h1>

            <h2 style={{ color: 'white' }}>All Students ({data.students.length})</h2>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Roll Number</th>
                            <th>Name</th>
                            <th>Technology</th>
                            <th>Batch</th>
                            <th>Test Score</th>
                            <th>Certified</th>
                            <th>Registered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.students.map(student => (
                            <tr key={student.id}>
                                <td>{student.roll_number}</td>
                                <td>{student.name}</td>
                                <td>{student.technology}</td>
                                <td>{student.batch_group}</td>
                                <td>{student.test_score}/3</td>
                                <td>{student.is_certified ? '✅ Yes' : '❌ No'}</td>
                                <td>{new Date(student.registration_date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h2 style={{ color: 'white', marginTop: '50px' }}>Students by Batch</h2>

            {Object.keys(data.batches).map(batchName => (
                <div key={batchName} style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#4facfe' }}>{batchName} ({data.batches[batchName].length} students)</h3>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Roll Number</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Score</th>
                                    <th>Certified</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.batches[batchName].map(student => (
                                    <tr key={student.id}>
                                        <td>{student.roll_number}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.mobile}</td>
                                        <td>{student.test_score}/3</td>
                                        <td>{student.is_certified ? '✅' : '❌'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminDashboard
