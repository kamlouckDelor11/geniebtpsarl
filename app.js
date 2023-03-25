
// scroll Magic
// window.onload = function() {
//     let controller = new ScrollMagic.Controller({
//         globalSceneOptions: {
//             triggerHook: 'onLeave'
//               }
//     });

//     let slide = document.querySelectorAll(".panel");

//     for(let i = 0; i < slide.length; i++){
//         new ScrollMagic.Scene({
//             triggerElement : slide[i]
//         })
//         .setPin(slide[i])
//         .removeIndicators()
//         .addTo(controller);
//     }

// }

//anim slide

// let slides = document.querySelectorAll('.slide'),
//     i = 0;
//     function Salading(){
       
//         slides[i].classList.remove('active')
//         if (i < slides.length-1){
//                i ++
//         } else{
//                i = 0
//         }
//         slides[i].classList.add('active')
 
//   };

 
//   AutoPlaySlides = setInterval(Salading,6000);


//change src img maquette

const src_img = document.getElementsByClassName('.src-img'),
       img_maquette = document.getElementsByClassName('img-maquette');

       /*src_img[1].addEventListener("click", function change (){
              alert('0k')
              // img_maquette.src = src_img[1].src ;
               
       })*/

              src_img.forEach(changeSrc)

                     function changeSrc(element){
                          
                                   alert('ok');

                     }
                     function changeSrc(element)
                       
              
       

       /*       src_img.forEach(element => {
       //               src_img[element].addEventListener('click', () => {
       //                      alert('ok');

       //               })
       });*/


//hide /show navBar on scroll

//let navBar = document.getElementById('navBar');
let lastScrollTop = 0;

window.addEventListener("scroll", ()=>{
       let scrollTop = window.pageYOffset || document
              .documentElement.scrollTop;
       if(scrollTop > lastScrollTop){
              navBar.classList.remove('scroll-top-0')
              navBar.classList.add('scroll-top-80')
              // navBar.style.top = "-80px"
       } else{
              /* navBar.style.top = "0" */
              navBar.classList.remove('scroll-top-80')
              navBar.classList.add('scroll-top-0')
       }
       lastScrollTop = scrollTop;
})

*/
//anim btn humbeger

const btn__humberger = document.querySelector('.btn__humberger');
      const nav = document.querySelector('.ul');
      console.log(nav);

btn__humberger.addEventListener('click',()=>{
       btn__humberger.classList.toggle('btn__active');    
       nav.classList.toggle('navbar__active');    
    
});