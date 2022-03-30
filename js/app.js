let db = {};

const addToDb = item => {
    // db.alom = 1;
    // db['alom'] = 1;
    // db[item] = 1;
    const storage = localStorage.getItem('fruits');
    // not to override the previous data
    if (storage) {
        console.log(typeof storage)
        db = JSON.parse(storage);
    }

    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('fruits', JSON.stringify(db))
}

const removeItem = item => {
    const stored = localStorage.getItem('fruits');
    if (stored) {
        const storedObj = JSON.parse(stored);
        delete storedObj[item];
        localStorage.setItem('fruits', JSON.stringify(storedObj))
    }

}