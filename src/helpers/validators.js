export const minLength = (length) => (value) => value.length >= length;
export const maxLength = (length) => (value) => value.length <= length;
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const isAllValid = (form) => {
    let isAccess = false;
    for (let key in form) {
        if (form[key].isValid)
            isAccess = true;
        else
            return false;

    }
    return isAccess;
}

export const isSuchUserWithEmail = (email) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
        const candidate = users.find(user => user.email === email);
        if (candidate)
            return candidate;
        else
            return false
    } else {
        return false;
    }


}
