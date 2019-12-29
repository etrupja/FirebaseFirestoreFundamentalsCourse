var db = firebase.firestore();
var employeesRef = db.collection('employees');

employeesRef.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id}`);
  });
});

// employeesRef.doc('R.Dikles').set({
//   fName: 'Ranice',
//   lName: 'Dikles',
//   email: 'rdikles@hutena.ne.jp',
//   age: 39,
//   gender: 'Female',
//   yearsOfExperience: 9,
//   isFullTime: true,
// });

// employeesRef.doc('R.Lemberton').set({
//   fName: 'Adler',
//   lName: 'Lemberton',
//   email: 'alemberton@ft.com',
//   age: 50,
//   gender: 'Male',
//   yearsOfExperience: 7,
//   isFullTime: true,
// });

