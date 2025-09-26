/*
  * Array 고차 함수 (콜백함수를 인자로 전달받는 함수) 

  1. Array.prototype.sort([callbackFn(element1, element2)])
     → callbackFn에 의해 배열 내의 요소들을 정렬시켜 반환 
     → callbackFn 생략시 기본 오름차순으로 정렬 (문자열 요소일 경우 사전등재순으로 정렬)
     → callbackFn
       1) 반환값 : number (양수 반환시 비교되는 두 요소의 순서가 변경됨)
       2) 매개변수 
          (1) element1 : compare할 비교 요소1
          (2) element2 : compare할 비교 요소2
       즉, 오름차순 정렬시키고자 할 경우 => element1가 더 클 경우 양수 반환하도록 
           내림차순 정렬시키고자 할 경우 => element2가 더 클 경우 양수 반환하도록 
        

  2. Array.prototype.forEach(callbackFn(element[, index[, array]])[, thisArg])
     → 각 배열 요소에 대해 제공한 callbackFn 함수를 한 번씩 실행함
     → callbackFn
       1) 반환값 : 없음(undefined)
       2) 매개변수
         (1) element : 배열에서 처리 중인 현재 요소
         (2) index   : 배열에서 처리 중인 현재 요소의 인덱스
         (3) array   : forEach() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값

  3. Array.prototype.map(callbackFn(currentValue[, index[, array]])[, thisArg])
     → 제공된 callbackFn 함수에 의해 반환된 요소들을 모은 새로운 배열을 반환함
     → callbackFn
       1) 반환값 : 배열의 각 요소를 callbackFn 내부에서 처리한 값
       2) 매개변수
         (1) currentValue : 처리할 현재 요소
         (2) index        : 처리할 현재 요소의 인덱스
         (3) array        : map() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값

  4. Array.prototype.filter(callbackFn(element[, index[, array]])[, thisArg])
     → 제공된 callbackFn 함수에 의해 구현된 테스트를 통과한 요소들만 모은 새로운 배열을 반환함
     → callbackFn
       1) 반환값 : true 또는 false
       2) 매개변수
         (1) element : 배열에서 처리 중인 현재 요소
         (2) index   : 배열에서 처리 중인 현재 요소의 인덱스
         (3) array   : filter() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값
*/

const numbers = [30, 21, 101, 18, 1, 201, 70, 7];
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

const lectures = ["HTML", "CSS", "JS", "React"];

for (let idx in lectures) {
  console.log(idx, lectures[idx]);
}

lectures.forEach((val) => console.log(val, "실행됨"));

lectures.forEach((val, idx, arr) => {
  console.log(idx, val, arr);
});

const datas = [true, 1, "text"];

const types = datas.map((val) => typeof val);

const month = [1, 2, 3, 4, 5, 6, 7];

month.map((val) => val + "월").forEach((val) => console.log(val));

const evenNum = numbers.filter((item) => item % 2 === 0);
console.log(evenNum);

const nums = [12, 5, 90, 45, 1, 18, 2, 19];
const result = nums
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .sort((a, b) => a - b);
console.log(result.join(" and "));

const students = [
  { id: 1, name: "홍길동", age: 20 },
  { id: 2, name: "박길동", age: 30 },
  { id: 3, name: "김길동", age: 50 },
  { id: 4, name: "이길동", age: 60 },
  { id: 5, name: "권길동", age: 40 },
];

const studentInfo = students
  .map(
    (student) =>
      `<li id="student${student.id}">이름: ${student.name}, 나이: ${student.age}</li>`
  )
  .join("\n");

console.log(studentInfo);
