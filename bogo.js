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

const bogo = array => {
    let length = array.length;
    while(true){
        if(checker(array)) break;
        let tmp = [];
        for(let i = 0; i < length; i++){
            let rand = Math.floor(Math.random() * (length - i));
            tmp.push(array[rand]);
            array[rand] = array[length - 1 - i];
        }
        array = tmp;
    }
    return array;
};

console.log(bogo(randomArray(10)));
