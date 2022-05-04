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
