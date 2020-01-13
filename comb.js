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

const checker = array => {
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]) return false;
    }
    return true;
};

const comb = array => {
    let length = array.length;
    let gap = Math.floor(length / 1.3);
    while(true){
        if(gap != 1){
            for(let i = 0; i + gap < length; i++){
                if(array[i] > array[i + gap]){
                    let tmp = array[i];
                    array[i] = array[i + gap];
                    array[i + gap] = tmp;
                }
            }
            gap = Math.floor(gap / 1.3);
            if(gap === 9 || gap === 10) gap = 11;
        }else{
            if(checker(array)) break;
            else{
                for(let i = 0; i + gap < length; i++){
                    if(array[i] > array[i + gap]){
                        let tmp = array[i];
                        array[i] = array[i + gap];
                        array[i + gap] = tmp;
                    }
                }
            }
        }
    }
    return array;
};

console.log(comb(randomArray(1000)));
