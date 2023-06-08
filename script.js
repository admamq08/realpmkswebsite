function addPlan() {
    // Retrieve input values
    var planName = document.getElementById("planName").value;
    var date = document.getElementById("date").value;
    var venue = document.getElementById("venue").value;
    var extraInfo = document.getElementById("extraInfo").value;

    // Validate input values
    if (planName === "" || date === "" || venue === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Create new row and cells
    var table = document.getElementById("planTable");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var dateCell = row.insertCell(1);
    var venueCell = row.insertCell(2);
    var extraInfoCell = row.insertCell(3);

    // Set cell values
    nameCell.textContent = planName;
    dateCell.textContent = date;
    venueCell.textContent = venue;
    extraInfoCell.textContent = extraInfo;

    // Set label for extra information cell
    extraInfoCell.setAttribute("data-label", "Extra Information");

    // Clear input fields
    document.getElementById("planName").value = "";
    document.getElementById("date").value = "";
    document.getElementById("venue").value = "";
    document.getElementById("extraInfo").value = "";

// Function to add a group photo
function addPhoto(photoUrl) {
    var photoContainer = document.getElementById("photoContainer");
    var photoElement = document.createElement("img");
    photoElement.src = photoUrl;
    photoContainer.appendChild(photoElement);
}
var firebaseConfig = {
    apiKey: "AIzaSyAAtoGfOIAFPMPNeO4-P_ltVOG-TOdSlPo",
    authDomain: "pmkswebsite.firebaseapp.com",
    projectId: "pmkswebsite",
    storageBucket: "pmkswebsite.appspot.com",
    messagingSenderId: "958123421961",
    appId: "1:958123421961:web:6b647b856d3906aeba63d8",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
}
