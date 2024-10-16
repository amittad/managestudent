import axios from 'axios';

const API_URL = "http://localhost:8080/api/students";

// Fetch all students
export const getAllStudents = () => axios.get(API_URL);

// Fetch a student by ID
export const getStudentById = (id) => axios.get(`${API_URL}/${id}`);

// Add a new student
export const createStudent = (student) => axios.post(API_URL, student);

// Update a student
export const updateStudent = (id, student) => axios.put(`${API_URL}/${id}`, student);

// Delete a student
export const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);
