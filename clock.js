var count =1;

setInterval(()=>{
    // main function for animation 
    document.getElementById("_"+count).style.backgroundColor="transparent";
    if(count>1)
    document.getElementById("_"+(count-1)).style.backgroundColor="rgba(255,0,0,0.233)";
    else 
    document.getElementById("_8").style.backgroundColor="rgba(255,0,0,0.233)"; 

    if(count==8){
        count = 1;
    }
    else{
        count+=1;
    }

},300)