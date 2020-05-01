var vowels = [97, 101, 105, 111, 117, 121]

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
    return word;
}

checkForIndex = (letter) => {
    let letterCode = letter.charCodeAt(0);
    return (letterCode >= 97 && letterCode <= 122)
}

toPigLatin = (letters) => {
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

    return pigLatinArray.join("");
}

firstVowel = (letter) => {
    return vowels.includes(letter.charCodeAt(0));
}
