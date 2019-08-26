const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const that = this
    that.value = null
    that.state = PENDING
    that.resolvedCallacks = []
    that.rejectedCallbacks = []

    function resolve(value) {
        if (that.state = PENDING) {
            that.state = RESOLVED
            that.value = value
            that.resolvedCallacks.map(cb => cb(that.value))
        }
    }

    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e }

    if (that.state === PENDING) {
        that.resolvedCallacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }

    if (that.state === RESOLVE) {
        onFulfilled(that.value)
    }

    if (that.state === REJECTED) {
        onRejected(that.value)
    }
}
