//js dictionaries / associative array
var images = [];
images["Pootis"] = "vaca.png";
images["Pootismon"] = "cerdo.png";
images["Pootisaurus"] = "pollo.png";
//console.log(images);

var pootis = new Pootimon("Pootis", 100, 20, "earth");
var pootismon = new Pootimon("Pootismon", 200, 5, "dark");
var pootisaurus = new Pootimon("Pootisaurus", 230, 10, "fire")
//console.log(pootis, negromon, papasaurus);


//array for pootimons
var collection = [];
collection.push(pootis);
collection.push(pootismon);
collection.push(pootisaurus);

//console.log(collection)

for(var pootimon of collection){ //"of" for ECMASCRIPT6, "of" shows the instance instead of the index ("in")
    pootimon.show();
}