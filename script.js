let personArr = new Array()

class Person {
  constructor(name, end, tel, mail) {
    this.name = name
    this.end = end
    this.tel = tel
    this.mail = mail
  }
}

function defineNewPerson() {
  let name = document.getElementById('name').value
  let end = document.getElementById('end').value
  let tel = document.getElementById('tel').value
  let mail = document.getElementById('mail').value
  if(name != "" && end != "" && tel != "" && mail != ""){
    let person = new Person(name, end, tel, mail)
    personArr.push(person)
    render()
  }
  else{
    alert('Preencha todos campos!')
  }

}

function editPerson(){
  alert('Essa ação edita todos os elementos da agenda!!!')
  let op = prompt('Qual deseja editar?')
  let newName = prompt('Novo nome:')
  let newEnd = prompt('Novo endereço:')
  let newTel = prompt('Novo telefone:')
  let newMail = prompt('Novo e-mail:')

  personArr[op] = new Person(newName, newEnd, newTel, newMail)
  render()

}

function orderPerson(){
  personArr.sort((a, b) => a.name > b.name )
  render()
}

function searchPerson(){
  if(personArr != ""){
    let op = prompt('ID da pessoa:')
  personArr.forEach((person, index) => {
    if(index == op){
      alert(`Nome: ${person.name}\nEndereço: ${person.end}\nTelefone: ${person.tel}\nEmail: ${person.mail}`)
    } else {
      return 0
    }
  })
  }
  else{
    alert('Agenda vazia!')
  }
  
}

function removePerson(){
  let op = prompt('Qual pessoa quer remover?')
  personArr.splice(op, 1)
  console.log(personArr)
  render()
}

function render(){
  let result = document.querySelector('.result-bg')
  result.innerHTML = ""

  if(personArr == ""){
    result.innerHTML = "Agenda vazia!"
    alert('Vazio!')
  }
  else {
    personArr.forEach((person, index) => {
      result.innerHTML += `<li>#${index} | ${person.name} | ${person.end} | ${person.tel} | ${person.mail}</li>`
    });
  }
}

function deleteAll(){
  let result = document.querySelector('.result-bg')
  personArr = []
  render()
  if(result.innerHTML == ""){
    result.innerHTML = "Agenda vazia!"
  }
}

// 10. Crie uma agenda usando array que contenha nome, endereço, telefone, email (cada elemento do array será um objeto com os dados sugeridos).
// Crie as operações (botões):
// - Inserir
// - Editar
// - Ordenar
// - Mostrar
// - Consultar
// - Remover