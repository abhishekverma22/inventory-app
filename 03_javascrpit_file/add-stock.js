import { db } from './firebase-config.js'
import { collection, addDoc, getDocs } from "./firebase-config.js";

// import { getDocs, query, setDoc, doc } from "./firebase-config.js";


// fetching input value;

let tagNumber = document.getElementById('tagnumber');
let name = document.getElementById('name');
let ornament = document.getElementById('ornament');
let purity = document.getElementById('purity');
let grossWt = document.getElementById('grossWt');
let netWt = document.getElementById('netWt');
let makingPercent = document.getElementById('makingPercent');
let makingTotal = document.getElementById('makingTotal');
let diamondWeight = document.getElementById('diamondWt');
let diamondPrice = document.getElementById('diamondPrice');
let diamondRate = document.getElementById('diamondRate');
let otherCharge = document.getElementById('otherCharge');
let note = document.getElementById('note');
let creationDate = document.getElementById('creationDate');
let addStock = document.querySelector('.addStock');
let discard = document.querySelector('.discard');
let close = document.querySelector('.close');





// add stock and data store in database
addStock.addEventListener('click', async () => {

  

  let dateTime = new Date()

  const productData = {
    dateOfCreation: {
      date: dateTime.toLocaleDateString(),
      time: dateTime.toLocaleTimeString(),
    },
    diamondPrice: diamondPrice.value,
    diamondRate: diamondRate.value,
    diamondWeight: diamondWeight.value,
    grossWeight: grossWt.value,
    makingChargePercent: makingPercent.value,
    makingTotal: makingTotal.value,
    name: name.value,
    netweight: netWt.value,
    note: note.value,
    ornamentType: ornament.value,
    otherCharge: otherCharge.value,
    purity: purity.value,
    tagNumber: tagNumber.value
  }



  // check important input is not empty.

  if (!name.value) {
    alert("Add Product Name..");
    return;
  }


  try {
   
    const docRef = await addDoc(collection(db, "jewellery inventory"), productData);

    

    // tagNumber.value = docRef.id; 
    name.value = ""
    ornament.value = ""
    purity.value = ""
    grossWt.value = ""
    netWt.value = ""
    makingPercent.value = ""
    makingTotal.value = ""
    diamondWeight.value = ""
    diamondPrice.value = ""
    diamondRate.value = ""
    otherCharge.value = ""
    note.value = ""
    creationDate.value = ""

    alert(`Product ID :  ${docRef.id}`)

  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Failed to add product.");
  }

});



// close tab and redirect to dashboard function 
close.addEventListener('click', () => {

  let confirmByUser = confirm("Are You Sure, You want to close the Add Product Tab.");

  if (confirmByUser) {
    window.location.href = '../01_html_file/dashboard.html'
  };

});

// discard input data

  



  discard.addEventListener('click', () => {
  let confirmByUser = confirm("Are You Sure, This Is Wrong Data.");
  if (confirmByUser) {
    name.value = ""
    ornament.value = ""
    purity.value = ""
    grossWt.value = ""
    netWt.value = ""
    makingPercent.value = ""
    makingTotal.value = ""
    diamondWeight.value = ""
    diamondPrice.value = ""
    diamondRate.value = ""
    otherCharge.value = ""
    note.value = ""
    creationDate.value = ""

    
  
  };


});



// discard.addEventListener('click', async()=>{
//   const allProducts = await getDocs(collection(db, "jewellery inventory"))
//   allProducts.forEach((product)=>{
//     console.log(product.data())
//   })
// })






