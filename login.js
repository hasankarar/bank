document.getElementById('btn_submit').addEventListener('click', function () {

    const userField = document.getElementById('user_email');
    const email = userField.value;


    const passwordField = document.getElementById('user_password');
    const pass = passwordField.value;

    if (email === 'sontan1234@gmail.com' && pass === '1234') {
        window.location.href = 'home.html';
    } else {
        alert('information wrong !!')
    }
})