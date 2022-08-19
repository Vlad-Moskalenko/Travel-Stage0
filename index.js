window.addEventListener('resize', ()=>{
    window.location.reload()
})

document.querySelector('#burger-menu').addEventListener('click', function(){
    document.querySelector('#navigation-list').classList.add('nav-show');
    document.querySelector('#close-icon').classList.add('close-icon-show');
    setTimeout(show, 100)
})

document.querySelector('#close-icon').addEventListener('click', function(){
    document.querySelector('#navigation-list').classList.remove('nav-show');
    document.querySelector('#close-icon').classList.remove('close-icon-show');
})

for(let item of document.querySelectorAll('#navigation-list li')){
    item.addEventListener('click', function(){
    document.querySelector('#navigation-list').classList.remove('nav-show');
    document.querySelector('#close-icon').classList.remove('close-icon-show');
    })
}

function show() {
    wrapper.addEventListener('click', function hide(event){
    
    let navMenu = document.querySelector('.nav-show');
    if(event.target == document.querySelector('#navigation-list')) {
        return;
    }
    if(!!navMenu) {
        document.querySelector('#navigation-list').classList.remove('nav-show');
        document.querySelector('#close-icon').classList.remove('close-icon-show');
    }
    wrapper.removeEventListener('click', hide)
}) 
}

function moveSlider(slider){
    if(slider.style.order == 0) {
        document.querySelector('.destinations_img').classList.add('right')
    }

    else if(slider.style.order == 2) {
        document.querySelector('.destinations_img').classList.add('left')
    }
}


if(parseInt(window.screen.width)>425) {

    let slide1 = document.querySelector('.slide1');
    let slide2 = document.querySelector('.slide2');
    let slide3 = document.querySelector('.slide3');
    slide1.style.order = '0';
    slide2.style.order = '1';
    slide3.style.order = '2';

    slide1.onclick = function(){
    moveSlider(slide1)
    document.querySelector('.destinations_img').addEventListener('animationend', () => {
        slide1.style.order = '1';
        slide2.style.order = '2';
        slide3.style.order = '0';
        document.querySelectorAll('.controls label').forEach(item => item.classList.remove('active'));
        document.querySelector('[for=s1]').classList.add('active')
        document.querySelector('.destinations_img').classList.remove('right')
        document.querySelector('.destinations_img').classList.remove('left')
    })
    }

    slide2.onclick = function(){
    moveSlider(slide2)
    document.querySelector('.destinations_img').addEventListener('animationend', () => {
    slide1.style.order = '0'
    slide2.style.order = '1'
    slide3.style.order = '2'
    document.querySelectorAll('.controls label').forEach(item => item.classList.remove('active'))
    document.querySelector('[for=s2]').classList.add('active')
    document.querySelector('.destinations_img').classList.remove('right')
    document.querySelector('.destinations_img').classList.remove('left')
    })
    }

    slide3.onclick = function(){
    moveSlider(slide3)
    document.querySelector('.destinations_img').addEventListener('animationend', () => {
    slide1.style.order = '2'
    slide2.style.order = '0'
    slide3.style.order = '1'
    document.querySelectorAll('.controls label').forEach(item => item.classList.remove('active'))
    document.querySelector('[for=s3]').classList.add('active')
    document.querySelector('.destinations_img').classList.remove('right')
    document.querySelector('.destinations_img').classList.remove('left')
    })
    }
}


else{
    let sliderDivs = document.querySelectorAll('.destinations_img div');
    let controlsLabel = document.querySelectorAll('.controls label');
    controlsLabel[0].classList.add('active');
    controlsLabel[1].classList.remove('active')
    
    let slideArrowLeft = document.querySelector('.slide-left')
    let slideArrowRight = document.querySelector('.slide-right')
    let i=0;

    slideArrowRight.addEventListener('click', ()=>{
        if(i<2) {
            sliderDivs[i].classList.remove('show');   
            controlsLabel[i].classList.remove('active')
            sliderDivs[i+1].classList.add('show')      
            controlsLabel[i+1].classList.add('active')
            i++

            if(i==2) slideArrowRight.style.opacity = 0.5;
            if(i!==0) slideArrowLeft.style.opacity = 1;
        }
})

    slideArrowLeft.addEventListener('click', ()=>{
        if(i>0) {
            i--
            sliderDivs[i+1].classList.remove('show');
            controlsLabel[i+1].classList.remove('active')  
            sliderDivs[i].classList.add('show') 
            controlsLabel[i].classList.add('active')
            if(i==0) slideArrowLeft.style.opacity = 0.5;
        }
        if(i!==2) slideArrowRight.style.opacity = 1;
    })
}

function createLogIn(){
    document.querySelector('#wrapper').style.opacity = '0.5';
    if(document.querySelector('.popup_wrapper')) {document.querySelector('.popup_wrapper').remove()}
    let template = document.querySelector('.Log-in');
    let templateClone = template.content.cloneNode(true);
    document.body.prepend(templateClone)
 
    register.addEventListener('click', ()=>{
    if(register.textContent === 'Register'){
        document.querySelector('.popup_btn_wrapper').remove()
        document.querySelector('.forgot-password').remove()
        document.querySelector('.popup_wrapper h3').textContent = 'Create account';
        document.querySelector('.popup_wrapper h6').textContent = 'Already have an account?';
        document.querySelector('#register').textContent = 'Log in';
        document.querySelector('.sign-btn').textContent = 'Sign Up';

        register.addEventListener('click', createLogIn)
    }
})

document.querySelector('.sign-btn').addEventListener('click', ()=>{
    let inputEmail = document.querySelector('#email');
    let inputPassword = document.querySelector('#password')
    
    alert(`E-mail: ${inputEmail.value}
Password: ${inputPassword.value}`)
    inputEmail.value = '';
    inputPassword.value = '';
})  
}

document.querySelector('#wrapper').addEventListener('click', (event)=>{
    if(event.target.id === 'login')  {createLogIn()}
    else if(event.target.id === 'account') {createLogIn()}
    else if(document.querySelector('.popup_wrapper')){
          document.querySelector('.popup_wrapper').remove()
          document.querySelector('#wrapper').style.opacity = '1';
      }
})
