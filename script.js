function openMenu() {
    document.getElementById("nav").style.top = "0";
    document.getElementById("vid").style.borderBottom = "2px solid white";
    document.getElementById("vid").style.cursor = "default";
    document.getElementById("nav").style.boxShadow = "0 0 10px black";
    document.getElementById("nav").style.backgroundColor = "#202020";
    document.getElementById("vid").style.background = "none";
    document.body.style.marginTop = "300px";
    document.getElementById("dark").style.zIndex = "1";
    document.getElementById("dark").style.opacity = "1";
    document.getElementById("bg").style.marginTop = "300px";
    document.getElementById("linked").style.borderRadius = "5px";
    document.getElementById("linked").style.height = "auto";
}

function closeMenu() {
    document.getElementById("nav").style.top = "-300px";
    document.getElementById("vid").style.border = "none";
    document.getElementById("vid").style.cursor = "pointer";
    document.getElementById("nav").style.boxShadow = "none";
    document.getElementById("nav").style.backgroundColor = "#272727";
    document.body.style.margin = "0";
    document.getElementById("dark").style.zIndex = "0";
    document.getElementById("dark").style.opacity = "0";
    document.getElementById("bg").style.margin = "0";
    document.getElementById("linked").style.borderRadius = " 0 0 10px 10px";
    document.getElementById("linked").style.height = "35px";
}

function openIntro() {
    document.getElementById("intro").style.backgroundColor = "rgba(148,148,148,.3)";
    document.getElementById("intro").style.width = "550px";
    document.getElementById("intro").style.height = "300px";
    document.getElementById("intro").style.borderRadius = "20px";
    document.getElementById("intro").style.top = "-1120px";
    document.getElementById("intro").style.opacity = "1";
    document.getElementById("logo").style.top = "-880px";
    document.getElementById("logo").style.boxShadow = "0 0 10px rgba(0,0,0,.5)";
    document.getElementById("bg").style.top = "-300px";
}

function closeIntro() {
    document.getElementById("intro").style.backgroundColor = "none";
    document.getElementById("intro").style.width = "0";
    document.getElementById("intro").style.height = "0";
    document.getElementById("intro").style.borderRadius = "0";
    document.getElementById("intro").style.top = "-1500px";
    document.getElementById("intro").style.opacity = "0";
    document.getElementById("logo").style.top = "-1100px";
    document.getElementById("logo").style.boxShadow = "none";
    document.getElementById("bg").style.top = "-350px";
}

function openArchives() {
    document.getElementById("archives").style.height = "500px";
    document.getElementById("archives").style.opacity = "1";
    document.getElementById("page2").style.boxShadow = "0 15px 10px -5px rgba(0,0,0,.5)";
    document.getElementById("arch").style.backgroundColor = "royalblue"
    document.getElementById("arch").style.borderRadius = "10px 10px 0 0";
    document.getElementById("arch").style.color = "#ffffff";
}
