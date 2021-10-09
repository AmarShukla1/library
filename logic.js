const button=document.querySelector('button');
const container=document.querySelector('.books-container');
const close=document.querySelector('.close');
const modal=document.querySelector('.modal-container');


function random(){
    let x=Math.floor((Math.random()*256));
    let y=Math.floor((Math.random()*256));
    let z=Math.floor((Math.random()*256));
    let str=`rgb(${x},${y},${z})`;
    return str;
}

button.addEventListener('click',function(){
 modal.classList.add('show');
});
close.addEventListener('click',function(){
modal.classList.remove('show');


const div=document.createElement('div');
    div.className='box';
    div.innerHTML=document.querySelector('.x').value+'<br>'+document.querySelector('.y').value+'<br>'+document.querySelector('.z').value;
    let str=random();
    div.style.backgroundColor=str;
    // div.addEventListener('click',function(){
    //    div.remove();
    // });
    container.appendChild(div); 
});


    
