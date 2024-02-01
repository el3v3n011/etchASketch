
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function removegrid(){
    let removeElement = document.querySelectorAll('.divSquareX');
        removeElement.forEach(box => {
            box.remove();
        });
    
}
function clear(){
    let clearElement= document.querySelectorAll('.divSquareY');

    clearElement.forEach(box => {
        box.style.backgroundColor='white'; 
    });
}
function newGrid(){
    let userInput=prompt("Enter No of colums Beetween 4 and 100");

    removegrid();
    createGrid(userInput,userInput,gridContainer);


}
function createGrid(rows, cols, container) {
    for (let i = 0; i < rows; i++) {
        let elementx = document.createElement('div');

        elementx.classList.add('divSquareX');



        gridContainer.appendChild(elementx);

        for (let j = 0; j < cols; j++) {
            let elementy = document.createElement('div');
            elementy.classList.add('divSquareY');
            elementy.classList.add('changeColor');
            elementy.addEventListener('mouseenter',()=>{
                
                elementy.style.backgroundColor=getRandomColor();
            });
            elementx.appendChild(elementy);

        }
    }

}

let gridContainer = document.querySelector('.gridContainer');
let rows = 16;
let cols = 16;

createGrid(rows, cols, gridContainer
);
