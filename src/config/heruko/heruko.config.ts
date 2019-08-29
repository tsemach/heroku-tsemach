
const common = {  
};

export default {
  development: {
    MONGODB_URL:   process.env.MONGODB_URL,
    ...common
  },
  test: {
    MONGODB_URL:   process.env.MONGODB_URL,
    ...common
  },
  production: {
    MONGODB_URL:   process.env.MONGODB_URL,
    ...common
  },
};



