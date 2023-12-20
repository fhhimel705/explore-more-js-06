let names = ["abdul","joestar","bonny","kakashi","abdul","bonny","kakashi"];

function duplicate(names){
    let newNames = [];
    for (i = 0; i < names.length; i++) {
      let name = names[i];
      if(newNames.includes(name) === false){
        newNames.push(name);
      }

    }
    return newNames;
}
console.log(duplicate(names));