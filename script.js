document.getElementById('newsletterForm').addEventListener('submit', function(event){
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  var value = emailInput.value;

  // Simple business email pattern (not exhaustive)
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!pattern.test(value)) {
    event.preventDefault();
    emailInput.classList.add('is-invalid');
    emailError.style.display = 'block';
  }else{
    emailInput.classList.remove('is-invalid');
    emailError.style.display = 'none';
  }
});