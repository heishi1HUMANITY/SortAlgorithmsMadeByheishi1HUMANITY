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

const shaker = array => {
    let length = array.length;
    let c = 0;
    while(c < length){
        if(c % 2 == 0){
            for(let i = 0 + c / 2; i < length - c / 2; i++){
                if(array[i] > array[i + 1]){
                    let tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                }
            }
        }else{
            for(let i = length - Math.floor(c / 2) ; i >= 0 + Math.floor(c / 2); i--){
                if(array[i] < array[i - 1]){
                    let tmp = array[i];
                    array[i] = array[i - 1];
                    array[i - 1] = tmp;
                }
            }
        }
        c++;
    }
    return array;
};

console.log(shaker(randomArray(1000)));
