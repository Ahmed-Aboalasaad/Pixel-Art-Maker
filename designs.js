//Selecting vars [ Height - Width ]
var height = document.querySelector("#inputHeight");
var width = document.querySelector("#inputWidth");

//Selecting constants (elements) [ Submit Button - Canvas(Table) - Color Picker ]
const submitButton = document.querySelector("#submitButton");
const canvas = document.querySelector("#pixelCanvas");
const colorPicker = document.querySelector("#colorPicker")

//declaring a function makes the table to invoke it later
function makeGrid(event){

    event.preventDefault();  //using (preventDefault) method to prevent the submit button from refreshing the page

    canvas.innerHTML = "";  //making the table empty if the user tries to make another canvas

    for(let row = 0; row < height.value; ++row){  //two nested for loops the first one makes rows
        var newRow = canvas.insertRow(row);
        for(let col = 0; col < width.value; ++col){  //and the second one to make columns
            let newCell = newRow.insertCell(col);  //using (let) specifically because let is block scoped unlike var
            newCell.addEventListener("click", function(){  //listening for the click on the cell
                newCell.style.backgroundColor = colorPicker.value;
            });
        }
    }
};

submitButton.addEventListener("click", makeGrid);  //listening for the click on the Submit Button

//References:
//              W3Schools - MDN - Microsoft Learning youtube Channel