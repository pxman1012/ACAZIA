
function mutateTheArray(n, a) {
    let b = []
    for (let i = 0; i < n; i++) {
        let num = (a[i - 1] || 0) + a[i] + (a[i + 1] || 0)

        b.push(num)
    }
    return b
}

var a = [1,2]
var n = a.length
console.log(mutateTheArray(n, a))
