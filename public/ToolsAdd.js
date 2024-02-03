
function Submiting() {
    var Tname = document.getElementById('Tname').value
    var link = document.getElementById('link').value

    const formData = new FormData();
    formData.append('Tname', Tname.toString());
    formData.append('link', link.toString());

    fetch('/api/ToolsAdd', {
        method: 'POST',
        body: formData,
    })
}

function Delete() {
    var DTname = document.getElementById('DTname').value

    const formData = new FormData();
    formData.append('DTname', DTname.toString());

    fetch('/api/ToolsDelete', {
        method: 'POST',
        body: formData,
    })
}
