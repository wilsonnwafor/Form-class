
const submitBtn = document.getElementsByClassName('sub');
const form = document.getElementById('form');

// regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.getElementById('error');
  
form.addEventListener('submit', function(e){
  e.preventDefault();
  
  const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
  
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value;
  const email = emailInput.value.trim();
  const password =passwordInput.value;
  
  if (name == ''){
    error.innerHTML = 'Enter your Name'
    
  } else if (phone == '') {
    error.innerHTML = 'Enter your Phone'
  }else if (!emailRegex.test(email)) {
    error.innerHTML = 'Enter Your Email'
  } else if (password == '' &&  password.length < 6) {
    error.innerHTML = 'Enter a valid password'
  } else {
    alert('Form Submitted!!')
    error.innerHTML = '';
    
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  }
  
  
})