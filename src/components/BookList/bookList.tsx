import React from 'react'
import { StateBook } from '../../store/slices/bookSlice'
import BookItem from '../BookItem/bookItem'
import styles from './bookList.module.css'

interface BookProps {
    books: StateBook[]
}

export default function BookList(props: BookProps) {
    const { books } = props
    console.log(props)
    return (
        <ul className={styles.books__list}>
            {books && books.map(book => {
                return <BookItem key={book.id} {...book}></BookItem>
            })}
        </ul >
    )
}
