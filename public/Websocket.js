var ip = window.location.host.toString().replace(":6900","")
console.log(ip)
const socket = new WebSocket(`ws://${ip}:3000`)

socket.addEventListener('message', function (event) {

    var sk = event.data.toString().split('/');
    //console.log(sk[0] + " - " + sk[1])
    document.getElementById(`${sk[0]}console`).innerHTML += "<span>" +  sk[1] + " </span>\n"
 
})

function killProgram(Fname) {
    socket.send(Fname + '/kill')
}

function deleteProgram(FName) {
    socket.send(FName + '/kill')
    
    const formData = new FormData();
    formData.append('Fname', FName.toString());

    console.log(...formData)

    fetch('/app/delete', {
        method: 'POST',
        body: formData,
    }).then(res => res.json()).then(data => {
        console.log("Istrynem "+ data);
        window.location.reload();
    })
    // wtF ???????????? idk watafaka was going here but it works ?
} 
