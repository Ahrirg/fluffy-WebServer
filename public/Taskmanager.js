const sleep = (s) =>
  new Promise((p) => setTimeout(p, s | 0))

async function timeoutHandler(Contents, size) {
    var last = 0;
    for (var i = size - 1; i > 0; i--) {
        await sleep(10)
        if (Contents[i].name != last) {
            if(Contents[i].cpu != undefined) {
                document.getElementById('taskTable').innerHTML += `<div>${Contents[i].name}</div><div>${Contents[i].cpu}</div><div>${Contents[i].memory}</div>`
            } else {
                document.getElementById('taskTable').innerHTML += `<div>${Contents[i].name}</div><div>NaN</div><div>NaN</div>`
            }
        }
        last = Contents[i].name
    }
}
  


window.onload = (function OnStart() {
    var IpInternal;
    fetch('/api/Ip')
    .then(res => res.json())
    .then(Contents => {
        IpInternal = `<p>${Contents.adress.toString()}</p>`;
        console.log(IpInternal)
    })

    fetch('/api/TaskManagerInfo')
    .then(res => res.json())
    .then(Contents => {

        console.log(Contents);;

        var CpuUsage = `<p>${Math.floor(Contents.CpuUsage* 10)}%</p>`
        var RamUsage = `<p>${Math.floor(Contents.RamUsage)}%</p>`
        var StorageUsage = `<p>${Math.floor(Contents.StorageUsage)}%</p>` 

        var valandos = Math.floor(Contents.Uptime/3600);
        var minutes = Math.floor(Contents.Uptime/60) - (valandos*60)

        var Uptime = `<p>${valandos}h ${minutes}min</p>`

        var SSH = IpInternal + ":22"
        var FTP = IpInternal + ":21"
        document.getElementById('CpuUsage').innerHTML = CpuUsage
        document.getElementById('RamUsage').innerHTML = RamUsage
        document.getElementById('StorageUsage').innerHTML = StorageUsage
        document.getElementById('Uptime').innerHTML = Uptime
        document.getElementById('IpInternal').innerHTML = IpInternal
    })

    fetch('/api/Process')
    .then(res => res.json())
    .then(Contents => {
        Contents
        var size = Object.keys(Contents).length;
        timeoutHandler(Contents, size)
    })
})