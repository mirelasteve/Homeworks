const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets(['add Ivan Aggressive 20 1',
    'add Pesho Defensive 25 2',
    'add Georgi Neutral 30 3',
    'add Stamat Aggressive 22 2',
    'add Stamat Aggressive 40 1',

    'find Aggressive',
    'ranklist 1 5',

    // 'ranklist 1 5',
    'add Pencho Neutral 33 2',
    'find Neutral',
    'ranklist 1 3',
    'end'
]);
let print = this.print || console.log;

class Player {
    constructor(name, type, age, pos) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.pos = pos;

    }
}

class PlayerList {
    constructor() {
        this.ranks = [];
        this.types = {};
        this.length = 0;
    }
    add(name, type, age, pos) {
        const newPlayer = new Player(name, type, age, pos * 1);
        if (this.ranks[pos]) {
            let current = [];
            for (let i = pos * 1; i <= this.ranks.length; i += 1) {
                if (this.ranks[i]) {
                    current[i - pos] = this.ranks[i];
                }
            }
            this.ranks.splice(pos, this.length - pos + 1);
            this.ranks[pos] = newPlayer;
            this.ranks = this.ranks.concat(current);

        } else {
            this.ranks[pos] = newPlayer;
        }
        print('Added player ' + name + ' to position ' + pos);
        this.length += 1;
    }

    addType(name, type, age) {
        if (this.types[type]) {
            this.types[type].push(age + ' ' + name);
        } else {
            this.types[type] = [];
            this.types[type].push(age + ' ' + name);
        }
    }
    showRank(start, end) {
        let result = '';
        let counter = 1;
        for (let player of this.ranks) {
            if (counter == end * 1 + 1) {
                break;
            }
            if (player) {
                result += counter + '. ' + player.name + '(' + player.age + '); ';
                counter += 1;
            }
        }
        result = result.slice(0, result.length - 2);
        return (result.trim());
    }
    find(type) {
        let findTypes = [];
        let result = 'Type ' + type + ': ';
        for (let t of this.types[type]) {
            findTypes.push(t.split(' '));
        }
        let g = findTypes.sort(function(a, b) {
            if (a[1] === b[1]) {
                var x = a[0].toLowerCase(),
                    y = b[0].toLowerCase();
                return y - x;
            }
            return a[0] - b[0];
        });
        for (let ch of g) {
            if (ch) {
                result += ch[1] + '(' + ch[0] + '); ';
            }
        }
        result = result.slice(0, result.length - 2);
        return result.trim();
    }
}
const player = new PlayerList();
let command = gets().split(' ');
let txt = '';
while (command != "end") {
    if (command[0] == "add") {
        player.add(command[1], command[2], command[3], command[4]);
        player.addType(command[1], command[2], command[3]);
    }
    if (command[0] == "ranklist") {
        player.showRank(+command[1], command[2])
        print(player.showRank(+command[1], command[2]));
    }
    if (command[0] == "find") {
        print(player.find(command[1]));
    }
    command = gets().split(' ');
}
