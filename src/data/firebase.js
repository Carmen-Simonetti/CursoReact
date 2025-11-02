// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs,collection, getFirestore, getDoc, doc, query, where, addDoc } from "firebase/firestore/lite";
import products from "./products"


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGj2DvRDYQfVune3PwbjnMry63dQ6OPG0",
  authDomain: "react-coder-4ba4f.firebaseapp.com",
  projectId: "react-coder-4ba4f",
  storageBucket: "react-coder-4ba4f.firebasestorage.app",
  messagingSenderId: "1058945616955",
  appId: "1:1058945616955:web:eee93bc6de106afc28601e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//creo 3 funciones
// 1. getProducts() osea getMockAPIdata
export async function getProducts(){
// accedo a la colección de productors referenciandola
const productsRef = collection (db, "products"); //se importa
const productsSnapshot = await getDocs(productsRef) //tomo foto de mi colección  //se importa 

const documents = productsSnapshot.docs; 
const dataDocs = documents.map(item => {
  return { id: item.id, ...item.data() } //retorno un objeto q tiene un id
})

return dataDocs

}
// 2. getProductById()
export async function getProductById(idParam) {
  const docRef = doc(db,"products", idParam); //referenciamos qué queremos interactuar en este caso es un documento
  const docSnapshot = await getDoc(docRef); //le pedimos a firestore que me devuelva cómo etá eso en la base de datos
  const docData = docSnapshot.data(); //extraigo la info 
  docData.id = docSnapshot.id
  
  return docData;
}
// 3. getProductByCateg() //leer una produccion pero filtrando los datos
export async function getProductByCateg(categParam) {
  const productsRef = collection(db, "products");
  
  const queryCategory = query(productsRef, where("category", "==", categParam));
  const productsSnapshot = await getDocs(queryCategory);

  const documents = productsSnapshot.docs;
  const dataDocs = documents.map( item => {
    return { id: item.id, ...item.data()}
  })
  return dataDocs
}
// Creo una orden de compras en firebase
export async function createOrder( orderData ){
const ordersRef = collection(db, "orders");
const newDoc = await addDoc(ordersRef, orderData)
return newDoc;
}
//exporto mis productos a firebase
export async function exportProductsData() {
  const productsRef = collection(db,"products")
  for ( let item of products){
    delete item.id;
    const docCreated = await addDoc(productsRef, item)
    console.log("creado el doc", docCreated.id);
    
  }
}
export default app;

exportProductsData();
