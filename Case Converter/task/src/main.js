function upperCase(){
    let textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();
}

function lowerCase(){
    let textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toLowerCase();
}

function properCase(){
    let textArea = document.getElementById("textArea");
    let sentence = textArea.value.toLowerCase().split(" ");
    for(let i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    textArea.value = sentence.join(" ");
}

function sentenceCase(){
    let textArea = document.getElementById("textArea");
    let txt = textArea.value.split(/(.+?[\.\?\!](\s|$))/g);
    for (let i = 0; i < (txt.length-1); i++) {
        if (txt[i].length>1){
            txt[i]=txt[i].charAt(0).toUpperCase() + txt[i].substr(1).toLowerCase();
        } else if (txt[i].length==1) {
            txt[i]=txt[i].charAt(0).toUpperCase();
        }
    }
    txt = txt.join('').replace(/\s\s/g,' ');
    textArea.value = txt;
}

function download(filename="text.txt") {
    let textArea = document.getElementById("textArea");
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea.value));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}