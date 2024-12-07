const BASE__URL = 'http://localhost:3000';

const newStudentOsas = {
    id: 4,
    name: "Osas Ubemube",
    age: 31,
    email: "osas.ubik@example.com",
    phone: "8-800"
}

const newStudentJohn = {
    id: 5,
    name: "Johm Jones",
    age: 37,
    email: "thebones@example.com",
    phone: "1234-987"
}



function addStudent(newStudent) {
    const options = {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    }

    return fetch(`${BASE__URL}/students`, options)
    .then(response => response.json())
    
}



addStudent(newStudentOsas)
addStudent(newStudentJohn)


