/**
Quick explanation:
If a senator D gets the turn now, he/she can remove the first senator R that appears in the order.
E.g.
DDRRR
Turn1: D at index 0 gets the turn, and will remove R at index 2. D adds at the end of the queue.
DRRD
Turn2: D at index 0 gets the turn, and will remove R at index 1. D adds at the end of the queue.
RDD
Turn3: R at index 0 gets the turn, and will remove D at index 1. R adds at the end of the queue.
DR
Turn4: D at index 0 gets the turn, and will remove R at index 1. D adds at the end of the queue.
D
So, D wins.
 */

function predictPartyVictory(senate: string): string {
  const rQueue: number[] = [];
  const dQueue: number[] = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }

  // 直到一邊被拿完，就結束
  while (rQueue.length && dQueue.length) {
    const rIndex = rQueue.shift()!;
    const dIndex = dQueue.shift()!;
    if (rIndex < dIndex) {
      rQueue.push(rIndex + senate.length);
    } else {
      dQueue.push(dIndex + senate.length);
    }
  }
  return rQueue.length > 0 ? 'Radiant' : 'Dire';
}

predictPartyVictory('DDRRR'); // "Radiant"
// senate = DDDRRDDDR
// liveQueue =
// banQueue = D
// count = 1
