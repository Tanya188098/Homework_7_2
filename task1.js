let arr = [];
let sum = 0;
let students = {
    name: ['John', ' Kate', ' Alex'],
    surname: ['Doe', ' Peri', ' Buyam'],
    age: [30, 22, 29],
    lesson: 'Music',
}

let lesson = {
    program: ['Introduction', ' musicians', ' singing'],
    teacher: 'Natasha Petrova',
    grades: [10, 8, 9, 10],
}

//перебор и вывод двух объектов

document.write('First object: ' + '<br>');
for (let key in students) {
    document.writeln(key + ': ' + students[key] + '<br>');
}
document.write('<br>');
document.write('Second object: ' + '<br>');
for (let key in lesson) {
    document.writeln(key + ': ' + lesson[key] + '<br>')
}

document.write('<br>');

//поиск массива в объекте
for (let key in students) {
    if (Array.isArray(students[key])) {
        arr.push(students[key]);
    }
}

for (let key in lesson) {
    if (Array.isArray(lesson[key])) {
        arr.push(lesson[key]);
    }
}

document.write('<br>' + 'Two-dimensional array: ' + '<br>');
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + ', ' + '<br>');
}

//на выходе - двумерный массив arr, вывод чисел и сумма
document.write('<br>');

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (typeof(arr[i][j]) === 'number' && !isNaN(arr[i][j])) {
            document.writeln(arr[i][j] + ', ');
            sum += arr[i][j];
        }
    }
}

document.writeln('<br>' + 'Sum = ' + sum);