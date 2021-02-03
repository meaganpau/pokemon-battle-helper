const global = {
    font: {
        main: '"Roboto", sans-serif',
        header: '"Karla", sans-serif'
    }
}

export const lightTheme = {
    ...global,
    color: {
        text: {
            dark: '#505050',
            light: '#747474',
            placeholder: '#858585',
        },
        background: '#fff'
    },
}

export const darkTheme = {
    ...global,
    color: {
        text: {
            dark: '#fff',
            light: '#dadada',
            placeholder: '#fff',
        },
        background: '#4F5763'
    }
}