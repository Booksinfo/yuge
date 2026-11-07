"use strict";

// 公開時に回答者向けのGoogleフォームURLを設定してください。
const formUrl = "";
const closesAt = Date.parse("2026-11-24T00:00:00+09:00");
const formLink = document.getElementById("form-link");
const formStatus = document.getElementById("form-status");

if (Date.now() >= closesAt) {
  formStatus.textContent = "特典のお申し込みは終了しました。";
  document.getElementById("amazon-link").firstChild.textContent = "Amazonで書籍を見る ";
} else if (formUrl) {
  formLink.href = formUrl;
  formLink.hidden = false;
  formStatus.hidden = true;
}
