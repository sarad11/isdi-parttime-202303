import { validators } from 'com'

const { validateToken, validateUserAvatar, validateCallback } = validators


export function updateUserAvatar(token, newAvatar, callback) {
    validateToken(token)
    validateUserAvatar(newAvatar)

    if (callback) {
        validateCallback(callback)


        const xhr = new XMLHttpRequest

        xhr.onload = () => {
            const { status } = xhr

            if (status !== 204) {
                const { response: json } = xhr
                const { error } = JSON.parse(json)

                callback(new Error(error))

                return
            }
            callback(null)
        }

        xhr.onerror = () => {
            callback(new Error('conection error'))
        }

        xhr.open('PATCH', `${import.meta.env.VITE_API_URL}/users`)

        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('authorization', `Bearer ${token}`)


        const data = { avatar: newAvatar }
        const json = JSON.stringify(data)

        xhr.send(json)

    } else
        return fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ avatar: newAvatar })
        })
            .then(res => {
                if (res.status !== 204)
                    return res.json().then(({ error: message }) => { throw new Error(message) })
            })
}