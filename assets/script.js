const arrowRight =document.querySelector(".arrow_right")
const arrowLeft =document.querySelector(".arrow_left")
const bannerImage =document.querySelector(".banner-img")
const dotsElement =document.querySelectorAll(".dot")



const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let numSlide =0; 
bannerImage.setAttribute("src","./assets/images/slideshow/"+slides[numSlide].image)
console.log(slides.length)
arrowRight.addEventListener("click",function(){
	numSlide ++;
	if(numSlide >= slides.length){
		numSlide=0 ;
		dotsElement[slides.length-1].classList.remove("dot_selected")
		dotsElement[numSlide].classList.add("dot_selected")
		

	}else{
		dotsElement[numSlide -1].classList.remove("dot_selected")
		dotsElement[numSlide].classList.add("dot_selected")
	}
	
	
	bannerImage.setAttribute("src","./assets/images/slideshow/"+slides[numSlide].image)
	
})



arrowLeft.addEventListener("click",function(){
		numSlide --;
	if(numSlide <0 ){
		numSlide=4 ;
	
	}
	bannerImage.setAttribute("src","./assets/images/slideshow/"+slides[numSlide].image)
	
})
