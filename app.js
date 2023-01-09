let myMail = document.getElementById('myMail');
        
const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g',
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
                
function rot13(str) {
    
    var strArray = str.split("");
    var decodedStr = [];
    var nonWord = /\W/; //regex to find a non-word character

    function modulus (letter) {
     
        if (nonWord.test(letter) === true) {
            return letter;
        }
        if (alphabet.indexOf(letter) + 13 < alphabet.length) {
            return alphabet[alphabet.indexOf(letter) + 13];
        } else {
            return alphabet[(alphabet.indexOf(letter) + 13) % 26];
        }

    }

    for (let i = 0; i < strArray.length; i++) {
        decodedStr.push(modulus(strArray[i]));
    }

            
    return decodedStr.join("");          

}

        
function convert() {
    myMail.value = rot13(myMail.value);
}

function copyText() {
    myMail.select();
    document.execCommand('copy');
    alert(`Copied to clipboard: ${myMail.value}`)
}

