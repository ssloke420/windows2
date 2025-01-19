// Dragging functionality for the gframe and pframe elements

dragElement(document.getElementById("googleframe"));
dragElement(document.getElementById("padframe"));
dragElement(document.getElementById("setframe"));
dragElement(document.getElementById("tframe"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    if (document.getElementById(elmnt.id + "header")) {
        // If present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // Otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
    
        // calculate the new position of the element:
        let newPosX = elmnt.offsetLeft - pos1;
        let newPosY = elmnt.offsetTop - pos2;
    
        // get the dimensions of the screen:
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
    
        // ensure that the element stays within the bounds of the screen:
        if (newPosX < 0) {
            newPosX = 0;
        } else if (newPosX > screenWidth - elmnt.offsetWidth) {
            newPosX = screenWidth - elmnt.offsetWidth;
        }
    
        if (newPosY < 0) {
            newPosY = 0;
        } else if (newPosY > screenHeight - elmnt.offsetHeight) {
            newPosY = screenHeight - elmnt.offsetHeight;
        }
    
        // set the element's new position:
        elmnt.style.left = newPosX + "px";
        elmnt.style.top = newPosY + "px";
    }
    

    function closeDragElement() {
        // Stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
