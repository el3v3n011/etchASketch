    function getUserColor() {
        let color = document.querySelector('#colorPicker').value;
        return color;

    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function removegrid() {
        let removeElement = document.querySelectorAll('.divSquareX');
        removeElement.forEach(box => {
            box.remove();
        });

    }
    function clear() {
    
    let elementToClear= document.querySelectorAll('.divSquareY');
    elementToClear.forEach(element=>{
        element.style.backgroundColor='black';
    })
    }
    function newGrid() {
        let userInput = prompt("Enter No of colums Beetween 4 and 100");
        if(userInput>100){
            userInput=prompt("Enter No of colums Beetween 4 and 100");
        }
        else{

        

        removegrid();
        createGrid(userInput, userInput, gridContainer);
}
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
                // elementy.addEventListener('mouseenter', () => {
                //     elementy.style.backgroundColor = getRandomColor();
                // });
                if (userColor) {
                    elementy.addEventListener('mouseenter',()=>{
                        elementy.style.backgroundColor=userColor;
                    })
                } else {
                    elementy.addEventListener('mouseenter',()=>{
                        elementy.style.backgroundColor= getRandomColor();
                    })
                }

                elementx.appendChild(elementy);

            }
        }

    }
    document.querySelector('#colorPicker').addEventListener('input', () => {
        userColor = getUserColor();
        updateGridColor();
    });

    function randomColorBtn(){
        userColor=null; 
        let gridCells = document.querySelectorAll('.divSquareY');
        gridCells.forEach(cell => {
            
            
                cell.addEventListener('mouseenter', () => {
                    cell.style.backgroundColor = getRandomColor();
                });
            
        });
    }
    function updateGridColor() {
        let gridCells = document.querySelectorAll('.divSquareY');
        gridCells.forEach(cell => {
            if (userColor) {
                cell.addEventListener('mouseenter', () => {
                    cell.style.backgroundColor = userColor;
                });
            } else {
                cell.addEventListener('mouseenter', () => {
                    cell.style.backgroundColor = getRandomColor();
                });
            }
        });
    }

    document.querySelector('.clear').addEventListener('click', clear);
    let gridContainer = document.querySelector('.gridContainer');
    let rows = 16;
    let cols = 16;
    let userColor=null;

    createGrid(rows, cols, gridContainer
    );

