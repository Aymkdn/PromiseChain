# PromiseChain

`Promise.all` will execute all requets at the same time, but it often happens the case where you want to execute requests one by one, until all requests have been executed.

It's what `PromiseChain` is doing; executing sequentially the requests upon full resolution.

## Installation

```
npm install @aymkdn/promisechain
```

## Usage

```javascript
const PromiseChain = require("@aymkdn/promisechain");
let arr = ["one", "two", "three"];

// Example with `Promise.all`
Promise.all(arr.map((item,i) => {
  console.log(item);
  return new Promise(prom_res => {
    setTimeout(() => {
      console.log(item+" completed.");
      prom_res(item);
    }, 1000*i)
  })
}))

/*
The result for Promise.all:
one
two
three
one completed.
two completed.
three completed.
*/

// Same example with `PromiseChain`
PromiseChain(arr, (item,i) => {
  console.log(item);
  return new Promise(prom_res => {
    setTimeout(() => {
      console.log(item+" completed.");
      prom_res(item);
    }, 1000*i)
  })
})

/*
The result for PromiseChain:
one
one completed.
two
two completed.
three
three completed.
*/
```

