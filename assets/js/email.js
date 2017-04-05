function action(){
    var firebaseRef = firebase.database().ref();
    var input = document.getElementById("email").value;
    
     return firebaseRef.child("Emails").once('value').then(function(snapshot) {
        var emails = snapshot.val();
        emails.push(input);
        firebaseRef.child("Emails").set(emails);
    });
}