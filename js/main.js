

var images = [
    "images/portfolio-1.jpg",
    "images/portfolio-2.jpg",
    "images/portfolio-3.jpg",
    "images/two.png",
    "images/portfolio-1.jpg",
    "images/portfolio-2.jpg",
];


var layer = document.querySelector(".layer")
var layerContent = document.querySelector(".content");
var nextBtn = document.querySelector("#next");
var prevBtn = document.querySelector("#prev");
var closeBtn = document.querySelector("#close");




(function displayImage () {
    item = '';

    for (var i = 0; i < images.length ; i++)  {

        
        item += `
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="item">
            <img class="w-100 item-img" src="${images[i]}" alt=""> 
            <div class="caption">
                <h4>item Title #${i+1}</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, laborum?</p>
            </div>
        </div>
        </div>
        `
    }
    document.getElementById("rowBody").innerHTML = item

}
)();


var imgElme = document.querySelectorAll('img');



for  (var i = 0; i < imgElme.length  ; i++)  {
 imgElme[i].addEventListener("click" , function(e) {
    
    layer.classList.replace('d-none', 'd-flex') ;
    var imgSrc = e.target.src ;
    layerContent.style.backgroundImage = `url("${imgSrc}")` ;
    
 })
}



var indexImg = 0 ;


function nextSlide() {
    indexImg++;
    if(indexImg == images.length) {
        indexImg = 0;
    }
    var imgSrc = imgElme[indexImg].src
    layerContent.style.backgroundImage = `url("${imgSrc}")` ;
    
}

function prevSlide() {
    indexImg--;
    if(indexImg < 0) {
        indexImg = images.length - 1;
    }
    var imgSrc = imgElme[indexImg].src
    layerContent.style.backgroundImage = `url("${imgSrc}")` ;
    
}

function closeLayer() {
    layer.classList.replace('d-flex' , 'd-none');
}


nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)
closeBtn.addEventListener("click", closeLayer)

// move with Arrow 

document.body.addEventListener('keydown', function(e) {

    if (e.key == "ArrowRight") {
        nextSlide()
    }  else if (e.key == "ArrowLeft" ) {
        prevSlide() ;
    }

    else if (e.key == "Escape") {
        closeLayer()
        
    }
})