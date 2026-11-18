-- =============================================================================
-- MySQL Database Schema & Sample Data for AngularJS Ingestion
-- =============================================================================

CREATE DATABASE IF NOT EXISTS jala_academy_db;
USE jala_academy_db;

CREATE TABLE IF NOT EXISTS students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    course_track VARCHAR(50) NOT NULL,
    cgpa DECIMAL(3, 2) NOT NULL,
    placement_status ENUM('Placed', 'Interview Scheduled', 'In Training') DEFAULT 'In Training',
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO students (full_name, email, course_track, cgpa, placement_status) VALUES
('Rohan Mehra', 'rohan.mehra@example.com', 'Full Stack Development', 8.75, 'Placed'),
('Sneha Reddy', 'sneha.reddy@example.com', 'Front-End UI Engineering', 9.10, 'Interview Scheduled'),
('Amitav Ghosh', 'amitav.ghosh@example.com', 'QA Automation & Testing', 8.40, 'In Training'),
('Tanvi Sharma', 'tanvi.sharma@example.com', 'Cloud Technologies', 9.25, 'Placed'),
('Varun Nair', 'varun.nair@example.com', 'Full Stack Development', 8.60, 'Interview Scheduled');

