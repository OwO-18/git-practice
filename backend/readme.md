#### package.json 中的 dependencies 與 devDependencies 分別是什麼?

- dependencies 是程式運行時需要用到的依賴，因此會被包含在生產環境中，畢竟沒有這些依賴程式可能就不能正常跑。
- devDependencies 則是在開發的時候需要用到的依賴，可能是一些測試工具之類的，所以程式寫好之後就不會跟著包含在裡面。

---

#### package.json 中的 scripts 這個區塊怎麼用？

可以輸入一些想要自動化的操作，比如說 `start` 的話，後面的程式就會自動執行，而不需要手動 run。

---

#### Port number 要怎麼以環境變數來設定？

我找到其中一個方法是使用 `process.env` 來設定

```JS
const port = process.env.PORT || 3000;
```
`process.env.PORT` 會檢查是否有設定環境變數 PORT，沒有的話就默認 3000。

至於默認是 3000 的原因好像就是因為大家用習慣了，不太確定。然後太低的號碼可能也怕會跟其他的 port 衝突。

---

#### 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

這題老師上課有講過大概，印象深刻的包含：

- 敏感的資料，像是密碼、token之類的
- 其他人也可以自己下載到電腦上的模組或是文件，就不需要跟著上 repo

找了資料之後像是臨時檔案、測試檔案這些文件也不應該上傳到 repo，留在開發的本地終端就好了。

---

#### 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

- CJS：是使用 `require()` 和 `module.exports`，在舊版 Node.js 中，只有 CJS 可用。
  
  並且是在程式執行的時候才解析，效能可能較差。

- ESM：則是用 `import` 和 `export`，從 ES6 開始引入。

  而 ESM 是先解析才執行程式，因此在 compile 的時候就可以先確定好依賴關係；並且 ESM 可以異步加載，在瀏覽器中可能效能較好。
