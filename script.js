// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAAtoGfOIAFPMPNeO4-P_ltVOG-TOdSlPo",
    authDomain: "pmkswebsite.firebaseapp.com",
    projectId: "pmkswebsite",
    storageBucket: "pmkswebsite.appspot.comT",
    messagingSenderId: "958123421961",
    appId: "1:958123421961:web:6b647b856d3906aeba63d8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Reference to the plan collection
var plansRef = db.collection('plans');

// Function to add a plan
function addPlan() {
    var planName = document.getElementById('planName').value;
    var date = document.getElementById('date').value;
    var venue = document.getElementById('venue').value;
    var extraInfo = document.getElementById('extraInfo').value;

    // Add the plan to Firestore
    plansRef.add({
        planName: planName,
        date: date,
        venue: venue,
        extraInfo: extraInfo
    })
    .then(function(docRef) {
        console.log("Plan added with ID: ", docRef.id);
        clearForm();
    })
    .catch(function(error) {
        console.error("Error adding plan: ", error);
    });
}

// Function to retrieve plans from Firestore
function retrievePlans() {
    plansRef.get().then(function(querySnapshot) {
        var planList = document.getElementById('planList');
        planList.innerHTML = '';

        querySnapshot.forEach(function(doc) {
            var plan = doc.data();

            var li = document.createElement('li');
            li.innerText = 'Plan: ' + plan.planName +
                ' | Date: ' + plan.date +
                ' | Venue: ' + plan.venue +
                ' | Extra Information: ' + plan.extraInfo;

            planList.appendChild(li
