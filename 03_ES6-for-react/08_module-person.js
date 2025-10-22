/**
 * module
 *    - 개발 규모가 커질 수록 파일들이 분리돼서 관리됨
 *      분리된 파일 === 모듈
 *    - 각 파일에 정의되어 있는 함수, 변수, 객체 등을 내보낼 수 있음 (export)
 *    - 특정 모듈이 export 하고 있는 값을 가져와서 사용할 수 있음 (import)
 *
 *  */

// named export : 외부에서 내보낸 "변수의 이름을 참조해서" 사용할 수 있도록 하는 구문
//                현재 모듈에서 여러개의 데이터를 내보낼 때 사용 (객체의 형태로 내보냄)
// 방법 1) 선언문 앞에 export 붙이기

export const name = "박세윤";
export const age = 20;

// 방법 2) 미리 선언해두고 한꺼번에 export
const hobby = ["running", "eating"];
const dream = "programmer";

export { hobby, dream };
