function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    let isDestroyed = false;
    while (
      stack.length > 0 &&
      asteroids[i] < 0 &&
      stack[stack.length - 1] > 0
    ) {
      if (asteroids[i] + stack[stack.length - 1] < 0) {
        stack.pop();
      } else if (asteroids[i] + stack[stack.length - 1] === 0) {
        stack.pop();
        isDestroyed = true;
        break;
      } else {
        isDestroyed = true;
        break;
      }
    }
    if (!isDestroyed) {
      stack.push(asteroids[i]);
    }
  }
  return stack;
}
asteroidCollision([-2, 1, -1, -2]); // [5, 10]
