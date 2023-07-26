export const Fetch = async (address: string, opt: { method: string, body?: string }): Promise<any> => {
    try {
        const data = await fetch(`http://localhost:7070/posts/${address}`, opt)
        switch (opt.method) {
            case 'GET':
                return data.json()
            case 'POST':
                return data.status === 204;

        }
    } catch (error) {
        console.log(error)
    }
}