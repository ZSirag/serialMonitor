function creaElem(elem, parent, text, value, cclas) {
    this.elem = document.createElement(elem);
    this.elem.innerHTML = text;
    this.elem.value = value;
    if (cclas != "") {
        this.elem.classList.add(cclas);
    }
    this.parent = parent;
    this.parent.appendChild(this.elem);
}

function chat(data, from){
    var msgClass, imgUrl;
    this.from = from;
    this.data = data;
    if(this.from == 'user'){
        msgClass = "messagebox dx";
        imgUrl = "../resource/user.png";
    }else{
        msgClass = "messagebox";
        imgUrl = "../resource/terminal.png";
    }
    div = document.createElement('div');
    img = document.createElement('img');
    thumb = document.createElement('span');
    msg = document.createElement('div');
    div.setAttribute("class", msgClass);
    img.setAttribute("src", imgUrl);
    img.classList.add("user");
    msg.classList.add("message")
    thumb.classList.add("thumb");
    msg.innerHTML = this.data;

    div.appendChild(img);
    div.appendChild(thumb);
    div.appendChild(msg);
    document.querySelector(".body").appendChild(div);
    gobottom();
}
function gobottom() {
    var documentHeight = document.documentElement.offsetHeight;
    var viewportHeight = window.innerHeight;
    window.scrollTo(0, documentHeight - viewportHeight);
    console.log(viewportHeight);
    console.log(documentHeight);
    
    
}
function user() {
    x = document.querySelector("#userMsg").value;
    chat(x, "user");
    ser.write(x);
}