export const validateForm = (name, lastname, phone, message) => {
    let nameErrorMessage = "";
    let lastnameErrorMessage = "";
    let phoneErrorMessage = "";
    let messageErrorMessage = "";
    let isFormValid = true;
    

    if(name.length === 0) {
        nameErrorMessage = "Acest camp este obligatoriu";
        isFormValid= false;
    
    }

    if(lastname.length === 0) {
        lastnameErrorMessage = "Acest camp este obligatoriu";
        isFormValid= false;
    }

    if(message.length === 0){
        messageErrorMessage = "Acest camp este obligatoriu";
        isFormValid = false;
      }

      if(phone.length === 0) {
        phoneErrorMessage = "Acest camp este obligatoriu";
        isFormValid= false;
    } else if (name.length > 11) {
        nameErrorMessage = "Trebuie sa contina 11 caractere";
        isFormValid= false;
    }

    return{
        name: nameErrorMessage,
        lastname: lastnameErrorMessage,
        phone: phoneErrorMessage,
        message: messageErrorMessage,
        isValid: isFormValid
    }
}