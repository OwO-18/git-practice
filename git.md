# 說明 blob, tree, commit, branch, head 分別是什麼：

1. blob:binary large object的縮寫，主要存放檔案內容。
2. Tree 主要是存放目錄、檔案資訊，指向blob或其他tree。
3. Commit：記錄commit訊息內容，包含作者、訊息及指向一個tree的指標（tree即為當時的檔案）。
4. branch：指向最新的commit的指標。
5. head：指向當前branch的指標，代表目前在哪個branch上面工作。

## image
![](https://kaochenlong.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYjg9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ac905ae96cc87e98a5beb9e21ffcbf481b7fd3f2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJQUJXa0NBQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--578d6799c87a604ca574298502ba874c9075e929/git-objects2.png)
# 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化

### 因為第一次使用git，前面有很多操作不順的地方，沒注意到作業要求，跟著做的時候沒有留心.git資料夾內的變化，我這邊列出幾個在執行push到github後，再pull下來的觀察：

* push之前只建了一個hello.txt，並且按照老師的教程打
```
git add hello.txt"
```
會跳出找不到目錄的報錯，找網路之後才發現要先用touch建立，之後就有建立成功，這時git-workshop的資料夾確實有這個檔案建立（沒有進去.git看很抱歉）

之後要把 main 分支推送到 origin 去也卡了好一陣子，包含不知道github的密碼原來要另外找token，找到了之後又好像是因為兩邊檔案差太多的關係？所以在後面加上「--allow-unrelated-histories」才看似成功。但現在回顧起來發現原本的hello.txt好像就不見了。
