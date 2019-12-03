const clubSlider = () => {
    const mainSlider= document.getElementsByClassName('main-slider')[0],
    slides = mainSlider.querySelectorAll('.slide');
    //console.log('slides: ', slides);

    let currentSlide = 0;
    const showSlide = ()=>{
        slides.forEach((elem)=>{
            elem.style.display = 'none';
        })
        slides[currentSlide].style.display = 'flex'; 
        
        currentSlide++;
        if(currentSlide===slides.length){currentSlide=0};
    }
    setInterval(showSlide, 2000);
};
export default clubSlider;