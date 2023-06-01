/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/154540
 * 문제 유형: 정렬, 구현
 * 풀이 시간: 40분
 * 성공 여부: 예
 * 주의 사항: JS sort()에서 콜백함수가 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬된다.
 */

function calcFood(maps, i, j, n, m) {
  dp = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  queue = [[i, j]];
  count = Number(maps[i][j]);
  maps[i][j] = "X";
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    dp.forEach((d) => {
      const [dx, dy] = d,
        nx = x + dx,
        ny = y + dy;

      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (maps[nx][ny] !== "X") {
          count += Number(maps[nx][ny]);
          maps[nx][ny] = "X";
          queue.push([nx, ny]);
        }
      }
    });
  }

  return count;
}

function solution(maps) {
  maps = maps.map((map) => map.split(""));
  const n = maps.length,
    m = maps[0].length;
  let answer = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== "X") answer.push(calcFood(maps, i, j, n, m));
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
