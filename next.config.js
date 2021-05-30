const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongo_db: "EthersSpace",
        mongo_password: "YV6JllNGxoya4Jbl",
      },
    };
  }

  return {
    env: {
      mongo_db: "EthersSpace",
      mongo_password: "YV6JllNGxoya4Jbl",
    },
  };
};
