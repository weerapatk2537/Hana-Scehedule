// วางค่าจาก Firebase Console > Project settings > Your apps > Web app (SDK setup and configuration > Config)
// ค่าเหล่านี้เปิดเผยได้ ไม่ใช่รหัสลับ การป้องกันข้อมูลอยู่ที่ firestore.rules
export const firebaseConfig = {
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASuFM_zFHEKg1bLAhxvhzf7eQINt6K21k",
  authDomain: "new-born-dev-ent.firebaseapp.com",
  projectId: "new-born-dev-ent",
  storageBucket: "new-born-dev-ent.firebasestorage.app",
  messagingSenderId: "1090146722991",
  appId: "1:1090146722991:web:7751578310ff026c07a05a",
  measurementId: "G-9FSSNHWFH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};
