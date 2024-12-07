const BASE__URL = 'http://localhost:3000';

let b = 200;

const updateStudentOsas = {
    age: 20
}

function updateStudent(updateStudent, id) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(updateStudent),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    }

    return fetch(`${BASE__URL}/students/${id}`, options)
    .then(response => response.json())
    
}



updateStudent(updateStudentOsas, 1)



