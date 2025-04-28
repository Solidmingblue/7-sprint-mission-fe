
//(document: HTML 문서 전체)에서 모든 .eyes를 선택해서 querySelectorAll로 eyes함수에 담기,
const eyes = document.querySelectorAll('.eyes');//(.eyes 모아주기기)

//eyes((.eyes))를 리스트로 만들어서 forEach로 하나씩 가져옴 -> eye에 할당(?)사용
//eyes.forEach() 사용,,forEach는 같은 클래스 모든 요소 가져옴(.eyes -> eyes -> eye)
eyes.forEach((eye) => {//(모아놓은거 하나씩 불러오기)

  //각각 아이콘 클릭 시 실행되는 함수 등록하는 함수
  eye.addEventListener('click', function () {//(클릭 이벤트를 eye에 부여하기 = eye클릭시 이벤트 발생)

    //closest()는 자신과 가장 가까운 상위 요소 찾음. 여기서는 .input_wrap -> 그리고 inputWrap 변수에 담기
    const inputWrap = eye.closest('.input_wrap'); //(비번,비번 확인을 각각 묶어주기)

    //각 input_wrap 내부의 input 요소 찾아 비밀번호 입력창으로 지정하고, 각 아이콘 해당 input에 연결
    //같은 클래스 공유중이기 때문에 위에서 묶어주고 각각 따로 동작하게 만들기
    // -> 전에는 비번 확인의 눈 아이콘 클릭시 위의 비번이 보이게 됨 이것 해결 완.
    const passwordInput = inputWrap.querySelector('input');//(묶어준 것 내의 input만 동작하도록)
    const eyeIcon = eye.querySelector('i');

    // active 존재 여부에 따라 -> 눈 모양 변경 + 비밀번호 보이기
    inputWrap.classList.toggle('active');


    if (inputWrap.classList.contains('active')) {
      //눈에 슬래시 표시 만들기
      eyeIcon.className = 'fas fa-eye';
      //text로 보이게 만들기기
      passwordInput.type = 'text';
    } else {
      eyeIcon.className = 'fas fa-eye-slash';
      passwordInput.type = 'password';
    }
  });//addEventListener끝

});//forEach함수 끝

//fas fa-eye-slash, fas fa-eye 사용이유  - 이 아이콘 클래스는 Font Awesome이라는 아이콘 라이브러리에서 제공하는 클래스
// 아이콘 라이브러리리-> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" crossorigin="anonymous"/>

//button.addEventListener('이벤트', 함수명)

//const 중복 선언 x 재활용 o

//document: HTML 문서 전체를 의미.

//querySelector('.eyes'): 클래스가 eyes인 요소 중 첫 번째 것을 선택 -> querySelectorAll
//=> 작동x 그래서 eyes.forEach() 사용,,forEach는 같은 클래스 모든 요소 가져옴**forEach()는 NodeList 각각의 요소를 순회함

// eyes 변수에 눈 아이콘 저장 => const eyes = document.querySelectorAll('.eyes');

//id가 password인 인풋요소 가져오기 => const passwordInput = document.getElementById('password');

//eyes 클릭시 실행되는 동작 코드 eyes.addEventListener('click', function () { ... }); ->click감지

//inputWrap.classList.toggle('active');
//classList: 클래스 속성 목록을 조작하는 객체
//.toggle('active'): active 클래스가 있으면 제거, 없으면 추가(on, off기능)

//querySelector, getElementById	DOM 요소 가져오기
//addEventListener	이벤트 등록하기
//***classList.toggle()	클래스 추가/제거 자동 전환****
//input.type	비밀번호 보기/숨기기