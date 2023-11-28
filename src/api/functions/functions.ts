export const movieRequest = () => {

    const movieRequestGet = async (url:string) => {
        const response = await fetch(url)
        return response.json()
    }

    return {movieRequestGet}
}