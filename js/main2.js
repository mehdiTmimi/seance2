const url="http://localhost:3000/users";
const add=()=>{
 
    //recuperation de la valeur saisie
    const input=document.getElementById("nom")
    let valeur=input.value
    //verification
   /* if(valeur=="")
    {
        alert("veuillez saisir tous les champs")
        return;
    }
    // longeur
    if(valeur.length<=2)
    {
        alert("minimum 3 caracteres")
        return;
    }
    //type

    for(let i=0;i<valeur.length;i++)
    {
        if(/[a-zA-Z]/.test(valeur[i])==false)
        {
            alert("veuillez saisir un nom")
            return;
        }
    }
  */
    //envoyer les donnees au serveur avec Ajax

   const request=new XMLHttpRequest();
   request.open("post",url);
   request.setRequestHeader("content-type","application/json")
   let user={
    "nom":valeur
   };
   request.onload=()=>{
    addUser(JSON.parse(request.response))
   }
   request.send(JSON.stringify(user));
}
const button=document.getElementsByTagName("button")[0]
//button.setAttribute("class","btn")
button.classList.add("btn")
//button.setAttribute("onclick","add()")
button.addEventListener
(
    "click",
    ()=>{
        add()
        }
)
// charger les donnes depuis le serveur
const load=()=>{
   
   fetch(url).then((response) => response.json())
   .then((datas) => datas.forEach(user => {
    addUser(user);
}));
        
    
  
}
const addUser=(user)=>{
    let li=document.createElement("li")
    li.innerText=user.nom;
    document.getElementById("liste").appendChild(li)
}
load();

document.getElementById("nom").addEventListener("keyup",()=>{
    let valeur=document.getElementById("nom").value
    button.setAttribute("disabled","")
    document.getElementById("nom").setAttribute("class","invalid")

    if(valeur=="")
    {document.getElementById("errorNom").innerHTML="champ obligatoire"

        return;
    }
    // longeur
    if(valeur.length<=2)
    {
        document.getElementById("errorNom").innerHTML="minimum 3 carac"
        return;
    }
    //type
    for(let i=0;i<valeur.length;i++)
    {
        if(/[a-zA-Z]/.test(valeur[i])==false)
        {
            document.getElementById("errorNom").innerHTML="les chiffres et caracteres speciaux ne sont pas autorises"
            return;
        }
    }
    button.removeAttribute("disabled")
    document.getElementById("nom").setAttribute("class","valid")
    document.getElementById("errorNom").innerHTML=""
})