/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181187
 * 문제 유형: 구현
 * 풀이 시간: 60분
 * 성공 여부: 아니요(60%)
 */

function solution(r1, r2) {
  let answer = 0;
  for (let i = r2; i >= 0; i--) {
    for (let j = r2; j > 0; j--) {
      if (i ** 2 + j ** 2 >= r1 ** 2 && i ** 2 + j ** 2 <= r2 ** 2) answer += 1;
      else continue;
    }
  }

  return answer * 4;
}
