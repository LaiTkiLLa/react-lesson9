export const getFetch = async (address: string, token: string) => {
    try {
        const data = await fetch(`http://localhost:7070/private/${address}`, {
            method: "GET", headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data.json()
    } catch (error) {
        console.log(error)
    }

}