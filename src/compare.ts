class Compare{
    constructor(){}

    private isObject = (param) => !!(param && typeof param === "object");

    compare(...args){
        let [src,tgt] = args;
        if(Array.isArray(src)) return this.arrayCompare(src,tgt);
        else if(this.isObject(src)) return this.objectCompare(src,tgt);
        else return src === tgt;
    }

    private arrayCompare(...args):boolean{
        let [src,tgt] = args, isEqual:boolean = true;
        if(!(src && tgt && Array.isArray(src) && Array.isArray(tgt) && src.length === tgt.length))
            return false;
        src.forEach((el,index) => {
            if(!isEqual) return;
            if(Array.isArray(el))
                isEqual = this.arrayCompare(el,tgt[index]);
            else if(this.isObject(el)){
                isEqual = this.objectCompare(el,tgt[index]);
            } else     
                isEqual = el === tgt[index]
        });
        return isEqual;
    }

    private objectCompare(...args):boolean{
        let [src,tgt] = args,isEqual:boolean = true;
        if(!(this.isObject(src) && this.isObject(tgt) && Object.keys(src).length === Object.keys(tgt).length)) 
            return false;
        for(let i in src){
            if(!isEqual) continue;
            if(Array.isArray(src[i]))
                isEqual = src[i]['compare'](tgt[i])
            else if(this.isObject(src[i])){
                isEqual = this.objectCompare(src[i], tgt[i]);
            } else     
                isEqual = src[i] === tgt[i]
        }
        return isEqual;
    }
}

export const polyfill:Compare = (new Compare());