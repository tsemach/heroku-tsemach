

console.log("process.env.NODE_ENV  = ", process.env.NODE_ENV);

let HERUKO_PORT = 8080;

if (process.env.NODE_ENV === 'development') {
  HERUKO_PORT = process.env.DEV_HERUKO_PORT;
  console.log("process.env.DEV_HERUKO_URL  = ", process.env.DEV_HERUKO_HOST + ":" + HERUKO_PORT + '/heruko',);
}

if (process.env.NODE_ENV === 'production') {
  HERUKO_PORT = process.env.PORT;
  console.log("process.env.PRD_HERUKO_URL  = ", process.env.PRD_HERUKO_HOST + ":" + HERUKO_PORT + '/heruko',);
}

export default {  
  development: {
    HERUKO_URL:          process.env.DEV_HERUKO_HOST + ":" + HERUKO_PORT + '/heruko',
  },
  test: {
    HERUKO_URL:          process.env.DEV_HERUKO_HOST + ":" + HERUKO_PORT + '/heruko',
  },
  production: {
    HERUKO_URL:          process.env.PRD_HERUKO_HOST + ":" + HERUKO_PORT + '/heruko',
  },
};

