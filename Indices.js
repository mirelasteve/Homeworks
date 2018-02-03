const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([6, '1 2 3 4 -1 0']);
let print = this.print || console.log;
const len = +gets();
let arr = gets().split(' ').map(Number);
const memoryValues = new Set();
let x = 0;
let queue = [];
let cycleIndex = [];
const ind = (x, arr, queue, cycleIndex) => {
    if (x < 0) {
        return;
    }
    if (memoryValues.has(x)) {
        cycleIndex.push(x);
        return cycleIndex;
    }
    if (x >= len) {

        return;
    }

    memoryValues.add(x);
    queue.push(x);
    x = arr[x];
    ind(x, arr, queue, cycleIndex);
    return {
        queue: queue,
        cycleIndex: cycleIndex
    };
}
let result = (ind(x, arr, queue, cycleIndex));

let index = cycleIndex[0];
let str = '';
if (index) {
    for (let i = 0; i < result.queue.length; i += 1) {
        if (result.queue[i] == index) {
            str += '(' + result.queue[i];
        } else {
            str += ' ' + result.queue[i];
        }

    }
    str += ')';
    print(str);
} else {
    print(result.queue.join(' '));
}
