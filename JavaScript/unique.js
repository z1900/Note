var array = [1, 1, '1', '1']

// indexOf
function unique(array) {
    var result = []

    for (var i = 0, len = array.length; i < len; i++) {
        if (result.indexOf(array[i]) < 0) {
            result.push(array[i])
        }
    }

    return result
}


// filter
function unique(array) {
    var result = array.filter(function(item, index, array) {
        return array.indexOf(item) === index // 判断元素第一次出现的索引是否等于当前索引
    })

    return result
}


// ES6 set
function unique(array) {
    return [...new Set(array)]
}


// ES6 map
function unique(array) {
    var map = new Map()
    return array.filter(function(item) {
        return !map.has(item) && map.set(item, 1)
    })
}


// 根据对象的属性去重
var objArray = [
    {
        id: 1,
        name: 'xiaoming'
    },
    {
        id: 2,
        name: 'xiaohua'
    },
    {
        id: 1,
        name: 'xiaoming'
    }
]

function unique(array, property) {
    var hash = {}

    var result = array.reduce(function(accu, curr) {
        var key = hash[curr[property]]
        if (!key) {
            key = true
            accu.push(curr)
        }
        return accu
    }, [])

    return result
}
