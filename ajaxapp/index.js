// CSSセレクタを使ってDOMツリー中のh2要素を取得
const heading = document.querySelector("h2");
// h2に含まれるテキストコンテンツを取得
const headingText = heading.textContent;

// button要素を作成
const button = document.createElement("button");
button.textContent = "Push Me!";
// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);

/**
 * GithubのユーザーIDからユーザー情報を取得する
 * 
 * @param {string} userId
 * @return {object} 指定されたGithubのユーザー情報
 */
function fetchUserInfo(userId) {
    // Fetch API ページ全体を再読み込みすることなくURLからデータ取得が可能
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
        // レスポンスの受け取り
        console.log(response.status); // 200
        return response.json().then(userInfo => {
            // JSONパースされたオブジェクトが渡される
            console.log(userInfo);
        });
    }).catch(error => {
        // NetworkErrorオブジェクトでPromiseが返される
        // -> thenメソッドの第二引数 or catchメソッドのコールバック関数が呼び出される
        console.error(error);
    });
}
