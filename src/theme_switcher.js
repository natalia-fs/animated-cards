let theme = localStorage.getItem('theme');

const themeToggle = document.querySelector('#theme-toggle')

const enableLightMode = () => {
    document.body.classList.toggle('lightmode');

    localStorage.setItem('theme', 'light');
}

const disableLightMode = () => {
    document.body.classList.toggle('lightmode');
    localStorage.setItem('theme', 'dark');
}

if (theme === 'light') {
    enableLightMode()
}

themeToggle.addEventListener("click", () =>{
    theme = localStorage.getItem('theme'); 
    if(theme !== 'light'){
        enableLightMode()
    } else {
        disableLightMode();
    }
});

// 


// let theme = localStorage.getItem('theme');

// const themeToggle = document.querySelector('#theme-toggle')

// if (theme === 'dark') {
//     localStorage.setItem('theme', 'dark')
// }

// const switchTheme = () => {
//     theme = localStorage.getItem('theme'); 
//     document.body.classList.toggle('lightmode');
//     if(theme !== 'light'){localStorage.setItem('theme', 'light')}
//     else {localStorage.setItem('theme', 'dark')}
// }

// const disableDarkMode = () => {
//     document.body.classList.remove('lightmode');

//     localStorage.setItem('theme', 'dark');
// }

// themeToggle.addEventListener("click", () =>{
//     // theme = localStorage.getItem('theme'); 
//     // if(theme !== 'light'){
//     //     switchTheme()
//     // } else {
//     //     disableDarkMode();
//     // }
//     switchTheme();
// });