let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.render = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
};
let circle = new Circle(10, 10, 100, "#000000");
circle.render();
