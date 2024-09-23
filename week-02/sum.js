```
function sum(ary) {
	// TODO: sum all elements in ary
  ans = ary.reduce(function(total, e){
  	return total + e;
  });
  return ans;
}

console.log(sum([1, 5, 3, 2])); // 11
```

參考網址：
-[JavaScript參考文件-Array](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
