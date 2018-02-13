/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
  Rewritten to ES7 by Mik BRY
*/
const ClassNames = (args) => {
  const classes = [];
  args.forEach((arg) => {
    if (arg) {
      const argType = typeof arg;
      if (argType === "string" || argType === "number") {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        const inner = ClassNames(arg);
        if (inner) {
          classes.push(inner);
        }
      } else if (argType === "object") {
        Object.keys(arg).forEach((key) => {
          if (arg[key]) {
            classes.push(key);
          }
        });
      }
    }
  });
  return classes.join(" ");
};

export default ClassNames;
