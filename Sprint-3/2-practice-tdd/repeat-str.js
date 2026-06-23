function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
if (count < 0) {
    throw new Error("Negative count is not allowed");

  } else if (count === 0) {
    return "";

  } else {
    return Array.from({ length: count }, () => str).join("");
  }
}

module.exports = repeatStr;
