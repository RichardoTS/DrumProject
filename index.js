const numOfDrumBtns = document.querySelectorAll(".drum").length;

for(let i = 0; i < numOfDrumBtns; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    })
}
document.addEventListener("keydown", function(e){
    makeSound(e.key)
})