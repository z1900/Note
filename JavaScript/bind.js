var name = 'window'

var person = {
    name: 'person'
}

function getName(age) {
    console.log(this.name, age)
}

// call
Function.prototype.call2 = function(ctx) {
    var ctx = ctx || window
    ctx.fn = this
    
    var result
    if (!arguments[1]) {
        result = ctx.fn()
    } else {
        var args = []
        for (var i = 1, len = arguments.length; i < len; i++) {
            args.push('arguments[' + i + ']')
        }

        result = eval('ctx.fn(' + args + ')')
    }

    delete ctx.fn
    return result
}

console.log(getName.call2(person, 18)) // person 18

// apply
Function.prototype.apply2 = function(ctx, args) {
    var ctx = ctx || window
    ctx.fn = this

    var result
    if (!(args && args.length)) {
        result = ctx.fn()
    } else {
        var arr = []
        for (var i = 0, len = args.length; i < len; i++) {
            arr.push('args[' + i + ']')
        }

        result = eval('ctx.fn(' + arr + ')')
    }

    delete ctx.fn
    return result
}

console.log(getName.apply2(person, [18])) // person 18

// bind
Function.prototype.bind2 = function(ctx) {
    var fn = this
    var args = [].slice.call(arguments, 1)
    return function() {
        var bindArgs = [].slice.call(arguments, 0)
        return fn.apply(ctx, args.concat(bindArgs))
    }    
}

var fn = getName.bind2(person)
fn(18) // person 18
