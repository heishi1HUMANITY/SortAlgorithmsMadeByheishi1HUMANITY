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

const bucket = array => {
    let length = array.length;
    let max = array.reduce((a, b) => b > a ? b : a);
    let min = array.reduce((a,b) => b < a ? b : a);
    let bucketArray = Array(max + 1 - min).fill(0);
    for(let i = 0; i < length; i++){
        bucketArray[array[i] - min]++;
    }
    array = [];
    for(let i = 0; i < max + 1 - min; i++){
        if(bucketArray[i] != 0){
            for(let j = 0; j < bucketArray[i]; j++){
                array.push(i + min);
            }
        }
    }
    return array;
};

console.log(bucket(randomArray(10000)));
