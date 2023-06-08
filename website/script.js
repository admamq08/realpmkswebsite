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
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "pmkswebsite",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
}
