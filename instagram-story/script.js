var arr = [
    {
        dp: "https://images.unsplash.com/photo-1700704054160-cfc3e3705707?q=80&w=1837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.pexels.com/photos/17377384/pexels-photo-17377384/free-photo-of-super-car-wallpaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        dp:"https://images.unsplash.com/photo-1617335692042-7a3779b8e050?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.pexels.com/photos/10553301/pexels-photo-10553301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        dp:"https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.pexels.com/photos/11913332/pexels-photo-11913332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        dp:"https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.pexels.com/photos/11913339/pexels-photo-11913339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
        dp:"https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.pexels.com/photos/18038885/pexels-photo-18038885/free-photo-of-shelby-mustang-with-black-alloy-wheels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        dp:"https://images.unsplash.com/photo-1534882673463-e4781854e9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.pexels.com/photos/15351651/pexels-photo-15351651/free-photo-of-driver-kneeling-in-front-of-his-race-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }]


var clutter ="";
var manyStories = document.querySelector('.many-stories');
var fullScreen = document.querySelector('.full-screen');

arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id=${idx} src="${elem.dp}" alt="">
</div>`
})
manyStories.innerHTML=clutter;

manyStories.addEventListener('click',function(dets) {
    document.querySelector('.full-screen').style.display = 'block'
    document.querySelector('.full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector('.full-screen').style.display = 'none'
        
    }, 3000);

});
fullScreen.addEventListener('click',function(dets) {
    document.querySelector('.full-screen').style.display = 'none'

});



