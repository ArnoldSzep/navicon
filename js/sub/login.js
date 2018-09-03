var loginButton = document.getElementById('login_button');

if (loginButton) {
    loginButton.addEventListener('click', function (ev) {
        ev.preventDefault();

        siteObj.form.send('login_form', 'login.php');
    });
}
