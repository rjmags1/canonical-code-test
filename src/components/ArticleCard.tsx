import ArticleCardAuthorLabel, { Author } from './ArticleCardAuthorLabel'

function ArticleCard({ data }: ArticleCardProps) {
    const {
        date,
        title,
        link: { rendered: url },
        featured_media: imageUrl,
        _embedded: { author },
    } = data

    return (
        <div
            className="col-4 p-card"
            style={{
                filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
                borderTop: '3px solid purple',
                borderRadius: '4px 4px 0 0',
                maxWidth: '320px',
                display: 'flex',
                justifyContent: 'start',
                flexDirection: 'column',
            }}
        >
            <header
                className="p-text--small-caps u-no-padding"
                style={{ fontWeight: 300 }}
            >
                BLOG
            </header>
            <hr className="u-sv1" />
            <img className="p-card__image" alt="" src={imageUrl} />
            <h3 className="p-heading--4">
                <a href={url}>{title.rendered}</a>
            </h3>
            <ArticleCardAuthorLabel date={date} author={author[0]} />
            <div
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                }}
            >
                <hr className="u-sv1" />
                <footer className="p-text--small u-no-margin">Article</footer>
            </div>
        </div>
    )
}

export default ArticleCard

export type ArticleCardData = {
    date: string
    title: {
        rendered: string
    }
    link: {
        rendered: string
    }
    featured_media: string
    _embedded: {
        author: Author[]
    }
    id: number
}

type ArticleCardProps = {
    data: ArticleCardData
} & React.PropsWithChildren
