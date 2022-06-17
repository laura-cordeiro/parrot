import baseApi from "."

interface UsuarioLogin {
    email: string,
    password: string,
}

interface UsuarioPayload extends UsuarioLogin{
    name: string,
    apartment: string,
    
}

interface MensagemPost {
    idUser: number | any,
    content: string
}

export function cadastroUsuario(payload: UsuarioPayload) {
    return baseApi.post('/users', payload)
}

export function loginUsuario(payload: UsuarioLogin) {
    return baseApi.post('/login', payload)
}

export function listarPostsGeral() {
    return baseApi.get('/posts')
}

export function infoUsuario(id:any) {
    return baseApi.get(`/users/${id}`)
}

export function listarPostsUsuario(id:any) {
    return baseApi.get(`/posts/${id}`)
}

export function criarPost(payload: MensagemPost) {
    return baseApi.post('/post', payload)
}



