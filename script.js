function openDiscord() {
    document.getElementById("banner-text").style.filter = "blur(10px)";
    document.getElementById("vid-bg").style.filter = "blur(10px) brightness(40%)";
    document.getElementById("vid-bg").pause();
    document.getElementById("discord-cross").style.display = "block";
    document.getElementById("discord-iframe").style.display = "block";

}

function closeDiscord() {
    document.getElementById("vid-bg").play();
    document.getElementById("discord-cross").style.display = "none";
    document.getElementById("banner-text").style.filter = "none";
    document.getElementById("vid-bg").style.filter = "blur(0px) brightness(40%)";
    document.getElementById("discord-iframe").style.display = "none";
}