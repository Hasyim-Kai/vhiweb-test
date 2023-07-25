export const fetchUsers = async (page: number = 1) => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`)
    return await res.json()
}

export const fetchUsersDetail = async (id: string | undefined) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    return await res.json()
}