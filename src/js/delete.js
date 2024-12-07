const BASE__URL = 'http://localhost:3000';


function removeStudent(id) {
    const options = { method: 'DELETE' }
    return fetch(`${BASE__URL}/students/${id}`, options).then(response => response.json())
}

removeStudent(1)