let n = gets();
if (n.includes('-')) {
    n = n.slice(1, n.length);
}
if (n.includes('.')) {
    let ind = n.indexOf('.');
    let m = n.slice(0, ind);
    n = m + n.slice(ind + 1, n.length);
};

const crooked = (n) => {

    if (n >= 1 && n <= 9) {
        print(n);
        return;
    } else {
        n = n.toString().split('').map(Number).reduce((x, y) => x + y);
        crooked(n);
    }
}
if (n != 0) {
    crooked(n);
} else {
    print('0');
}
