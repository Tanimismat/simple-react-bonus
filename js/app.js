let db = {};

const addToDb = item => {
    // db.alom = 1;
    // db['alom'] = 1;
    // db[item] = 1;
    const storage = localStorage.getItem('fruits');
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