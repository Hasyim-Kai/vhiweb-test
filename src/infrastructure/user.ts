export interface loginInput {
    email: string, password: string
}

export const fetchUsers = async (page: number = 1) => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`)
    return await res.json()
}

export const fetchUsersDetail = async (id: string | undefined) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    return await res.json()
}

export const fetchLogin = async (input: loginInput) => {
    const res = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input),
        cache: 'default'
    })
    return await res.json()
}