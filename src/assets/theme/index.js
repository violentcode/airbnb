const theme = {
    color: {
        primaryColor: "#FF385C",
        secondaryColor: '#00848A'
    },
    mixin: {
        boxShadow: `
        transition:  box-shadow 250ms ease;
        &:hover {
            box-shadow: 0px 2px 5px rgba(0, 0, 0, .18);
        }
        `
    }
}

export default theme