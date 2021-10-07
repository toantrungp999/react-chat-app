import { db } from "./firebaseConfig";

export const addDocument = async (collection, data) => {
  await db.collection(collection).add({ ...data, createdAt: Date.now() });
};

export const getDocument = async (collection, callback) => {
  const collectionRef = await db.collection(collection);
  collectionRef.onSnapshot((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(data);
  });
};
