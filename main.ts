import {polyfill} from "./src/compare";
import { clonePf } from "./src/clone";

console.log(polyfill.compare([1,2,3],[1,2,3]));

console.log(polyfill.compare([1,2,3,[1,2,3]],[1,2,3,[1,2,3]]));

console.log(polyfill.compare([1,2,3,{a:1,b:2}],[1,2,3,{a:1,b:2}]));

console.log(polyfill.compare({a:3,c:4,d:{a:1,b:2}},{a:3,c:4,d:{a:1,b:2}}));

window['original'] = [{"id":6191,"title":"Darth Vader Asks Mom for Allowance Raise","text":"In yet another move bound to mark the demise of the Galactic Empire, the once powerful\n Jedi-gone-rogue has begun taking drastic measures to continue funding the second Death\n Star. Already months late, the latest enterprise of Darth Sidious's right hand is in\n danger of being sold at an upcoming scrap metal auction on Tataouine later this year.\n When asked for comment, Mr. Skywalker seemed to be short of breath...","timestamp":"2020-02-11T09:46:16.996Z"},{"id":6192,"title":"Tom Hanks & Tom Cruise Confuse Names, Movies, Cars","text":"Tom Hanks and Tom Cruise recently met for tea in Los Angeles to discover that for the\n duration of their acting careers, they had been receiving mail for the 'wrong' Tom.\n Mission Impossible, Top Gun, and many roles were intended for Tom Hanks while Tom Cruise\n was to be the voice of Woody on Toy Story, make Wilson his best friend, and star in the\n AOL feature film \"You've Got Mail\". Needless to say, both Toms were speechless and\n decided to begin fixing the issue at hand by switching cars before they adjurned for croquet.","timestamp":"2020-02-11T09:46:16.999Z"},{"id":6193,"title":"Kitten Teases Puppy; Bites Own Tail","text":"Yet another shot has been fired in the ever-waging puppy/kitten battle by the ferocious\nfelines. At 2:03pm PST, Fred the Kitten approached Sam the Puppy, announced his intentions\nto bite his own tail. Sam, having tried this many times before, assured Fred that such a\nfeat was impossible and that teasing him like that was cause for him to taddle to The Master.\nNot concerned with the repricussions of the potential intervention of The Human, Fred\nproceeded to grab the very tip of his tail with his paws and then put it in his mouth.\n\"Take that, silly dog!\" yelled Fred between mouths full of fur as Sam ran to find The\nMaster.","timestamp":"2020-02-11T09:46:17.001Z"}];

window['duplicate'] = clonePf.clone(window['original'],true);

console.log(polyfill.compare(window['original'], window['duplicate']));