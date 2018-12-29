var template = '我是{{name}}，年龄{{age}}，性别{{sex}}'
var data = {
    name: '姓名',
    age: 18
}

function render(template, data) {
    var reg = /\{\{(\w+)\}\}/
    if (reg.test(template)) {
        var name = reg.exec(template)[1]
        template.replace(reg, data[name])
        return render(template, data)
    }
    return template
}