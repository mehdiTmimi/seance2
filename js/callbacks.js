const seConnecter = (email, pwd, f1) => {
  setTimeout(() => {
    if (email == "mehdi@gmail.com" && pwd == "12345") f1(1);
    else f1(0);
  }, 3000);
};
const getStudents = (onSuccess) => {
  setTimeout(() => {
    onSuccess([
      { nom: "ali", age: 23 },
      { nom: "ghita", age: 22 },
    ]);
  }, 3000);
};
const getNotes = (onSuccess) => {
  setTimeout(() => {
    onSuccess([
      { nom: "ali", note: 20 },
      { nom: "ghita", note: 10 },
    ]);
  }, 3000);
};

// callback hell
const teste = () => {
  seConnecter("mehdi@gmail.com", "12345", (res) => {
    if (res == 1) {
      console.log("connected");
      getStudents((data) => {
        console.log(data);
        getNotes((data) => {
          console.log(data);
        });
      });
    } else console.log("not connected");
  });
};
