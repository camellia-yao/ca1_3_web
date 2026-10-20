var count = 0;
var countEl = document.getElementById("count");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    count = count + 1;
    countEl.textContent = count;
});

var form = document.getElementById("form");
var nameInput = document.getElementById("name");
var msg = document.getElementById("msg");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = nameInput.value.trim();
    if (name === "") {
        msg.textContent = "名字不能为空，请重新输入";
        msg.style.color = "red";
    } else {
        msg.textContent = "你好，" + name;
        msg.style.color = "green";
    }
});
