
module.exports = {
  plugins: {
    autoprefixer: {}
  }
}

//a way to import scss to a vue component may be used after
// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import "@/scss/mediaQuery.scss";`
//       }
//     }
//   }
// }