// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
console.log(process.env.NEXT_PUBLIC_API_KEY_FIREBASE)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_FIREBASE,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APPI_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

export { app, auth }
