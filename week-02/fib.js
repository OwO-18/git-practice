function fib_rec(n) {
  if (n <= 1) {
    return n;      	
  }
  return fib_rec(n - 1) + fib_rec(n - 2);
}

for(let i = 0; i< 11; i++){
	console.log(fib_rec(i)); //check output
}

function fib_iter(n) {
  if (n <= 1) {
    return n;      	
  }
  let a0 = 0, a1 = 1, ans = 1;
  for(let i = 2; i <= n; i++){
  ans = a0 + a1;
  a0 = a1;
  a1 = ans;
  }
  return ans;
}

for(let i = 0; i< 11; i++){
	console.log(fib_iter(i)); //check output
}
