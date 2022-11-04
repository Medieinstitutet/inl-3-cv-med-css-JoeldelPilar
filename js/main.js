// <-------------------- Open users email ---------------------->

document.getElementsByClassName("sendEmail").onclick = function() {
    letsTalk();
    
};

function letsTalk() {

    window.location.href = "mailto:joel.delpilar@medieinstitutet.se";
     
};
if ("sendEmail" !== undefined && "sendEmail" !== null) {}
// <-------------------------------------------------------------->

// <------------ Close menu when links are clicked --------------->



    function closeMenu() {
        console.log("hej")
        document.getElementById("hamburgerMenu").removeAttribute("checked");
    }