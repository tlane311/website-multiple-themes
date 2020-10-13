const root = document.documentElement; //this is the location for our css variables

const uglyBtnElement = document.getElementById('ugly-button')
const elegantBtnElement = document.getElementById("elegant-button");
const balanceBtnElement = document.getElementById('balance-button')

const emphasized = document.querySelector('em');



function uglyThemeCB(){
    themeSwitcher(root, uglyTheme);
    emphasized.innerHTML="Ugly";
}

function elegantThemeCB(){
    themeSwitcher(root, elegantTheme);
    emphasized.innerHTML="Better";
}

function balanceThemeCB(){
    themeSwitcher(root, balanceTheme);
    emphasized.innerHTML="Better";
}


uglyBtnElement.addEventListener("click", uglyThemeCB);
elegantBtnElement.addEventListener("click", elegantThemeCB);
balanceBtnElement.addEventListener("click", balanceThemeCB);



function toggleClicked(button){
    const buttons=document.querySelectorAll("button")    
    return () => {
        buttons.forEach( ele => {
            ele.classList.toggle("clicked",false)});
        button.classList.toggle("clicked",true);
    }
}

uglyBtnElement.addEventListener("click", toggleClicked(uglyBtnElement));

elegantBtnElement.addEventListener("click", toggleClicked(elegantBtnElement));

balanceBtnElement.addEventListener("click", toggleClicked(balanceBtnElement));