$(document).ready(function() {
    $('#registerForm').submit(function(e) {
        e.preventDefault();

        var formData = $(this).serialize(); 
        
        $.ajax({
            type: 'POST',
            url: 'php/register.php', 
            data: formData,
            success: function(response) {
               
                if (response.trim() === "success") {
                   
                    window.location.href = 'login.html';
                } 
                else{
                    $('#registrationResponse').html("<span style='color:red'>" + "you already registered" + "</span>");
                }
              
                
            },
            error: function(xhr, status, error) {
              
                $('#registrationResponse').html("<span style='color:red'>An error occurred. Please try again later.</span>");
            }
        });
    });
});
