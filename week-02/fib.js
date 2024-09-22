function fib_rec(n) {
  if (n <= 1) {
    return n;      	
  }
  return fib_rec(n - 1) + fib_rec(n - 2);
}

for(let i = 0; i< 11; i++){
	console.log(fib_rec(i)); //check output
}
