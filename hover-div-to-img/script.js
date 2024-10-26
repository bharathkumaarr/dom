// var elem = document.querySelector('.elem');
// var elemImg = document.querySelector('.elem img');


// elem.addEventListener('mousemove', function(details) {
//     elemImg.style.left = details.x+'px'
//     elemImg.style.top = details.y+'px'
// });
// elem.addEventListener('mouseenter', function(details) {
//     elemImg.style.opacity = 1;
    
// });
// elem.addEventListener('mouseleave', function(details) {
//     elemImg.style.opacity = 0;
    
// });
document.querySelectorAll('.elem').forEach((elem) => {
    const elemImg = elem.querySelector('img');

    function moveImage(details) {
        const rect = elem.getBoundingClientRect();
        elemImg.style.left = (details.clientX - rect.left) + 'px';
        elemImg.style.top = (details.clientY - rect.top) + 'px';
    }

    elem.addEventListener('mouseenter', function() {
        document.querySelectorAll('.elem img').forEach(img => img.style.opacity = 0);
        elemImg.style.opacity = 1;
        elem.addEventListener('mousemove', moveImage);
    });

    elem.addEventListener('mouseleave', function() {
        elemImg.style.opacity = 0;
        elem.removeEventListener('mousemove', moveImage);
    });
});

