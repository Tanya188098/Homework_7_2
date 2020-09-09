function Array(arr) {
    this.arr = arr;
}

Array.prototype.inArray = function (string) {
        if (this.arr.includes(string)) {
            return true;
        } else {
            return false;
        }
}

const func = new Array(['hello', 'srt', 'nullic'] + '<br>');

document.write(func.inArray('hello') + '<br>'); //true
document.write(func.inArray('row')); //false

