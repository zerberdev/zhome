export function bar(): Node {
    const div = document.createElement('div')
    div.id = "bar"
    div.innerHTML = `<span id="barTitle">ZHome</span>`
    return div
}

export function addBar() {
    document.body.innerHTML = bar() + document.body.innerHTML
}