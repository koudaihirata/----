// ボタンとテキストエリアの要素を取得
const sendBtn = document.querySelector(".send_btn");
const resetBtn = document.querySelector(".reset");
const commentArea = document.querySelector(".comment_area");
const textBox = document.getElementById("text");
const File = document.getElementById("file")

// "sendBtn"ボタンがクリックされたときのイベントリスナー
sendBtn.addEventListener( "click", () =>{
    // 新しいdiv要素を作成
    let comment = document.createElement("div");
    // 作成したdiv要素に"comment"クラスを追加
    comment.classList.add("comment");

    // 作成したdiv要素の内部HTMLにテキストボックスの値を設定
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let Time = "   " + hours + ":" + minutes + ":" + seconds
    comment.innerHTML = textBox.value + File.value + "<small>" + Time + "</small>";

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



    // ".comment"クラスを持つすべての要素を選択し、それらを"comments"変数に格納します。
    let comments = document.querySelectorAll(".comment");

    // "flag"変数を初期化します。これはマウスが要素上で押されているかどうかを追跡します。
    let flag = false;
    let zIndex = 0; //z-indexの初期値を設定

    // "comments"の各要素に対して処理を行います。
    comments.forEach((comment)=>{
        // "mousedown"イベントリスナーを追加します。これはマウスボタンが要素上で押されたときに発火します。
        comment.addEventListener("mousedown",()=>{
            // マウスボタンが押されたら、"flag"をtrueに設定します。
            flag = true;
            comment.style.zIndex = ++zIndex;// mousedownイベントが発生したら、その要素のz-indexを増やす
        })
        // "mouseout"イベントリスナーを追加します。これはマウスカーソルが要素から離れたときに発火します。
        comment.addEventListener("mouseup",()=>{
            // マウスカーソルが要素から離れたら、"flag"をfalseに設定します。
            flag = false;
        })

        // "mousemove"イベントリスナーを追加します。これはマウスカーソルが要素上で移動したときに発火します。
        comment.addEventListener("mousemove",(e)=>{
            // "flag"がtrue（つまり、マウスボタンが押されている）場合のみ、以下の処理を行います。
            if (flag) {
                // 要素の現在の位置とサイズに関する情報を取得します。
                let rect = comment.getBoundingClientRect();
                // 要素の左端の位置を、マウスカーソルのX座標から要素の幅の半分を引いた値に設定します。
                comment.style.left = (e.pageX - rect.width / 2)+ 'px';
                // 要素の上端の位置を、マウスカーソルのY座標から要素の高さの半分を引いた値に設定します。
                comment.style.top = (e.pageY - rect.height / 2) + 'px';
            }
        })
    })



// ".comment"クラスを持つすべての要素を選択し、それらを"comments"変数に格納します。
comments.forEach((comment) => {
    // 各"comment"内から".delete"クラスを持つ要素（ここでは削除ボタンと仮定）を選択し、それを"Delete"変数に格納します。
    let Delete = comment.querySelector('.delete'); 

    // "Delete"に対してクリックイベントリスナーを追加します。これはボタンがクリックされたときに発火します。
    Delete.addEventListener("click", () => { 
        // ボタンがクリックされたら、その親要素である"comment"に"disappear"クラスを追加します。
        comment.classList.add("disappear");

        // "comment"に対してアニメーション終了イベントリスナーを追加します。これはCSSアニメーションが終了したときに発火します。
        comment.addEventListener("animationend", () => {
            // アニメーションが終了したら、"comment"要素自体を削除します。
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


