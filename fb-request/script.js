var follow = document.querySelector('.follow');
var block = document.querySelector('.block');
var nameh1 = document.querySelector('h1');
var nameh5 = document.querySelector('h5');

var checkFollow = checkBlock =0;


follow.addEventListener('click',function(){
    if (checkFollow ===0) {
        follow.innerHTML = 'Following';
        follow.style.backgroundColor = '#dadada'
        follow.style.border = 'solid'
        follow.style.color = 'cornflowerblue'

        checkFollow = 1;
    } else {
        follow.innerHTML = 'Follow';
        follow.style.backgroundColor = 'cornflowerblue'
        follow.style.border = 'none'
        follow.style.color = '#dadada'

        checkFollow=0;
    }
})

block.addEventListener('click',function(){
    if (checkBlock ===0) {

    block.innerHTML = 'Unblock';
    block.style.color = '#474747'
    nameh1.innerHTML = ' ';
    nameh5.innerHTML = ' ';

    checkBlock =1;
    } else {
        block.innerHTML = 'Block';
        block.style.color = 'cornflowerblue'
        nameh1.innerHTML = 'McLaren Automotive';
        nameh5.innerHTML = 'British luxury automotive manufacturer';
        checkBlock = 0;

    }
    
    
})