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

const shell = array => {
    const length = array.length;
    let h = 0;
    while(h <= length / 9){
        h = 3 * h + 1;
    }
    while(true){
        for(let i = h; i < length; i+=h){
            let tmp = array[i];
            for(let j = i - h; j >= 0; j-=h){
                if(tmp < array[j]){
                    array[j + h] = array[j];
                    array[j] = tmp;
                }else{
                    break;
                }
            }
        }
        if(h == 1) break;
        else h = (h - 1) / 3;
    }
    return array;
};

console.log(shell(randomArray(1000)));
