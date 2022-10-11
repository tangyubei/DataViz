let points = []

for (let i = 0; i < 500; i++) {
    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 600);
    let point = {
        "x": x,
        "y": y
    }
    points.push(point);
}

console.log(points[2])