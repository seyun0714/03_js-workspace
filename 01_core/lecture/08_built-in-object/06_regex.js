/**
 * 📌 정규표현식
 * 1. Regular Expression
 * 2. 특정한 규칙을 가진 문자열의 집합을 표현하는 형식 언어
 * 3. 텍스트 데이터에서 특정 패턴이나 규칙을 가진 문자열을 찾거나, 대체하거나, 검증할때 사용
 *    (ex. 전화번호, 이메일, 우편번호 등 형식을 갖춘 문자열을 찾거나 처리할 수 있음)
 * 4. 주요 특징
 *   1) 패턴 기반        : 문자열 내에서 찾고자 하는 규칙(패턴)을 미리 정의
 *   2) 다양한 언어 지원 : Python, Java, JavaScript 등 다양한 프로그래밍 언어에서 지원
 *   3) 실무 활용        : 데이터 유효성 검사, 데이터 추출, 일괄 치환 등 실무에 널리 사용
 *
 * 📌 RegExp
 * 1. JavaScript에서 정규표현식을 표현하기 위한 내장 객체
 * 2. 생성 방법
 *   1) 리터럴 표기법
 *       → const reg = /pattern/
 *       → const reg = /pattern/flags
 *   2) 생성자 이용
 *       → const reg = new RegExp('pattern');
 *       → const reg = new RegExp(/pattern/);
 *       → const reg = new RegExp('pattern', 'flags');
 *       → const reg = new RegExp(/pattern/, 'flags');
 * 3. 주요 메소드
 *   1) RegExp.prototype.test(targetStr)
 *       → 검색대상 문자열 중 정규식 패턴과 일치하는 부분이 있으면 true / 아니면 false 반환
 *   2) String.prototype.search(regExp)
 *       → 검색대상 문자열 중 정규식 패턴과 일치하는 부분의 시작 인덱스 반환 / 없으면 -1 반환
 *   3) String.prototype.replace(regExp, changeStr)
 *       → 검색대상 문자열에서 정규식과 일치하는 부분을 바꿀 값으로 치환해서 반환
 */

/**
 * 📌 정규식 메타 문자
 * 1. 정규식에서 특별한 의미를 가지는 문자를 의미
 * 2. 검색 조건으로 삼을 특정 패턴을 제시할 수 있음
 * 3. 주요 메타 문자
 *  -----------┬-----------------------------------------------┬---------------------------------------------------------
 *   메타 문자 | 의미                                          | 예시
 *  -----------+-----------------------------------------------+---------------------------------------------------------
 *   .         | 모든 단일문자                                 | b.at     : baat, bbat, bcat, bdat, ... (불가 bat, baaat)
 *   *         | 0개 이상의 반복 문자                          | goo*     : go, god, good, goood, ...
 *   +         | 1개 이상의 반복 문자                          | goo+     : goo, good, goood, ...
 *   ^         | 시작이 일치하는 문자                          | ^a       : app, apple, asia, africa, ...
 *   $         | 끝이 일치하는 문자                            | end$     : end, the end, ... (불가 ending)
 *   ?         | 0개 이상의 문자                               | colo?r   : color, colour
 *   ()        | 괄호 내의 문자를 문자 패턴으로 간주(그룹화)   | (app)A?  : appA, appappA, appappappA, ...
 *   |         | 또는                                          | a(b|c)   : ab, ac
 *   \         | 역슬래시 뒤 메타 문자를 일반 문자로 간주      | \.       : .
 *   {m}       | 정확히 m개 문자 (0 <= m <= 255)               | a{3}     : aaa
 *   {m,}      | m개 이상 문자 (0 <= m <= 255)                 | a{3,}    : aaa, aaaa, aaaaa, ...
 *   {m,n}     | m개 이상 n개 이하 문자 (0 <= m <= 255)        | a{2,3}   : aa, aaa
 *   [ ]       | 대괄호 속 문자 중 하나와 일치                 | [a-z]    : 소문자 a~z 중 하나
 *   [^ ]      | 대괄호 속 문자를 제외한 나머지와 일치         | [^a]     : 문자 a를 제외한 나머지 모든 문자
 *   \d        | 숫자(0~9)와 일치                              | \d{3}    : 숫자 3자리 (000 ~ 999)
 *   \w        | 영문자/숫자/밑줄 중 하나와 일치               | \w{4,12} : 영문자/숫자/밑줄로 4~12자 구성(예: 아이디)
 *  -----------┴-----------------------------------------------┴--------------------------------------------------------
 */

