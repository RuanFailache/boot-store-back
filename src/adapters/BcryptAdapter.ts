import bcrypt from "bcrypt";

const SALT = 12;

export default {
  createHash: (data: string) => {
    return bcrypt.hashSync(data, SALT);
  },
  compareDataWithHash: (data: string, hash: string) => {
    return bcrypt.compareSync(data, hash);
  },
};
