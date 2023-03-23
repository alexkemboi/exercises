function persons(personsArray){
    let adults=[];
for(let i=0;i<personsArray.length;i++){
    if(personsArray[i].age>=18){
        adults.push(personsArray[i]);
    }
}
return adults;
}
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 3 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 4 },
    { name: "Eva", age: 2 }
  ];
console.log(persons(people));  