/**
There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.
 */
function canVisitAllRooms(rooms: number[][]): boolean {
  const keys: number[] = rooms[0];
  const visited = new Set<number>([0]);
  while (keys.length > 0) {
    const key = keys.pop() as number;
    visited.add(key);

    const newKeys = rooms[key];

    if (newKeys.length > 0) {
      for (const key of newKeys) {
        if (!visited.has(key)) {
          keys.push(key);
        }
      }
    }
  }

  return Array.from(visited).length === rooms.length;
}

canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]); // expect false
