const inputEm = document.querySelector("#Email")
const btn = document.querySelector("#submit")
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const errorIcon = document.querySelector('#error-icon');
const errorText = document.querySelector('.error');
const fromGroupEl = document.querySelector('.e-mail-group');
let errors = [];



btn.addEventListener('click', e => {
    // remove success class
    errorText.classList.remove('success');

  
    // reset errors
    errors = [];
    // prevent default action of form
    e.preventDefault();
    // validate email address
    const email = inputEm.value;
  
    if (email == '' || email === undefined) {
      errors.push('Please provide us your email');
      // show error
      errorIcon.style.display = 'block';
      errorText.innerText = errors[0];
    } else if (!email.match(RegEmail)) {
      errors.push('Please provide us your valid email');
      // show error icon
      errorIcon.style.display = 'block';
      errorText.innerText = errors[0];
    }
  
    if (!errors.length > 0) {
      // hide error icon
      errorIcon.style.display = 'none';
      errorText.classList.add('text-success');
      errorText.innerText = 'Thank you for subscribing to our newsletter.';
    }
  });


 