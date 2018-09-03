<?php include '../header.php'?>

<?php $_SESSION['logged_in'] = '';?>

<div class="container mn_content">
    <h1>Kilépés</h1>
    <h2>Sikeres kilépés!</h2>

    <script>
        setTimeout(() => {
            window.location = "/";
        }, 1000);
    </script>
</div>

<?php include '../footer.php'?>