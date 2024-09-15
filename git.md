# 說明 blob, tree, commit, branch, head 分別是什麼：

1. blob:binary large object的縮寫，主要存放檔案內容。
2. Tree 主要是存放目錄、檔案資訊，指向blob或其他tree。
3. Commit：記錄commit訊息內容，包含作者、訊息及指向一個tree的指標（tree即為當時的檔案）。
4. branch：指向最新的commit的指標。
5. head：指向當前branch的指標，代表目前在哪個branch上面工作。

## image
(https://kaochenlong.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYjg9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ac905ae96cc87e98a5beb9e21ffcbf481b7fd3f2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJQUJXa0NBQVE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--578d6799c87a604ca574298502ba874c9075e929/git-objects2.png)
