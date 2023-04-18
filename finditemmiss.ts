function findItemMiss(data : number[]) {
    let arr : number[]=[]
    let i = 1;
    while (i<=10){
        if (data.indexOf(i)===-1){
            arr.push(i)
        }
        i++
    } return arr

}

console.log(findItemMiss([1,3,4,5,8]))