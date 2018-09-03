var regButton = document.getElementById('register_button');

if (regButton) {
    regButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        
        siteObj.form.send('register_form', 'register.php');
    });

}