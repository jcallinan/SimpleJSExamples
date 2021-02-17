
// object definition = constructor
function ScottishFold(name, favoriteToy, energy) {
    var _name = name;
    
    var _favoriteToy = favoriteToy;
    var _energy = energy;
    
    Object.defineProperty(this, 'name', { get: function(){ return _name;
    } });
    Object.defineProperty(this, 'favoriteToy', { get: function(){ return
        _favoriteToy; }, set: function(val){ _favoriteToy = val; } });

    Object.defineProperty(
        this,
        'energy', {
        get: function(){ return _energy; },
        set: function(val){
        if (val < 0) {
        _energy = 0;
        } else if (val > 5) {
        _energy = 5;
        } else {
        _energy = val;
        }
        }
        });
    } 
    ScottishFold.generalHealth = 3;
    ScottishFold.affectionateWithFamily = 5;
    ScottishFold.intelligence = 4;
    ScottishFold.kidFriendly = 5;
    ScottishFold.petFriendly = 4;
    console.log(ScottishFold.generalHealth);
    ScottishFold.generalHealth = 4;
    
lucifer = new ScottishFold("Lucifer", "Tennis ball", 4);
ScottishFold.generalHealth = 3;
console.log(lucifer.constructor.generalHealth);
console.log(lucifer.generalHealth);
console.log(lucifer.name);
console.log(lucifer.favoriteToy);

var garfield = new ScottishFold("Garfield", "Pillow", 1);
garfield.energy = -7;
console.log(garfield.energy);
garfield.energy = 35;
console.log(garfield.energy);
garfield.energy = 3;
console.log(garfield.energy);