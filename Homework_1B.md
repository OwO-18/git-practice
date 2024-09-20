# Branch Model

### Git Flow

因為每個人的commit習慣可能不同，所以不能放任大家自己亂commit，要訂定一些規則讓大家遵守：

主要的分支分成 `master`、`develop`、`hotfix`、`release`、`feature`五種，`master`和`develop`是長期分支，會一直存在專案內；其他的可能完成任務後就被砍。

* master：用來放穩定，可隨時上線的版本，開發者不會直接commit到master，都是合併別的分支過來。
* develop:基礎的分支，所有的feature都是從這邊岔出去，功能做好了也是合併回來這邊。
* hotfix:熱修，線上的專案遇到問題緊急開一個分支修，修好了就合併到master去，也同時合併一份到release去，否則到時候release合併的時候又會出問題。
* release:上線前的最終測試分支，會同時合併到develop跟master。
* feature:想開一個新功能的時候就開feature分支。
