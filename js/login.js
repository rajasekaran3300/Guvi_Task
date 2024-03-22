$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        var formData = $(this).serialize(); // Serialize the form data

        $.ajax({
            type: 'POST',
            url: 'php/login.php', // Specify the correct URL for the PHP script
            data: formData,
            success: function(response) {
                if (response.trim() === "success") {
                    var username = $('#username').val(); 
                    localStorage.setItem('username', username); 
                    window.location.href = 'profile.html'; // Redirect to profile page upon successful login
                } else {
                    $('#loginResponse').html("<span style='color:red'>" + response + "</span>");
                }
            }
        });
    });
});
