import baseApi from "."

interface UsuarioLogin {
    email: string,
    senha: string,
}

interface UsuarioPayload extends UsuarioLogin{
    nome: string,
    senhaConfirmacao: string
    apartamento: string,
    
}

export function cadastroUsuario(payload: UsuarioPayload) {
    return baseApi.post('/users', payload)
}

export function loginUsuario(payload: UsuarioLogin) {
    return baseApi.post('/login', payload)
}

export function listarPosts() {
    return baseApi('//user-posts/:id')
}

// export function testeUsuario() {
//     return baseApi.get('/users')
// }



