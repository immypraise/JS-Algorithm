function convertFahrToCelsius(n) {
    if (n == undefined){
        console.log(`${JSON.stringify(n)} is not a valid number but a/an ${typeof n}.`)
        return `${JSON.stringify(n)} is not a valid number but a/an ${typeof n}.`
    }else if(isNaN(parseInt(n))){
        if(n.constructor == Array){
            console.log(`${JSON.stringify(n)} is not a valid number but a/an array.`)
            return `${JSON.stringify(n)} is not a valid number but a/an array.`;
        } else if(n.constructor == Object){
            console.log(`${JSON.stringify(n)} is not a valid number but a/an object.`)
            return `${JSON.stringify(n)} is not a valid number but a/an object.`;
        }else {
            console.log(`${JSON.stringify(n)} is not a valid number but a/an ${typeof n}.`)
            return `${JSON.stringify(n)} is not a valid number but a/an ${typeof n}.`;
        }
    } else {
        console.log(Number((((parseFloat(n) - 32) * 5)/ 9).toFixed(4)))
        return  Number((((parseFloat(n) - 32) * 5)/ 9).toFixed(4));
    }
}

function checkYuGiOh(num) {
    let creates = [];
    if(num == undefined){
        console.log(`invalid parameter: undefined`)
        return `invalid parameter: undefined`;
    } else if(isNaN(parseInt(num))){
        console.log(`invalid parameter: ${JSON.stringify(num)}`)
        return `invalid parameter: ${JSON.stringify(num)}`;
    } else {
    let n = parseInt(num);
    for(let i = 1; i <= n; i ++) {
        if(n % 2 == 0 && n % 3 != 0 && n % 5 != 0){
            creates.push("yu")
        } else if(n % 2 != 0 && n % 3 == 0 && n % 5 != 0){
            creates.push("gi")
        } else if(n % 2 != 0 && n % 3 != 0 && n % 5 == 0){
            creates.push("oh")
        } else if(n % 2 == 0 && n % 3 == 0 && n % 5 != 0){
            creates.push("yu-gi")
        } else if(n % 2 == 0 && n % 3 != 0 && n % 5 == 0){
            creates.push("yu-oh")
        }else if(n % 2 != 0 && n % 3 == 0 && n % 5 == 0){
            creates.push("gi-oh")
        }else if(n % 2 == 0 && n % 3 == 0 && n % 5 == 0){
            creates.push("yu-gi-oh")
        } else {
            creates.push(i)
        }
    }
}
    console.log(creates)
    return creates;
}