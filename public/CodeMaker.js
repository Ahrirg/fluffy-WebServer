
// window.onload = (function OnStart() { // I DONT HAVE A CLUE WHY THIS STOPPED Working
    fetch('/api/div')
    .then(res => res.json())
    .then(Contents => {
        for (let i in Contents) {

            var page = [
                `<div id=${Contents[i]} class="tabcontent" style="display: none;">
                <div class="into3box">
                    <div></div>
                    <div class="into2box"> 
                        <div class="buttondivs">
                            <button class="buttonStart", onclick="startProgram('${Contents[i]}')"> Start </button>
                            <button class="buttonShutdown", onclick="killProgram('${Contents[i]}')"> Shutdown </button>
                            <button class="buttonDelete", onclick="deleteProgram('${Contents[i]}')"> DELETE </button>
                        </div>
                        <div class="into2box">
                        </div>
                        <div class = "Preconsole1">
                            <div class="SimpleConsoleText">
                                <div class = "rotated" id = '${Contents[i]}console'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>`
            ]
            let ActiveCode = Contents[i] // Cia irasyti ko tu nori kad darytu kodas string pavidalu
            document.getElementById('List').innerHTML += page[0]
            document.getElementById('List2').innerHTML += `<div class="ListItem2" style="display: auto;">\n<div class="TabButtonButtonDiv">\n<button id="Button${Contents[i]}" class="TabButtonButton" onclick="openCity(event, '${Contents[i]}')">${ActiveCode}</button>\n</div>\n</div>\n`
        }
    })
// })


function test1() { //Wtf this do?
    fetch('/api-app/api-app-test1/test1')
    .then(Contents => {
        console.log('paspaude1');
    })
}

/* <div class="into3box"><div></div><div class="into2box"> <div class="buttondivs"><button class="buttonStart", onclick="startProgram(' + Contents[i] + ')"> Start </button><button class="buttonShutdown", onclick="killProgram(' + Contents[i] + ')"> Shutdown </button></div><div class="into2box"></div><div class = "Preconsole1"><div class="SimpleConsoleText"><div class = "rotated" id = Contents[i] + 'console'></div></div></div></div><div></div></div> */