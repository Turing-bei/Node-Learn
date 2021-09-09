console.log('你好！');

const title = 'node开发之路'
let page = 1;
page = 2;
console.log(page);


const str = 'node开发';
console.log(typeof str);
console.log(str.length);
const newStr = str.replace('开发', '发财');
console.log(newStr);


const price = 39.9;
console.log(typeof price);
console.log(typeof price.toString());
console.log(price.toFixed());
console.log(price.toFixed(2));


const chapters = ['准备开发', '管理代码', '熟悉Node'];
console.log(chapters);
console.log(chapters[0]);
console.log(chapters.length);
console.log(chapters.push('提供服务'));
console.log(chapters);
console.log(chapters.pop());
console.log(chapters);



const book = {
    title: 'Node开发',
    price: 39.9,
    chapters: ['准备开发', '管理代码', '熟悉Node'],
};
console.log(book);
console.log(book.title);
console.log(book.price);
console.log(book.chapters);


let speed = 100;
let limit = 120;
console.log(speed > limit);
console.log(speed === limit);
console.log(speed < limit && limit > 100);
console.log(speed < limit || limit > 120);



const one = 'Node开发';
const two = 'bei';
const descripition = `《 ${one} 》, 作者：${two}`;
console.log(descripition);



function log() {
    console.log('LOG::');
};
log();
const logs = (message, prefix) => {
    console.log(prefix, message,)
};
logs('hello ~', 'LOGS::');
logs('你好！', '日志::');


const greet = name => '你好！' + name;
const greeting = greet('bei');
console.log(greeting);



const books = {
    title: 'Node开发',
    toString() {
        return `《${this.title}》`;
    }
}
console.log(books.toString());




// 解构对象
const look = {
    title: 'Node开发',
    author: 'bei',
}
const { title: tit, author } = look
console.log(tit, author);



// 解构数组
const fruits = ['苹果', '香蕉', '桔子'];
let [f1, f2, f3] = fruits;
console.log(f1, f2, f3);



// 展开数组
const color = ['red', 'black', 'blue'];
const vegetables = ['土豆', '茄子', '辣椒'];
const food = [...color, ...vegetables];
console.log(food);



// 展开对象
const data = {
    title: 'Node开发',
};
const people = {
    name: 'bei',
};
const overall = {
    ...data,
    people,
};
console.log(overall);

// if 判断条件
let time = 100;
if (time > 120) {
    console.log('时间已到');
} else if (time === 100) {
    console.log('时间相等');
} else {
    console.log('时间未到');
}


// switch 检测不同的情况
let gear = 'D';
switch (gear) {
    case 'P':
        console.log('停车');
        break;
    case 'R':
        console.log('倒车');
        break;
    case 'D':
        console.log('开车');
        break;
    case 'N':
        console.log('空档');
        break;
    default:
        console.log('档位异常！');
        break;
}


// throw 抛出异常
const drive = () => {
    throw new Error('没油了！');
}
// drive();



// try...catch 先试着做，处理发生的异常情况
const getGasoline = () => {
    return false;
}
const run = () => {
    const gasoline = getGasoline();

    if (!gasoline) {
        throw new Error('没油了！');
    }
    console.log('开车了！');
}
try {
    drive();
} catch (error) {
    console.log(error.message);
}



// 类 Class
class Car {
    engine;


    drive() {
        console.log('开车🚗');
    }
}
const c1 = new Car();
c1.drive();
console.log(c1)



// 构造方法 Constructor
class apple {
    constructor() {
        // 自动执行
        console.log('iphone');
    }
    computer() {
        console.log('macbook');
    }
}
const cp = new apple();
cp.computer();
console.log(cp);



// this 引用对象本身
class Cars {
    engine;

    constructor(engine, color) {
        this.engine = engine;
        console.log('一辆崭新的汽车', color);
    }

    drive() {
        console.log('开车🚗');
    }
}
const c2 = new Cars('V8', 'red');
const c3 = new Cars('V12', 'black');
console.log(c2, c3);



// 继承 Extends
class PickupTruck extends Cars { }
const p1 = new PickupTruck('V8');
p1.drive();
console.log(p1);