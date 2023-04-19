
//!
var pointer

function openWindow(){
	pointer = open('http://otedia.com');
}

function closeWindow(){
	pointer.close();
}
//!


//!
function openWindow(){
	open('http://otedia.com' , '_blank' , 'width=400,height=500,left=100,top=200');
}
//!


//!
window.addEventListener('beforeunload' , (event) => {
	event.preventDefault();
	event.returnValue = '';
});
//!


//!
window.addEventListener('resize' , (event) => {
	let red = Math.floor(255 * Math.random(255));
	let green = Math.floor(255 * Math.random(255));
	let blue = Math.floor(255 * Math.random(255));
	document.body.style.backgroundColor = `rgb(${red} , ${green} , ${blue}`;
});
//!

//!
window.addEventListener('blur' , (event) => {
});
//!
 
//!
window.addEventListener('focus' , (event) => {
});
//!

//!
window.addEventListener('scroll' , (event) => {
});
//!

window.location.reload();