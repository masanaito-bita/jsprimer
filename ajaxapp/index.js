// CSSセレクタを使ってDOMツリー中のh2要素を取得
const heading = document.querySelector("h2");
// h2に含まれるテキストコンテンツを取得
const headingText = heading.textContent;

// button要素を作成
const button = document.createElement("button");
button.textContent = "Push Me!";
// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);
