[![license](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/favecode/status-array/blob/master/LICENSE)
# Status Array
This code obtains all the states of an array

## How to use?
You can put your array in ```this.numbers```.For example : 
```js
  let myArray = [1,2,3];
  this.numbers = [...myArray]
```
and you should comment this line : 
```js
  this.fill(this.blocks);
```
and you can see the result in ```this.result```

like this :
```js
[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 1, 2]
[3, 2, 1]
```

## License
[MIT](https://github.com/favecode/status-array/blob/master/LICENSE)

Copyright (c) 2018 Mohammad Mehdi
