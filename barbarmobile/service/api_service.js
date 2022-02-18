import {getStorageData} from "./storage";

export const api_address = 'https://barbar-api.herokuapp.com/api'

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

export const getBarsList = async (token) => {
    return fetch(api_address + '/bars', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export const getLoggedUser = (id) => {
    return fetch(api_address + '/users/' + id)
}