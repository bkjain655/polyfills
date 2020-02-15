class Clone {
    constructor(){}

    clone(...args){
        let [original, deepClone] = args;
        if(deepClone) return this.deepClone(original);
        else return this.shallowClone(original);
    }

    private shallowClone(original){
        return Array.isArray(original) ? [...original] : {...original};
    }

    private deepClone(original){
        return (Array.isArray(original) ? this.arrayClone(original) : this.objectClone(original));
    }

    private arrayClone(original:any[]){
        let duplicate = [];
        original.forEach((el,index) => {
            if(Array.isArray(el))
                duplicate.push(this.arrayClone(el));
            else if(toString.call(el) === "[object Object]"){
                duplicate.push(this.objectClone(el));
            } else {
                duplicate.push(el);
            }
        });
        return duplicate;
    }

    private objectClone(original){
        let duplicate = {};
        for(let key in original){
            let val = original[key];
            if(Array.isArray(val)){
                duplicate[key] = this.arrayClone(val);
            } else if(toString.call(val) === "[object Object]"){
                duplicate[key] = this.objectClone(val);
            } else {
                duplicate[key] = val;
            }
        }
        return duplicate;
    }
}

export const clonePf = new Clone();