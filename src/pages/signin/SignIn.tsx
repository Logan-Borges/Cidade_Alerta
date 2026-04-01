import { useState } from "react"
import Button from "../../components/Button/Button"
import "./SignIn.css"

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if (!email || !password) {
            alert("Preencha todos os campos")
            return
        }
        // Aqui você pode adicionar a lógica de autenticação
        alert("Login realizado com sucesso!")
    }

    return (
        <div className="content">
            <div className="container-signin">
                <div className="title-signin">
                    <h2>Login</h2>
                </div>
                <div className="input-forms">
                    <input
                        id="email"
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        text="Entrar"
                        fullWidth
                        task={handleLogin}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignIn