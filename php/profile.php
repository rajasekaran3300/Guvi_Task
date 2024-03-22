<?php
// Include necessary files and libraries
include('database.php');
require_once '../vendor/autoload.php';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the 'username' parameter is set
    if (isset($_POST['username'])) {
        // Retrieve username from the POST data
        $username = $_POST['username'];
        
    

        // Example query to update user data based on some criteria (e.g., username)
        $filter = ['username' => $username];
       $updateData = [
    '$set' => [
        'interests' => $_POST['interests'],
        'location' => $_POST['location']
    ]
];


        // Update user data in MongoDB
        $result = $collection->updateOne($filter, $updateData, ['upsert' => true]);

        // Check if update was successful
        if ($result->getModifiedCount() > 0) {
            echo "User data updated successfully!";
        } else {
            echo "Failed to update user data.";
        }
    } else {
        echo "Username parameter is not set.";
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if the 'username' parameter is set
    if (isset($_GET['username'])) {
        // Retrieve username from the GET data
        $username = $_GET['username'];

       
        $userInfo = $collection->findOne(['username' => $username]);

        // Check if user information is found
        if ($userInfo) {
            // Return user information as JSON
            echo json_encode($userInfo);
        } else {
            // User not found
            echo json_encode(['error' => 'User not found']);
        }
    } else {
        echo "Username parameter is not set.";
    }
} else {
    echo "Invalid request method.";
}
?>
