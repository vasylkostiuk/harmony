export function getUniqueById(data) {
    return [...data.reduce((a,c)=>{
        a.set(c.id, c);
        return a;
    }, new Map()).values()]
}