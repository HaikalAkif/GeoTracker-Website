let sign_onscreen = false;
let log_onscreen = false;

let popupS = document.getElementById("popupS");

    function openPopupS(){
        if (sign_onscreen == false && log_onscreen == false) {
            popupS.classList.add("open-popupS");
            sign_onscreen = true;
        }
    }
    
    function closePopupS(){
        if (sign_onscreen == true) {
            popupS.classList.remove("open-popupS");
            sign_onscreen = false;
        }
        
    }

let popupL = document.getElementById("popupL");

    function openPopupL(){
        if (log_onscreen == false && sign_onscreen == false) {
            popupL.classList.add("open-popupL");
            log_onscreen = true;
        }
        
    }
    
    function closePopupL(){
        if (log_onscreen == true) {
            popupL.classList.remove("open-popupL");
            log_onscreen = false;
        }
        
    }