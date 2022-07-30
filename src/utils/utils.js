export const totalExpToLevel = (totalExp) => {
  let sumExp = 0;
  let level = 0;
  while (sumExp + 100 * (Math.floor((level + 1) ** 1.2 * 100) / 100) < totalExp) {
    level += 1;
    sumExp += 100 * (Math.floor(level ** 1.2 * 100) / 100);
  }

  let expOverLevel = totalExp - sumExp;

  if (totalExp - sumExp === 100 * (Math.floor(level ** 1.2 * 100) / 100)) {
    level += 1;
    expOverLevel = 0;
  }

  return {
    lvl: level,
    lvlTotalExp: 100 * (Math.floor(level ** 1.2 * 100) / 100),
    expOverLevel,
  };
};
