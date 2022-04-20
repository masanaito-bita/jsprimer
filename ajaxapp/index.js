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
