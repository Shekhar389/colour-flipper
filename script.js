const button=document.querySelector('.btn')
const change= function () {
    const colour='rgb('+random(255)+','+random(240)+','+random(210)+')'
document.body.firstElementChild.style.background=colour;
};
function random(number)
{
    return Math.floor(Math.random()*(number + 1 ))
}
button.addEventListener('click',change);