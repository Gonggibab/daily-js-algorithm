/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/159993
 * 문제 유형: DFS
 * 풀이 시간: 75분
 * 성공 여부: 아니요 (56.5% / 시간초과)
 */

function findPath(maps, start, end) {
  const m = maps.length,
    n = maps[0].length,
    maze = Array.from(Array(m), () => Array(n).fill(m * n)),
    [sx, sy] = start;

  maze[sx][sy] = 0;
  stack = [start];
  dp = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (stack.length > 0) {
    const [x, y] = stack.pop();

    dp.forEach((d) => {
      const [dx, dy] = d,
        nx = x + dx,
        ny = y + dy;
      if (0 <= nx && nx < m && 0 <= ny && ny < n && maps[nx][ny] !== "X") {
        if (maze[nx][ny] >= maze[x][y]) {
          maze[nx][ny] = maze[x][y] + 1;
          stack.push([nx, ny]);
        }
      }
    });
  }

  const [ex, ey] = end;
  return maze[ex][ey];
}

function solution(maps) {
  let start, lever, end;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") start = [i, j];
      if (maps[i][j] === "L") lever = [i, j];
      if (maps[i][j] === "E") end = [i, j];
    }
  }

  const notPossible = maps.length * maps[0].length,
    distToLever = findPath(maps, start, lever),
    distToEnd = findPath(maps, lever, end);

  if (distToLever === notPossible || distToEnd === notPossible) return -1;
  else return distToLever + distToEnd;
}
