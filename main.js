function insert(num){
    document.form.cal.value = document.form.cal.value+num
}
function equal(){
var exp = document.form.cal.value;
if(exp){
   document.form.cal.value = eval(exp)
}
}
function clean(){
document.form.cal.value="";
}
function change(){
var exp =document.form.cal.value;
if(exp>0){
   document.form.cal.value=-document.form.cal.value
}else{
   document.form.cal.value=Math.abs(document.form.cal.value)
}

}
function back(){
var exp = document.form.cal.value;
document.form.cal.value = exp.substring(0,exp.length-1);
}