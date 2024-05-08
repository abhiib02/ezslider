class ezslider{
  constructor(el){
    this.slider = document.querySelector(el);
    this.slides = this.slider.querySelectorAll('.slide');
    this.prev = this.slider.querySelector('.slide-prev');
    this.next = this.slider.querySelector('.slide-next');
    this.currentSlide = 1;
    this.slides[1].classList.add('active');
    this.prev.addEventListener('click', this.prevhandler); 
    this.next.addEventListener('click', this.nexthandler); 
    
  }
  
 resetCurrent(){
    let current = this.slider.querySelector('.active');
    current.classList.remove('active');
  }
 setCurrentSlide(index){
    let slides = this.slider.querySelectorAll('.slide');
    slides[index].classList.add('active');
  }
  
   prevhandler = () => {
     this.previous();
   }
   nexthandler = () => {
     this.nxt();
   }
 nxt(){
    this.resetCurrent();
    this.currentSlide++;
    if(this.currentSlide > (this.slides.length-1)){
      this.currentSlide=0;
      this.setCurrentSlide(this.currentSlide);
    }

    this.setCurrentSlide(this.currentSlide);

  }
 previous(){ 
    this.resetCurrent();
    this.currentSlide--;
    if(this.currentSlide < 0){
      this.currentSlide=(this.slides.length-1);
      this.setCurrentSlide(this.currentSlide);
    }

    this.setCurrentSlide(this.currentSlide);

  }
  
}
