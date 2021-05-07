window.addEventListener('DOMContentLoaded', (event) => {
    const demo = document.querySelector('.form__button__submit__login__demo')
    const userI = document.querySelector('#userIdentification')
    const userP = document.querySelector('#password')
    const formS = document.querySelector('#formS')


    demo.addEventListener('click', async e => {
        userI.value = 'demo'
        userP.value = 'demopassword'
        formS.submit()
    })
});
