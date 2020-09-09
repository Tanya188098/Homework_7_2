function Array(arr) {
    this.arr = arr;
}

Array.prototype.myPush = function (...element) {
    let result = this.arr + ', ' + element;
    return result.split(',');
}

Array.prototype.myJoin = function (separator) {
    let result = [];
    let json;
    let rslt;
    for (let i = 0; i < this.arr.length; i++) {
        if (separator === undefined) {
            result.push(this.arr[i]);
            json = JSON.stringify(result);
            rslt = json.replace(/[\""/[\]]/g, '');

        } else {
            result.push(this.arr[i] + separator);
            json = JSON.stringify(result);
            rslt = json.replace(/[\.,""/[\]]/g, '');
        }
    }
    return rslt;
}

Array.prototype.myReverse = function () {
    let newArr = [];
    for (let i = this.arr.length - 1; i >= 0; i--) {
        newArr += this.arr[i] + ', ';
    }
    return newArr;
}

const list = new Array([13, 5, 4, 6, 90, 'fruits']);