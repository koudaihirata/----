
const sendBtn = document.querySelector(".send_btn");
const resetBtn = document.querySelector(".reset");
// console.log(send_btn)
const commentArea = document.querySelector(".comment_area");
// console.log(commentArea)
const textBox = document.getElementById("text");

sendBtn.addEventListener( "click", () =>{
    // console.log("aaa")
    let div = document.createElement("div");
    div.classList.add("comment");
    let randomTop = Math.floor(Math.random() * 71) +10;
    let randomLeft = Math.floor(Math.random() * 71) +5;
    div.innerHTML= textBox.value
    div.style.top = randomTop + "%";
    div.style.left = randomLeft + "%"
    commentArea.appendChild(div)
});
resetBtn.addEventListener( "click", () =>{
    commentArea.textContent = "";
})