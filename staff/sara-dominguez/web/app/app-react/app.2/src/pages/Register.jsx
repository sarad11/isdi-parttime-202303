import { registerUser } from "../logic/registerUser.js"

export default function Register({onLoginClick, onUserRegistered}) {
    console.log('Register->render')

    function handleLoginClick(event) {
        event.preventDefault()

        onLoginClick()
    }

    function handleRegister (event) {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
    
        try{
            registerUser(name,email,password)

            onUserRegistered()
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="register container">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleRegister}>
            <input className="register-input" type='text' name='name' placeholder='name' />
            <input className="register-input" type='text' name='email' placeholder='email' />
            <input className="register-input" type='text' name='password' placeholder='password' />
            <button className="register-button" type="submit">Register</button>
        </form>
        <p className="register-text-goToLogin"><a href="" onClick={handleLoginClick}> Go to login</a></p>
    </div>

}