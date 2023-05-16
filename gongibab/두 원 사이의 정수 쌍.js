function solution(r1, r2) {
  let answer = 0;
  for (let i = r2; i >= 0; i--) {
    for (let j = r2; j > 0; j--) {
      if (i ** 2 + j ** 2 >= r1 ** 2 && i ** 2 + j ** 2 <= r2 ** 2) answer += 1;
      else continue;
    }
  }

  return answer * 4;
}
