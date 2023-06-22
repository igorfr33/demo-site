form.addEventListener('submit',  e => {
    e.preventDefault();
        grecaptcha.enterprise.execute();
    }       
    );
function sendForm(){
    alert("reCAPTCHA funcionou");
}