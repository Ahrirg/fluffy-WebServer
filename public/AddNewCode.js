
/*form.addEventListener('submit', (defaultas) => {

    console.log('wtf46');
    defaultas.preventDefault();

    const fname = document.getElementById('fname');
    const EXEname = document.getElementById('EXEname');
    const file = document.getElementById('file');

    const formData = new FormData();
    formData.append('fname', fname.value);
    formData.append('EXEname', EXEname.value);
    formData.append('file', file.value);

    const formData = "w";
    console.log(...formData);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then(res => res.json())
    .then(data => console.log(data));
})  */

function submiting() {

    const Fname = document.getElementById('fname');
    const EXEname = document.getElementById('EXEname');
    const Launcher =  document.getElementById('Launcher');
    const Startup = document.getElementById('Startup');
    const Console =   document.getElementById('Console');
    const files = document.getElementById('files');

    const formData = new FormData();
    formData.append('Fname', Fname.value);
    formData.append('EXEname', EXEname.value);
    formData.append('Launcher', Launcher.value);
    formData.append('Startup', Startup.checked);
    formData.append('Console', Console.checked);

    for(let i =0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
    }

    fetch('/upload', {
        method: 'POST',
        body: formData,
        
    }).then(res => res.json()).then(data => {
        console.log(data);
    })
}