//end date
const endDate="4 July 2024 10:00 PM";
//change html end date
document.getElementById("end-date").innerText = endDate;
//select input element for all blocks
const input=document.querySelectorAll("input")
//clock function
function clock(){
    const end=new Date(endDate);
    const now=new Date()
   const diff=(end-now)/1000;
   //difference of end date to now date
  if(diff<0) return;
   input[0].value=(Math.floor(diff/3600/24));//day
   input[1].value=Math.floor(diff/3600)%24;//hours
   input[2].value=Math.floor(diff/60)%60;//minutes
   input[3].value=Math.floor(diff)%60;//secounds

}
//intial call
clock()
//call in 1 secound
setInterval( ()=>{ clock()},1000 )