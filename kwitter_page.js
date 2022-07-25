
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
room_name = localStorage.getItem("Roomnames");
username = localStorage.getItem("username");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;

                        //Start code
                        row = ""
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        likes = message_data['like'];
                        message = message_data['message'];
                        tag = "<h4>" + name + "<img src = 'check.png' class = 'user_tick'>" + "</h4>"
                        msg_tag = "<h5 id = 'message' class = 'message_h4'>" + message + "</h5>"
                        like_button = "<button type  ='button' id =" + firebase_message_id + " class = 'btn btn-info' value =" + likes + " onclick = 'addlike(this.id)'>" + "<span class = 'glyphicon glyphicon-thumbs-up'> likes:" + likes + "</span></button>";
                        row = tag + msg_tag + like_button + "<hr>";
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();


function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}

function sendmessage() {
      message = document.getElementById("messageinput").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: message,
            like: 0
      })
      document.getElementById("messageinput").value = "";
}

function addlike(message_id) {
      console.log("like button clicked on message that says: " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      likes = Number(likes) + 1
      console.log("new number of likes = " + likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: likes
      })
}