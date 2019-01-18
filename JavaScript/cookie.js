document.cookie = 'userName=xiaoming'
document.cookie = 'gender=1;expire=0'

var cookie = document.cookie // userName=xiaoming; gender=1

var js_cookie = {
    set(name, value, expires, domain, path, secure) {
        var cookie = name + '=' + value
        if (expires) {
            cookie += '; expires=' + expires
        }
        if (domain) {
            cookie += '; domain=' + domain
        }
        if (path) {
            cookie += '; path=' + path
        }
        if (secure) {
            cookie += '; secure=' + secure
        }

        document.cookie = cookie
    },
    get(name) {
        var cookie = document.cookie
        var start = cookie.indexOf(name + '=')
        if (start > -1) {
            var end = cookie.indexOf(';', start)
            if (end === -1) {
                end = cookie.length
            }
            return cookie.slice(start + name.length + 1, end)
        }
        return ''
    }
}

js_cookie.set('age', 18)
console.log(cookie)
console.log(js_cookie.get('age'))
