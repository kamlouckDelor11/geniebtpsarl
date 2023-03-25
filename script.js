const btn__humberger = document.querySelector('.btn__humberger');
      const nav = document.querySelector('.ul');
      console.log(nav);

btn__humberger.addEventListener('click',()=>{
       btn__humberger.classList.toggle('btn__active');    
       nav.classList.toggle('navbar__active');    
    
});