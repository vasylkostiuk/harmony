export function featuresIntersection(targetArr, comparingArr) {
    let res = [];
    for (let i = 0; i < comparingArr.length; i++) {
        res = [...res, targetArr.find(fea => fea.title === comparingArr[i])]
    }
    return res;
}