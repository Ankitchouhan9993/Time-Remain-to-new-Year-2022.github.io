function Callme(){
   const currenttime=new Date();
    const newyear=new Date(`${currenttime.getYear()+1}-01-01`);
   const differ=newyear-currenttime;
   const days= Math.floor(differ/(1000*60*60*24));
   const hours=Math.floor(differ/1000/60/60-days*24);
   const minutes=Math.floor((differ/1000/60-(days*24*60))-hours*60);
   const seconds=Math.floor(differ/1000-(days*24*60*60)-hours*60*60-minutes*60);
   updateData(days,hours,minutes,seconds);
}
setInterval(()=>{
    Callme();
}, 1000);
function updateData(days,hours,minutes,seconds){
    document.querySelector('.days').children[0].innerHTML=days;
    document.querySelector('.hours').children[0].innerHTML=hours;
    document.querySelector('.minutes').children[0].innerHTML=minutes+"";
    document.querySelector(".seconds").children[0].innerHTML=seconds+"";
}