// 연습1. j로 시작하는 문자열인지 비교
let regExp1 = /^j/;
console.log(regExp1.test("javascript")); // true
console.log(regExp1.test("jQuery")); // true
console.log(regExp1.test("html")); // false

// 연습2. j로 시작하고 t로 끝나는 문자열인지 비교
let regExp2 = /^jt$/;
console.log(regExp2.test("javascript")); // false -> 중간 단어도 표현해주어야 함

let regExp3 = /^j.+t$/;
console.log(regExp3.test("javascript")); // true
console.log(regExp3.test("jQuery")); // false

// 연습3. @가 포함되어 있는 문자열인지 비교
let regExp4 = /.*@.*/;
console.log(regExp4.test("user01@naver.com")); // true
console.log(regExp4.test("naver.com")); // false

// 연습4. g로 시작하고 d로 끝나는데 그 사이에 o 문자가 2글자 이상인지 비교
let regExp5 = /^go{2,}d$/;
console.log(regExp5.test("god")); // false
console.log(regExp5.test("good")); // true
console.log(regExp5.test("goood")); // true

/**
 * 📌 대괄호 표현식
 * 1. 단일 문자 또는 조합 요소를 나타낼 때 사용
 * 2. 예시
 *   1) [ab]    : 문자 a 또는 b 를 의미 (| 안써도됨)
 *   2) [a-d]   : 문자 a 부터 d 까지를 의미 (즉, 문자 a, b, c, d 중 한개를 의미)
 *   3) [a-z]   : 영문 소문자 한개를 의미
 *   4) [A-Z]   : 영문 대문자 한개를 의미
 *   5) [0-9]   : 숫자 한개를 의미
 *   6) [가-힣] : 한글 한 글자를 의미
 */

// 연습5. 시작부터 끝까지 숫자로만 이루어진 문자열인지 비교
let regExp6 = /[0-9]+/;
console.log(regExp6.test("0123456안녕")); // true

let regExp7 = /^[0-9]+$/;
console.log(regExp7.test("0123456안녕")); // false
console.log(regExp7.test("12300381")); // true

// 연습6. 시작부터 끝까지 영문자로만 이루어진 문자열인지 비교
let regExp8 = /^[a-zA-Z]+$/;
console.log(regExp8.test("HelloEveryOne")); // true
console.log(regExp8.test("Hi EveryOne~~")); // false

// 연습7. 시작부터 끝까지 한글로만 이루어진 문자열인지 비교
let regExp9 = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
console.log(regExp9.test("안녕하세욬ㅋㅋㅋㅋㅏㅏㅏ")); // true
console.log(regExp9.test("안녕하세요~~ㅎㅎ")); // false

/*
  실습. verifyName() 함수 구현하기

  1. 기능
     전달된 인자값이 이름 형식이 맞는지를 검사하여
     맞을 경우 '이름 형식이 맞습니다.' 그게 아닐 경우 '이름 형식에 맞지 않습니다' 출력
     * 이름 형식 : 한글(자음모음결합)로 2글자이상 5글자이하
  2. 인자
     검사할 이름 문자열
  3. 반환
     없음
*/

function verifyName(name) {
  const nameRegex = /^[가-힣]{2,5}$/;
  nameRegex.test(name)
    ? console.log("이름 형식이 맞습니다.")
    : console.log("이름 형식에 맞지 않습니다.");
}

verifyName("홍길동");
verifyName("이엘");
verifyName("홍길동ㅇ");
verifyName("하이여");
verifyName("하이여반가워");

/*
  실습. verifyZipcode() 함수 구현하기

  1. 기능
     전달된 인자값이 우편번호 형식이 맞는지를 검사하여
     맞을 경우 '우편번호 형식이 맞습니다.' 그게 아닐 경우 '우편번호 형식에 맞지 않습니다' 출력
     * 우편번호 형식 : 숫자 5자리 
  2. 인자
     검사할 우편번호 문자열
  3. 반환
     없음
*/

