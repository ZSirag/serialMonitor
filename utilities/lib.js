function creaElem(elem, parent, text, value, cclas) {
    this.elem = document.createElement(elem);
    this.elem.innerHTML = text;
    this.elem.value = value;
    if (cclas != "") {
        this.elem.classList.add(cclas);
    }
    this.parent = parent;
    this.parent.appendChild(this.elem);
    console.log(this.elem);
}
