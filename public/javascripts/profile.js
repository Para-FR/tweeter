window.addEventListener('DOMContentLoaded', () => {
    const inputAvatar = document.querySelector('#input-avatar');
    const formContainer = document.querySelector('#form-container');

    formContainer.addEventListener('click', () => {
        console.log('click');
        inputAvatar.click();
    })

    inputAvatar.addEventListener('change', () => {
        formContainer.submit();
    })
})