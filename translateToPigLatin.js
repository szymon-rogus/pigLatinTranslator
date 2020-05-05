var vowels = [97, 101, 105, 111, 117, 121]
var punctuationSign = [33, 44, 46, 63]

$(".dropdown-menu a").click(function(){
    $("#btnGroupDrop1").html($(this).text());
    pigLatin()
  });

document.getElementById("translate").addEventListener("click", () => {
        pigLatin()
});

pigLatin = () => {
    let text = document.getElementById("en_to_pig").value;
    if(text)
        text = translate(text);
    document.getElementById("output").value = text;
}

translate = (text) => {
    let words = text.split(' ').filter(function(word) {
        return word != '' ;
    });
    
    words.forEach((word, i, self) => {
        self[i] = checkForLetters(word.toLowerCase());
    });
    return words.join(" ");
}

checkForLetters = (word) => {
    let letters = word.split("");

    if(letters.every(checkForIndex)) {
         return toPigLatin(letters);
    }
    if(punctuationMark(letters[letters.length - 1]) && letters.slice(0, -1).every(checkForIndex)) {
        return toPigLatin(letters.slice(0, -1), letters[letters.length - 1]) + letters[letters.length - 1];
    }
    return word;
}

checkForIndex = (letter) => {
    let letterCode = letter.charCodeAt(0);
    return (letterCode >= 97 && letterCode <= 122)
}

toPigLatin = (letters, punctuationMark) => {
    let firstVowelIndex = letters.findIndex(firstVowel);
    if(firstVowelIndex == -1)
        firstVowelIndex++;

    let afterFirstVowel = letters.slice(firstVowelIndex);
    let beforeFirstVowel = letters.slice(0, firstVowelIndex);

    let pigLatinArray = afterFirstVowel.concat(beforeFirstVowel);

    if(firstVowelIndex == 0)
        pigLatinArray = pigLatinArray.concat($("#btnGroupDrop1").html().trim());
    else
        pigLatinArray = pigLatinArray.concat('ay');

    if(typeof unctuationMark == "undefined")
        return pigLatinArray.join("");
    else
        return pigLatinArray.join("") + punctuationMark;
}

firstVowel = (letter) => {
    return vowels.includes(letter.charCodeAt(0));
}

punctuationMark = (letter) => {
    let letterCode = letter.charCodeAt(0);
    return  punctuationSign.includes(letterCode);
}
