let Xd = 0;
let Yd = 0;

function fun() {
    document.getElementById("startButton").style.display = "none";

    var gameContainer = document.createElement("div");
    gameContainer.className = "center";
    gameContainer.id = "gameContainer";
    document.body.appendChild(gameContainer);
    gameContainer.style.display = "flex";

    var controlButtons = document.createElement("div");
    controlButtons.className = "controls";
    
    var buttons = ["LEFT", "RIGHT", "TOP", "BOTTOM"];
    buttons.forEach(function(buttonText) {
        var button = document.createElement("button");
        button.innerHTML = buttonText;
        button.style.width="100px";
        button.style.height="50px";
        button.style.borderRadius="50px";
        button.onclick = function() { move(buttonText); };
        controlButtons.appendChild(button);
    });

    gameContainer.appendChild(controlButtons);

    var x = parseInt(window.prompt("Enter the size of the grid"));
    var grid = document.createElement("div");
    grid.id = "grid";
    grid.className = "grid-container";
    gameContainer.appendChild(grid);

    for (var i = 0; i < x; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for (var j = 0; j < x; j++) {
            var gridBox = document.createElement("div");
            gridBox.className = "grid-box";
            if (i === 0 && j === 0) {
                var img = document.createElement("img");
                img.src = "./images/jk.png";
               
                gridBox.appendChild(img);
                gridBox.style.backgroundColor = "red";
                
            }
            row.appendChild(gridBox);
        }
        grid.appendChild(row);
    }
}

function move(direction) {
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByClassName("row");
    let currentBox = rows[Yd].getElementsByClassName("grid-box")[Xd];
    let img = currentBox.querySelector("img");

    if (img) {
        currentBox.removeChild(img);
        currentBox.style.backgroundColor = "blue";

    }

    if (direction === "LEFT" && Xd > 0) {
        Xd--;
    } else if (direction === "RIGHT" && Xd < rows[0].getElementsByClassName("grid-box").length - 1) {
        Xd++;
    } else if (direction === "TOP" && Yd > 0) {
        Yd--;
    } else if (direction === "BOTTOM" && Yd < rows.length - 1) {
        Yd++;
    }

    let newBox = rows[Yd].getElementsByClassName("grid-box")[Xd];
    newBox.appendChild(img);
    newBox.style.backgroundColor = "red";
}