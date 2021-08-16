document.getElementById('submit').addEventListener('click', function () {
    const user = document.getElementById('username');
    const pass = document.getElementById('password');
    if (user.value == 'abc@gmail.com' && pass.value == 'hidepass') {
        window.location.href = 'banking.html';
    } else {
        console.log('Wrong information');
    }
});