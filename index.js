
// Data from Back-End
//Description of all cities around the world
//------------------------------------------

const desc= "01234 56789 012345 67890 1234 56789 012345 67890 12345 67890 12345 6789";
const worldCities={Cairo: "Cairo " + desc , London:"London "+ desc,Tokyo:"Tokyo "+ desc}


var show  = ()=>
    {
        document.getElementById("main").style.zIndex="0";
    }


var hide  = ()=>
    {
        document.getElementById("main").style.zIndex="3";
    }


function city(cnf)
    {
        var cd=document.getElementById("cityDesc")
        var cn=document.getElementById("cityName")
        cn.innerHTML= cnf
        cd.innerHTML= worldCities[cnf]
            
    }

var clearc = ()=>
    {
        var cd=document.getElementById("cityDesc")
        var cn=document.getElementById("cityName")
        
        cn.innerHTML= ""
        cd.innerHTML= ""
            }