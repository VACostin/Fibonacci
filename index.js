const unfold = (length, acc = [], frst = 0, scnd = 1) =>
  length > 0 ? unfold(length - 1, [...acc, frst], scnd, frst + scnd) : acc;
const fib = (length, cache = {}) =>
  length < 2
    ? length
    : (cache[length] ||= fib(length - 1, cache) + fib(length - 2, cache));
//already solved merge in DS-A repo
