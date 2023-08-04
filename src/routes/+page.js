
export const load = async ({fetch}) => {
    const newsRes = await fetch ('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8bHDdkntYPLFY8qM6meGKsXdIenDevGt')
    const newsData = await newsRes.json()
    const news = newsData.results
    return {
        news
    }
}