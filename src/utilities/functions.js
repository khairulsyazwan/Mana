import firebase from "./firebase";
const db = firebase.firestore();


export async function getData(collection, cb){
    const colData = await db.collection(collection)

    colData.onSnapshot(
        (snapshot) => {
            let arr = [];
            snapshot.forEach(doc => {
                let data = { ...doc.data(), id: doc.id };
                arr.push(data);
            });
            cb(arr)
        }, 
        (err) => {

        })
}

export async function showOne(collection, id, cb){
    const colData = await db.collection(collection).doc(id).get();
    if (colData.exists) {
        cb(colData.data());
    }else{
    }
}

