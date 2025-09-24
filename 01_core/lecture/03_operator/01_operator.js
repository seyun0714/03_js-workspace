/**
 * 📌 연산자
 * 1. 산술 연산자
 *   1) 이항 연산자
 *   2) 종류
 *       → 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)
 *       → 제곱(**) => ES7에서 추가된 연산자
 * 2. 증감 연산자
 *   1) 단항 연산자
 *   2) 변수 값을 1씩 증가/감소
 *   3) 종류
 *       → 증가(++), 감소(--)
 * 3. 대입(할당) 연산자
 *   1) 오른쪽 값을 왼쪽 변수에 할당
 *   2) 종류
 *       → 대입(=)
 *       → 복합 대입(+=, -=, *=, **=, /=, %=)
 * 4. 비교 연산자
 *   1) 이항 연산자
 *   2) 두 피연산자를 비교하여 참/거짓을 반환
 *   3) 종류
 *       → 대소 비교(>, <, >=, <=)
 *       → 동등 비교(==, !=)
 *       → 일치 비교(===, !==)
 * 5. 논리 연산자
 *   1) 이항 연산자
 *   2) 두 논리값의 피연산자를 연산하여 참/거짓을 반환
 *   3) 종류
 *       → 논리 AND(&&), 논리 OR(||), 논리 NOT(!)
 * 6. 조건 연산자
 *   1) 삼항 연산자
 *   2) 조건식의 참/거짓 여부에 따라 반환값을 결정
 *   3) 작성법
 *       → [조건식] ? [true일 때 반환값] : [false일 때 반환값]
 * 7. 문자열 연결 연산자
 *   1) 문자열과 문자열을 연결하여 새로운 문자열을 반환
 *   2) 종류
 *       → 문자열 연결(+)
 *       → 문자열 연결 할당(+=)
 *
 *
 * ‼️ 연산자 우선순위 (높은 순으로 나열)
 * 1) 괄호, 대괄호, 마침표(멤버 접근, 함수호출)
 * 2) 단항 연산자 : new, ++, --, !, +, -, typeof, delete 등
 * 3) 산술 연산자 : **   >   *, /, %   >   +, -
 * 4) 비교 연산자 : <, <=, >, >=, instanceof, in   >   ==, ===, !=, !==
 * 5) 논리 연산자 : &&   >   ||
 * 6) 조건(삼항) 연산자
 * 7) 대입 연산자 : =, +=, -=, *=, /=, %=, **=
 */

// 1. 산술연산자
console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log(10 % 20);
console.log(10 ** 2);

// 2. 증감연산자
let num = 10;
console.log(num);
num++;
console.log(num); // 11;
console.log(num++); // 11;
console.log(num); // 12;
console.log(++num); // 13;

// 3. 대입 연산자
let num2 = 10; // 일반대입 연산자

// 복합 대입 연산자
let num3 = 10;
num3 += 10; // 20
num3 -= 10; // 10
num3 *= 10; // 100
num3 **= 2; // 10000
num3 /= 10; // 1000
num3 %= 10; // 0

// 4. 비교 연산자
// 1) 대소비교
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 > 5);
console.log(10 >= 5);

// 2) 동등비교
console.log(1 == 1);
console.log(1 == "1");
console.log(1 == true);
console.log(0 == true);
console.log(1 != true);

// 3) 일치비교
console.log(1 === 1);
console.log(1 === "1");

// null, undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// NaN : 자기 자신과 일치하지 않는 유일한 값
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
// NaN인지 체크할 때는 Number.isNaN을 사용해서 비교
console.log(Number.isNaN(NaN)); // true

// 문자열 간의 대소비교 : 유니코드
console.log("apple" < "banana");

// 5. 논리 연산자
// 1) && (AND) : 두 개의 논리 값 둘 다 참일 경우에만 참을 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(num >= 1 && num <= 10);

// 2) || (OR) : 두 개의 논리 값 중 하나라도 참이라면 최종적으로 참을 반환
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(num % 3 === 0 || num % 4 === 0);

// 3) ! (NOT) : 참일 경우 거짓 반환, 거짓일 경우 참을 반환
console.log(!true); // false
console.log(!false); // true

console.log(!Number.isNaN(num) && num >= 10);

// 6. 삼항 연산자
console.log(num > 0 ? "양수" : "양수가 아님"); // 양수
console.log(num % 2 === 0 ? "짝수" : "홀수");

// 7. 문자열 연결 연산자
let str = "hello" + "world";
console.log(str);
str += "!!";
console.log(str);
