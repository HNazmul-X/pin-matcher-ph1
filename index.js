/* ---------------------------------------------------------------------
-----------------------Pin Genarate Funtion are here-----------------------
---------------------------------------------------------------------------- */
const pinGenerateBtn = document.querySelector(".generate-btn");
const pinGenerateInput = document.querySelector('.generate-input');
pinGenerateBtn.addEventListener('click',function(){
 let getPin = getRandomPin()
    if(getPin.length < 4){
        getPin= getRandomPin();
    }
    pinGenerateInput.value = getPin;
    
    
})
 function substrFuntion(num) {
   var getValue = num.toString();
   var print = getValue.substr(0, getValue.length - 1);
   return print;
 }

function getRandomPin(){
    const fullPin = Math.random() * 10000 + "";
    const pin = fullPin.split('.')
    return pin[0];
}

const numberBtn = document.querySelectorAll('.calc-body .button');
const matcherInput = document.querySelector('.matcher-input');
const calcBody = document.querySelector('.calc-body');
for(var i = 0; i < numberBtn.length ; i ++){
    numberBtn[i].addEventListener('click',function(){
        var num = this.innerText;
        if(num == "<"){
            num ='';
           var subValue = (substrFuntion(matcherInput.value));
            matcherInput.value = subValue;
        } else if(num == "C"){
            num = ""
            matcherInput.value = ''
        }
        matcherInput.value += num;
    })
}


const  isValueMatchCheck = document.querySelector('.calc-body .submit-btn');
isValueMatchCheck.addEventListener('click',function(){
    if(isValueMatch(pinGenerateInput.value, matcherInput.value)==true){
       var rightNotice =   document.querySelector('.notify.correct')
       rightNotice.classList.add('up-down')
       rightNotice.addEventListener('click',function(){
           this.classList.remove("up-down")
       })
    } else{
        var wrongNotice = document.querySelector('.notify.wrong')
        wrongNotice.classList.add('up-down')
        wrongNotice.addEventListener('click', function (e) {
            this.classList.remove("up-down")
        });
       var trial =  document.getElementById("trial")
       trial.innerHTML--;
       if(trial.innerText <= 0){
           var theif = document.querySelector(".notify.theif");
           theif.classList.add("up-down")
           
       }
    }
})

function isValueMatch(value1,value2){
    if(value1 == value2){
        return true
    } else{
        return false;
    }
}