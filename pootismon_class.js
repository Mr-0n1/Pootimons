class Pootimon {
    constructor(name, health, atk, type){
        this.image = new Image();
        this.name = name;
        this.health = health;
        this.atk = atk;
        this.type = type;

        this.image.src = images[this.name];
    }
    talk(){
        alert(this.name);
    }
    show(){
        document.body.appendChild(this.image); //appennd into body
        document.write("<p>")
        document.write("<strong>" + this.name + "</strong><br />")
        document.write("Health: " + this.health + "<br />")
        document.write("Atk: " + this.atk + "<hr />")
        document.write("</p>")
    }
}

//papasaurus.talk();