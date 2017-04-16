var i, j, m, x, y, a;

function setup() {
    var canva = createCanvas(600, 600);
    canva.parent("ventana")
}

function draw() {
    background("white");
    strokeWeight(2.5);
    stroke("red");
    line(0, 300, 600, 300);
    line(300, 0, 300, 600);

    for (i = 0; i <= 600; i += 50) { // CUADRICULA
        strokeWeight(0.5);
        stroke("gray");
        line(i, 0, i, 600);
        line(0, i, 600, i);
    }

    for (i = 0; i <= 600; i += 50) {
        strokeWeight(1.5);
        stroke("red");
        line(i, 300 - 8, i, 300 + 8);
        line(300 - 8, i, 300 + 8, i);
    }

    for (i = 150; i <= 450; i += 50) {
        for (j = 150; j <= 450; j += 50) {
            stroke("black");
            strokeWeight(5);
            point(i, j);
        }
    }

    stroke("blue");
    strokeWeight(2.5);
    if (myform.button.value == 1) {
        for (x = -3; x <= 3; x++) {
            for (y = -3; y <= 3; y++) {
                m = pow(x,2) / (x*y);
                line(300 + x * 50, 300 - y * 50, 300 + (x + 0.5) * 50, 300 - 50 * ((m * 0.5) + y));
                 //console.log("[",x, ",",y,"]",m);
                if(m == "Infinity" || isNaN(m) == true || m == "-Infinity" ) {
                    line(300 + x * 50, 300 - y * 50, 300 + x * 50, 275 - y * 50);
                }
            }
        }

    }
    if (myform.button1.value == 2) {
        for (x = -3; x <= 3; x++) {
            for (y = -3; y <= 3; y++) {
                m = pow(x, 2) + y;
                line(300 + x * 50, 300 - y * 50, 300 + (x + 0.5) * 50, 300 - 50 * ((m * 0.5) + y));
                if(m == "Infinity" || isNaN(m) == true || m == "-Infinity" ) {
                    line(300 + x * 50, 300 - y * 50, 300 + x * 50, 275 - y * 50);
            }
        }
    }
}
    if (myform.button2.value == 3) {
        for (x = -3; x <= 3; x++) {
            for (y = -3; y <= 3; y++) {
                m = pow(x, 2) + (y, 2);
                line(300 + x * 50, 300 - y * 50, 300 + (x + 0.5) * 50, 300 - 50 * ((m * 0.5) + y));
                if(m == "Infinity" || isNaN(m) == true || m == "-Infinity" ) {
                    line(300 + x * 50, 300 - y * 50, 300 + x * 50, 275 - y * 50);
            }
        }
    }
}
if (myform.button3.value == 5) {
    for (x = -3; x <= 3; x++) {
        for (y = -3; y <= 3; y++) {
            m = x+y
            line(300 + x * 50, 300 - y * 50, 300 + (x + 0.5) * 50, 300 - 50 * ((m * 0.5) + y));
            if(m == "Infinity" || isNaN(m) == true || m == "-Infinity" ) {
                line(300 + x * 50, 300 - y * 50, 300 + x * 50, 275 - y * 50);
        }
    }
}
}
}
