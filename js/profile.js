$(document).ready(function() {
    // Retrieve username from local storage
    var username = localStorage.getItem('username');

    if (username) {
        // Send AJAX request to server to retrieve user information from MongoDB
        $.ajax({
            type: 'GET',
            url: 'php/profile.php',
            data: { username: username },
            success: function(response) {
                // Parse the JSON response
                var userInfo = JSON.parse(response);
   console.log(userInfo)
                // Update the user profile page with retrieved information
                $('#username').text(userInfo.username);
                $('#email').text(userInfo.email);
                $('#location').text(userInfo.location);
                $('#interests').text(userInfo.interests);
            },
            error: function(xhr, status, error) {
                console.error("Error retrieving user information:", error);
            }
        });
    } else {
        console.log("No username found in local storage.");
    }

    // Submit the update form when the form is submitted
    $('#updateForm').submit(function(e) {
        e.preventDefault(); // Prevent default form submission
        console.log("function caleed");
        // Get form data
        var formData = $(this).serialize();
        formData += '&username=' + encodeURIComponent(username);
        console.log(formData)

        
        console.log(formData);
        $.ajax({
            type: 'POST',
            url: 'php/profile.php',
            data: formData,
            success: function(response) {
                console.log(response); // Log the server response
                // You can update the UI or display a message to the user here
            },
            error: function(xhr, status, error) {
                console.error("Error updating user profile:", error);
            }
        });
    });
});
