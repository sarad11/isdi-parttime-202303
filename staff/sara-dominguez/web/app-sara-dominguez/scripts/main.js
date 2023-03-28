var registerPage= document.querySelector('.register')
var loginPage= document.querySelector('.login')
var homePage= document.querySelector('.home')
var authenticateEmail // es util porque nos serviran los datos para el cambio de sesion...
var homeMenu = homePage.querySelector('.home-menu')
var homeProfileEdit = homeMenu.querySelector('.home-profile-edit') 
var homeProfileEditPassword = homePage.querySelector('.home-profile-edit-password')


//REGISTER PAGE

// capture datas Register form
registerPage.querySelector('form').onsubmit = function(event) {
    event.preventDefault()

    var name = registerPage.querySelector('input[name=name]').value
    var email = registerPage.querySelector('input[name=email]').value
    var password = registerPage.querySelector('input[name=password]').value

    var result = registerUser(name,email,password)

    if (result === false){
        alert('exist')
        console.log(result)
    }else{
    registerPage.classList.add('off')
    loginPage.classList.remove('off')
    }
}

// LOGIN PAGE

//capture datas Login form
loginPage.querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var email = loginPage.querySelector('input[name=email]').value
    var password = loginPage.querySelector('input[name=password]').value
    var result = authenticateUser(email,password)

    if(result === false){
        alert('wrong email or password')
    }else{
        authenticateEmail = email

        var foundUser = retrieveUser(email)

        //TODO lookup user by email --> founUser

        homePage.querySelector('h6').innerText = `Hello, ${foundUser.name}`
        loginPage.classList.add('off')
        homePage.classList.remove('off')
    }      
}

//configurate anchor <a> Login

loginPage.querySelector('a').onclick =function(event){
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

//configurate anchor <a> register

registerPage.querySelector('a').conclick = function(event){
    event.preventDefault()

   registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

//HOME PAGE

//Menu my Profile
// configurate home--button myprofile--con anchor

homeMenu.querySelector('a').onclick = function(event){
    event.preventDefault()

   homeProfileEdit.classList.remove('off')
}

//configurate home--button--update password --con anchor

homeProfileEdit.querySelector('a').onclick = function(event){
    event.preventDefault()

    homeProfileEdit.querySelector('.home-profile-edit-password').classList.remove('off')
}

//configurate form to chante password (3 inputs)

homeProfileEditPassword.onsubmit = function(event){
    event.preventDefault()

    var password= homeProfileEditPassword.querySelector('input[name=password]').value
    var userNewPassword = homeProfileEditPassword.querySelector('input[name=new-password]').value
    var userConfirmNewPassword = homeProfileEditPassword.querySelector('input[name=confirm-new-password]').value
    var result = validatedNewPassword (authenticateEmail, password, userNewPassword, userConfirmNewPassword)

    if(result === false){
        alert('Validate New password failed')
    }else{
        alert('your new passport has been validated')
    }
}