function verifyZipcode(code) {
  const codeRegex = /^[0-9]{5}$/;
  codeRegex.test(code)
    ? console.log("우편번호 형식이 맞습니다.")
    : console.log("우편번호 형식에 맞지 않습니다.");
}

verifyZipcode("12345");
verifyZipcode("1245");
verifyZipcode("12d345");
verifyZipcode("1245d");

/**
 * 📌 이스케이프 문자
 * 1. \d : 숫자를 의미 (즉, [0-9] 와 동일)
 * 2. \D : 숫자가 아님을 의미 (즉, [^0-9] 와 동일)
 * 3. \w : 숫자/영문자/밑줄을 의미 (즉, [a-zA-Z0-9_] 와 동일)
 * 4. \W : 숫자/영문자/밑줄이 아님을 의미 (즉, [^a-zA-Z0-9_] 와 동일)
 * 5. \s : 단일 공백 문자를 의미 (스페이스/탭/폼피드/라인피드)
 * 6. \S : 단일 공백 문자가 아님을 의미
 */

// 연습8. 첫글자는 반드시 숫자이고 그 이후에는 숫자/영문/밑줄로 이루어져있는지 비교
let regExp10 = /^\d\w+$/;
console.log(regExp10.test("1User_01")); // true
console.log(regExp10.test("user_01")); // false
console.log(regExp10.test("99user!01")); // false

/**
 * 📌 플래그 문자
 * 1. g : 전역 탐색              (global)
 * 2. i : 대소문자 구분없이 탐색 (ignore)
 * 3. m : 여러줄 탐색            (multiple-line)
 */

// 연습9. 첫글자가 대소문자를 가리지 않고 j로 시작하는지 비교
let regExp11 = /^j/i;
console.log(regExp11.test("javascript")); // true
console.log(regExp11.test("JavaScript")); // true

// 연습10. 여러 문장 중 j로 시작하는 부분을 찾아서 (***)로 치환
console.log("javascript\nJavaScript".replace(regExp11, "(***)")); // 조건에 맞는 첫번째 부분만 기본적으로 치환됨

let regExp12 = /^j/gim; // + global + multiple-line
console.log("javascript\nJavaScript".replace(regExp12, "(***)"));

/*
  실습. verityMobile() 함수 구현하기
  
  1. 기능 
     전달된 인자값이 휴대전화번호 형식이 맞는지를 검사하여
     맞을 경우 '전화번호 형식이 맞습니다.' 그게 아닐 경우 '전화번호 형식에 맞지 않습니다' 출력
     * 전화번호 형식 : 010-숫자4자리-숫자4자리
  2. 인자
     검사할 전화번호 문자열
  3. 반환
     없음
*/

function verifyMobile(phoneNo) {
  const mobRegex = /^010-\d{4}-\d{4}$/;
  const mobRegex2 = /^010(-\d{4}){2}$/; // 중복로직 반복 가능
  mobRegex.test(phoneNo)
    ? console.log("전화번호 형식이 맞습니다.")
    : console.log("전화번호 형식에 맞지 않습니다.");
}

verifyMobile("010-0000-0000");
verifyMobile("030-000-0000");
verifyMobile("02-0000-0000");
verifyMobile("010-0000-000");
verifyMobile("01000000000");

/*
  실습. verifyId() 함수 구현하기

  1. 기능 
     전달된 인자값이 아이디 형식이 맞는지를 검사하여
     맞을 경우 '아이디 형식이 맞습니다.' 그게 아닐 경우 '아이디 형식에 맞지 않습니다' 출력
     * 아이디 형식 : 소문자|숫자|특수문자(-_)로만 구성, 첫글자는 소문자, 총 5~20자
  2. 인자
     검사할 아이디 문자열
  3. 반환
     없음
*/

function verifyId(id) {
  const idRegex = /^[a-z][a-z\d_-]{4,19}$/;
  idRegex.test(id)
    ? console.log("아이디 형식이 맞습니다.")
    : console.log("아이디 형식에 맞지 않습니다.");
}

verifyId("abcdefghijabcdefghij"); // 20자
verifyId("abcdefghijabcdefghij1"); // 21자
verifyId("abcd"); // 4자
verifyId("seyun0714");
verifyId("seyun_0714");
verifyId("seyun-0714");
verifyId("seyun0714!");
