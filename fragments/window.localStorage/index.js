localStorage.setItem("nome", "Adriano Weverton");
localStorage.idade = 28;

let users = []
let user1 = {
  username: "Adriano",
  password: "123",
};
let user2 = {
  username: "Weverton",
  password: "123",
};
users.push(user1,user2)

// criando uma propriedade no localStorage de id user para recebe um objeto e depois restaurando do localStorage atribuido o objecto ao user (Let)
localStorage.user = JSON.stringify(user1);
// user: "{\"username\":\"Adriano\",\"password\":\"123\"}"
JSON.parse(localStorage.user)
user1 = JSON.parse(localStorage.user)

localStorage.users = JSON.stringify(users)
// users : "[{\"username\":\"Adriano\",\"password\":\"123\"},{\"username\":\"Weverton\",\"password\":\"123\"}]"
for(let user of JSON.parse(localStorage.users)){
  console.log(user.username)
  console.log(user)
}