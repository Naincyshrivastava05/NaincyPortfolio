// 1)i need to get currect positon of the mouse every time it move
// time it MutationObserver(x axis, y axis)

// 2) i need to set those x and y values to my cicular div


// ******every time mouse moves we should get notified===Mousemove listener
// every time listener get notified,we need to get those values
// // for x and y aixs values and then updated to the circle
let circle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
// const svglem = document.querySelector(#svg);



window.addEventListener('mousemove',function(details){
let xvalue = details.clientX;
let yvalue = details.clientY; 

setTimeout(function(){
    circle.style.top = `${yvalue}px`;
    circle.style.left = `${xvalue}px`; 
},50);

});

btn.addEventListener('click',function(){
    t1.reverse();  
});





var t1 = gsap.timeline();

t1
// for text ns animation from 0 
.from('#wrapper',{
    duration:4,
    scale:.7,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#whitestrip',{
    duration:1.5,
    width:0,
    ease:'Expo.easeInOut'
},'-=2')
.from('#blackcard',{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1.5')
.from('#linelem',{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')
.from('#linelem .line',{
    duration:1.5,
    width:0,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')
.from('#blackcard p',{
    duration:1.2,
    y:30,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1.5')

.from('#sidelem ',{
    duration:2,
    x:30,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1.5')


