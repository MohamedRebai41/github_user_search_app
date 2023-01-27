let ic=document.getElementById("ic");
let bar=document.getElementById("searchbar");
let disp=document.getElementById("display");
let btn1=document.getElementById("btn1");
ic.addEventListener("click",
()=>
{
    bar.focus();
});

let test=false;
btn1.addEventListener("click",
()=>
{

    let name=bar.value;
    bar.value="";
    let newname=name.split(' ').join('');
    fetch('https://api.github.com/users/'+ newname)
    .then((result)=> result.json())
    .then((data)=>{
            if(!test)
            {
                let elph=document.getElementsByClassName("ph")[0];
                let temp=document.getElementById("template");
                elph.classList.toggle("hide");
                temp.classList.toggle("hide");
                test = true;
            }
            let im=document.getElementById("img");
            let name=document.getElementById("name");
            let log=document.getElementById("log");
            let date=document.getElementById("date");
            let repos=document.getElementById("repos");
            let followers=document.getElementById("followers");
            let following=document.getElementById("following");
            name.textContent=(data.name===null)?"null":data.name;
            log.textContent='@'+data.login;
            date.textContent='Joined on '+data.created_at.slice(0,10);
            repos.textContent=data.public_repos;
            followers.textContent=data.followers;
            following.textContent=data.following;
            im.src=data.avatar_url;
            im.alt="avatar"
            console.log(data);
    })
    .catch(
        (error)=>
        {
            let elph=document.getElementsByClassName("ph")[0];
            elph.textContent="Not Found";
            if(test)
            {
                let temp=document.getElementById("template");
                elph.classList.toggle("hide");
                temp.classList.toggle("hide");
                test=false;
            }
        }
    )
    


})