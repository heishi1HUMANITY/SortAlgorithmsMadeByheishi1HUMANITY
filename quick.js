const randomArray = num => {
    let array = [];
    for(let i = 0; i < num; i++){
        array.push(i);
    }
    for(let i = 0; i < num; i++){
        let rand = Math.floor(Math.random() * (num - i));
        let tmp = array[rand];
        array[rand] = array[num - 1 - i];
        array[num - 1 -i] = tmp;
    }
    return array;
};

const checker = array => {
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]) return false;
    }
    return true;
};

const quick = array => {
    let length = array.length;
    let under = [];
    let over = [];
    for(let i = 1; i < length; i++){
        if(array[0] > array[i]) under.push(array[i]);
        else over.push(array[i]);
    }
    if(under.length != 0){
        if(!checker(under)){
            under = quick(under);
        }
    }
    if(!checker(over)){
        over = quick(over);
    }
    let tmp = array[0];
    array = [];
    for(let e of under){
        array.push(e);
    }
    array.push(tmp);
    for(let e of over){
        array.push(e);
    }
    return array;
};

console.log(quick(randomArray(1000)));
