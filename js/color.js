var allButton= document.getElementsByTagName('button');
var copyAllButtons=[];
for (let i=0;i<allButton.length;i++){
    copyAllButtons.push(allButton[i]);
}
function buttonColorChange(btn){
    if(btn.value==='red'){
        buttonsRed();
    } else if(btn.value==='green'){
        buttonsGreen();
    }else if(btn.value==='random'){
        buttonsColorRandom();
    }else if(btn.value==='reset'){
        buttonsColorReset();
    }
}
function buttonsRed(){
    for(let i=0;i<allButton.length;i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-danger');
    }
}
function buttonsGreen(){
    for(let i=0;i< allButton.length;i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-success');
    }
}
function buttonsColorReset(){
    for(let i=0;i< allButton.length;i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(copyAllButtons[i]);
    }
}
function buttonsColorRandom(){
    let choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for(let i=0; i < allButton.length; i ++){
        let randomNumber = Math.floor(Math.random()*4);
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(choice[randomNumber]);
    }
}
