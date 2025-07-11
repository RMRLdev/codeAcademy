//console.log("testing");
let logoElements=document.getElementById('skills').getElementsByClassName('logo');
function growLogo(event){
    //console.log("Q");
    event.currentTarget.querySelector('img').style.width='53px';
    event.currentTarget.querySelector('img').style.height='auto';
    let focus=event.currentTarget.querySelector("p")
    focus.style.display='block';
    event.currentTarget.style.display='flex';
    event.currentTarget.querySelector('p').style.paddingLeft='5px';
}
function shrinkLogo(event){
    event.currentTarget.querySelector('img').style.width='50px';
    event.currentTarget.querySelector('img').style.height='auto';
    event.currentTarget.querySelector('p').style.display='none';
    event.currentTarget.style.display='list-item';
    event.currentTarget.querySelector('p').style.paddingLeft='0';
}
//#skills > ul > li:nth-child(2) > p
document.getElementById('skills').addEventListener("click", growLogo);
//logo.addEventListener('mouseover',growLogo);
//console.log(logoElements.length);
for(let i=0;i<logoElements.length;i++){
    logoElements[i].addEventListener('mouseover',growLogo);
    logoElements[i].addEventListener('mouseout',shrinkLogo);
};
if(window.innerWidth<=490){
    let link=document.getElementById('skills').getElementsByTagName('a');
    //console.log(link.length);
    //#skills > ul > li:nth-child(1) > a
    for(let i=0;i<link.length;i++){
        //console.log(i);
        link[i].addEventListener('click',(c)=>{c.preventDefault();console.log("W");});
        link[i].addEventListener('dblclick',(l)=>{window.location.href=l.currentTarget.href;});
    }
}
