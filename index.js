const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function() {
    alert('Desde el 2019 sabia que ibas a decir que si ʕ⁠·⁠ᴥ⁠·⁠ʔ, te amo princesa, sigue en tus clases, suerteeeeeeeeeeeee')
});

const noBtn=document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transforms',`translate(-${randomX}%,-${randomY}%)`);
})