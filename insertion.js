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
    c = 1;
    while(c < length){
        for(let i = c; i >= 0; i--){
            if(i != 0){
                if(array[c] <= array[i] && array[c] >= array[i - 1]){
                    let tmp = array[c];
                    for(let j = c; j >= i; j--){
                        array[j] = array[j - 1];
                    }
                    array[i] = tmp;
                }
            }else{
                if(array[c] <= array[i]){
                    let tmp = array[c];
                    for(let j = c; j >= i; j--){
                        array[j] = array[j - 1];
                    }
                    array[i] = tmp;
                }
            }
        }
        c++;
    }
    return array;
};

console.log(insertion(randomArray(1000)));
