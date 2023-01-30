import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BookList from './components/BookList/bookList';
import { getBooks } from './store/slices/bookSlice';
import { AppDispatch, RootState } from './store/store';

function App() {
  const dispatch: AppDispatch = useDispatch()
  const books = useSelector((state: RootState) => state.book.books)

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello there</h1>
      <button onClick={() => console.log(books)}>Show state</button>
      {books.length > 1 ?
        <BookList books={books}></BookList>
        : <h2>Loading</h2>
      }
    </div >
  );
}

export default App;
