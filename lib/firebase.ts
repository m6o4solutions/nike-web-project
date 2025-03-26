// import the functions needed from the SDKs needed
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyDEKcVApsv5NwrlsYAzIf8aGcF8AtZd_Vo",
	authDomain: "nike-web-project.firebaseapp.com",
	projectId: "nike-web-project",
	storageBucket: "nike-web-project.firebasestorage.app",
	messagingSenderId: "1059876135501",
	appId: "1:1059876135501:web:3a5ceb8157448c7a87f204",
	measurementId: "G-H7ZD4VYDTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
