function sendPOST(user) {
    fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user),
            })

            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
            .catch(error => console.log(error));
            console.log(user)
}


function checkForm() {

    const user = {
        name: document.querySelector('#name').value,
        surname: document.querySelector('#surname').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    };

    sendPOST(user)
}

