export const sortListByStringField = (list, sortField) => {
    return [...list].sort((a, b) => {
        var fieldA = a[sortField].toUpperCase(); 
        var fieldB = b[sortField].toUpperCase(); 

        if (fieldA < fieldB) {
            return -1;
        }

        if (fieldA > fieldB) {
            return 1;
        }

        return 0;
    });
}

export const sortlistByNumericField = (list, sortField) => {
    return [...list].sort((a, b) => a[sortField] - b[sortField]);
}