<?php
// =============================================================================
// PHP Backend API Endpoint: fetch_students.php
// Bridges MySQL Database Table to AngularJS Front-End Program
// =============================================================================

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$user = "root";
$password = "";
$database = "jala_academy_db";

// 1. Establish connection to MySQL
$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "MySQL Connection Failed: " . $conn->connect_error]);
    exit();
}

// 2. Query data from MySQL students table
$sql = "SELECT student_id, full_name, email, course_track, cgpa, placement_status FROM students";
$result = $conn->query($sql);

$students = array();
if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $students[] = $row;
    }
}

// 3. Return JSON payload consumed by AngularJS $http.get()
echo json_encode($students);

$conn->close();
?>

