import Button from "../../components/Button/Button"
import "./SingUp.css"

const validateFields = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const cpf = (document.getElementById("cpf") as HTMLInputElement).value
    const password = (document.getElementById("password") as HTMLInputElement).value
    const confirmPassword = (document.getElementById("confirmPassword") as HTMLInputElement).value
    if (!name || !email || !cpf || !password || !confirmPassword) {
        alert("Preencha todos os campos")
        return false
    }
    if (password !== confirmPassword) {
        alert("As senhas não coincidem")
        return false
    }
    return true
}
const saveData = () => {

}

const SingUp = () => {
    return (
        <div className="container-singup">
            <div className="div">
                <h1>Cadastro de Usuário</h1>
            </div>
            <div className="input-forms">
                <input id="name" type="text" placeholder="Digite seu nome" />
                <input id="email" type="email" placeholder="Digite seu email" />
                <input id="cpf" type="text" placeholder="Digite seu CPF" />
                <input id="password" type="password" placeholder="Digite sua senha" />
                <input id="confirmPassword" type="password" placeholder="Confirme sua senha" />
            </div>
            <Button
                text="Cadastrar"
                task={() => {
                    if (validateFields()) {
                        saveData();
                    }

                }}

            />
        </div>
    )
}
export default SingUp
