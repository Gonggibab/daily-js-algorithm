/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/169199
 * 문제 유형: DFS
 * 풀이 시간: 50분
 * 성공 여부: 아니요
 */

function solution(board) {
  let start;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === "R") {
        start = [x, y];
        break;
      }
    }
  }

  const stack = [[start[0], start[1], 0]];
  const visited = [];
  while (stack.length > 0) {
    let [x, y, count] = stack.pop();
    visited.push([x, y]);

    for (let nx = x; nx <= board.length; x++) {
      if (nx === board.length || board[nx + 1][y] === "D") {
        if (board[nx][y] === "G") {
          return count;
        }
        if (!visited.includes([nx, y])) {
          stack.push([nx, y]);
          count += 1;
          break;
        }
      }
    }
    for (let nx = x; -1 <= nx; x--) {
      if (nx === 0 || board[nx - 1][y] === "D") {
        if (board[nx][y] === "G") {
          return count;
        }
        if (!visited.includes([nx, y])) {
          stack.push([nx, y]);
          count += 1;
          break;
        }
      }
    }
    for (let ny = y; ny <= board[0].length; y++) {
      if (ny === board[0].length || board[x][ny + 1] === "D") {
        if (board[x][ny] === "G") {
          return count;
        }
        if (!visited.includes([x, ny])) {
          stack.push([x, ny]);
          count += 1;
          break;
        }
      }
      for (let ny = y; -1 <= ny; y--) {
        if (ny === 0 || board[x][ny - 1] === "D") {
          if (board[x][ny] === "G") {
            return count;
          }
          if (!visited.includes([x, ny])) {
            stack.push([x, ny]);
            count += 1;
            break;
          }
        }
      }
    }
  }
}
