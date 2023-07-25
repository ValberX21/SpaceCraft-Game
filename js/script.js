const cthu = document.querySelector('.cthu');
const cthu2 = document.querySelector('.cthu2');
const cthu3 = document.querySelector('.cthu3');
const cthu4 = document.querySelector('.cthu4');
const scaft = document.querySelector('.spacecraft');
const scor = document.querySelector('.score');
const gameover = document.querySelector('.modal');
const restart = document.getElementById('btnRestart');
let newPosition = 0
let score = 0;

restart.addEventListener('click',function(){location.reload()})

const loop  =  setInterval(() => {

    score ++
    scor.innerHTML = `Score: ${score}`  
    const scaftPosition = parseInt(window.getComputedStyle(scaft).bottom.replace('px',''));
    
    const cthuPosition =  cthu.offsetLeft;
    const cthu2Position = cthu2.offsetLeft;
    const cthu3Position = cthu3.offsetLeft;
    const cthu4Position = cthu4.offsetLeft;
    
    if(scaftPosition <= 390 && scaftPosition >= 330  && cthuPosition < 100 && cthuPosition > -30){
        clearInterval(loop)
        gameover.classList.remove('hidden'); 
        cthu.style.animation = 'none'              
    }else if(scaftPosition <= 290 && scaftPosition >= 200  && cthu2Position < 130 && cthu2Position > -30){
        clearInterval(loop)
        gameover.classList.remove('hidden'); 
        cthu2.style.animation = 'none' 
     }else if(scaftPosition <= 110  && scaftPosition >= 70 && cthu3Position < 130 && cthu3Position > -30){
        clearInterval(loop)
        gameover.classList.remove('hidden'); 
        cthu3.style.animation = 'none' 
     }else if(scaftPosition <= 20  && scaftPosition >= -40 && cthu4Position < 100 && cthu4Position > -30){
        clearInterval(loop)
        gameover.classList.remove('hidden'); 
        cthu4.style.animation = 'none' 
     }
    
    document.onkeydown = (e) => {
        e = e || window.event;
     
        if(scaftPosition >= -40 && scaftPosition <= 390){

            if(e.keyCode === 40){
                newPosition = scaftPosition - 30
                scaft.style.bottom = `${newPosition}px`   
            }
            if (e.keyCode === 38) {
                let newPosition = scaftPosition + 30
                scaft.style.bottom = `${newPosition}px`    
            }
        }else{
            alert('game over')
        }    
    }
},10)