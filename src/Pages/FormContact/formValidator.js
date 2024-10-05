export const validateForm = (name, lastname, phone, message, gdpr) => {
    let nameErrorMessage = "";
    let lastnameErrorMessage = "";
    let phoneErrorMessage = "";
    let messageErrorMessage = "";
    let isFormValid = true;
    
    

    if(name.length === 0) {
        nameErrorMessage = "Acest câmp este obligatoriu";
        isFormValid= false;
    
    }

    if(lastname.length === 0) {
        lastnameErrorMessage = "Acest câmp este obligatoriu";
        isFormValid= false;
    }

    if(message.length === 0){
        messageErrorMessage = "Acest câmp este obligatoriu";
        isFormValid = false;
      }

      if(phone.length === 0) {
        phoneErrorMessage = "Acest câmp este obligatoriu";
        isFormValid= false;
    } else if (name.length > 11) {
        nameErrorMessage = "Trebuie sa contina 11 caractere";
        isFormValid= false;
    }
    
    if(gdpr===false){
        isFormValid=false;
    }

    return{
        name: nameErrorMessage,
        lastname: lastnameErrorMessage,
        phone: phoneErrorMessage,
        message: messageErrorMessage,
        isValid: isFormValid
    }
}