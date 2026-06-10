# PCIT LINE Bot — 帳戶安全諮詢助理

> **收款人入帳確認機制（PCIT）倡議的民眾服務工具**
>
> 台灣每年有超過 15 萬個無辜帳戶遭到警示凍結。這個 Bot 讓當事人在最茫然的時候，
> 能即時得到第一步該做什麼的明確答案。

🔗 倡議網站：[pcit-tw.pages.dev](https://pcit-tw.pages.dev)
📋 政策提案：[join.gov.tw（附議連結）](https://reurl.cc/R2moVe)
📧 聯絡主開發者：pcit.tw@gmail.com

---

## 這個專案從哪裡來

這個 Bot 的發起人是林俐伶（Liliane），台中榮總婦產科暨母胎醫學專科醫師。

2026 年 3 月，她的銀行帳戶在毫不知情的情況下收到詐騙集團的金流，隨即遭到警示凍結。身為醫師，她有辦法跑完整個申訴流程——但這個過程讓她意識到：台灣的收款端保護機制是一片空白，而大多數當事人甚至不知道第一步該打給誰。

她因此創辦了 **PCIT 倡議**，主張參考加拿大 Interac e-Transfer 模型，要求金管會建立「收款人入帳確認機制」——讓陌生款項入帳前先通知收款人，給他們選擇接受或拒絕的權利。

> 掛號信要簽收，匯款為什麼不用？

這個 LINE Bot 是倡議的延伸：讓制度改變之前，至少有一個工具能陪著那些被卡住的人。

---

## 這個 Bot 解決什麼問題

當一個人發現帳戶被警示、或收到不明匯款，他們面對的是：

- 不知道該打給警察、銀行、還是 165
- 網路上的資訊零散且過時
- 偵查隊電話永遠打不通
- 不知道自己的申訴進度在哪

**這個 Bot 是他們的第一個可靠答案來源。**

---

## 使用者角色與功能範圍（v0.1 MVP）

Bot 服務三類使用者，各自有獨立的對話流程：

| 角色 | 情境描述 | Bot 提供的服務 |
|------|----------|----------------|
| **A：收到不明匯款** | 帳戶突然多了一筆陌生轉帳，不確定是否有風險 | 判斷風險等級 → 引導通報 165 → 說明後續流程 |
| **B：帳戶已被警示** | 帳戶已凍結，正在申訴或等待解凍中 | 解釋三階段申訴流程 → 提供各階段文件清單 → 協助起草申訴書 |
| **C：想了解或支持 PCIT** | 關心議題、想附議或分享 | 說明 PCIT 是什麼 → 附議連結 → 分享素材 |

### 文件協助三層架構（角色 B 專用）

```
Tier 1：AI 自動生成初稿（本 Bot 提供）
Tier 2：法律扶助基金會轉介（提供聯絡資訊）
Tier 3：委任律師（提供方向，不提供名單）
```

---

## 技術規格

### 目前狀態

- [ ] 專案初始化
- [ ] LINE Messaging API 串接
- [ ] 角色 A 對話流程（規則樹）
- [ ] 角色 B 對話流程 + 文件產生
- [ ] 角色 C 說明流程
- [ ] 部署上線

### 技術選型方向（討論中）

| 元件 | 候選方案 | 備註 |
|------|----------|------|
| 後端框架 | Python / Flask 或 Node.js | 歡迎協作者建議 |
| 部署平台 | Render / Railway / Fly.io | 低成本優先，公益專案 |
| 對話邏輯 | 規則樹（MVP）→ LLM 增強（v0.2） | 先求上線，再求智慧 |
| 資料儲存 | 無狀態（MVP 不儲存個資） | 隱私優先設計 |

### LINE Bot 設定需求

- LINE Developers Console 帳號（由主開發者持有）
- Webhook URL（部署後提供）
- Channel Access Token + Channel Secret（`.env` 管理，不進 repo）

---

## 快速開始（本地開發）

```bash
git clone https://github.com/Lilian-000/pcit-linebot.git
cd pcit-linebot

# Python 範例
pip install -r requirements.txt

# 設定環境變數
cp .env.example .env
# 填入 LINE_CHANNEL_ACCESS_TOKEN 和 LINE_CHANNEL_SECRET

# 啟動本地伺服器
python app.py

# 使用 ngrok 建立 HTTPS tunnel（LINE Webhook 必須 HTTPS）
ngrok http 5000
```

---

## 規劃中的專案結構

```
pcit-linebot/
├── app.py                  # 主程式入口
├── handlers/
│   ├── role_a.py           # 不明匯款流程
│   ├── role_b.py           # 警示戶申訴流程
│   └── role_c.py           # PCIT 倡議說明
├── templates/
│   └── messages.py         # 所有回覆文字模板
├── .env.example            # 環境變數範例（不含真實金鑰）
├── requirements.txt
└── README.md
```

---

## 如何貢獻

這是一個由倡議者發起、工程師協力的公益專案。目前由主開發者林俐伶主導，開放協作。

**目前最需要協助的部分：**

1. 對話流程圖設計（Flowchart → 規則樹實作）
2. LINE Flex Message UI 設計
3. 後端框架選型建議
4. 部署設定（CI/CD）

**參與方式：**

- 開 Issue 說明你想做什麼
- 或直接 fork → PR
- 或 email：pcit.tw@gmail.com

沒有最低投入門檻。一個 PR 也算貢獻。

---

## 關於 PCIT 倡議

**收款人入帳確認機制（Payee Confirmation of Inbound Transfer）**

台灣現行制度下，詐騙金流可以在收款人完全不知情的情況下進入帳戶，帳戶隨即遭到凍結，當事人喪失所有金融服務，申訴程序平均耗時八個月以上。

PCIT 主張：在陌生帳號首次匯款時，先通知收款人，讓他們決定是否接受。技術上，這只需要在現有清算架構上疊加一層通知層，不需修改核心帳務系統。

參考模型：**加拿大 Interac e-Transfer**（運行逾 20 年，88% 加拿大人使用，從根本上消除了台灣式「無辜警示戶」問題）。

台中市法務局局長公開表示，金管會可以用一道行政指令啟動這件事，不需要立法。

詳細政策說明 → [pcit-tw.pages.dev](https://pcit-tw.pages.dev)
join.gov.tw 提案（附議中）→ [reurl.cc/R2moVe](https://reurl.cc/R2moVe)

---

## 授權

MIT License — 公益用途，歡迎 fork 與衍生開發。

---

*PCIT Taiwan 倡議 · 林俐伶 · 2026*
