//  rwd h3按鈕縮合

let footer = document.getElementsByTagName('footer')[0].querySelectorAll('nav');
// console.log(footer);
for(let i = 0; i < footer.length ; i++){
    let fclick = footer[i].querySelector('p');

    fclick.addEventListener('click',function(){

        this.nextElementSibling.classList.toggle('-on');
        
    })
}



// 漢堡
let bar = document.getElementsByClassName('bars')[0];
bar.addEventListener('click',function(){
    let topmain = document.querySelector('ul');
    topmain.classList.toggle('-on')
})


// 購物車相關

let cart_count = document.getElementsByClassName('cart_count')[0];


document.addEventListener('DOMContentLoaded',function(){
    change();
});

function change(){
    let lists =JSON.parse(sessionStorage.getItem('lists'));
    if (lists){
        cart_count.innerText = lists.length;  
        // console.log(cart_count.innerText);
        if(cart_count.innerText != 0){
            cart_count.style.display = 'block';
        }else{
            cart_count.style.display = 'none';

        }
         
    }
}

// 按鈕
let b_to_t = document.getElementsByClassName('b_to_t')[0];

addEventListener('scroll',function(){
    (scrollY > 150 ?  b_to_t.style.display ='block': b_to_t.style.display ='none')
})

b_to_t.addEventListener('click',function(e){
    $('html').animate({scrollTop:0},500);
    e.preventDefault();
    
})