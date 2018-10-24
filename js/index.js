class Status {
    constructor(){
        this.blocks = 5;
        this.numbers = [];
        this.temp = [];
        this.result = {};
        this.count = 0;
        this.fill(this.blocks);
        this.run(this.numbers);
    }
    fill(number){
        for(let i = 0;i < number;i) this.numbers[i] = ++i;
    }
    torn(numbers){
        if(numbers.length < 1) return;
        for(let index in numbers){
            let array = [...numbers]; 
            this.temp[this.numbers.length - numbers.length] = array[index];
            if(array.length > 1){
                array.splice(index, 1);
                this.torn(array);
                if(array.length <= 1){
                    this.result[`${this.count++}`] = [...this.temp];
                }
            }
        }
    }
    run(numbers){
        this.torn(numbers);
        console.log(this.result)
    }
}
new Status();
