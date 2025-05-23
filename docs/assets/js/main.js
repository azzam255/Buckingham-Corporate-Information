/**
    * @author  EliasDH Team
    * @see https://eliasdh.com
    * @since 01/01/2025
**/

function loadExternalContent(DivId, url) {
    let xmlhttp;
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                let content = xmlhttp.responseText;
                const currentYear = new Date().getFullYear();
                content = content.replace("{{ currentYear }}", currentYear);
                
                document.getElementById(DivId).innerHTML = content;
                let scripts = document.getElementById(DivId).getElementsByTagName('script');
                for (let i = 0; i < scripts.length; i++) {
                    let script = document.createElement('script');
                    script.text = scripts[i].text;
                    document.body.appendChild(script);
                }
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function updateHeaderImage() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    const headerImage = document.querySelector('img');

    if (currentTheme === 'dark') headerImage.src = '/Buckingham-Corporate-Information/assets/media/images/banner-white.png';
    else if (currentTheme === 'light') headerImage.src = '/Buckingham-Corporate-Information/assets/media/images/banner-black.png';
}

setInterval(updateHeaderImage, 100);