// Add your functions and code here
function kittens(){
  return ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}