export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {   // нужно сделать копию ТОЛЬКО того объекта(юзера) который меняем
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u;
    })
}