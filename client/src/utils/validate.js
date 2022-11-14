export function validateEmail(email){
    if (!email) return true
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

export function validatePassword(pass){
    if(!pass) return true;
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return re.test(pass)
}

export function validateString(str){
    if(!str) return true;
    const re = /^[A-Za-z ]+$/
    return re.test((str))
}

export function validateNumber(num){
    if(!num)return true;
    const re = /^[0-9]+$/
    return re.test(num)
}