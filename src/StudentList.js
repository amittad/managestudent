import React, { useState, useEffect } from "react";
import { getAllStudents, deleteStudent } from "./api";
import { Link } from "react-router-dom";
import './App.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await getAllStudents();
        setStudents(result.data);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        loadStudents();  // Refresh the list after deleting
    };

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} ({student.age}) - {student.email}
                        <Link to={`/edit/${student.id}`}>Edit</Link> {/* Edit button */}
                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
