let color_display = document.querySelector('.color_display');
let new_color = document.querySelector('.new_color');
let result = document.querySelector('.result');
let easy_button = document.querySelector('.easy');
let hard_button = document.querySelector('.hard'); 
let colors = document.querySelectorAll('.color');
let main = document.querySelector('.main');
let select = document.querySelector('.select');

colors[0].style.backgroundColor = 'white';

function randomColor(elem){
    let color = Math.floor(Math.random()*16777215).toString(16);
    elem.style.backgroundColor = '#' + color;
}

function chacheColors(){
    if(hard_button.classList.contains('selected')){
        for(let i = 0; i < 6; i++)
            randomColor(colors[i]);

        let random_num = Math.floor(Math.random() * 6);

        color_display.innerHTML = colors[random_num].style.backgroundColor;
    }else{
        for(let i = 0; i < 3; i++)
            randomColor(colors[i]);

        let random_num = Math.floor(Math.random() * 3);

        color_display.innerHTML = colors[random_num].style.backgroundColor;
    }
}

select.onclick = function(event){
    if(event.target == hard_button){
        easy_button.classList.remove('selected');
        hard_button.classList.add('selected');
        for(let i = 3; i < 6; i++)
            colors[i].style.display='block';
        setTimeout(chacheColors, 0);
    }
    if(event.target == easy_button){
        hard_button.classList.remove('selected');
        easy_button.classList.add('selected');
        for(let i = 3; i < 6; i++)
            colors[i].style.display='none';
        setTimeout(chacheColors, 0);
    }
}

window.onload = chacheColors;
new_color.onclick = chacheColors;

main.onclick = function(event){
    let permissionChoose = true;

    if(event.target.style.backgroundColor == color_display.innerHTML){
        result.innerHTML = 'Succes';
        permissionChoose = false;
        for(let i in colors){
            colors[i].style.backgroundColor = event.target.style.backgroundColor;
        }
    }
    if(permissionChoose = true && event.target.style.backgroundColor != color_display.innerHTML){
        result.innerHTML = 'Try again';
        event.target.style.backgroundColor = 'rgb(35, 35, 35)';
    }
}