
// 눈 아이콘
document.querySelectorAll('.eyes').forEach(eye => {
  eye.addEventListener('click', () => {
    const inputWrap = eye.closest('.input_wrap');
    const passwordInput = inputWrap.querySelector('input');
    const eyeIcon = eye.querySelector('i');

    inputWrap.classList.toggle('active');
    const isActive = inputWrap.classList.contains('active');
    eyeIcon.className = isActive ? 'fas fa-eye' : 'fas fa-eye-slash';
    passwordInput.type = isActive ? 'text' : 'password';
  });
});




//email


function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


function validateEmail() {
  const email = document.getElementById('email');
  const errorDiv = document.getElementById('email-error');
  const value = email.value.trim();
  // const emailwrap = email.closest('.email-wrap')
  // const emailFocusOut = emailwrap.querySelector('email-error');

  if (!value) {
    email.classList.add('error');
    errorDiv.textContent = '이메일을 입력해주세요.';
    return false;
  } else if (!isValidEmail(value)) {
    email.classList.add('error');
    errorDiv.textContent = '잘못된 이메일 형식입니다.';
    return false;
  } else {
    email.classList.remove('error');
    errorDiv.textContent = '';
    return true;
  }
}

document.getElementById('email').addEventListener('blur', () => {
  validateEmail();
  checkFormValidity();
});





// password
function validatePassword() {
  const password = document.getElementById('password');
  const errorDiv = document.getElementById('password-error');
  const value = password.value;

  if (!value) {
    password.classList.add('error');
    errorDiv.textContent = '비밀번호를 입력해주세요.';
    return false;
  } else if (value.length < 8) {
    password.classList.add('error');
    errorDiv.textContent = '비밀번호를 8자 이상 입력해주세요.';
    return false;
  } else {
    password.classList.remove('error');
    errorDiv.textContent = '';
    return true;
  }
}
document.getElementById('password').addEventListener('blur', () => {
  validatePassword();
  checkFormValidity();
});



// 비밀번호 확인
function validateConfirmPassword() {
  const password = document.getElementById('password');
  const confirm = document.getElementById('confirm-password');
  const errorDiv = document.getElementById('confirm-password-error');

  if (!confirm.value) {
    confirm.classList.add('error');
    errorDiv.textContent = '비밀번호 확인을 입력해주세요.';
    return false;
  } else if (confirm.value !== password.value) {
    confirm.classList.add('error');
    errorDiv.textContent = '비밀번호가 일치하지 않습니다.';
    return false;
  } else {
    confirm.classList.remove('error');
    errorDiv.textContent = '';
    return true;
  }
}


document.getElementById('confirm-password').addEventListener('blur', () => {
  validateConfirmPassword();
  checkFormValidity();
});




// 포커스 시 에러 제거
function removeErrorOnFocus(id, errorId) {
  const input = document.getElementById(id);
  const errorDiv = document.getElementById(errorId);

  input.addEventListener('focus', () => {
    input.classList.remove('error');
    errorDiv.textContent = '';   
  });
}
// focus 이벤트 등록 (빨간 테두리 제거)
removeErrorOnFocus('email', 'email-error');
removeErrorOnFocus('password', 'password-error');
removeErrorOnFocus('confirm-password', 'confirm-password-error');





