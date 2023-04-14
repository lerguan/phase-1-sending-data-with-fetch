// Add your code here


function submitData(userName, userEmail) {
    const userData = {
        name: `${userName}`,
        email: `${userEmail}`
    }
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
    }


    return fetch('http://localhost:3000/users', configObj)
    .then(function (resp) {
        return resp.json()
        })
    .then(function (data) {
        document.querySelector('body').innerHTML = data.id
    })
    .catch(function (error) {
        document.querySelector('body').innerHTML = error.message
    })
}
