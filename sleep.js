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

const sleep = async array => {
    let length = array.length;
    let tmp = [];
    for(let e of array){
        setTimeout(() => {
            tmp.push(e);
        }, e * 2);
    }
    const sleepBreaker = () => {
        return new Promise((resolve, reject) => {
            const sleepBreakerInterval = setInterval(() => {
                if(tmp.length == length){
                    array = tmp;
                    clearInterval(sleepBreakerInterval);
                    resolve();
                }
            }, 1);
        })
    };
    await sleepBreaker();
    return array;
}; 

sleep(randomArray(100)).then(array => console.log(array));
