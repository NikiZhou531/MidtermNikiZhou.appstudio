
var myAnimals = ["dog", "cat", "horse", "meerkat"]
var inptAnimals = prompt("Please enter an animal name.")
var lowerCaseAnimals = inptAnimals.toLowerCase()
myAnimals.push(lowerCaseAnimals)
var outputAnimals = myAnimals[myAnimals.length -1]
alert(`The last animal is a/an ${outputAnimals}`)
