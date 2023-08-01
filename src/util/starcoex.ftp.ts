import Client from "ftp";
import fs from "fs-extra";
import * as ftp from "basic-ftp";

const starcoexFtp = new Client();
console.log(starcoexFtp);

starcoexFtp.connect({
  host: "112.184.55.51",
  user: "starcoex",
  password: "coex2023^^",
  port: 21,
});
starcoexFtp.connect();

const uploadStarFtp = async (file, userId) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  console.log(readStream);
  const objectName = `${userId}-${Date.now()}-${filename}`;
  await starcoexFtp.on("ready", () => {
    starcoexFtp.put(objectName, "", async (err) => {
      if (err) throw err;
      starcoexFtp.end();
    });
  });
};

starcoexFtp.on("ready", () => {
  starcoexFtp.get("hello.txt", async (err, stream) => {
    const writeStream = fs.createWriteStream("hi.txt");
    const promiseExcute = async () => {
      return new Promise<void>((resolve) => {
        stream.pipe(writeStream);
        writeStream.on("finish", () => {
          starcoexFtp.end();
          resolve();
        });
      });
    };
    await promiseExcute();
  });
});

const uploadStarBasicFtp = async (file, userId, folderName) => {
  const client = await new ftp.Client();
  console.log(client);
  client.ftp.verbose = true;
  try {
    const secureOptions = {
      // Necessary only if the server requires client certificate authentication.
      key: fs.readFileSync("client-key.pem"),
      cert: fs.readFileSync("client-cert.pem"),

      // Necessary only if the server uses a self-signed certificate.
      ca: [fs.readFileSync("server-cert.pem")],

      // Necessary only if the server's cert isn't for "localhost".
      checkServerIdentity: () => {
        return null;
      },
    };
    await client.access({
      host: "112.184.55.52",
      user: "starcoex",
      password: "Coex2023^^",
      port: 21,
      secure: true,
      secureOptions: secureOptions,
    });
    await client.cd(`/${folderName}`);
    console.log(client.list());
    const { filename, createReadStream } = await file;
    const readStream = createReadStream();
    const objectName = `${userId}-${Date.now()}-${filename}`;
    await client.uploadFrom(objectName, `${objectName}-${folderName}`);
    // await client.downloadTo(file, userId);
  } catch (error) {
    console.log(error);
  }
  client.close();
};
const deleteStarBasicFtp = async (folderName) => {
  await fs.unlinkSync(`/${folderName}`);
};

export default starcoexFtp;
