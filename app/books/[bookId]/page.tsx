
export default function BookDetails({params}: { params: {bookId: string} }) {
    return <div>Book ID: {params.bookId}</div>
}
