module.exports = function rgbToHsv(r, g, b) {
    r = r / 255
    g = g / 255
    b = b / 255

    console.log(r,g,b);
    let max = Math.max(r, g, b), min = Math.min(r, g, b)
    let h, s, v = max

    let d = max - min
    s = max == 0 ? 0 : d / max

    if (max == min) {
        h = 0          // achromatic
    } else {
        console.log(max);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6.0 : 0.0)
                break
            case g: h = (b - r) / d + 2.0
                break
            case b: h = (r - g) / d + 4.0
                break
        }
        // h /= 6.0
    }

    return [ Math.round(h * 360), Math.round(s * 100), Math.round(v * 100) ]
}
