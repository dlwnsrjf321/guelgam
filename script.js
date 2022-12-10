const form = document.querySelector('form');
const main = document.querySelector('.main');
const save = document.querySelector('.save');
const clear = document.querySelector('.clear');
const post = document.querySelector('.post');
const input = document.getElementById('item');
const rand1 = Math.floor(Math.random() * 3);

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));





const divMaker = (text) => {
  const div = document.createElement('div');
  const rand1 = Math.floor(Math.random() * 3+1);
  div.classList.add('post'+ rand1);
  div.textContent = text;
  main.appendChild(div);

  // var boxW = parseInt($(".box").css("width"));
  // var boxH = parseInt($(".box").css("height"));

  // boxW = boxW - parseInt($(".post1").css("width"));
  // boxH = boxH - parseInt($(".post1").css("height"));

  // var top = parseInt(Math.random() * boxH);
  // var left = parseInt(Math.random() * boxW);
  // $(main.childNodes).css({ left: left, top: top });

}


save.addEventListener('click', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  divMaker(input.value);
  input.value = "";


  $(".post1").draggable({
	cursor:"move",
	stack:".post",
	opacity:0.8
});
$(".post1").bind("dragstart",function(event, ui){
	$(this).addClass("color");	//bgi 체인지
});
$(".post1").bind("dragstop", function(event, ui){
	$(this).removeClass("color")	//bgi 체인지
});

$(".post2").draggable({
	cursor:"move",
	stack:".post",
	opacity:0.8
});
$(".post2").bind("dragstart",function(event, ui){
	$(this).addClass("color");	//bgi 체인지
});
$(".post2").bind("dragstop", function(event, ui){
	$(this).removeClass("color")	//bgi 체인지
});

$(".post3").draggable({
	cursor:"move",
	stack:".post",
	opacity:0.8
});
$(".post3").bind("dragstart",function(event, ui){
	$(this).addClass("color");	//bgi 체인지
});
$(".post3").bind("dragstop", function(event, ui){
	$(this).removeClass("color")	//bgi 체인지
});







});



data.forEach(item => {
  divMaker(item);
});

clear.addEventListener('click', function () {
  localStorage.clear();
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
});


$(".post1").draggable({
	cursor:"move",
	stack:".post",
	opacity:0.8
});
$(".post1").bind("dragstart",function(event, ui){
	$(this).addClass("color");	//bgi 체인지
});
$(".post1").bind("dragstop", function(event, ui){
	$(this).removeClass("color")	//bgi 체인지
});

$(".post2").draggable({
	cursor:"move",
	stack:".post",
	opacity:0.8
});
$(".post2").bind("dragstart",function(event, ui){
	$(this).addClass("color");	//bgi 체인지
});
$(".post2").bind("dragstop", function(event, ui){
	$(this).removeClass("color")	//bgi 체인지
});

$(".post3").draggable({
	cursor:"move",
	stack:".post",
	opacity:0.8
});
$(".post3").bind("dragstart",function(event, ui){
	$(this).addClass("color");	//bgi 체인지
});
$(".post3").bind("dragstop", function(event, ui){
	$(this).removeClass("color")	//bgi 체인지
});
 





