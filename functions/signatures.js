/**
 * Cloudflare Pages Function: /signatures
 *
 * 即時抓取 join.gov.tw 的附議人數，回傳 JSON。
 * 部署後可透過 GET https://pcit-tw.pages.dev/signatures 呼叫。
 *
 * Cloudflare 會在 Edge 快取 5 分鐘，避免頻繁請求來源站。
 */

const IDEA_URL =
  'https://join.gov.tw/idea/detail/ba071237-01f4-40c4-a322-b1c0b16111dd';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json;charset=UTF-8',
};

export async function onRequest(context) {
  // Handle CORS preflight
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  try {
    const res = await fetch(IDEA_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
          '(KHTML, like Gecko) Chrome/124.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml',
        'Accept-Language': 'zh-TW,zh;q=0.9',
      },
      // 跟隨重新導向
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(`join.gov.tw returned ${res.status}`);
    }

    const html = await res.text();

    // 頁面將計數以轉義 JSON 嵌入 JS 變數：\"endorseCount\":2065
    const match =
      html.match(/\\"endorseCount\\":\s*(\d+)/) ||   // 轉義版
      html.match(/"endorseCount"\s*:\s*(\d+)/);       // 未轉義版（備用）

    if (!match) {
      throw new Error('endorseCount not found in page');
    }

    const signatures = parseInt(match[1], 10);

    const body = JSON.stringify({
      signatures,
      updated_at: new Date().toISOString(),
      source: 'join.gov.tw',
    });

    return new Response(body, {
      status: 200,
      headers: {
        ...CORS_HEADERS,
        // Cloudflare Edge 快取 5 分鐘，瀏覽器快取 1 分鐘
        'Cache-Control': 'public, s-maxage=300, max-age=60',
      },
    });
  } catch (err) {
    // 回傳 null signatures，讓前端降級到 data/count.json
    return new Response(
      JSON.stringify({
        signatures: null,
        updated_at: new Date().toISOString(),
        error: err.message,
      }),
      {
        status: 503,
        headers: {
          ...CORS_HEADERS,
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}
