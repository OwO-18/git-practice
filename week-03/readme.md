## week-03 to-do list
- [x] 課程筆記
- [x] 作業A
- [ ] 作業B
- [ ] 作業C
- [ ] 作業D

## 9/26的課程筆記

放一下上課的時候做的筆記，試著練習再整理一次。

### JS程式題
---
#### 第二題
原本的題目是
``` JS
let user = {};
user.name = "John";
user.surname = " Smith";
user.name = "Pete";
delete user.name;

for (let key in user){
    console.log(key);
}
```

這題的話知道 name 會改成 "Pete" 之後再整個刪掉，所以 user 只剩下 surname，值是 "Smith" 。

直覺想的時候確實覺得會print surname，但又覺得那個 key 是不是老師故意放的陷阱，改成其他提示詞應該也可以，只是表示 user 裡面的東西。所以想成會 print "Smith"，選了以上皆非。

```JS
let user = {};
user.name = "John";
user.surname = " Smith";
user.name = "Pete";
delete user.name;

for (let temp in user){
    console.log(temp);
}
```
後來按照想的把 key 改成 temp，確實輸出還是 surname。

---
#### 第四題
let car 2 = car 1的時候抄的是地址，所以是 shallow copy。

stack 跟 heap，真正儲存資料的的地方在 heap，stack 要一塊記憶體，指向同一個位子。

```JS
car2 ={
  owner:"Jack",
}
```

的時候，Heap 會要一塊新的記憶體存 "owner" 是 Jack；然後 stack 裡面的 car2 指向新的地址，所以有成功改到。

- 大括號出來的時候，Heap 已經開了一塊新的空間存。
- stack 裡的 car1 是物件，指向 heap 的空間。

---
#### Q：JS 中要如何 DeepCopy？

A:（待補）（可以找資料，但分析每一種方法使用的時機、優缺點。）

#### Q2: 物件中如果還放一個物件，那使用...的時候，只抄到第一層還是全抄？

```jsx
let car1 ={
  brand: 'ford',
  color: 'red',
  owner: 'Paul',
  object: ...
};
```

```jsx
let car2 = {...car1, owner:'John', price:10000};
```

A: (待補）

---
#### 第九題

```Js
console.log('start');
setTimeout(() => {
  console.log('timeout');
}, 0);
console.log('after');
```
輸出是 start, after, timeout

---
#### sum.js

array 函式都可以用 for 迴圈實作、可以練習

也許函式的效能較差 → 在效能和可讀性之間做抉擇

還是取決於程式碼在哪裡跑，每個環境上有一些實作上的細節差異

---
#### 關於coding 的一些雜項：

- 先把 validation 做好，input確定沒問題了再做操作
- early return

---

## 作業 A

#### 什麼是 AWS Region, AZ (availability zones)

- AWS Region 是 AWS 分散在全球不同地方的數據中心，具體在頁面右上角可以切換。
- AZ (availability zones) 則是分佈在同一個區域內不同數據中心，用來提高容錯；即使一個 AZ 掛了也可以切換到其他的。
- 所以一個 AWS Region 內包含了多個 AZ。
