/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/160585
 * 문제 유형: 구현
 * 풀이 시간: 72분
 * 성공 여부: 예
 */

function solution(board) {
  let answer = 1;
  let cntO = 0,
    cntX = 0;
  let compO = false,
    compX = false;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cur = board[i][j];
      if (cur !== ".") {
        // 세로 완성 확인
        if (i === 0) {
          if (
            board[i][j] === board[i + 1][j] &&
            board[i + 1][j] === board[i + 2][j]
          ) {
            if (cur === "O") compO = true;
            if (cur === "X") compX = true;
          }
          // 우하향 대각 완성 확인
          if (j === 0) {
            if (
              board[i][j] === board[i + 1][j + 1] &&
              board[i + 1][j + 1] === board[i + 2][j + 2]
            ) {
              if (cur === "O") compO = true;
              if (cur === "X") compX = true;
            }
          }
          // 우상향 대각 완성 확인
          if (j === 2) {
            if (
              board[i][j] === board[i + 1][j - 1] &&
              board[i + 1][j - 1] === board[i + 2][j - 2]
            ) {
              if (cur === "O") compO = true;
              if (cur === "X") compX = true;
            }
          }
        }
        // 가로 완성 확인
        if (j === 0) {
          if (
            board[i][j] === board[i][j + 1] &&
            board[i][j + 1] === board[i][j + 2]
          ) {
            if (cur === "O") compO = true;
            if (cur === "X") compX = true;
          }
        }

        if (cur === "O") {
          cntO += 1;
        }
        if (cur === "X") {
          cntX += 1;
        }
      }
    }
  }

  // 선공후공을 지켰는지 체크
  if (compO && compX) {
    answer = 0;
  } else if (compO) {
    if (cntO - cntX !== 1) answer = 0;
  } else if (compX) {
    if (cntO - cntX !== 0) answer = 0;
  } else {
    if (cntO - cntX < 0 || cntO - cntX > 1) answer = 0;
  }

  return answer;
}
