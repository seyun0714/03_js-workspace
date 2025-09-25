/**
 * 📌 즉시 실행 함수
 * 1. 함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 실행되며 다시 호출 할 수 없음
 * 2. 정의한 함수를 ()-그룹연산자 로 감싼 후 ()을 붙여 실행
 * 3. 익명 함수를 사용하는게 일반적임
 * 4. 기명 함수도 가능하긴 하나 해당 이름으로 다시 재호출은 불가
 */
(function () {
  console.log("익명함수 즉시 실행");
})();

/**
 * 📌 중첩 함수
 * 1. 함수 내부에서 정의된 함수를 중첩함수 또는 내부함수라고 함
 * 2. 중첩함수를 포함하는 함수는 외부함수라고 함
 * 3. 일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역할을 함
 * 4. 외부함수는 내부함수 변수를 사용할 수 없음
 *    단, 내부함수는 외부함수의 변수를 사용할 수 있음
 */

function fnOuter(a) {
  console.log(`외부함수: ${a}`);

  fnInner(10);

  function fnInner(b) {
    console.log(`내부함수: ${a} ${b}`);
  }
}

fnOuter(20);

/**
 * 📌 콜백 함수
 * 1. 인자로 다른 함수에 전달되서 실행되는 함수
 * 2. 콜백함수를 전달받은 함수는 고차함수 라고 함
 * 3. 즉, 콜백함수는 고차함수에 전달되어 헬퍼함수의 역할을 함
 *
 * a 함수를 전달받은 b 함수는 본문에서 전달받은 a 함수를 다시 호출해야되므로 callback이라 함
 * a 함수 == 콜백함수
 * b 함수 == 고차함수
 */

const array = [1, 2, 3, 4, 5];
array.forEach((val) => console.log(val));
// console.log(newArray);

const increase = (val) => ++val;
const decrease = (val) => --val;
// 예시 1) 경우에 따라 특정 값을 증가 또는 감소 시켜야함
// 변화시킬 값을 전달받아서 상황에 따라 변화를 주도록 적용시키는 함수

// apply : 고차함수
function apply(val, func) {
  return func(val); // func : 콜백함수
}

console.log(apply(5, decrease)); // 이상황에선 그냥 decrease(5)로 해도 되지 않는가?

console.log(apply(5, (a) => a * 2)); // 실행 시킬 함수를 모두 작성해 놓을 수 없는 경우 사용하면 용이함

// 예시 2) 아이디/비번/이메일/토큰 중에 두개를 체크해야 된다고 가정
// 각 요소를 체크하는 함수 정의
const checkID = () => console.log("아이디 체크");
const checkPwd = () => console.log("비밀번호 체크");
const checkEmail = () => console.log("이메일 체크");
const checkToken = () => console.log("토큰 체크");

const login = (check1, check2) => {
  console.log("로그인 공통 로직 먼저 실행");
  // 검증을 위한 두 개의 함수 실행
  check1();
  check2();
};

login(checkID, checkPwd);
login(checkEmail, checkToken);
