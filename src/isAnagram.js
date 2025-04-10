/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// TODO 用 hash-table 方式 try
var isAnagram = function (s, t) {
  return (
    Array.from(s)
      .sort((a, b) => a.localeCompare(b))
      .join('') ===
    Array.from(t)
      .sort((a, b) => a.localeCompare(b))
      .join('')
  );
};
