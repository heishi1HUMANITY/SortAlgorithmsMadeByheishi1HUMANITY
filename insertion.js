const randomArray = num => {
    let array = [...Array(num).keys()];
    for(let i = 0; i < num; i++){
        let rand = Math.floor(Math.random() * (num - i));
        let tmp = array[rand];
        array[rand] = array[num - 1 - i];
        array[num - 1 -i] = tmp;
    }
    return array;
};

const insertion = array => {
    const length = array.length;
    for(let i = 1; i < length; i++){
        let tmp = array[i];
        for(let j = i - 1; j >= 0; j--){
            if(tmp < array[j]){
                array[j + 1] = array[j];
                array[j] = tmp;
            }else{
                break;
            }
        }
    }
    return array;
};

console.log(insertion(randomArray(1000)));
