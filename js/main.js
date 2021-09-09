const checkBtn = document.getElementById('check-btn');
const emailField = document.getElementById('email-field');
const message = document.getElementById('check-message');

/* regEx pattern function */
function validateEmail(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

/* regEx click event handeler */
checkBtn.addEventListener('click', function() {
    const emailvalue = emailField.value;
    const validation = validateEmail(emailvalue);
    emailField.value = '';
   if(validation === true){
    message.innerHTML = `<h5 class= "text-success">Your Email is valid</h5>`;
   }
   else{
    message.innerHTML = `<h5 class= "text-danger">Your Email is not valid</h5>`;
   }
});
