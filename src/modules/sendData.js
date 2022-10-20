import APIURL from "./API_URL.js";

const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-number');

const sendData = async() => {
    await fetch(`${APIURL}`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "user": inputName.value,
            "score": inputScore.value
        }),
    });
};

export default sendData;