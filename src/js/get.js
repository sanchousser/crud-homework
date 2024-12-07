const BASE__URL = 'http://localhost:3000';


function fetchStudents() {
    return fetch(`${BASE__URL}/students`)
    .then(response => response.json())
}


function fetchStudentsById(id) {
    return fetch(`${BASE__URL}/students/${id}`)
    .then(response => response.json())

    
}

fetchStudents()

fetchStudentsById(1)