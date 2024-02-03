function startProgram(Fname) {

    const formData = new FormData();
    formData.append('Fname', Fname);
    

    console.log('kazkas veik cia')
    fetch('/app', {
        method: 'POST',
        body: formData,
        
    }).then(res => res.json()).then(data => {
        console.log(data);
        window.location.reload();
    })
}

//document.getElementById().in