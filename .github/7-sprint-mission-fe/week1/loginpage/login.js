
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







const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];




function checkFormValidity() {
  const isValid = validateEmail() && validatePassword();
  const loginButton = document.getElementById('login-button');
  loginButton.disabled = !isValid;
}
// 이메일과 비밀번호 입력 시 유효성 검사 연결
document.getElementById('email').addEventListener('input', checkFormValidity);
document.getElementById('password').addEventListener('input', checkFormValidity);

// 로그인 버튼 클릭 이벤트
document.getElementById('login-button').addEventListener('click', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email').value.trim();
  const passwordInput = document.getElementById('password').value;

  const foundUser = USER_DATA.find(user => user.email === emailInput);

  const modalOpen = document.getElementById('pwModalButton')
  const modalClose = document.getElementById('CloseBtn')
  const modalOpenSuccess = document.getElementById('successModalButton')
  const modalMove = document.getElementById('moveBtn')
  

  if (!foundUser || foundUser.password !== passwordInput) {
    modalOpen.style.display = 'block';
    modalClose.addEventListener('click', function () {
      modalOpen.style.display = 'none';
    })
  } else {
    modalOpenSuccess.style.display = 'block';
    modalMove.addEventListener('click', function () {
      window.location.href = '/items';
    })
    
  }
});