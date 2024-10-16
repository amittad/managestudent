import React, { useState, useEffect } from "react";
import { getStudentById, updateStudent } from "./api";
import { useParams, useNavigate } from "react-router-dom";
import './App.css';

const EditStudent = () => {
    const { id } = useParams();  // get student ID from URL
    const navigate = useNavigate();
    const [student, setStudent] = useState({ name: "", age: "", email: "" });

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        const result = await getStudentById(id);
        setStudent(result.data);
    };

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateStudent(id, student);
        navigate("/");  // redirect to the student list page
    };

    return (
        <div>
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="number"
                    name="age"
                    value={student.age}
                    onChange={handleChange}
                    placeholder="Age"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
};

export default EditStudent;

