import uuid from "uuid";

export default {
  makeToken: () => {
    return uuid.v4();
  },
};
