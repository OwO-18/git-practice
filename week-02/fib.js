function fib_rec(n) {
  if (n <= 1) {
    return n;
  }
  return fib_rec(n - 1) + fib_rec(n - 2);
}

console.log(fib_rec(10)); 
