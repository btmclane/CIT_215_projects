var damage = 0;

function attack(name, val){
    var hit = document.createElement("div");
    hit.innerHTML=name;
    hit.addEventListener("click", function (){
        increase(val);
    })
    document.body.querySelector(".main").appendChild(hit);
}

function increase (val){
    damage=damage+val;
    document.body.querySelector(".damage").innerHTML=damage;
}

document.body.querySelector(".attacker1").addEventListener("click", function(){
    document.body.querySelector(".main").innerHTML="";
    attack("Take that !", 372);
})

document.body.querySelector(".attacker2").addEventListener("click", function(){
    document.body.querySelector(".main").innerHTML="";
    attack("Feel the power of my strength !", 431);
})

document.body.querySelector(".attacker3").addEventListener("click", function(){
    document.body.querySelector(".main").innerHTML="";
    attack("Hulk ANGRY !!!", 581);
})

document.body.querySelector(".attacker4").addEventListener("click", function(){
    document.body.querySelector(".main").innerHTML="";
    attack("My weapons will defeat you !", 264);
})

function reset(val){
    damage=val - val;
    document.body.querySelector(".damage").innerHTML=damage;
}

document.body.querySelector(".zero").addEventListener("click", function(){
    document.body.querySelector(".main").innerHTML="";
    reset( 0);
})
