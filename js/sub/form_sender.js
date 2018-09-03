siteObj.form = (function () {

    function send(formName, phpName) {
        var formElem = document.forms[formName],
            errorElem = formElem.getElementsByClassName('error')[0],
            error = '';

        for (let i = 0; i < formElem.length; i++) {
            formElem[i].classList.remove('error');

            if (formElem[i].value == '' && formElem[i].tagName != 'BUTTON') {
                formElem[i].classList.add('error');
                error = 'Kérjük adjon meg minden adatot!';
            }
        }

        if (error == '') {
            var formData = new FormData(formElem);

            fetch('/php/' + phpName, {
                method: 'POST',
                body: formData
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                var resError = false;
                console.log(response);
                if (response) {
                    var resError = JSON.parse(response);
                }
                
                if (resError == true) {
                    errorElem.classList.add('active');
                    errorElem.innerHTML = 'Valami nem stimmel!';
                } else {
                    formElem.innerHTML = '<div class="success">Sikeres művelet!</div>';
                    setTimeout(() => {
                        window.location = "/";
                    }, 1000);
                }

            }).catch(function (error) {
                console.log(error);
            });
        } else {
            errorElem.classList.add('active');
            errorElem.innerHTML = error;
        }
    }

    return {
        send: send
    }
}());