const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const monthName = (monthIdx: number) => MONTHS[monthIdx]

function ArticleCardAuthorLabel({ author, date }: ArticleCardAuthorLabelProps) {
    const parsedDate = new Date(date)
    const { name, link } = author
    const dateString = `${parsedDate.getUTCDate()} ${monthName(
        parsedDate.getUTCMonth()
    )} ${parsedDate.getUTCFullYear()}`

    return (
        <p className="p-heading--6">
            By <a href={link}>{name}</a> on {dateString}
        </p>
    )
}

export default ArticleCardAuthorLabel

export type Author = {
    name: string
    link: string
}

type ArticleCardAuthorLabelProps = {
    date: string
    author: Author
}
