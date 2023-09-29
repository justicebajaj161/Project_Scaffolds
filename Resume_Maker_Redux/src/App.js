import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // Use the useSelector hook to get the loading state from the Redux store
  const loading = useSelector(state => state.loading.loading);

  return (
    <>
  

      <BrowserRouter>
        <Navbar /> {/* Moved Navbar outside Routes for it to always show */}
        <Routes>
          <Route path="/" element={<ProtectedRoutes><Details /></ProtectedRoutes>} index />
          <Route path="/resume" element={<ProtectedRoutes><Resume /></ProtectedRoutes>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
