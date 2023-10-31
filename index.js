// ボタンとテキストエリアの要素を取得
const sendBtn = document.querySelector(".send_btn");
const resetBtn = document.querySelector(".reset");
const commentArea = document.querySelector(".comment_area");
const textBox = document.getElementById("text");


// "sendBtn"ボタンがクリックされたときのイベントリスナー
sendBtn.addEventListener( "click", () =>{
    // 新しいdiv要素を作成
    let comment = document.createElement("div");
    // 作成したdiv要素に"comment"クラスを追加
    comment.classList.add("comment");

    // 作成したdiv要素の内部HTMLにテキストボックスの値を設定
    comment.textContent = textBox.value;

    // 親divの中に子divを作成
    let CDelete = document.createElement("div");
    // 子div要素に".delete"クラスを追加
    CDelete.classList.add("delete");

    // 子divを親divに追加
    comment.appendChild(CDelete);

    // コメントエリア内でランダムな位置を計算
    let randomLeft = Math.floor(Math.random() * (commentArea.offsetWidth - 300));
    let randomTop = Math.floor(Math.random() * (commentArea.offsetHeight - 120));

    // 計算したランダムな位置をコメントに適用
    comment.style.top = randomTop + "px";
    comment.style.left = randomLeft + "px";

    // コメントエリアに新しいコメントを追加
    commentArea.appendChild(comment);


// ".comment"というクラスを持つすべての要素を選択し、それらを"comments"という変数に格納します。
    let comments = document.querySelectorAll(".comment");

    // "comments"変数に格納された各要素（コメント）に対して、次の操作を行います。
    comments.forEach((comment) => {
        // 各コメント要素に対して、"dblclick"（ダブルクリック）イベントリスナーを追加します。
        comment.addEventListener("dblclick", () => {
            // ダブルクリックされたコメント要素に"disappear"というクラスを追加します。
            // これにより、CSSで定義された"disappear"クラスのスタイルが適用され、コメントが表示から消える（または他の効果が適用される）ことでしょう。
            comment.classList.add("disappear");
            
            // 各コメント要素に対して、"animationend"（アニメーション終了）イベントリスナーを追加します。
            comment.addEventListener("animationend", () => {
                // アニメーションが終了したら、コメント要素を完全に削除します。
                comment.remove();
            });
        });
    });    
    
});




// "resetBtn"ボタンがクリックされたときのイベントリスナー
resetBtn.addEventListener("click", () => {
    // 全てのコメント要素を取得
    let comments = document.querySelectorAll(".comment");
    
    // 各コメントに対して"disappear"クラスを追加（これによりアニメーションが適用される）
    for (let i = 0; i < comments.length; i++) {
        comments[i].classList.add("disappear");
    }

    // アニメーションが終了したら、コメントエリアの内容を空にする
    document.querySelector(".disappear").addEventListener('animationend', () =>{

        // "div"というタグ名を持つすべての要素を取得します。
        let divs = document.getElementsByTagName("div");

        // 取得したすべてのdiv要素に対して、逆順にループを行います。
        for (var i = divs.length - 1; i >= 0; i--) {
            // 各div要素をその親ノードから削除します。
            divs[i].parentNode.removeChild(divs[i]);
        }
        // commentArea.textContent = "";  //
    });
});


