function signIn(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action', oauth2Endpoint)

    let params = {
        "client_id": "970969653661-279v2rb7f9brd18mag7ocitgi023d594.apps.googleusercontent.com",
        "redirect_uri":"https://733d-2405-201-680f-d02a-45cb-da3d-56fc-f53e.ngrok-free.app",
        "response_type":"token",
        "scope":" https://www.googleapis.com/auth/drive.metadata.readonly",
        "include_granted_scopes":'true',
        "state":'pass_through_value'
    }

    for (var p in params){
        let input = document.createElement('input')
        input.setAttribute('type','hidden')
        input.setAttribute('name',p)
        input.setAttribute('value',params[p])
        form.appendChild(input)
    }
    document.body.appendChild(form)
    form.submit()

}

var params = {};
var regex = /([^&=]+)=([^&]*)/g, m;
while (m = regex.exec(fragmentString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
if (Object.keys(params).length > 0) {
    localStorage.setItem('authinfo', JSON.stringify(params) );
}

// window.history.pushState({},document.title,"/"+"test.html")

let info = JSON.parse(localStorage.getItem('authInfo'))
console.log(info)
