const n = +gets();
let arr = gets().split(' ').map(Number);
let result = [];
for (let i = 0; i < arr.length; i += 1) {
    let n = Math.max(...arr);
    let ind = arr.indexOf(n);
    result[ind] = i;
    arr[ind] = -Infinity;
}
print(result.map((x) => x += 1).join(' '));
