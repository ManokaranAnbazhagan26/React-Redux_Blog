import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'
import { fetchUsers } from './features/users/usersSlice.jsx'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { fetchPosts } from './features/posts/postsSlice.jsx'

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());// Posts um load aakittum page ha reload panna ha


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
