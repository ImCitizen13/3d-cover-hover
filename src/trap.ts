// function trap(height: number[]): number {
//     // Create a matrix and then update its values 
//     // 
//     let maxY = Math.max(...height)
//     let matrix = new Array(height.length).fill(new Array(maxY).fill(0))
//     // [0,1,0,2,1,0,1,3,2,1,2,1]
//     // [[0,0,0],[0,0,0],[],0,0,0,0,0,0,0,0,0]
//     for(let i=0; i < matrix.length; i++){

//         if (height[i] < 0) {} else {
//             for (let j = 0; j < height[i]; j++) {
//                 matrix[i][j] = 1
//             }
//             // console.log("MAtrix at ", col, ": ", matrix[col])
//         }
//     }
//     console.log("height: ", height)
//     console.log("MAtrix: ", matrix[3])
//     return 0
// };