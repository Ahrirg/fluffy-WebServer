
fetch('/api/Tools')
.then(res => res.json())
.then(Contents => {
    var words = Contents.toString().replace('\r', '')
    var array = words.replace('\r', '').split('\n')
        for (let i in array) {
        var arr = array[i].split('|')
        console.log(arr[0])
        const link = arr[0]
        var Mainbuttons = [
            `<div> <a target="_blank" href='${link}'>
                <button class="selectorToolsButton">${arr[1]}</button>
            </a></div> `
        ]
        document.getElementById('Toolsdiv').innerHTML += Mainbuttons;
    }
    var end = [
        `<a target="_blank" href='/api/ToolsPage'>
            <button class="selectorToolsButton" style="font-size: 50px;">+</button>
        </a>`
    ]

    document.getElementById('Toolsdiv').innerHTML += end;
})


/* <div class="into3box"><div></div><div class="into2box"> <div class="buttondivs"><button class="buttonStart", onclick="startProgram(' + Contents[i] + ')"> Start </button><button class="buttonShutdown", onclick="killProgram(' + Contents[i] + ')"> Shutdown </button></div><div class="into2box"></div><div class = "Preconsole1"><div class="SimpleConsoleText"><div class = "rotated" id = Contents[i] + 'console'></div></div></div></div><div></div></div> */