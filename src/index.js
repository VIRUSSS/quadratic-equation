module.exports = function solveEquation(equation) {
  // your implementation
    equation = equation.replace(/\s/g, '');
    equation = equation.replace('*x^2', '');
    equation = equation.replace('*x', '');
    const args = equation.match(/-?\d+/g);

    const a = args[0] ? parseInt(args[0]) : 0;
    const b = args[1] ? parseInt(args[1]) : 0;
    const c = args[2] ? parseInt(args[2]) : 0;

    const d = b * b - 4 * a * c;

    const calcX1 = () => Math.round((-b + Math.sqrt(d)) / (2 * a));
    const calcX2 = () => Math.round((-b - Math.sqrt(d)) / (2 * a));

    let result;
    if (d > 0) {
        const x1 = calcX1();
        const x2 = calcX2();
        result = [x1, x2];
    } else if (d == 0) {
        const x1 = calcX1();
        result = [x1];
    } else {
        result = null;
    }
    result.sort((x, y) => x - y);

    return result;
}
