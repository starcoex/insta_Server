import bcrypt, { hash } from "bcrypt";

const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";

(async () => {
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
})();

console.log(hash);

async function hashPassword(password: string) {
  const hash = await bcrypt.hash(password, saltRounds);
}
export default hashPassword;
