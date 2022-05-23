const getCurrentDate = () => {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    return year + "/" + month + "/" + day;
};

const getDataFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const setDataToLocalStorage = (key, payload) => {
    localStorage.setItem(key, JSON.stringify(payload));
};

export {
    getCurrentDate,
    getDataFromLocalStorage,
    setDataToLocalStorage
};