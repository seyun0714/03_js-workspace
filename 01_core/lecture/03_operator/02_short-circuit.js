/**
 * 📌 단축 평가
 * 1. Short-Circuit Evaluation
 * 2. 표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것
 *     → 논리 연산자의 평가 결과가 확정 된 경우 나머지 평가 과정이 생략됨
 * 3. 종류
 *   1) 논리 AND (&&)
 *       → 왼쪽 피연산자가 falsy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 truthy 값일 경우 오른쪽 피연산자를 평가해서 반환
 *   2) 논리 OR (||)
 *       → 왼쪽 피연산자가 truthy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 falsy 값일 경우 오른쪽 피연산자를 평가해서 반환
 */

// && - 좌항이 falsy 값일 경우
console.log(false && "banana"); // 오른쪽 연산 진행 x -> 바로 false 반환
console.log(0 && "banana"); // 0 반환
console.log("" && "banana"); // "" 반환

// && - 좌항이 truthy 값일 경우
console.log(true && "banana"); // "banana"
console.log(10 && "banana"); // "banana"
console.log("apple" && "banana"); // "banana"

// || - 좌항이 truthy 값일 경우
console.log(true || "banana"); // true
console.log(10 || "banana"); // 10
console.log("apple" || "banana"); // "apple"

// || - 좌항이 falsy 값일 경우
console.log(false || "banana"); // "banana"
console.log(0 || "banana"); // "banana"
console.log("" || "banana"); // "banana"

// 적용 사례1. 조건문 간결하게 표현 시 사용
// 로딩 중일 경우 로딩 중임을 표시
let isLoading = true;
if (isLoading) {
  console.log("로딩중");
}

isLoading && console.log("로딩중");

// 사용자 입력 값이 존재할 경우 해당 값을 출력
let input = "dd";
if (input) {
  console.log(input);
}

input && console.log(`사용자 입력: ${input}`);

// 적용사례2. 기본 값 설정
// 변수 = 입력 값 || default 값
// 입력 값이 존재하지 않을 경우 시스템 상의 기본 값 대입
let value = "" || "입력안됨";
console.log(value);

value = "";
console.log(value);
if (!value) {
  value = "입력안됨";
}
console.log(value);

let userInput = 0;
let age = userInput || 20;
console.log(age);
