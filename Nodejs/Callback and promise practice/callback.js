
function cb() {
    console.log("Callback Function after 1.5 seconds");          
}

function mainfunc(cb2) {
    console.log("Main Function")
    // cb2(); 
    setTimeout(cb2, 1500)         
}

mainfunc(cb); 