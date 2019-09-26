$(document).ready(() => {

    $('#registerBtn').on('click', (e) => {
        e.preventDefault();

        let data = {
            "username": $('#inputUserName').val(),
            "password": $('#inputPassword').val(),
            "email": $('#inputEmail').val()
        };

        $.post("http://localhost:3000/users/register", data, function () { })
            .done(function (res) {
                if (res.ID) {
                    $('#msg').removeClass('alert-danger');
                    $('#msg').addClass('alert-success');
                    $('#msg').html('Success!');
    
                    $('#inputUserName').val('');
                    $('#inputUserName').attr("disabled", true);
                    $('#inputPassword').val('');
                    $('#inputPassword').attr("disabled", true);
                    $('#inputEmail').val('');
                    $('#inputEmail').attr("disabled", true);
    
                    $('#registerBtn').hide();
                    window.location.href = '/users/login'
                } else {
                    $('#msg').html('Duplicate User!');
                    
                    $('#msg').removeClass('alert-success');
                    $('#msg').addClass('alert-danger');
                    $('#inputUserName').focus();
                }

            })
            .fail(function (e) {
                if (e.status === 401) {
                    $('#msg').html('Account locked!');
                } else if (e.status === 403) {
                    $('#msg').html('Invalid Creds!');
                } else {
                    $('#msg').html(`Error: ${e.status}`);
                }

                $('#msg').removeClass('alert-success');
                $('#msg').addClass('alert-danger');
                $('#inputUserName').focus();
            });
        $('#msg').show();
    });


    ;
});