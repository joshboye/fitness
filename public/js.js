const db = firebase.firestore();

var leaderboard = db.collection("leaderboard");
let username = "aadithya";
let rep = 23;

let count = 1
function rendo(doc) {
  const table = document.getElementById('contain');
  var row = table.insertRow();
  var pos = row.insertCell();
  var name = row.insertCell();
  var rap = row.insertCell();
  pos.innerHTML = count;
  name.innerHTML = doc.data().name;
  rap.innerHTML = doc.data().rank;
  count++;
}
//writing part 

// leaderboard.add({
//   name: username,
//   rank: rep
// })
//   .then(() => {
//     console.log("Document written with ID: ");
//   })
//   .catch((error) => {
//     console.error("Error adding document: ", error);
//   });

//reading part in descending order 
leaderboard.orderBy("rank", "desc").limit(10)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data().rank);
      rendo(doc);
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
// data = leaderboard.where('name', '==', username)
//   .onSnapshot(querySnapshot => {
//     const items = querySnapshot.docs.map(doc => {
//       return '<li>${doc.data.rank}</li>'
//     });
//   });


