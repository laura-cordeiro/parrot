import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserProfile from './pages/UserProfile'

const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<SignUp />} />
                <Route path='/perfil/:id' element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes