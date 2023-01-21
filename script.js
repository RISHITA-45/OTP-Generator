document.getElementById("generate").onclick=function(){
    let n="0123456789";
    let OTP='';
    for(let i=0;i<4;i++)
    {
        OTP+=n[Math.floor(Math.random()*10)];
    }
    document.getElementById("myotp").innerHTML=OTP;
}

document.getElementById("generate2").onclick=function(){
    let x=Math.floor(Math.random()*10);
    let OTP='';
    for(let i=0;i<x;i++)
    {
        OTP+=Math.floor(Math.random()*i);
    }
    document.getElementById("myotp2").innerHTML=OTP;
}