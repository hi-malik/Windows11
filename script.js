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


let computer = document.getElementsByClassName("computer")[0]
let thispc = document.getElementsByClassName("thispc")[0]

computer.addEventListener("click", ()=>{
    console.log("clicked");
    if(thispc.style.bottom == "50px"){
        thispc.style.bottom = "-655px"
    }
    else{
        thispc.style.bottom = "50px"
    }
})
