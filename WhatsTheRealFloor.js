// function getRealFloor(n) {
//     if (n === 0 || n === 1) {
//         return 0;
//     } else if (n > 1 && n < 13) {
//         return n - 1;
//     } else if (n > 13) {
//         return n - 2
//     } else if (n < 0) {
//         return -Math.abs(n);
//     }
// }

////////////////////

const getRealFloor = n => n > 13 ? n - 2 : n > 0 ? n - 1 : n;