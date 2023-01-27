let ic=document.getElementById("ic");
let bar=document.getElementById("searchbar");
let disp=document.getElementById("display");
let btn1=document.getElementById("btn1");
ic.addEventListener("click",
()=>
{
    bar.focus();
});

btn1.addEventListener("click",
()=>
{
    disp.textContent="";
    let name=bar.value;
    bar.value="";
    let newname=name.split(' ').join('');

    fetch('https://api.github.com/users/'+ newname)
    .then((result)=> result.json())
    .then((data)=>{
    let im=document.createElement("img");
    im.src=data.avatar_url;
    im.id="img"
    im.alt="avatar"
    disp.appendChild(im);
    })

})