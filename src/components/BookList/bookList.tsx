import { StateBook } from '../../store/slices/bookSlice'
import BookItem from '../BookItem/bookItem'
import styles from './bookList.module.css'

interface BookProps {
    books: StateBook[]
}

export default function BookList(props: BookProps) {
    const { books } = props
    return (
        <ul className={styles.book__list}>
            {books && books.map(book => {
                return <BookItem key={book.id} {...book}></BookItem>
            })}
        </ul >
    )
}
