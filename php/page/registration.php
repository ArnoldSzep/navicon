<?php include '../header.php'?>

<div class="container mn_content">
    <h1>Registration</h1>
    <form action="" method="post" id="register_form">
        <div class="error"></div>
        <label for="reg_name">Name:</label>
        <input type="text" name="reg_name" id="reg_name">
        <label for="reg_phone">Phone:</label>
        <input type="text" name="reg_phone" id="reg_phone">
        <label for="reg_email">E-mail:</label>
        <input type="text" name="reg_email" id="reg_email">
        <label for="reg_pass1">Password:</label>
        <input type="password" name="reg_pass1" id="reg_pass1">
        <label for="reg_pass2">Password again:</label>
        <input type="password" name="reg_pass2" id="reg_pass2">
        <br>
        <button id="register_button" class="button">Register</button>
    </form>
</div>

<?php include '../footer.php'?>