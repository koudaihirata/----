
const sendBtn = document.querySelector(".send_btn");
const resetBtn = document.querySelector(".reset");
// console.log(send_btn)
const commentArea = document.querySelector(".comment_area");
// console.log(commentArea)
const textBox = document.getElementById("text");


sendBtn.addEventListener( "click", () =>{
    // console.log("aaa")
    let comment = document.createElement("div");

    comment.classList.add("comment");

    comment.innerHTML= textBox.value;

    let randomLeft = Math.floor(Math.random() * (commentArea.offsetWidth - 300));
    let randomTop = Math.floor(Math.random() * (commentArea.offsetHeight - 100));


    comment.style.top = randomTop + "px";
    comment.style.left = randomLeft + "px";
    commentArea.appendChild(comment)
});


resetBtn.addEventListener("click", () => {
    let comments = document.querySelectorAll(".comment");
    
    for (let i = 0; i < comments.length; i++) {
        console.log("aaa");
        comments[i].classList.add("disappear");
    }


    setTimeout( () => {
        commentArea.textContent = "";
    }, 1000);
    
    
});
