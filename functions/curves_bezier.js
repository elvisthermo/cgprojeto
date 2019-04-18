function bezier(pts) {
    return function (t) {
        for (var a = pts; a.length > 1; a = b)  // do..while loop in disguise
            for (var i = 0, b = [], j; i < a.length - 1; i++)  // cycle over control points
                for (b[i] = [], j = 0; j < a[i].length; j++)  // cycle over dimensions
                    b[i][j] = a[i][j] * (1 - t) + a[i+1][j] * t;  // interpolation
        return a[0];
    }
}


var b = bezier([[10, 30 ],[25, 10],[40, 30]]);
for (var t = 0; t <= 100; t++)
    buffer.putPixel(Math.round(b(t/100)[0]),Math.round(b(t/100)[1]));

