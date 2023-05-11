/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181188
 * 문제 유형: 정렬, 구현
 * 풀이 시간: 42분
 * 검색 유무: 예
 */

function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);

  let answer = 0;
  let prev_e = 0;
  targets.forEach((target) => {
    [s, e] = target;

    if (prev_e <= s) {
      answer += 1;
      prev_e = e;
    }
  });

  return answer;
}
