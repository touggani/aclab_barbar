export const api_address = 'https://d904-2001-861-3505-4e20-3ac3-36ee-5715-c4cb.ngrok.io/api'

export const login = (username, password) => {
    return fetch(api_address + '/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password
        })
    })
}

export const registration = (data) => {
    return fetch(api_address + '/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': data.username,
            'mailAddress': data.mailAddress,
            'password': data.password,
            'bde': data.bde
        })
    })
}

export const getBdeList = () => {
    return fetch(api_address + '/bdes')
}