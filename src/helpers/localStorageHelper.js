function saveToLocalStorage(key, value) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Data saved to local storage under key: ${key}`);
    } else {
        console.error("Local storage is not supported by this browser.");
    }
}

function getFromLocalStorage(key) {
    if (typeof(Storage) !== "undefined") {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } else {
        console.error("Local storage is not supported by this browser.");
        return null;
    }
}
