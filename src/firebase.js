import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 

// Firebase 설정
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "xxxxxxxxxx",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxx",
  appId: "xxxxxxxxxx",
  measurementId: "xxxxxxxxxx"
};

// Firebase 초기화
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
const database = getDatabase(appFirebase);

// 필요한 Firebase 모듈을 내보내기
export { appFirebase, analytics, database };
