function toggleDropDown() {
    var toBeDropped = document.getElementById("dropDownBar");
    if (toBeDropped.style.display === "none" || toBeDropped.style.display === "") {
        
        toBeDropped.classList.toggle("show");
        
        setTimeout(function() {
            
            toBeDropped.style.opacity=1;
            toBeDropped.style.display = "flex";
        }, 300);
        
    } else {
        
        toBeDropped.classList.toggle("show");
        setTimeout(function() {
            
            toBeDropped.style.opacity=0;
            toBeDropped.style.display = "none";
        }, 150);
        
    }
}

function toFenvy()
{
    window.location.href="featureEnvy.html"
}

function toMdm()
{
    window.location.href="middleMan.html"
}

function toMc()
{
    window.location.href="msgChain.html"
}

function toILC()
{
    window.location.href="incLibraryClass.html"
}

function toINA()
{
    window.location.href="inaIntimacy.html"
}