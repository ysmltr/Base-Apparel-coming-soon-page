document.getElementById('submit').addEventListener('click', function() {
  var emailInput = document.getElementById('Email');
  var errorIcon = document.getElementById('error-icon');
  var message = document.querySelector('.form p');

  if(emailInput.value === '') { // Eğer input boş ise
    message.textContent = 'Looks like someone forget something!';
    message.className = 'error'; // Stil için sınıf ekleyin
    errorIcon.style.display = 'block'; // Hata ikonunu göster
  } else if(validateEmail(emailInput.value)) { // Eğer e-posta geçerli ise
    message.textContent = 'Sent with success';
    message.className = 'success'; // Stil için sınıf ekleyin
    errorIcon.style.display = 'none'; // Hata ikonunu gizle
  } else { // Eğer e-posta geçersiz ise
    message.textContent = 'Please provide a valid email';
    message.className = 'error'; // Stil için sınıf ekleyin
    errorIcon.style.display = 'block'; // Hata ikonunu göster
  }
});

function validateEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}