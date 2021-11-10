# Array

## What is an array?
Arrays are a type of data structure that contains an arbitrary number of elements in a specific order.

Arrays in Javacript & thus Typescript behave a little differently than arrays in many other C-like languages.
With that said, I'll explain what an array is & how it's stored, the difference between a static array
(like you'd use in C or Java) and a dynamic array like you'll see written here in Typescript, and then I'll give an
example of creating an array and using a couple common array object methods in Typescript.

"Traditional" Arrays in C (for instance) are stored in continguous memory space that's allocated when the array is
created. Since C doesn't use references, you need the range of memory addresses allocated to equal the size of the
data type you're saving multiplied by the length of the array.

Javascript and Python (with the list data type) use dynamic arrays which are actually objects - your array can be
resized and can contain a mix of data types because the array isn't constrained by a specific range of memory
addresses it needs to stay within.


## Example Of A Dynamic Array (Typescript)
```ts
// Creating a dynamic array /w an optional TS annotation to designate it as an array of strings.
const names: string[] = ["Omar", "Joseph", "Emily", "Vidya"];
```
