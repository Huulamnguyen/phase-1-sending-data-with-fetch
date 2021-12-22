// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject);

function submitData(userName, userEmail){

    const userData = {
        name: userName,
        email: userEmail
    }
    
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userData),
    }

    return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then(userData => document.querySelector('body').append(document.createElement('p').innerText = userData.id))
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        document.querySelector('body').append(document.createElement('p').innerText = error.message)
        console.log(error.message);
    });
}