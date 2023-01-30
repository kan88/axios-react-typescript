import React from 'react'
import { StateBook } from '../../store/slices/bookSlice'
import styles from './bookItem.module.css'


export default function BookItem(props: StateBook) {
    const { image, title, author, published } = props
    return (
        <li className={styles.book__item}>
            <img className={styles.book__image} src={image} width="290" height="340" alt={title}></img>
            <div className={styles.book__wrapper}>
                <span className={styles.book__title}>Title:</span>
                <span className={styles.book__body}>{title}</span>
            </div>
            <div className={styles.book__wrapper}>
                <span className={styles.book__title}>Author:</span>
                <span className={styles.book__body}>{author}</span>
            </div>
            <div className={styles.book__wrapper}>
                <span className={styles.book__title}>Published:</span>
                <span className={styles.book__body}>{published}</span>
            </div>
        </li>
    )
}
