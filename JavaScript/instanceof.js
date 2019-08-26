// L instanceof R
function instance_of(L, R) {
    var O = R.prototype // 取 R 的显式原型
    L = L.__proto__ // 取 L 的隐式原型

    while(true) {
        if (L === null) { //已经找到顶层
            return false
        }
        if (L === O) { //当 O 严格等于 L 时，返回 true
            return true
        }
        L = L.__proto__  //继续向上一层原型链查找
    }
}

instance_of({}, Object) // true
