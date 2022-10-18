export class Estrella {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.opacity = (Math.floor(Math.random() * 50) + 50) / 100;
    }

    // Hauria de dibuixar la estrella al context que li passes per paràmetre
    // No sé per què NO FUNCIONA
    draw(context) {
        context.fillStyle = 'rgba(0,0,0,' + this.opacity + ')';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
}