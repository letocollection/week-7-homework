$(document).ready(function(){

// Initialize Firebase

var config = {
    apiKey: "AIzaSyCdV_Llgl0vzDLJuBzETIJK6-GUuMq5p88",
    authDomain: "train-time-homework.firebaseapp.com",
    databaseURL: "https://train-time-homework.firebaseio.com",
    storageBucket: "train-time-homework.appspot.com",
};

firebase.initializeApp(config);

var trainName = "";
var destination = "";
var firstTrainTime; = "";
var frequency; = "";

$('#submitTrain').on("click".function({

        trainName = $('#trainName').val().trim();
        destination = $('#destination').val().trim();
        firstTrainTime = $('#firstTrainTime').val().trim();
        frequency = $('#frequency').val().trim();

        dataRef.ref().push({
            trainName: trainName,
            destination: destination,
            firstTrainTime: firstTrainTime,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })
        // Don't refresh the page!
        return false;
    });

    dataRef.ref().on("child_added", function(childSnapshot) {
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().trainName);
        console.log(childSnapshot.val().trainName);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().frequency);
        console.log(childSnapshot.val().firstTrainTime);
        console.log(childSnapshot.val().joinDate)

        // full list of items to the well

        $('#full-member-list').append("<div class='well'><span id='trainName'> " + childSnapshot.val().trainName + " </span><span id='destination'> " + childSnapshot.val().destination + " </span><span id='frequency'> " + childSnapshot.val().frequency + " </span><span id='firstTrainTime'> " + childSnapshot.val().firstTrainTime + " </span></div>")


        // Handle the errors

    }, function(errorObject) {
        //console.log("Errors handled: " + errorObject.code)
    });

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        // Change the HTML to reflect
        $("#trainName").html(snapshot.val().trainName);
        $("#destination").html(snapshot.val().destination);
        $("#firstTrainTime").html(snapshot.val().frequency);
        $("#frequency").html(snapshot.val().frequency);
    })
});
