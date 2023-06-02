/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/154539
 * 문제 유형: 구현
 * 풀이 시간: 27분
 * 성공 여부: 아니요 (82.6%, 시간초과)
 */

function findBig(numbers, i) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) return numbers[j];
  }
  return -1;
}

function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(findBig(numbers, i));
  }

  return answer;
}
