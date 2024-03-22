<?php
    require_once '../vendor/autoload.php';
    include('database.php');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $stmt = $conn->prepare("INSERT INTO user (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $password); 
        if ($stmt->execute()) {
            $document = array(
                "username" => $username,
                "password" => $password
            );
            $collection->insertOne($document);
            echo "success";
        } else {
            echo "error: username_exists";
     
        }
        $stmt->close();
    }
    $conn->close();
?>
