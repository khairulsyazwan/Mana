import firebase from "./firebase";
const db = firebase.firestore();


export async function getData(collection, cb){
    // console.log(db);
    const colData = await db.collection(collection)
    // console.log(colData);

    // to listen only once .get().then().catch()
    colData.onSnapshot(
        (snapshot) => {
            // success
            // console.log(snapshot)
            let arr = [];
            snapshot.forEach(doc => {
                // console.log(doc.id, "=>", doc.data());
                let data = { ...doc.data(), id: doc.id };
                arr.push(data);
            });
            cb(arr)
        }, 
        (err) => {
            // if error
        })
}

export async function showOne(collection, id, cb){
    const colData = await db.collection(collection).doc(id).get();

    if (colData.exists) {
        // set state
        cb(colData.data());
    }else{
        // display error
    }
}

