module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const chars = str.split('');

  for (let j = 0; j < chars.length; j += 1) {
    const e = chars[j];

    for (let i = 0; i < bracketsConfig.length; i += 1) {
      if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
        if (bracketsConfig[i][0] === e) {
          if (stack.length > 0 && stack[stack.length - 1] === e) {
            stack.pop();
          } else {
            stack.push(e);
          }
        }
      } else {
        if (bracketsConfig[i][0] === e) {
          stack.push(e);
          break;
        }
        if (bracketsConfig[i][1] === e) {
          if (stack.pop() !== bracketsConfig[i][0]) {
            return false;
          }
          break;
        }
      }
    }
  }

  return stack.length === 0;
};
