function interest(){
let p=document.getElementById("principle")
let t=document.getElementById("time")
let o=document.getElementById("Bank")
let i=document.getElementById("interest")
let a=document.getElementById("Amount")
if(o.value=="SBI"){
    let result=(p.value*t.value*7.5)/100;
    i.innerHTML=result
    let total=Number.parseFloat(p.value)+Number.parseFloat(result);
    a.innerHTML=total;
}
if(o.value=="PNB"){
    let result=(p.value*t.value*8.5)/100;
    i.innerHTML=result
    let total=Number.parseFloat(p.value)+Number.parseFloat(result);
    a.innerHTML=total;
}
if(o.value=="ICICI"){
    let result=(p.value*t.value*9.5)/100
    i.innerHTML=result
    let total=Number.parseFloat(p.value)+Number.parseFloat(result);
    a.innerHTML=total;
}
if(o.value=="BOB"){
    let result=(p.value*t.value*10.5)/100
    i.innerHTML=result
    let total=Number.parseFloat(p.value)+Number.parseFloat(result);
    a.innerHTML=total;
}
}