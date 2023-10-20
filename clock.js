var d;
let t;
let date;
setInterval(() => {
d = new Date()
t = d.getHours() +":" + d.getMinutes()+ ":" + d.getSeconds();
date = d.toLocaleDateString()

document.getElementById('time').innerHTML= "Today's Time :-"+ t
document.getElementById('date').innerHTML= "Today's Date :-"+ date
    
}, 1000);

let h = new Date().getHours();

if (h>=1 && h<=11)
{
    document.getElementById('std').innerHTML= "<h3>Hello Student, Good Morning</h3>"
}

else if (h>=12 && h<=16)
{
    document.getElementById('std').innerHTML= "Hello Student, Good Afternoon"
}

else if (h>=17 && h<=19)
{
    document.getElementById('std').innerHTML= "Hello Student, Good Evening"
}

else
{
    document.getElementById('std').innerHTML= "Hello Student, Good Night"
}

