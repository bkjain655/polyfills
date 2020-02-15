import {polyfill} from "./src/compare";

console.log(polyfill.compare([1,2,3],[1,2,3]));

console.log(polyfill.compare([1,2,3,[1,2,3]],[1,2,3,[1,2,3]]));

console.log(polyfill.compare([1,2,3,{a:1,b:2}],[1,2,3,{a:1,b:2}]));

