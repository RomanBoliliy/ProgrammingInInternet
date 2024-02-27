//9
function toChar(string) {
    return string.split('');
}

console.log(toChar("Hello World"));

//10

function Reverse(str){
let res = toChar(str).reverse();

return res.join("");
}
console.log(Reverse("Hello world"));

//11

function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}
  
function isJS(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'js':
        return true;
    }
    return false;
}

console.log(isJS("Node.js"));

//12

function toWord(string) {
    return string.split(' ');
}

console.log(toWord("hello world"));


//13

function replaceWord(before, word, after) {
    let words = before.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            words[i] = after;
        }
    }
    
    return words.join(' ');
}

let old = "Hello world";
let newText = replaceWord(old, "world", "friend");

console.log(newText);