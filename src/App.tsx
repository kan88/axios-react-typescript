import { useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BookList from './components/BookList/bookList';
import { getBooks } from './store/slices/bookSlice';
import { AppDispatch, RootState } from './store/store';
import axios from 'axios';

function App() {
  const dispatch: AppDispatch = useDispatch()
  const books = useSelector((state: RootState) => state.book.books)
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    // const formData = new FormData(evt.currentTarget)
    const res = axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    })

    console.log(res)
  }
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>This app contains RTK, createAsyncThunk, axios get/post types</h1>
      <hr></hr>
      <h2>mock data from fake api axios get</h2>
      {books.length > 1 ?
        <BookList books={books}></BookList>
        : <h2>Loading</h2>
      }
      <h2>show actual state</h2>
      <button onClick={() => console.log(books)}>Show state</button>
      <h2>send fake data to json placeholder</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" className='form__title' name='title' placeholder='title' />
        <input type="text" className='form__body' name='body' placeholder='body' />
        <input type="text" className='form__userid' name='userId' placeholder='id' />
        <button type='submit'>submit</button>
      </form>
    </div >
  );
}

export default App;
