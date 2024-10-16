import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import ViewStudent from "./ViewStudent";

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Student Management System</h1>
                <Routes>
                    <Route path="/" element={<StudentList />} />  {/* Student List */}
                    <Route path="/add" element={<AddStudent />} />  {/* Add Student */}
                    <Route path="/edit/:id" element={<EditStudent />} />  {/* Edit Student */}
                    <Route path="/view/:id" element={<ViewStudent />} />  {/* View Student */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

