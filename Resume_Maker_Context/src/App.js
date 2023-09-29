
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {loading, setLoading} = useContext(LoadingContext);
  return (
    <>
    
    <BrowserRouter>
   
           
            
    
      
         
          <Routes>

           
            
            
            <Route path="/" element={<Navbar />}>
            <Route index element={<ProtectedRoutes><Details /></ProtectedRoutes>} />
            <Route path="/resume" element={<ProtectedRoutes><Resume /></ProtectedRoutes>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
             
            </Route>
         

          </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
