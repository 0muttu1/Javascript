let fruits = ["a","o","a","o","o","o","a","o","a","o","a"]
let orangeEl = document.getElementById("orange-el")
let appleEl = document.getElementById("apple-el")



function sortfruits()
{
for(let i =0;i<fruits.length;i++)
{
    if(fruits[i]==="o"){
        orangeEl.textContent +="o"
    }
        else
        {
            appleEl.textContent +="a"
        }
    
}
}
//sortfruits()