const messageSelector=document.querySelector("#a")

const addCheckCookie=()=>{
    $('#cookie_check').css('display','block');
    $("#cookie_check").removeClass('fa fa-times');
    $('#cookie_check').addClass("fa fa-check");
    $('#cookie_check').css('color','green');
}
const addCheckPrivacy=()=>{
    $('#privacy_check').css('display','block');
    $("#privacy_check").removeClass('fa fa-times');
    $('#privacy_check').addClass("fa fa-check");
    $('#privacy_check').css('color','green');
}
const removeCheckCookie=()=>{
    $('#cookie_check').css('display','block');
    $("#cookie_check").removeClass('fa fa-check');
    $('#cookie_check').addClass("fa fa-times");
    $('#cookie_check').css('color','red');
}
const removeCheckPrivacy=()=>{
    $('#privacy_check').css('display','block');
    $("#privacy_check").removeClass('fa fa-check');
    $('#privacy_check').addClass("fa fa-times");
    $('#privacy_check').css('color','red');
}
const fetchData = (url_) => {
    document.querySelector("#error").textContent = '';
    window.axios.post('https://cookie-checker-app.herokuapp.com/', 
    JSON.stringify({url:url_})).then(res => {  
    $('#a').hide();
        if (res.data.has_cookie & res.data.privacy_policy) { 
        //document.querySelector("#a").textContent = 'this website uses cookies'
        addCheckCookie()
        
        addCheckPrivacy()
        
     }
    else if (!res.data.has_cookie & res.data.privacy_policy) {
       //document.querySelector("#a").textContent = 'this website does not use cookies'
       removeCheckCookie()
       
       addCheckPrivacy()
       
    }
    else if (res.data.has_cookie & !res.data.privacy_policy) {
        addCheckCookie()

        removeCheckPrivacy()

    }
    else {
      removeCheckCookie()

      removeCheckPrivacy()
    }
}).catch(error=>{messageSelector.textContent = 'an error occured please check back later...'})
}

const validateUrl = (url) => {
    return (url.startsWith("https://") || url.startsWith("http://")) && url.includes(".")
}


const check = (url) => {
    if (!validateUrl(url)) {
        document.querySelector("#error").textContent = 'pleae enter a valid url';
        messageSelector.textContent = ''
        return;
    }
    $('#a').show();
    messageSelector.textContent = 'Loading...'
    fetchData(url)
}

//(fetchData("https://google.com"))


document.querySelector("#submit").addEventListener("click", function(e) {
    const url = document.querySelector("#text").value

    check(url)
})

$('document').ready(function(){

})