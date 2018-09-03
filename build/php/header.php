<?php include 'page.php'?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Navicon</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <header id="mn_header" class="mn_header<?php echo ($page == 'index' ? ' mn_header--stp' : '') ?>">
        <div class="container flex flex--center">
            <a href="/" class="mn_header-logo">
                <img src="/img/logo.png" alt="">
            </a>
            <div href="/" class="mn_header-menu mn_menu">
                <a href="/about_us" class="menu-about_us">Rólunk</a>
                <a href="/services" class="menu-services">Szolgáltatásaink</a>
                <a href="/references" class="menu-references">Referenciák</a>
                <a href="/contact" class="menu-contact">Kapcsolat</a>
            </div>
            <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] != '') {?>

            <div href="/" class="mn_header-user">
                <span class="mn_header-name">
                    <img src="/img/key.svg" alt="">
                    <b><?php echo $_SESSION['logged_in'] ?></b>
                </span>
                <br>
                <a href="/logout" class="mn_header-logout">
                    <img src="/img/key.svg" alt="">
                   Kilépés
                </a>
            </div>

            <?php } else {?>

            <div href="/" class="mn_header-user">
                <a href="/login" class="mn_header-login">
                    <img src="/img/key.svg" alt="">
                    Belépés
                </a>
                <br>
                <a href="/registration" class="mn_header-registration">
                    <img src="/img/add_user.svg" alt="">
                    Regisztráció
                </a>
            </div>

            <?php }?>
        </div>

        <?php if (isset($page) && $page == 'index') {?>
        <div class="lighthouse">
            <div class="lighthouse-guide_light"></div>
            <div class="lighthouse-glow_light">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="268" height="293">
                <path fill-rule="evenodd" fill="#FFF" d="M0 292l18-6c12-5 22-12 22-12s10 10 23 10c12-1 27-11 27-11s10 7 21 7c13 0 26-8 26-8s10 8 20 8c11 0 23-8 23-8s10 8 19 8c12 1 23-6 23-6s13 8 22 10c13 3 24 3 24 3v5H0zm228-174c-8 6-12 19-12 19s-11-5-19-3c-8 3-13 14-13 14s-1-10 10-19c7-5 18-4 18-4s6-10 13-13c12-5 21 2 21 2s-11-1-18 4zm-56 150s-11 4-19 3c-8-2-13-8-15-8s-15 8-24 9c-10 1-20-7-20-7l2-13h74l2 16zm-4-38H98l2-21h66l2 21zm-63-84l2-19h52l2 19h-56zm60 42h-64l2-20h60l2 20zm-1-145h-6v30h6v14h-8l1 17h-48l1-17h-8V73h6V43h-6v-9h-9l36-28V0h8v6l36 28h-9v9zm-13 0h-36v30h10V56s1-6 8-6c6 0 8 6 8 6v17h10V43zM60 58c-9-1-20 4-20 4s-4-11-10-14c-7-4-18-1-18-1s7-7 19-5c8 1 14 10 14 10s11-3 18 1c11 5 12 15 12 15s-7-8-15-10z"/>
            </svg>
        </div>
        <?php }?>
    </header>