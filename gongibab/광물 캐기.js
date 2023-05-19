/**
 * 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/172927
 * 문제 유형: 정렬, 구현
 * 풀이 시간: 40분
 * 성공 여부: 아니요 (80%)
 */

function solution(picks, minerals) {
  let list = [];
  let chunk = [];
  let value = 0;
  minerals.forEach((mineral) => {
    if (chunk.length > 4) {
      chunk.unshift(value);
      list.push(chunk);
      chunk = [];
      value = 0;
    }

    if (mineral === "diamond") {
      chunk.push("diamond");
      value += 3;
    } else if (mineral === "iron") {
      chunk.push("iron");
      value += 2;
    } else {
      chunk.push("stone");
      value += 1;
    }
  });

  if (chunk.length !== 0) {
    chunk.unshift(value);
    list.push(chunk);
  }

  list.sort((a, b) => a[0] - b[0]);

  let answer = 0;
  let [dia, iron, stone] = picks;
  while (dia > 0 && list.length > 0) {
    const block = list.pop();
    while (block.length > 0) {
      const mineral = block.pop();
      if (mineral === "diamond") answer += 1;
      else if (mineral === "iron") answer += 1;
      else if (mineral === "stone") answer += 1;
      else continue;
    }
    dia -= 1;
  }
  while (iron > 0 && list.length > 0) {
    const block = list.pop();
    while (block.length > 0) {
      const mineral = block.pop();
      if (mineral === "diamond") answer += 5;
      else if (mineral === "iron") answer += 1;
      else if (mineral === "stone") answer += 1;
      else continue;
    }
    iron -= 1;
  }
  while (stone > 0 && list.length > 0) {
    const block = list.pop();
    while (block.length > 0) {
      const mineral = block.pop();
      if (mineral === "diamond") answer += 25;
      else if (mineral === "iron") answer += 5;
      else if (mineral === "stone") answer += 1;
      else continue;
    }
    stone -= 1;
  }

  return answer;
}
