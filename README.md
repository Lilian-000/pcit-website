# pcit-website — PCIT 倡議網站

> **收款人入帳確認機制（PCIT）倡議的公民教育與行動網站**
>
> 讓民眾在 30 秒內理解「什麼是警示帳戶、為什麼會發生在我身上、我現在能做什麼」。

🌐 線上網址：[pcit-taiwan.com](https://pcit-taiwan.com)
📋 政策提案（附議中）：[reurl.cc/R2moVe](https://reurl.cc/R2moVe)
📧 聯絡：pcit.tw@gmail.com

---

## 這個網站從哪裡來

發起人林俐伶（Liliane），台中榮總婦產科暨母胎醫學專科醫師。

2026 年 3 月，她的銀行帳戶在毫不知情的情況下收到詐騙集團的金流，隨即遭到警示凍結。跑完整個申訴流程後，她意識到：台灣的收款端保護是空白，而大多數當事人連第一步該打給誰都不知道。

她因此創辦 **PCIT 倡議**，要求金管會參考加拿大 Interac e-Transfer 模型，建立「收款人入帳確認機制」——在陌生款項入帳前通知收款人，給他們選擇接受或拒絕的權利。

> 掛號信要簽收，匯款為什麼不用？

這個網站是倡議的公開窗口：教育民眾、累積附議聲量、對接政策壓力。

---

## 網站功能概覽

| 頁面 / 區塊 | 功能 |
|------------|------|
| 風險評估工具 | 互動問答，協助民眾判斷自己是否有警示風險 |
| 知識測試 | 測試對詐騙與警示帳戶的認知程度 |
| 應對指南 | 收到不明匯款 / 已被警示的分步驟說明 |
| PCIT 政策說明 | 機制原理、國際案例、技術可行性 |
| 附議 CTA | 直連 join.gov.tw 提案，追蹤當前附議人數 |
| AI 早鳥名單 | 預告 LINE Bot，蒐集早期使用者 |
| 企業合作洽談 | 金融機構與技術夥伴的接觸入口 |

---

## 技術架構

| 項目 | 說明 |
|------|------|
| **前端** | 純靜態 HTML / CSS / Vanilla JS，無框架依賴 |
| **部署** | Cloudflare Pages（自動從 GitHub main branch 部署） |
| **網域** | pcit-taiwan.com（Cloudflare Pages 部署，原 pcit-tw.pages.dev 仍可連） |
| **字型** | Google Fonts：Noto Serif TC / Noto Sans TC |
| **Analytics** | GoatCounter（[pcit-tw.goatcounter.com](https://pcit-tw.goatcounter.com)）+ Google Analytics |

### 主要檔案

```
pcit-website/
├── payee-protection.html         # 主網站（風險評估、政策說明、CTA）
├── pcit-advocacy-materials.html  # 倡議素材（投影片、影片腳本）
├── pcit-social-graphics.html     # 社群圖卡產生器
├── PPOP_v0.1.md                  # 收款人保護開放協議（技術規格草案）
└── README.md
```

---

## 本地開發

不需要任何 build 工具。直接開啟 HTML 檔案即可預覽：

```bash
git clone https://github.com/Lilian-000/pcit-website.git
cd pcit-website

# 用瀏覽器直接開啟
open payee-protection.html

# 或用 VS Code Live Server（推薦，支援即時預覽）
code .
```

### 部署

Push 到 `main` branch 後，Cloudflare Pages 會自動觸發部署，約 1 分鐘生效。無需手動操作。

---

## 如何貢獻

這是公益倡議網站，歡迎任何形式的協作。

**目前可以協助的方向：**

- UI / UX 改善（行動裝置體驗、可及性）
- 文案校對與更新（政策數據、附議人數）
- 新功能開發（例如：警示帳戶申訴進度查詢、多語系支援）
- 效能優化（字型載入、圖片壓縮）

**參與方式：**

- 開 Issue 描述你發現的問題或想法
- 直接 fork → 修改 → PR
- 或 email：pcit.tw@gmail.com

---

## 關於 PCIT

**收款人入帳確認機制（Payee Confirmation of Inbound Transfer）**

台灣現行制度下，詐騙金流可以無聲進入收款人帳戶，帳戶隨即遭到凍結，申訴平均耗時八個月以上，最長超過兩年。

PCIT 主張只需在現有清算架構上疊加一層通知層，技術難度低，且不需要修法——金管會可以用一道行政指令啟動可行性研究（台中市法律事務局局長李善植公開表示此點）。

國際先例：**加拿大 Interac e-Transfer**，運行逾 20 年，88% 加拿大人使用，從根本上消除了台灣式「無辜警示戶」問題。

政策白皮書 → [pcit-taiwan.com](https://pcit-taiwan.com)
join.gov.tw 提案 → [reurl.cc/R2moVe](https://reurl.cc/R2moVe)

---

## 相關專案

| 專案 | 說明 | Repo |
|------|------|------|
| pcit-linebot | LINE Bot 帳戶安全諮詢助理 | [Lilian-000/pcit-linebot](https://github.com/Lilian-000/pcit-linebot) |
| PPOP v0.1 | 收款人保護開放協議技術規格草案 | [PPOP_v0.1.md](./PPOP_v0.1.md) |

---

## 授權

MIT License — 公益用途，歡迎 fork 與衍生開發。

---

*PCIT Taiwan 倡議 · 林俐伶 · 2026*
