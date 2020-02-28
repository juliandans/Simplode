var hrefId;
var imgSrc;
var number = 1;
function changeHrefId(changeTo) {
  hrefId = changeTo
  document.getElementById("hrefInput").style.display = "block"
}
function blankHrefId() {
  hrefId = ""
  document.getElementById("hrefInput").style.display = "none"
}
function changeImgSrc(changeTo) {
  imgSrc = changeTo
  document.getElementById("srcInput").style.display = "block"
}
function blankSrc() {
  imgSrc = ""
  document.getElementById("srcInput").style.display = "none"
}
document.addEventListener("DOMContentLoaded", function(event) {
  $(".drag").draggable()
});

$(".imgsrcinput").on("keypress",function(e){
  var codeImg = (e.keyCode ? e.keyCode : e.which);
  if(codeImg == 13){
  var imgsrc=$(".imgsrcinput").val();
  $("#yourImg").attr("src",imgsrc);
  //when you type enter (keycode 13) in the input (#imgsrcinput) it makes #yourimg have a src of what was in #imgsrcinput
  }});

function changeBC() {
  var bc = $("#dropdown").val();
  $("body").css("background-color",bc);
  $("#yourStuff").css("background-color",bc);
  //sets background color to bc
}

function changeTxtFont() {
  var TxtFont = $("#txtfontdropdown").val();
  $("body").css("font-family",TxtFont);
  $("#yourStuff").css("font-family",TxtFont);
  //sets text font to TxtFont
}
// jquery returns font-family name with quotes because quotes are required if you have spaces

function changeTxtColor() {
  var TxtColor = $("#txtcolordropdown").val();
  $("body").css("color",TxtColor);
  $("#yourStuff").css("color",TxtColor);
  //sets text color to TxtColor
}

function download() {
  var webName = prompt('What is the name of your Project?');
  $("#yourStuff").wrap("<div>");
  var myCopy = $("#yourStuff").parent().clone();
  $(myCopy).css("margin","0px"); 
  $(myCopy).css("padding","0px");
  $(myCopy).find(".drag").removeClass("drag");
  $(myCopy).find(".ui-draggable").removeClass("ui-draggable");
  $(myCopy).find('[ondblclick]').attr('ondblclick','')
  $(myCopy).find(".ui-draggable-handle").removeClass("ui-draggable-handle");
  $(myCopy).find("input").remove();
  $(myCopy).find('[contenteditable]').attr('contenteditable','false');
  $(myCopy).find("#yourStuff").css("height","100%");
  var html = "";
  $(myCopy).find("[onfocus]").attr('onfocus','')
  html=$(myCopy).html();
  document.getElementById('getHTML').innerHTML="<textarea><!DOCTYPE html><html style='height:100%'><title>"+webName+"</title><body style='height:100%;margin:0'>"+html+"</body></html></textarea>";
}

var newt;
var acc;
var zoop = document.getElementById("yourStuff");


function add() {
  newt = document.getElementById('newelementdropdown').value
  acc = document.createElement(newt)
  acc.setAttribute('class', 'drag ui-draggable ui-draggable-handle')
  acc.setAttribute('style', 'position: relative;')
  acc.setAttribute('href', '')
  acc.setAttribute('target','_blank')
  acc.setAttribute('contenteditable', 'true')
  if (newt == 'a') {
    acc.setAttribute('onfocus','changeHrefId(this.id)')
    number++
    acc.setAttribute('id',`link${number}`)
  }
  if (newt == "img") {
    var imag = document.createElement("img")
    imag.setAttribute('src',"/image.png") 
    imag.setAttribute('id',`image${number}`)
    number++
    document.body.insertBefore(imag, document.getElementById("insertBeforeDiv"))
  }
  acc.textContent="New Element"
  acc.ondblclick = () => document.execCommand('selectAll',false,null)
  zoop.appendChild(acc)
  $(".drag").draggable();
}



$(".linkthink").on("keypress",function(e){if(e.keyCode==13){
  var linkhref=$(".linkthink").val();
  $(".whapp").attr("href",linkhref);
  }});  
  
function setHref(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 13) {
    document.getElementById(hrefId).href = document.getElementById("hrefInput").value
    
    document.getElementById("hrefInput").value = ""
    blankHrefId();
  }
  
}



function setSrc(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 13) {
    document.getElementById(imgSrc).src = document.getElementById("srcInput").value
    
    document.getElementById("srcInput").value = ""
    blankSrc();
  }
}