const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item,i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
    
});


var imageElement=document.createElement("img");

var array = [];

function add(order){
 array.push(order);
}

var arrayone=[];
function setLocalStorage() {
 localStorage.setItem('myArray', JSON.stringify(array));
  }

function getLocalStorage() {
  var array = localStorage.getItem('myArray');        
  arrayone = JSON.parse(array);
 // document.getElementById("dev1").innerHTML = arrayone;
  for(var i=0;i<arrayone.length;i++){
  var imageElement=document.createElement("img");
  imageElement.setAttribute('src',arrayone[i]);
  document.getElementById("dev1").appendChild(imageElement);

  }
 
}



function checkInfo(){
    //   var fullname =prompt("Enter Full name");
      var namePattern=/^([A-Za-z]{3,}\s)+([A-Za-z]{3,})$/g;
  
      if(!namePattern.test(fullname)){
          alert("name must contain 3 spaces");
      }
    //   var Email=prompt("Enter email contain @.com.eg");
      var EmailPattern=/^([A-Za-z]+\d*@(gmail|yahoo)\.(com|net|org|edu).eg)$/g;
      while(!EmailPattern.test(Email)){
          Email=prompt("Enter email contain @.com.eg");
      }
      alert("Welcom");
  }
  checkInfo();