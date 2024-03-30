
const cats = ["Milo","Otis","Garfield"];
cats.length = 0;
function destructivelyAppendCat(name){
    cats.push("Ralph"); 
    cats;
}
const cats = ["Milo","Otis","Garfield"];
cats.length = 0;
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    cats;
}
const cats = ["Milo","Otis","Garfield"];
cats.length = 0;
function destructivelyRemoveLastCat(){
    cats.pop();
}
const cats = ["Milo","Otis","Garfield"];
cats.length = 0;
function destructivelyRemoveFirstCat(){
    cats.shift();
}
const cats = ["Milo","Otis","Garfield"];
cats.length = 0;
function appendCat(name){
 cats.splice(3,0,"Broom");
}
function appendCat(name){
 const newCats=["...cats",name];
 return newCats;
}
const cats = ["Milo","Otis","Garfield"];
cats.length = 0;
function prependCat(name){
    cats.push("Bob")
}
function prependCat(name){
 const newCats=["name",...cats];
 return newCats;
}
const cats = ["Milo","Otis","Garfield"];
cats.length =0;
function removeLastCat(){
const newCats=cats.slice(-1);
return newCats;
}
const cats = ["Milo","Otis","Garfield"];
cats.length = 0;
function removeFirstCat(){
const newCats=cats.slice(1);
return newCats;
}