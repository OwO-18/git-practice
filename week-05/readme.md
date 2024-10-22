- [x] 作業的紀錄
- [x] Q1
- [x] Q2
- [ ] Q3
- [ ] Q4
- [ ] Q5
- [ ] Q6

#### 作業的紀錄
跟著老師作業描述中的「B. 網域購買與憑證申請」做時，我是做一步觀察一步（前幾份作業忘記截圖的教訓）

所以這次在做完第二步驟設定好 DNS A Record 之後，我就想說這樣一來應該已經可以顯示網站了，就輸入網址想看，一開始可能是因為還沒有設定好（他有說要等一陣子），這時我輸入的是 `italian-donuts.online`，會無法顯示網站

我也沒搞很清楚，但就想說在前面加上 `www.`，也不行

我就再加上 `https://` 變成 `https://www.italian-donuts.online` （平常加習慣了），還是不行，並且之後我不管怎麼調都沒辦法（也不知道要調什麼）

是直到我想說會不會是快取的關係，把分頁關掉，重新複製了 `italian-donuts.online` 貼上之後就可以了

到這邊本來想說就過了，但真的是突然想說看看他在手機上會長什麼樣子，就把網址貼去手機，但我貼的是 github 上的，並且是 `https` 的，發現又不行了。

最後我是把兩個網址分別貼出來比較才發現不同之處，可以跑的那個網址前面顯示的是 `http`，才讓我學到一課。

---


#### 1. 你的網址，應該是 `https://www.xxx.xxx`，點擊過去應該要可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）
[https://www.italian-donuts.online/](https://www.italian-donuts.online/)
#### 2. 你在哪裡購買網域的
GoDaddy
#### 3. DNS 的 A record 是什麼？

#### 4. DNS 的 NS record 是什麼？
#### 5. Domain Name vs FQDN vs URL 這三者分別為何？
#### 6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
