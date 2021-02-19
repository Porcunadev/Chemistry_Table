let alkaliMetals = document.querySelector(".am");
let alkaliMetalsGroup = document.querySelectorAll(".alkali-metals");

let alkalineEarthMetals= document.querySelector(".aem");
let alkalineEarthMetalsGroup = document.querySelectorAll(".alkaline-earth-metals");

let lanthanoids= document.querySelector(".l");
let lanthanoidsGroup = document.querySelectorAll(".lanthanoids");

let actinides= document.querySelector(".a");
let actinidesGroup = document.querySelectorAll(".actinides");

let transitionMetals= document.querySelector(".tm");
let transitionMetalsGroup = document.querySelectorAll(".transition-metals");

let postTransitionMetals= document.querySelector(".ptm");
let postTransitionMetalsGroup = document.querySelectorAll(".post-transition-metals");


let metalloids= document.querySelector(".m");
let metalloidsGroup = document.querySelectorAll(".metalloids");

let otherNonMetals= document.querySelector(".on");
let otherNonMetalsGroup = document.querySelectorAll(".other-nonmetals");


let nobleGases= document.querySelector(".ng");
let nobleGasesGroup = document.querySelectorAll(".noble-gases");


let unknown= document.querySelector(".u");
let unknownGroup = document.querySelectorAll(".unknown");



alkaliMetals.onclick = function(){  
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
}

alkalineEarthMetals.onclick = function(){  
    alkalineEarthMetalsGroup.forEach(aemg => aemg.classList.toggle('js-event'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
}

lanthanoids.onclick = function(){  
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
}

actinides.onclick = function(){  
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
}

transitionMetals.onclick = function(){  
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
}

postTransitionMetals.onclick = function(){  
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
}

metalloids.onclick = function(){  
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
}

otherNonMetals.onclick = function(){  
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
}

nobleGases.onclick = function(){  
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    unknownGroup.forEach(ug => ug.classList.toggle('js-event-dimmer'));
} 

unknown.onclick = function(){  
    unknownGroup.forEach(ug => ug.classList.toggle('js-event'));
    alkalineEarthMetalsGroup.forEach(aeg => aeg.classList.toggle('js-event-dimmer'));
    lanthanoidsGroup.forEach(lg => lg.classList.toggle('js-event-dimmer'));
    actinidesGroup.forEach(ag => ag.classList.toggle('js-event-dimmer'));
    transitionMetalsGroup.forEach(tmg => tmg.classList.toggle('js-event-dimmer'));
    postTransitionMetalsGroup.forEach(ptmg => ptmg.classList.toggle('js-event-dimmer'));
    metalloidsGroup.forEach(mg => mg.classList.toggle('js-event-dimmer'));
    otherNonMetalsGroup.forEach(onmg => onmg.classList.toggle('js-event-dimmer'));
    alkaliMetalsGroup.forEach(amg => amg.classList.toggle('js-event-dimmer'));
    nobleGasesGroup.forEach(ngg => ngg.classList.toggle('js-event-dimmer'));
} 