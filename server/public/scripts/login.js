$(document).ready(() => {

    $('#loginBtn').on('click', (e) => {
        e.preventDefault();

        let data = {
            "username": $('#inputUserName').val(),
            "password": $('#inputPassword').val()
        };

        $.post("http://localhost:3000/users/login", data, function () { })
            .done(function (res) {
                console.log(res);
                if (res != null) {
                    $('#msg').removeClass('alert-danger');
                    $('#msg').addClass('alert-success');
                    $('#msg').html('Success!');

                    $('#inputUserName').val('');
                    $('#inputUserName').attr("disabled", true);
                    $('#inputPassword').val('');
                    $('#inputPassword').attr("disabled", true);
                    $('#loginBtn').hide();
                    window.location.href = '/leagues';
                } else {
                    $('#msg').html('Invalid Creds!');
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



});