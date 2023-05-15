// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    return cats.push("Ralph")
}

function destructivelyPrependCat(){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(){
    const newCat = [...cats, "Broom"];
    return newCat
}

function prependCat(){
    const newCat = ["Arnold",...cats];
    return newCat
}

function removeLastCat(){
    return cats.slice(0, 2)
}

function removeFirstCat(){
    return cats.slice(1)
}