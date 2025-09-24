/**
 * 📌 반복문
 * 1. 코드 블럭을 여러 번 반복 실행하는 역할
 * 2. 종류 및 작성법
 *   1) while문
 *      → 조건이 참인 동안 반복 실행
 *         while(조건식) {
 *           조건이 참일 경우 실행할 구문;
 *         }
 *   2) do-while문
 *      → 코드 블럭을 최소 한 번 실행하고 조건 검사
 *         do {
 *           코드 블럭을 최소 한 번 실행;
 *         } while(조건식);
 *   3) for문
 *      → 특정 횟수 만큼 반복 실행
 *         for(초기식; 조건식; 증감식) {
 *           조건이 참일 경우 실행할 구문;
 *         }
 */

// 1. while 문
let i = 0;
while (i < 5) {
  console.log("*****");
  i++;
}

// 2. do-while 문
let input = -1;
let count = 0;
do {
  console.log("hello");
  count++;
} while (count < input);

/*
  * for문 
  1. while문에 비해 가독성이 좋음 
  2. 반복해서 사용할 값의 범위가 명확하거나, 반복횟수가 정해져있을 경우 사용 권장
  3. 세가지 구문(초기식, 조건식, 상태변화)로 반복횟수 결정 
  4. 용어 정리 
    1) 초기식 : 반복문이 수행될 때 최초에 단 한번 실행되는 구문
                 → 주로 반복문 안에 사용될 변수를 선언 및 초기화 
    2) 조건식 : 반복문이 수행될 조건을 작성하는 구문 
                 → 주로 초기식에 제시된 변수를 가지고 조건식 작성 
    3) 증감식 : 반복문이 수행될 때 마다 증가하는 구문
                 → 주로 반복문을 제어하는 변수값(초기식변수)을 변화시킴
*/

// "hello" 5회 반복
for (let i = 0; i < 5; i++) {
  console.log("hello");
}

// 10개의 집이 있다고 가정

for (let i = 0; i < 10; i++) {
  console.log(`${i}번지`);
}

// 여러 요소들에 순차적으로 접근할 때 많이 사용
/*
  문자열 == 여러 문자들이 조합된 집합체
  "apple" == "a" "p" "p" "l" "e"
              0   1   2   3   4   (인덱스)
  "apple".charAt(4) == "e"
*/

console.log("apple".charAt(4)); // e

const text = "Hello my name is Seyun Park";

for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}
