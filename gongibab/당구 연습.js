/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/169198
 * 문제 유형: 구현
 * 풀이 시간: 57분
 * 성공 여부: 아니요
 */

function solution(m, n, startX, startY, balls) {
  const answer = [];
  balls.forEach((ball) => {
    let dist;
    const [endX, endY] = ball;
    const xDiff = startX - endX,
      yDiff = startY - endY;

    if (xDiff === 0) {
      dist = (startY - endY) ** 2 + (Math.min(endX, n - endX) * 2) ** 2;
    } else if (yDiff === 0) {
      dist = (startX - endX) ** 2 + (Math.min(endY, n - endY) * 2) ** 2;
    } else if (startX === endX && startY === endY) {
      dist = (startX - -endX) ** 2 + (startY - -endY) ** 2;
    } else {
      dist = (startX - endX) ** 2 + (startY - -endY) ** 2;
    }

    answer.push(dist);
  });

  return answer;
}
