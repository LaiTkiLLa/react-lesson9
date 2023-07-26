export const postFetch = async (auth: { login: string, password: string }): Promise<any> => {
    try {
        return fetch('http://localhost:7070/auth', {
            method: "POST", body: JSON.stringify({
                ...auth
            })
        })
    } catch (error) {
        console.log(error)
    }
}