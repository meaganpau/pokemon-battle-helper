const global = {
    font: {
        main: '"Roboto", sans-serif',
        header: '"Karla", sans-serif'
    },
    color: {
        green: '#ecffee',
        red: '#ffecec'
    }
}

export const lightTheme = {
    global,
    color: {
        text: {
            dark: '#505050',
            light: '#747474',
            placeholder: '#858585',
        },
        background: {
            main: '#fff',
            content: '#fff',
            hover: '#eee',
            pokemon: '#f2f2f2'
        },
        pokeball: {
            opacity: 0.035
        }
    },
}

export const darkTheme = {
    global,
    color: {
        text: {
            dark: '#fff',
            light: '#dadada',
            placeholder: '#fff',
        },
        background: {
            main: '#4f5763',
            content: '#2c333d',
            hover: '#2c333d',
            pokemon: '#4f5763'
        },
        pokeball: {
            opacity: 0.15
        }
    }
}