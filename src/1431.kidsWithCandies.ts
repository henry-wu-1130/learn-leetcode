function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let max = Math.max(...candies);

  return candies.map((candy) => {
    if (candy + extraCandies >= max) return true;
    else return false;
  });
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

kidsWithCandies([2, 3, 5, 1, 3], 3);
