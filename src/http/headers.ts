const headers = {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
}

export default headers