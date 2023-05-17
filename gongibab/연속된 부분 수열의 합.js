/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/178870
 * 문제 유형: 투 포인터, 정렬
 * 풀이 시간: 39분
 * 성공 여부: 예
 */

function solution(sequence, k) {
  let list = [];
  let start = 0;
  let end = 0;
  let sum = sequence[0];
  while (start <= end && end < sequence.length) {
    if (sum === k) {
      list.push([start, end, end - start]);
      sum -= sequence[start];
      start += 1;
    } else if (sum < k) {
      end += 1;
      sum += sequence[end];
    } else {
      sum -= sequence[start];
      start += 1;
    }
  }

  list.sort((a, b) => a[2] - b[2]);
  return [list[0][0], list[0][1]];
}
