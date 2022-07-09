const getIconFromCategory = (category) => {
    switch (category) {
        case 'futbol':
            return 'soccer';
        case 'previa':
            return 'glass-cocktail';
        case 'volleyball':
            return 'volleyball';
        case 'fiesta':
            return 'party-popper';
        case 'estudio':
            return 'book';
        default:
            return 'help-circle-outline';
    }
}

export default getIconFromCategory;
