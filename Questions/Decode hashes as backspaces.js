// Create a JavaScript program to decode hashes as backspaces and return the
// deleted string.
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is
// "bd" Your task is to process a string with "#" symbols.
// (Note: ES6 is must)
// Examples: "abc#d##c" ==> "ac" "abc##d######" ==> "" "#######" ==> "" "" ==> ""

let st = "abc#d##c";  // try with "abc##d######" , "#######" , "a#bc#d" 
let stack = [];
for (let i = 0; i < st.length; i++){
    if (st[i] != "#"){
        stack.push(st[i]);
    }
    else{
        if (stack) {
          stack.pop();
        }
    }
}

console.log(stack.join(""))