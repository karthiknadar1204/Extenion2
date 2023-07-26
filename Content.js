const generateHtml=(pageName)=>{
    return `
    <h1 style="color: white;">Dont watch ${pageName}</h1>
    `
};


switch(window.location.hostname){
    case "www.youtube.com":
        document.body.innerHTML=generateHtml("Youtube");
    break;

    case "www.facebook.com":
        document.body.innerHTML=generateHtml("facebook");
    break;

    case "www.netflix.com":
        document.body.innerHTML=generateHtml("netflix");
    break;



}