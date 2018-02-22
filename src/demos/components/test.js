const test = {
  Button: [
    ["1", ["a", "b", "c"], "3"],
    ["4", "5", "6"],
  ],
  Card: {
    1: [
      ["a", "b", "c"],
      ["d", "e", "f"],
    ],
    aa: [
      ["1", "2", "3"],
      ["4", "5", "6"],
    ],
  },
};

const valeur = "Card";
Object.keys(test).forEach((key) => {
  if (key === valeur) {
    if (test[key].length === undefined) {
      Object.keys(test[key]).forEach((value) => {
        console.log(value);
        test[key].aa.forEach(e => console.log(e));
      });
    } else {
      test[key].forEach(e => console.log(e));
    }
  }
});
