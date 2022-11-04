import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const FIREBASE_KEY =
  "https://block-drive-af307-default-rtdb.firebaseio.com/";

export const FIREBASE_SEND_OBJECT = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const firebaseConfig = {
  //...
  databaseURL: "https://block-drive-af307-default-rtdb.firebaseio.com/",
};
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
export const DB = getDatabase(app);
