// /** @type {import('jest').Config} */
// const config = {
//   transform: {},
// };


// export default {}
// export default { transform: {} }


export default {
  moduleFileExtensions: [
    "mjs",
    // must include "js" to pass validation https://github.com/facebook/jest/issues/12116
    "js",
  ],
  testRegex: `test\.mjs$`,
  transform: {}
};

