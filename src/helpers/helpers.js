export function regexMail(email){
     let emailRegex =  new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const isValidEmail = emailRegex.test(email);
    return isValidEmail;




}


export function generateRandomKey(){
    const randomKey = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)
    return randomKey+fecha;
}