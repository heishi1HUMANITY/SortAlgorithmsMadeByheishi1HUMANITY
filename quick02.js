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

const swap = (array, a, b) => {
    let tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
};

const quick = array => {
    const length = array.length;
    let i = 0; j = length - 1, p = array[1], flag = true;

    while(true){
        if(array[i] >= p){
            while(true){
                if(array[j] <= p){
                    if(j <= i){
                        flag = false;
                        break;
                    }else{
                        let tmp = array[i];
                        array[i] = array[j];
                        array[j] = tmp;
                        j--;
                        break;
                    }
                }
                j--;
            }
            if(!flag) break;
        }
        i++;
    }

    let left = [];
    for(let k = 0; k < i; k++){
        left.push(array[k]);
    }
    let right = [];
    for(let k = i; k < length; k++){
        right.push(array[k]);
    }

    if(left.length > 2){
        left = quick(left);
    }else if(left.length == 2){
        if(left[0] > left[1]){
            swap(left, 0, 1);
        }
    }

    if(right.length > 2){
        right = quick(right);
    }else if(right.length == 2){
        if(right[0] > right[1]){
            swap(right, 0, 1);
        }
    }

    return [...left,...right];
};

console.log(quick(randomArray(1000)));
