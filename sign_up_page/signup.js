function Loginpage(){
    let name = document.getElementById("username")
    let password = document.getElementById("password")
    const usernameValue = name.value
    const passwordValue = password.value
    localStorage.setItem('user-name',usernameValue)
    localStorage.setItem('user-password',passwordValue)

    alert('Successfully Sign Up....!')
    window.location.href = "/my projects/myproject.html"
}