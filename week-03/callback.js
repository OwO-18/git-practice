function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here

doJob('刷牙', 1000, function (data) {
  console.log(data);
  
  doJob('吃早餐', 3000, function (data) {
    console.log(data);
    
    doJob('寫功課', 1000, function (data) {
      console.log(data);
      
      doJob('吃午餐', 2000, function (data) {
        console.log(data);
      });
    });
  });
});

/*
Output:

/Users/ben/.nvm/versions/node/v20.17.0/bin/node ./test.js
開始工作 at 2024-09-29T18:08:45.489Z
完成工作 刷牙 at 2024-09-29T18:08:46.509Z
完成工作 吃早餐 at 2024-09-29T18:08:49.511Z
完成工作 寫功課 at 2024-09-29T18:08:50.513Z
完成工作 吃午餐 at 2024-09-29T18:08:52.514Z

*/
