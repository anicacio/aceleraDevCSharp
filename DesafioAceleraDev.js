const fetch = require("node-fetch");
const dataUrl = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=3955445cf984f92efe0a7380ef3ac7b1b04a670d";
const submitUrl = "https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=3955445cf984f92efe0a7380ef3ac7b1b04a670d";

const getDesafioAceleraDev = (url) => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        })
};

const sendDesafioAceleraDev = (url) => {
    fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


