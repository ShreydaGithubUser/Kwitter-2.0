const firebaseConfig = {
      apiKey: "AIzaSyCeNmoewuhKTCi-sH4FliuLIgV3d_fc7-Q",
      authDomain: "kwitterproject-39b06.firebaseapp.com",
      databaseURL: "https://kwitterproject-39b06-default-rtdb.firebaseio.com",
      projectId: "kwitterproject-39b06",
      storageBucket: "kwitterproject-39b06.appspot.com",
      messagingSenderId: "701268582486",
      appId: "1:701268582486:web:7d0cb874ba19a3f93c9bf7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
name1 = localStorage.getItem("username");


function getData() {
      console.log("getData is running");
      firebase.database().ref("/").on('value', function (snapshot) {
            //document.getElementById("output").innerHTML = " ";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Roomnames" + " " + Room_names)
                  //End code

                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'openchat(this.id)'> " + Room_names + " </div><hr><br>"
                  document.getElementById("output").innerHTML += row;
                  console.log("getData function has ended");
            });
      });

}
getData();

function logout() {
      localStorage.removeItem("username");
      window.location = "index.html";
}
name1 = localStorage.getItem("username");
document.getElementById("welcometag").innerHTML = "Welcome " + name1 + "!!!!!!!!!!!!!!!!!!!!!";

function createroom() {
      roomname = document.getElementById("addroom").value;
      console.log(roomname);
      localStorage.setItem("Roomnames", name);

      firebase.database().ref("/").child(roomname).update({
            purpose: "create room name"

      })

      //firebase.database().ref("/").child(roomname).update({purpose : "test"})
      window.location = "kwitter_page.html";
      console.log("action succesful");
      localStorage.setItem("NewRoom", roomname);

}

function openchat(name) {
      console.log(name);

      window.location = "kwitter_page.html";
}
