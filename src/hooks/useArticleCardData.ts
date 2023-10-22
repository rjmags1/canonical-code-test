import { useEffect, useState } from 'react'
import { ArticleCardData } from '../components/ArticleCard'

function useArticleCardData(url: string) {
    const [articleCardData, setArticleCardData] = useState<
        ArticleCardData[] | null
    >(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (articleCardData !== null) return

        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                const data: ArticleCardData[] = await res.json()
                setArticleCardData(data)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { articleCardData, loading }
}

export default useArticleCardData
