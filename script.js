$(document).ready(function () {
    $('#submitBtn').click(function () {
        var formData = $('#registrationForm').serialize();
        $.ajax({
            url: 'php/process.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                $('#response').html(response).fadeIn();
                $('#registrationForm')[0].reset();
            },
            error: function () {
                $('#response').html("An error occurred. Please try again.").fadeIn();
            }
        });
    });
});
