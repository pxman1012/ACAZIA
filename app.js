
function mutateTheArray(n, a) {
    let b = []
    let num = 0
    for (let i = 0; i < n; i++) {
        num = (a[i - 1] || 0) + a[i] + (a[i + 1] || 0)

        b.push(num)
    }
    return b
}

var a = []
var n = a.length
console.log(mutateTheArray(n, a))
