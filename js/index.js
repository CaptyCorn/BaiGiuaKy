window.onload = function() {
    let list = document.querySelector('.slider .list');
    let items=document.querySelectorAll('.slider .list > img');
    let dots=document.querySelectorAll('.slider .dots li');
    let pre = document.getElementById('pre');
    let next = document.getElementById('next');
    let active=0;
    let length =items.length - 1;   
    // chuyến hình
    next.onclick=function(){
        if(active + 1 >length){
            active = 0;
        }
        else{
            active = active + 1;
        }
        reloadSlider();
    }

    pre.onclick=function(){
        if(active - 1 < 0){
            active = length;
        }
        else{
            active = active - 1;
        }
        reloadSlider()
    }

    // tự động chuyển slide
    let autoChangeSlide = setInterval(function() {
        next.click();
    }, 3000);

    function reloadSlider(){
        let trai= items[active].offsetLeft;
        list.style.left = -trai + 'px'

        // sự thay đổi của dot
        let actDot = document.querySelector('.slider .dots li.active');
        actDot.classList.remove('active');
        dots[active].classList.add('active');
        
        clearInterval(autoChangeSlide);
        autoChangeSlide = setInterval(function() {
            next.click();
        }, 3000);
    }
    
    // click trên dấu chấm để đổi trang
    for (let key = 0; key < dots.length; key++) {
        let li = dots[key];
        li.addEventListener('click', function() {
            active = key;
            reloadSlider();
        });
    }
}