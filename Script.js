//document.querySelector("#a").textContent = 'Winner';

//const { default: axios } = require("axios");





const fetchData = (url_) => {
    document.querySelector("#error").textContent = '';
    axios.post('https://cookie-checker.aderintosadiq.repl.co/?name=sadiq', 
    JSON.stringify({url:url_})).then(res => { console.log(res.data.has_cookie)
    if (res.data.has_cookie) {
        document.querySelector("#a").textContent = 'this website uses cookies'
    }
    else {
        document.querySelector("#a").textContent = 'this website does not use cookies'   
    }
})
}

const validateUrl = (url) => {
    return (url.startsWith("https://") || url.startsWith("http://")) && url.includes(".")
}


const check = (url) => {
    if (!validateUrl(url)) {
        document.querySelector("#error").textContent = 'pleae enter a valid url';
        document.querySelector("#a").textContent = ''
        return;
    }
    document.querySelector("#a").textContent = 'Loading...'
    fetchData(url)
}

//(fetchData("https://google.com"))


document.querySelector("#submit").addEventListener("click", function(e) {
    const url = document.querySelector("#text").value

    check(url)
})