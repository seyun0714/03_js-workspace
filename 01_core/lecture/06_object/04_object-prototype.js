/**
 * 📌 프로토타입(Prototype)
 * 1. 자바스크립트는 Prototype 기반의 객체지향 언어로
 *    Prototype을 활용해서 객체지향프로그래밍에서의 상속을 구현할 수 있음
 * 2. 자바스크립트 객체에는 [[Prototype]] 이라는 숨김 프로퍼티가 존재함.
 *     → 자신의 부모 역할을 하는 객체와 연결되어있음
 *     → 프로토타입 객체의 속성과 메소드를 상속받아 사용할 수 있음
 * 3. __proto__ 포인터를 통해 [[Prototype]]을 가져오거나 설정할 수 있음 (getter/setter)
 */

const user = {
  activate: true,
  login: function (userId) {
    console.log(`${userId}님, 환영합니다!`);
  },
};

const student = {
  passion: true,
  //__proto__: user,
};

// __proto__ : setter / getter 모두 수행 (권장 x)
// student.__proto__ = user;

// console.log(student);
// console.log(student.__proto__);
// student.login("김학생");

// if ("activate" in student) {
//   console.log("!!"); // true
// }

// Object.setPrototypeOf(), Object.getPrototypeOf() (권장 o)
Object.setPrototypeOf(student, user);
console.log(Object.getPrototypeOf(student));

console.log(student.passion);
console.log(student.activate);
student.login("user01");

console.log("=========");
// for in 문 상속 프로퍼티도 순회 대상에 포함됨
for (let prop in student) {
  console.log(prop, student.hasOwnProperty(prop)); // 프로퍼티가 직접 프로퍼티인지 반환
}

// * 생성자 함수 프로토타입
// 생성자 함수를 통해서 생성된 객체 내에는 프로토타입이라는 속성 자동 부여

const car = {
  brand: "KIA",
};

function EV(model) {
  this.model = model;
}

// EV 생성자 함수로 생성되는 객체들마다 공통적으로 car 객체의 프로퍼티를 가졌으면 좋겠음
EV.prototype = car;
const car1 = new EV("EV6");

console.log(car1.model);
console.log(car1.brand);

console.log(Object.getPrototypeOf(car1));

// 생성자 함수의 prototype 활용하여 메소드 설정
function Animal(name) {
  this.name = name;

  // 생성자 함수 내에 직접 메소드 정의
  this.speak = function () {
    console.log(`${this.name}이(가) 짖습니다.`);
  };
}

Animal.prototype.speak = function () {
  console.log(`${this.name}이(가) 짖습니다.`);
};

const dog = new Animal("dog");
const cat = new Animal("cat");
dog.speak();
cat.speak();

/**
 * 1. 메모리 효율성
 *  - 생성자 함수 내에 정의: 인스턴스마다 독립적인 메소드 복사본이 생성
 *                            => 인스턴스가 많아질 수록 메모리 사용량 증가
 *  - prototype에 정의: 모든 인스턴스가 동일한 메스도 사용(싱글톤)
 *
 * 2. 동적 업데이트 가능성
 *  - 생성자 함수 내에 정의: 각 인스턴스마다 메소드를 일일히 수정
 *  - prototype에 정의: prototype의 메소드만 수정하면 모든 인스턴스에 즉각 반영
 */
