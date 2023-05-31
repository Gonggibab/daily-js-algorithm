/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/155651
 * 문제 유형: 정렬, 구현
 * 풀이 시간: 45분
 * 성공 여부: 아니요 (15.8%)
 */

function solution(book_time) {
  const times = [];
  book_time.forEach((time) => {
    let [start, end] = time;
    start = start.split(":");
    end = end.split(":");
    times.push([
      start[0] * 60 + Number(start[1]),
      end[0] * 60 + Number(end[1]) + 10,
    ]);
  });
  times.sort((a, b) => a[0] - b[0]);

  let answer = 0,
    count = 1,
    start = 0;
  end = 0;
  times.forEach((time) => {
    let [s, e] = time;
    if (s < end) {
      end = Math.min(end, e);
      count += 1;
    } else {
      answer = Math.max(answer, count);
      end = e;
      count = 1;
    }
  });

  return Math.max(answer, count);
}
