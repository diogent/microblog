import idb from 'idb';

const transactionScope = {
  read: 'readonly',
  readwrite: 'readwrite'
};

const dbName = "microblog-db";

const openConnection = (collectionName) => {
  const dbPromise = idb.open(dbName, 1, upgradeDb => {
    if (!upgradeDb.objectStoreNames.contains(collectionName)) { //cheked that collection is not exists
      var store = upgradeDb.createObjectStore(collectionName, {
        keyPath: 'userName'
      }); //creates collection
      store.createIndex('userName', 'userName', {
        unique: true
      }); //creates index
    }
  });
  return dbPromise;
};


async function get(collectionName, id) {
  let db = await openConnection(collectionName);
  let tx = db.transaction(collectionName, transactionScope.read);
  let store = tx.objectStore(collectionName); //gets collection

  let item = await store.get(id);
  db.close();

  return item;
};

async function create(collectionName, item) {
  let db = await openConnection(collectionName);
  var tx = db.transaction(collectionName, transactionScope.readwrite);
  var store = tx.objectStore(collectionName); //gets collection

  store.put(item);
  await tx.complete;
  db.close();
}

export {
  get,
  create
}
