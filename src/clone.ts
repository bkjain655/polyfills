const OBJECT = "[object Object]";
const ARRAY = "[object Array]"
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
            let type:string = toString.call(el);
            switch(type){
                case OBJECT : 
                    duplicate[index] = this.objectClone(el);    
                    break;
                case ARRAY:
                    duplicate[index] = this.arrayClone(el);
                    break;
                default:
                    duplicate[index] = el;
            }
        });
        return duplicate;
    }

    private objectClone(original){
        let duplicate = {};
        for(let key in original){
            let val = original[key],type:string = toString.call(val);
            switch(type){
                case OBJECT : 
                    duplicate[key] = this.objectClone(val);
                    break;
                case ARRAY:
                    duplicate[key] = this.arrayClone(val);
                    break;
                default:
                    duplicate[key] = val;
            }
        }
        return duplicate;
    }
}

export const clonePf = new Clone();