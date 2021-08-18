const alkaliMetalsGroup = document.querySelectorAll(".alkali-metals");
const alkalineEarthMetalsGroup = document.querySelectorAll(".alkaline-earth-metals");
const lanthanoidsGroup = document.querySelectorAll(".lanthanoids");
const actinidesGroup = document.querySelectorAll(".actinides");
const transitionMetalsGroup = document.querySelectorAll(".transition-metals");
const postTransitionMetalsGroup = document.querySelectorAll(".post-transition-metals");
const metalloidsGroup = document.querySelectorAll(".metalloids");
const otherNonMetalsGroup = document.querySelectorAll(".other-nonmetals");
const nobleGasesGroup = document.querySelectorAll(".noble-gases");
const unknownGroup = document.querySelectorAll(".unknown");
const chemistryOptions = document.querySelector('.chemistry-options');

const toggleEvent = (e) => {
   const target = e.target.id;

   switch(target) {
    case "am":
        alkaliMetalsGroup.forEach(arr => arr.classList.toggle('js-event'));
        break;
    case "aem":
        alkalineEarthMetalsGroup.forEach(arr => arr.classList.toggle('js-event'));;
        break;
    case "l":
        lanthanoidsGroup.forEach(arr => arr.classList.toggle('js-event'));;
        break;
    case "a":
        actinidesGroup.forEach(arr => arr.classList.toggle('js-event'));
        break;
    case "tm":
        transitionMetalsGroup.forEach(arr => arr.classList.toggle('js-event'));
        break;
    case "ptm":
        postTransitionMetalsGroup.forEach(arr => arr.classList.toggle('js-event'));
        break;
    case "m":
        metalloidsGroup.forEach(arr => arr.classList.toggle('js-event'));;
        break;
    case "on":
        otherNonMetalsGroup.forEach(arr => arr.classList.toggle('js-event'));
        break;
    case "ng":
        nobleGasesGroup.forEach(arr => arr.classList.toggle('js-event'));
        break;
    case "u":
        unknownGroup.forEach(arr => arr.classList.toggle('js-event'));
        break;
    default:
        console.log("boo")
   }
    e.stopPropagation();
}

chemistryOptions.addEventListener("click", toggleEvent);

