const sortList = (list, sortField, sortFunction) => {
    return [...list].sort((a, b) => sortFunction(a[sortField], b[sortField]));
};

const sortTextAsc = (a, b) => {
    var fieldA = a.toUpperCase(); 
    var fieldB = b.toUpperCase(); 

    return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
};

const sortTextDes = (a, b) => {
    var fieldA = a.toUpperCase(); 
    var fieldB = b.toUpperCase(); 

    return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
};

const sortNumbersAsc = (a, b) => {
    return a - b;
};

const sortNumbersDes = (a, b) => {
    return b - a;
};

export const sortObjectsList = (list, sortField, sortType='ASC') => {
    if (!list[0]) return list;

    if (typeof list[0][sortField] === 'string') return sortList(list, sortField, sortType === 'ASC' ? sortTextAsc : sortTextDes);
   
    if (typeof list[0][sortField] === 'number') return sortList(list, sortField, sortType === 'ASC' ? sortNumbersAsc : sortNumbersDes);
};

export const findProduct = (list, lotId) => {
    return list.find(product => product.lotId === lotId);
};