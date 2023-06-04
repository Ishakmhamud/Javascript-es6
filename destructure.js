// kono boro object theke parameter niye seta k akta variable a rakhake bole destructure
const people = { Name : "The Rock", age : 35, address:"united states of amarica", phone:687543210}

// 01. it's a one process

const Nam = people.Name
console.log(Nam)

// 02. 2nd process

const { age, address } = people
console.log(age, address)