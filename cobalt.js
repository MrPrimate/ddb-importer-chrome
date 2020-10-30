'use strict';

let getCobaltCookie = document.getElementById('CobaltCookie');

const getCobaltSessionToken = () => {
  return new Promise((resolve, reject) => {
    const filter = {
      name: "CobaltSession",
      domain: ".dndbeyond.com",
    };

    chrome.cookies.getAll(filter, function (cookies) {
      if (cookies.length > 0) resolve(cookies[0].value);
      else reject(null);
    });
  });
};

getCobaltCookie.onclick = function(element) {
    // try to get an existing session cookie
    getCobaltSessionToken().then((result) => {
        navigator.clipboard.writeText(result).then(() => {
            //clipboard successfully set
        }, () => {
            console.log("Clipboard access failed!");
        });
    })
    .catch((error) => {
        console.log("No Cobalt Session cookie found yet");
    });
};
