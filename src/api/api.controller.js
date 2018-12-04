"use strict";

const index = {
  handler: async (request, reply) => {
    //// DO Something ////
    
    try {
      return {
        code: 200,
        description: "Success"
      };
    } catch (e) {
      return {
        code: 500,
        description: "Internal Server Error"
      };
    }
  }
};

module.exports = {
  index
};
