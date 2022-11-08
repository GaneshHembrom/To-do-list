
module.exports=getDate;

function getDate(){
    

var today=new Date();
// console.log(today);

var options={
    weekday:"long",
    day:"numeric",
    month:"long"
};
var day=today.toLocaleDateString("en-US",options);
return day;
}