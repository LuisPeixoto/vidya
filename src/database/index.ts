import firestore from '@react-native-firebase/firestore';

export function getData({
  collection,
  limit = 10,
}: {
  collection: string;
  limit?: number;
}) {
  return firestore()
    .collection(collection)
    .limit(limit)
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data as any;
    })
    .catch(error => {
      throw new Error(error);
    });
}

export function getDataById({
  collection,
  id,
}: {
  collection: string;
  id: string;
}) {
  return firestore()
    .collection(collection)
    .where('id', '==', id)
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data as any;
    })
    .catch(error => {
      throw new Error(error);
    });
}

export function addData({collection, data}: {collection: string; data: any}) {
  return firestore().collection(collection).add(data);
}
