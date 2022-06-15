import baseApi from "."

interface UsuarioLogin {
    email: string,
    senha: string,
}

interface UsuarioPayload extends UsuarioLogin{
    nome: string,
    apartamento: string,
    linkFoto: string
}

export function cadastroUsuario(payload: UsuarioPayload) {
    return baseApi.post('/cadastro', payload)
}

export function loginUsuario(payload: UsuarioLogin) {
    return baseApi.post('/login', payload)
}

