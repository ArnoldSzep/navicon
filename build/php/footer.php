
    <footer class="mn_footer">
        <div class="container">
            <div class="grid_row flex flex--wrap">
                <div class="grid_col sm6_12 md4_12">
                    <div class="mn_footer-contact">
                        <h2>Kapcsolat</h2>
                        <b>Tel:</b> <a href="tel:+36301245678">+36 30 124 5678</a> <br>
                        <b>Email:</b> <a href="mailto:info@info.hu">info@info.hu</a> <br>
                        <b>Cím:</b> <a href="https://www.google.com/maps/place/Budapest,+Nap+u.+29,+1082" target="_blank">1081 Budapest, Példa utca 1.</a>
                    </div>
                </div>
                <div class="grid_col sm6_12 md4_12">
                    <div class="mn_footer-menu">
                        <h2>Menü</h2>
                        <a href="/about_us">Rólunk</a> <br>
                        <a href="/services">Szolgáltatásaink</a> <br>
                        <a href="/references">Referenciák</a> <br>
                        <a href="/contact">Kapcsolat</a>
                    </div>
                </div>
                <div class="grid_col md4_12 flex flex--center">
                    <a href="/" class="mn_footer-logo">
                        <img src="/img/logo.png" alt="">
                    </a>
                </div>
            </div>
        </div>

        <div class="mn_footer-bottom">
            <div class="container">
                <span class="copy"><?php echo date('Y') ?> © FIKTÍV cég Kft. - Minden Jog Fenntartva!</span>
                <a href="/img/szep_arnold_cv.pdf" target="_blank">Általános Szerződési Feltételek</a>
            </div>
        </div>
    </footer>

    <script>
        var menu = document.getElementsByClassName('menu-<?php echo $page ?>');

        if(menu){
            for (var i = 0; i < menu.length; i++) {
                menu[i].classList.add('active');
            }
        }
    </script>
    <script src="/js/script_<?php echo ($page == 'index' ? 'stp' : 'sub') ?>.js"></script>
</body>
</html>
