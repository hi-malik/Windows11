let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

// let icons = document.getElementsByClassName("icons")[0]
// let chrome = document.getElementsByClassName("chrome")[0]
// 
// icons.addEventListener("click", ()=>{
    // if (typeof window.addEventListener != "undefined") {
        // chrome.addEventListener("click",handleclick,false);
    // } else {
        // chrome.attachEvent("onclick",handleclick);
    // }
// })