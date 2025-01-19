//seperate funtion to validate the form


export const checkValidData=(email,password,firstName,lastName,SignInEmail)=>{

    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFirstNameValid=/[a-zA-Z]{2,}/.test(firstName)
    const isLastNameVaid=/[a-zA-Z]{1,}/.test(lastName)



    if(!isEmailValid) return 'Email ID is not valid'
    if(!isPasswordValid) return 'Password is Not Valid'
    if(!isFirstNameValid) return 'First name must contain at least two characters'
    if(!isLastNameVaid) return 'last name must contain at least one characters'
    

    return null;

}