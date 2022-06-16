import baseApi from "."

interface UsuarioLogin {
    email: string,
    password: string,
}

interface UsuarioPayload extends UsuarioLogin{
    name: string,
    apartment: string,
    
}

export function cadastroUsuario(payload: UsuarioPayload) {
    return baseApi.post('/users', payload)
}

export function loginUsuario(payload: UsuarioLogin) {
    return baseApi.post('/login', payload)
}

export function listarPostsGeral() {
    return baseApi('/posts')
}

export function infoUsuario(id:any) {
    return baseApi(`/users/${id}`)
}

export function listarPostsUsuario(id:any) {
    return baseApi(`/posts/${id}`)
}

// export function testeUsuario() {
//     return baseApi.get('/users')
// }



