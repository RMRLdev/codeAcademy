console.log("testing");
let logoElements=document.getElementsByClassName('logo');
function growLogo(){
    console.log("Q");
}
document.getElementById('skills').addEventListener("click", growLogo);
//logo.addEventListener('mouseover',growLogo);
console.log(logoElements.length);
for(let i=0;i<logoElements.length;i++){
    logoElements[i].addEventListener('mouseover',growLogo);
};
