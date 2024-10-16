import React, { useState, useEffect } from "react";
import { getStudentById } from "./api";
import { useParams } from "react-router-dom";
import './App.css';

const ViewStudent = () => {
    const { id } = useParams();  // get student ID from URL
    const [student, setStudent] = useState({ name: "", age: "", email: "" });

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        const result = await getStudentById(id);
        setStudent(result.data);
    };

    return (
        <div>
            <h2>View Student</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Email:</strong> {student.email}</p>
        </div>
    );
};

export default ViewStudent;
