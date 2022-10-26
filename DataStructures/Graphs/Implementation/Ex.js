// Edge List 
//? The arrays reflects the connections, or how the points would connect.
const graphEL = [ 
  [0,2]
  [2,3]
  [2,1]
  [1,3]

]

// Adjacent List
//? The index is the node, and the value is node's neighbors
const graphAL = [
  [2] // index 0 is connected to 2
  [2,3] // index 1 is connected to 2 and 3
  [1,3] // index 2 is connected to 1 and 3
  [1,2] // Index 3 is connected to 1 and 2
] // Also totally doable with an object, doesn't have to be an array. Prolly object is better.

// Adjacent Matrix
// It only has 1s and 0s indicating whether the node X has a connection to node Y
const graphAM = [
  [0, 0, 1, 0]
  [0, 0, 1, 1]
  [1, 1, 0, 1]
  [0, 1, 1, 0]
]