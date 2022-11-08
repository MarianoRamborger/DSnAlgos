//? This one is mostly straightforward. There is only one detail.
//? when you decide whether to keep going up on x or y, is not x < length.
//? x < length would take you evaluate to negative, which would break recursion, BUT
//? The problem is that there are previous checks that require reading that index,
//? which would result in an error. So yo avoid that error, you evalue to x+1 or y+1
//? That way, you anticipate reading on a non-existant index.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, x, y, newColor) {
  const originalColor = image[x][y]

  recFill(image,x,y,originalColor,newColor)
  return image
};


const recFill = (image,  x, y, originalColor, newColor) => {


if ((image[x][y] !== originalColor) || (image[x][y] === newColor)) {
  return
}

image[x][y] = newColor

// move left?
if (x > 0) {
  recFill(image,x-1,y,originalColor,newColor)
}
//move right
if (x+1 < image.length) {
  recFill(image,x+1,y,originalColor,newColor)
}
if (y > 0) {
  recFill(image,x,y-1,originalColor,newColor)
}
if (y+1 < image[0].length) {
  recFill(image,x,y+1,originalColor,newColor)
}

return
}