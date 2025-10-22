// Simple client-side validation for the login form
(function(){
  const form = document.getElementById('loginForm');
  if (!form) return;

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  function validateEmail(value){
    return /\S+@\S+\.\S+/.test(value);
  }

  form.addEventListener('submit', function(e){
    let valid = true;
    emailError.textContent = '';
    passwordError.textContent = '';

    if (!email.value.trim()){
      emailError.textContent = 'الرجاء إدخال البريد الإلكتروني.';
      valid = false;
    } else if (!validateEmail(email.value.trim())){
      emailError.textContent = 'بريد إلكتروني غير صالح.';
      valid = false;
    }

    if (!password.value.trim()){
      passwordError.textContent = 'الرجاء إدخال كلمة المرور.';
      valid = false;
    } else if (password.value.trim().length < 6){
      passwordError.textContent = 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.';
      valid = false;
    }

    if (!valid){
      e.preventDefault();
      const firstError = document.querySelector('.error:not(:empty)');
      if (firstError){
        const input = firstError.previousElementSibling;
        if (input && typeof input.focus === 'function') input.focus();
      }
    }
  });
})();
