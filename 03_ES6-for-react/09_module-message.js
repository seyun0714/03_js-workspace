// * named export 한 데이터 가져오기 (import)
// {}로 구조분해해서 가져오기
// 다른 이름으로 사용하고자 할 경우 as로 이름을 바꿀 수 있음
import {
  name as n,
  age as a,
  hobby as h,
  dream as d,
} from "./08_module-person.js";

const person = {
  name: n,
  age: a,
  hobby: h,
  dream: d,
};

console.log(person);

const returnMessage = () => {
  return `${n}님 환영합니다.`;
};

// * default export : 모듈에서 하나만 내보낼 수 있는 기본값(주요값)
//      해당 모듈의 대표적인 기능(*컴포넌트, 함수 등)이 있을 때 사용
export default returnMessage;
