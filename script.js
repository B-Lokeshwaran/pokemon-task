async function getUser() {
  let users;
  try {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=50",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    users = await data.json();
    // for(let i=1;i<=50;i++){
     document.getElementById("poke").innerHTML=users.results
    // }
  } catch (error) {
    console.log(error);
  }
  return users;
}

getUser();

let getability=map((users)=>{console.log(users.results.abilities)});


let getmoves=map((users)=>{console.log(users.results.moves)});

let getweight=map((users)=>{console.log(users.results.weight)});
