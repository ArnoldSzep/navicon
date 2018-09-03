<?php include '../header.php'?>

<div class="container mn_content">
    <h1>Belépés</h1>
    <form action="" method="post" id="login_form">
        <div class="error"></div>
        <label for="">E-mail:</label>
        <input type="text" name="email">
        <label for="">Jelszó:</label>
        <input type="password" name="password">
        <br>
        <button class="button" id="login_button">Belépés</button>
    </form>
</div>

<?php include '../footer.php'?>