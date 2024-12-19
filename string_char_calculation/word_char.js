str="precision that helps you get it right every time";

let words=str.split(" ");

let maxValue = 0;
let wordMaxRepeatChar;

for(const word of words){
    console.log(word);
    let charMap = new Map();
    for(const char of word){
        // console.log(char);
    
        if (charMap.has(char)){
            let charValue = charMap.get(char);
            charMap.set(char, ++charValue );
        } else {
            charMap.set(char, 1);
        }
    
    } // inner for loop


     for( let [key, value] of  charMap ){

        if (value > maxValue){
            maxValue = value;
            wordMaxRepeatChar = word;
        }

     }

}

console.log("wordMaxRepeatChar :", wordMaxRepeatChar);
console.log("maxValue :", maxValue);