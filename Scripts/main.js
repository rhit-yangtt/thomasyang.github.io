
function main() {
    const lightButton = document.querySelector("#lightButton");
    const darkButton = document.querySelector("#darkButton");
    let body =  document.querySelector("body");
    
    lightButton.onclick = (event) => {
        body.style.backgroundColor="#F4F6F7";
        body.style.color="#1B2631";
        body.style.backgroundImage= "none";
    }

    darkButton.onclick = (event) => {
        body.style.backgroundColor="none"
        body.style.color="#F4F6F7";
        body.style.backgroundImage= "radial-gradient(circle 5px at top left, rgba(226, 226, 226,0.1) 0%, rgba(226, 226, 226,0.1) 50%,rgba(201, 201, 201,0.1) 50%, rgba(201, 201, 201,0.1) 30%,transparent 30%, transparent 50%),linear-gradient(90deg, rgb(51,51,51),rgb(51,51,51))"; 
        body.style.backgroundSize= "11px 11px";
    }
}

main();