let isWindowOpen = false;

function toggleWindow(windowId, frameId) {
    console.log("function toggleWindow called");
    const allWindows = document.querySelectorAll('iframe, textarea');
    const allFrames = document.querySelectorAll('.framehidden, .frameshown');

    // If any window is already open and the current window is not the same as the one being toggled
    if (isWindowOpen && !document.getElementById(windowId).classList.contains('windowshown')) {
        console.log("Another window is already open.");
        return; // Prevent opening another window
    }

    // Hide all other windows
    allWindows.forEach(win => {
        if (win.id !== windowId) {
            win.classList.remove('windowshown');
            win.classList.add('windowhidden');
        }
    });

    // Hide all other frames
    allFrames.forEach(frame => {
        if (frame.id !== frameId) {
            frame.classList.remove('frameshown');
            frame.classList.add('framehidden');
        }
    });

    const windowElement = document.getElementById(windowId);
    const frameElement = document.getElementById(frameId);

    if (windowElement.classList.contains('windowhidden')) {
        windowElement.classList.remove('windowhidden');
        windowElement.classList.add('windowshown');
        frameElement.classList.remove('framehidden');
        frameElement.classList.add('frameshown');
        isWindowOpen = true; // Update the global state
    } else {
        windowElement.classList.remove('windowshown');
        windowElement.classList.add('windowhidden');
        frameElement.classList.remove('frameshown');
        frameElement.classList.add('framehidden');
        isWindowOpen = false; // Update the global state
    }
}

function fullscreen(id) {
    const windowElement = document.getElementById(id);
    const iframe = windowElement.querySelector('iframe');

    if (windowElement.classList.contains('fullscreen')) {
        windowElement.classList.remove('fullscreen');
        iframe.classList.remove('fullscreen');
    } else {
        windowElement.classList.add('fullscreen');
        iframe.classList.add('fullscreen');
    }
}
//Elijah Matthews
