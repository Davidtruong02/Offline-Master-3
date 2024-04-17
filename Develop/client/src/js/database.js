import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

// Add the content to the database
const jateDb = openDB('jate', 1);

// Open a transaction
const tx = jateDb.transaction('jate', 'readwrite');

// Get the store
const store = tx.objectStore('jate');

// Add the content
const request = store.put({id: 1, value: content});

// Wait for the request to complete
const result = await request;
};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

// Get all the content from the database
const jateDb = openDB('jate', 1);

// Open a transaction
const tx = jateDb.transaction('jate', 'readonly');

// Get the store
const store = tx.objectStore('jate');

// Get all the content
const request = store.getAll();

// Wait for the request to complete
const result = await request;
console.log(result);

// Return the content
return result.value;

};
initdb();
