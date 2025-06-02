/**

You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

 */
function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {}

successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7);
