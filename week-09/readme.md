### 1. curl localhost
- 先按照老師的步驟 SSH 進去，成功看到 fake web server

<img src="assets/截圖 2024-11-07 下午3.13.01.png" width="70%"/>

### 2. 嘗試啟動 Nginx

<img src="assets/截圖 2024-11-07 下午3.14.46.png" width="70%"/>

但這邊還在找該怎麼糾錯的時候，有同學在 DC 貼了幫忙的指令（馬上就被老師說要收回訊息 XD）

### 3.sudo iptables -L

<img src="assets/截圖 2024-11-07 下午3.16.19.png" width="70%"/>

這邊我只知道 INPUT 看起來很怪，不知道進一步該做什麼，所以還是問 ChatGPT：
> 從 iptables -L 的輸出來看，目前 EC2 instance 的防火牆規則設定為：
> - INPUT Chain
>   - 預設政策為 ACCEPT（接受所有進入流量）。
>   - 有一條規則會 拒絕所有 HTTP（port 80）請求，並使用 icmp-port-unreachable 來回應。這意味著任何試圖訪問該 instance HTTP 服務的連線（如網頁瀏覽器的請求）都會被拒絕。
> - FORWARD Chain
>   - 預設政策為 ACCEPT（允許所有流量轉發），但沒有其他具體規則設定。
> - OUTPUT Chain
>   - 預設政策為 ACCEPT，沒有額外規則。允許 instance 對外發送任何請求。

並且它也提供了解法，使用`sudo iptables -D INPUT -p tcp --dport 80 -j REJECT` 來刪除這條規定。

刪掉後再次輸入`sudo iptables -L`則變成這樣：

<img src="assets/截圖 2024-11-07 下午3.18.15.png" width="70%"/>

少了這條之後再嘗試看看現在連線的狀況（這次使用瀏覽器輸入 IP 的方式試試）：

<img src="assets/截圖 2024-11-07 下午3.18.53.png" width="70%"/>
依舊是 fake server...!

### 4. 檢查 Nginx

到這邊我想起來剛剛 Nginx 弄到一半（剛剛取得階段性成功就鬆一口氣）
也是問 ChatGPT，所以用`systemctl status nginx.service`來看 Nginx 的狀態：

<img src="assets/截圖 2024-11-07 下午3.21.38.png" width="70%"/>

在這邊我看得懂的只有在`/etc/nginx/nginx.conf`的第八行那邊多了一個分號，所以先去修那邊：

<img src="assets/截圖 2024-11-07 下午3.34.33.png" width="70%"/>

中間有一段是修完之後打開看發現還是不對，然後問了 ChatGPT，建議我重新啟動 Nginx 確保有套用到新的設定檔，但我忘記截圖了

### 5.sudo lsof -i :80

這邊好像是聽到旁邊別組同學在討論所以才知道的

<img src="assets/截圖 2024-11-07 下午3.38.58.png" width="70%"/>

在 80 port 這邊有個 process 佔用了，要先砍掉

<img src="assets/截圖 2024-11-07 下午3.39.24.png" width="70%"/>

然後這邊又重啟了一次 Nginx（現在回想應該是不用這一步，但因為被前面的步驟影響，所以做完一件事都重新啟動一下，想說確保有用到最新的設定）
並看看 Nginx 的狀態

### 6. 403 forbidden
之後一樣打開網頁檢查，發現現在的狀態變成 403 forbidden，其實我對 403 比較不清楚（並不是說其他的我很熟），只是對我來說比較常看到的是 404 error

<img src="assets/截圖 2024-11-07 下午3.39.42.png" width="40%"/>

後來是跟同學討論，加上問 ChatGPT；發現應該是 Nginx 已經成功啟動了，也能夠處理請求，但因為目錄的路徑設置錯誤或是權限的問題無法提供網頁。

- 最後是使用 `sudo nano /etc/nginx/sites-available/default` 來確認目錄設置
- 以及 `ls -ld /var/www/html` 來確認權限問題

### 7. Congratulations!
<img src="assets/congrats.png" width="40%"/>

第一次碰 troubleshooting，雖然過程很像是在破關（遇到某個問題然後找解法），但第一次接觸，從哪裡下手其實都不太清楚；別組同學進度感覺又超級快。但有了這次經驗之後下次再有類似的情況至少有一點經驗了！
