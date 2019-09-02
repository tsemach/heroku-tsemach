

console.log("process.env.NODE_ENV =", process.env.NODE_ENV);
console.log("process.env.PORT =", process.env.PORT);

// if (process.env.NODE_ENV === 'development') {
//   HERUKO_PORT = process.env.DEV_HERUKO_PORT;
//   url =   process.env.DEV_HERUKO_HOST + ":" + process.env.DEV_HERUKO_PORT + '/heruko'
//   console.log("process.env.DEV_HERUKO_URL =", process.env.DEV_HERUKO_HOST + ":" + HERUKO_PORT + '/heruko',);
//   console.log("process.env.DEV_HERUKO_URL =", url,);
// }

// if (process.env.NODE_ENV === 'production') {
//   HERUKO_PORT = process.env.PRD_HERUKO_PORT;
//   url =   process.env.PRD_HERUKO_HOST + ":" + process.env.PRD_HERUKO_PORT + '/heruko'
//   console.log("process.env.PRD_HERUKO_URL =", process.env.PRD_HERUKO_HOST + ":" + process.env.PRD_HERUKO_PORT + '/heruko',);
//   console.log("process.env.PRD_HERUKO_URL =", url);
// }

export default {  
  development: {
    HERUKO_URL:          process.env.DEV_HERUKO_HOST + ":" + process.env.DEV_HERUKO_PORT + '/heruko'
  },
  test: {
    HERUKO_URL:          process.env.DEV_HERUKO_HOST + ":" + process.env.DEV_HERUKO_PORT + '/heruko'
  },
  production: {
    HERUKO_URL:          process.env.PRD_HERUKO_HOST + ":" + process.env.PRD_HERUKO_PORT + '/heruko',
  },
};
