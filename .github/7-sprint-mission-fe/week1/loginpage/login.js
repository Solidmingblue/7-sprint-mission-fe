
// 눈 아이콘
const eyes = document.querySelectorAll('.eyes');

eyes.forEach((eye) => {

  eye.addEventListener('click', function () {

    const inputWrap = eye.closest('.input_wrap'); 

    const passwordInput = inputWrap.querySelector('input');
    const eyeIcon = eye.querySelector('i');

    inputWrap.classList.toggle('active');


    if (inputWrap.classList.contains('active')) { 
      eyeIcon.className = 'fas fa-eye';
      passwordInput.type = 'text';
    } else {
      eyeIcon.className = 'fas fa-eye-slash';
      passwordInput.type = 'password';
    }
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
    errorDiv.style.color = 'red'
    errorDiv.style.borderColor = 'red'
    return false;
  } else if (!isValidEmail(value)) {
    email.classList.add('error');
    errorDiv.textContent = '잘못된 이메일 형식입니다.';
    errorDiv.style.color = 'red'
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
    errorDiv.style.color = 'red'
    return false;
  } else if (value.length < 8) {
    password.classList.add('error');
    errorDiv.textContent = '비밀번호를 8자 이상 입력해주세요.';
    errorDiv.style.color = 'red'
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






// 로그인 버튼
function checkFormValidity() {
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  const loginButton = document.getElementById('loginButton');
  loginButton.disabled = !(emailValid && passwordValid);
}
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // 폼 제출 막기
  if (validateEmail() && validatePassword()) {
    window.location.href = "/items";
  }
});

// 로그인 및 회원가입 페이지의 이메일, 비밀번호, 비밀번호 확인 input에 필요한 유효성 검증 함수를 만들고 적용해 주세요.
//  비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지를 보입니다
//  input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’ 버튼은 비활성화 됩니다.
// Input 에 유효한 값을 입력하면  ‘로그인' 버튼이 활성화 됩니다.
//  활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다