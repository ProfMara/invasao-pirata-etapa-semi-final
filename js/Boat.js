class Barco {
    constructor(x, y, width, height,animacao) {

        this.animacao = animacao;
        this.speed = 0;
        this.image = loadImage("/assets/boat.png")
        this.quebrou = false;
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    animate(){
        this.speed +=0.05;
    }
    

    remove(index) {
        this.quebrou = true;
        
        
        this.speed = 0.05;
        this.width = 300;
        this.height = 300;
        setTimeout(() => {
            Matter.World.remove(world, barcos[index].body);
            delete barcos[index];
        }, 2000);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        var indice = floor(this.speed%this.animacao.length);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animacao[indice], 0, 0, this.width, this.height);
        pop();
    }
}