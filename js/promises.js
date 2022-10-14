const seConnecter=(email, pwd)=>{
    return new Promise( (resolve,reject)=>{
        setTimeout(() => {
            if (email == "mehdi@gmail.com" && pwd == "12345") 
                resolve("connected")
            else 
                reject("invalid crendentiels")
          }, 3000);
    });
}
const getStudents = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve([
              { nom: "ali", age: 23 },
              { nom: "ghita", age: 22 },
            ]);
          }, 3000);
    })
  };
/*
seConnecter("mehdi@gmail.com","12345")
.then(()=>{console.log("reussi"); return getStudents()})
.then(data=>console.log(data))
.catch(error=>console.log(error))
*/
async function teste(){
    console.log("debut")
    let res= await seConnecter("mehdi@gmail.com","12345")
    console.log(res)
    let students= await getStudents();
    console.log(students)
    console.log("fin")
}