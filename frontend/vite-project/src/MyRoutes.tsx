import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Feed from './pages/Feed'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import EditUser from './pages/EditUser'
import UserProfile from './pages/UserProfile'

const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<SignUp />} />
                <Route path='/editar' element={<EditUser />} />
                <Route path='/perfil/:id' element={<UserProfile />} />
                <Route path='/feed/:idUser' element={<Feed />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes