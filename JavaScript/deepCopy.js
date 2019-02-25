var arr = [1 ,2, 3]

var obj = {
    name: 'Luffy',
    hobby: ['jogging', 'basketball', 'swim']
}

// 递归深拷贝
function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj
    }

    var copy = obj instanceof Array ? [] : {}

    for (var key in obj) {
        var value = obj[key]

        if (typeof value !== 'object') {
            copy[key] = value
        } else {
            copy[key] =deepCopy(value)
        }
    }

    return copy
}

var copyArr = deepCopy(arr)
arr[0] = 100
console.log (arr) // [ 100, 2, 3 ]
console.log (copyArr) // [ 100, 2, 3 ]


var copyObj = deepCopy(obj)
obj.name = 'xiaoming'
obj.hobby[0] = 'football'
console.log(obj) // { name: 'xiaoming', hobby: [ 'football', 'basketball', 'swim' ] }
console.log(copyObj) // { name: 'Luffy', hobby: [ 'jogging', 'basketball', 'swim' ] }
