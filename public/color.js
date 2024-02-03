const lenth = 10000

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

function Rnumber() {
    return Math.floor(Math.random() * chars.length)
}

/* const delay = n => new Promise(r => setTimeout(r, n));
async function loop() { 
    while(true) {
        await delay(1000);

        var Stringas = ''

        for (var i = 0; i < lenth/2; i++) {
            var gay = Rnumber()
            Stringas += chars[gay]
            Stringas += chars[62 - gay]
        }

        document.getElementById('RandomText').innerHTML = Stringas
    }
}

loop() */ // wanna ramdom chars to change uncomment this tho it uses a lot of cpu D:

window.onload = (function start() {
    var Stringas = ''

        for (var i = 0; i < lenth/2; i++) {
            var gay = Rnumber()
            Stringas += chars[gay]
            Stringas += chars[62 - gay]
        }

document.getElementById('RandomText').innerHTML = Stringas
})
