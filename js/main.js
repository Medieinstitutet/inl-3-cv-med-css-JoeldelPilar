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



    // function closeMenu() {
    //     console.log("hej")
    //     document.getElementById("hamburgerMenu").removeAttribute("checked");
    // }




// <-----Credits Alex P FED22D ----->

    //Lägg in en class till alla länkar i menyn, och skriv classen här
const hreflink = document.querySelectorAll('.menu-link');
// Lägg till Id till meny checkboxen och skriv Id här
const myfield = document.getElementById('hamburgerMenu');
//Foreach loops genom alla element som har classen du skrev ovanför
hreflink.forEach(menulink => {
    //Gör en "eventlistener" för alla dessa
    menulink.addEventListener('click', function handleClick(event) {
        //Om den ser att du trycker på dem, uncheckar checkboxen
        myfield.checked = false;
    });
});