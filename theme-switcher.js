/*
We create a themerSwitcher function that takes a root (location of css variables) and a "theme object" that houses all of the theme info. For the 'ugly' theme, the theme object is:

uglyTheme = {
    ['--h1-background']: 'red',
    ['--h1-color']: 'white',
    ['--div-background']: 'blue',
    ['--div-color']: 'pink',
    ['--p-background']: 'gold',
    ['--p-color']: 'yellow',
    ['--big-div-background']: 'purple',
    ['--background']: 'green',
}
*/

function themeSwitcher(root,theme){
    const themeKeys = Object.keys(theme);
    for (let index in themeKeys) {
        root.style.setProperty(themeKeys[index], theme[themeKeys[index]]);
    }

}