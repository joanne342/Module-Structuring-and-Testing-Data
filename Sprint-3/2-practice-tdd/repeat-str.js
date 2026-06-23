function repeatStr() {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  if (count === 1) {
    return str;

  } else if (count < 1) {
    throw new Error("Something went wrong");

  } else {
    return Array.from({ length: count }, () => str).join("");
  }
}
