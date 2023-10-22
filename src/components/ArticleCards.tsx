import ArticleCard from './ArticleCard'
import useArticleCardData from '../hooks/useArticleCardData'

const DATA_URL =
    'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'

function ArticleCards() {
    const { articleCardData, loading } = useArticleCardData(DATA_URL)

    return loading || !articleCardData ? null : (
        <>
            {articleCardData.map((data) => (
                <ArticleCard key={data.id} data={data} />
            ))}
        </>
    )
}

export default ArticleCards
