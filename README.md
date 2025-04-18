# 📘 LeetCode 題型 Checklist 整理

## 🔢 3Sum / nSum 系列（雙指針）

- 是否先將 nums 排序？
- 外層 for loop 是否處理過重複的 i？（避免重複解）
- 雙指針初始化為 left = i + 1，right = nums.length - 1？
- 當 sum === target，是否同時移動 left++ 與 right--？
- 移動指針後是否跳過重複的 left / right？

🧠 4Sum 題型通用 Checklist
✅ 題型辨識：
找 4 個數加起來等於 target

輸出所有不重複組合

可以有負數、重複值，但結果中不能有重複組合

輸出順序不限

🧱 結構邏輯：

步驟 說明
1️⃣ 排序 為了能正確使用雙指針與去重
2️⃣ 固定第一個數 i 外層 for loop
3️⃣ 固定第二個數 j 第二層 for loop
4️⃣ 雙指針找剩下兩個數 left = j + 1, right = nums.length - 1
5️⃣ 檢查總和與去重邏輯 防止重複組合
✅ 重複處理 Checklist：
是否跳過重複的 i（i > 0 && nums[i] === nums[i - 1]）？

是否跳過重複的 j（j > i + 1 && nums[j] === nums[j - 1]）？

找到一組解後，left++, right-- 是否同時跳過重複？

有邊界控制嗎？如 i < nums.length - 3？

## 🪟 Sliding Window

- 是否正確初始化 left / right 指針？
- 條件不滿足時，是否有縮小視窗（通常是 left++）？
- 是否有維護 Map / Set / Array 追蹤視窗內資訊？
- 是否正確更新答案（如最大長度、最短長度）？
- 如果是固定長度視窗，是否正確處理加入/移除的元素？

## 🔍 BFS（Breadth-First Search）

- 是否正確初始化 queue？是否正確推入初始節點？
- 是否有使用 visited 或原地標記避免重複拜訪？
- 是否需要處理多個起始點同時擴散？
- 是否有記錄當前層數（如 minutes / level）？
- 是否正確處理上下左右（或八方向）擴展？

## 🌊 Prefix Sum（前綴和）

- 是否建立了正確的 prefix[] 陣列？
- 是否理解 prefix[i] - prefix[j] 可得區間和？
- 是否使用 Map 來記錄 prefix 出現次數？
- 是否初始化 prefixMap[0] = 1？（處理從頭開始的情況）
- 結果是要回傳「總數」、「最短長度」，還是「最大值」？

## 🔎 Binary Search（二分搜尋）

- 是否正確初始化 left / right？（0 / n-1 or 0 / n）
- while 條件是 left <= right 還是 left < right？
- 是否正確計算 mid = Math.floor((left + right) / 2)？
- 是否考慮重複元素情況？需不需要找左/右邊界？
- 回傳值是 index、布林值，還是具體值？
