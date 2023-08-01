import AWS from "aws-sdk";
import { chownSync } from "fs";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

// file(stream) -> 1

export const uploadAwsS3 = async (file, userId, folderName) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "insta-clone-upload",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};

export const deleteAwsS3 = async (fileUrl, folderName) => {
  const decodedUrl = decodeURI(fileUrl);
  console.log("decodedUrl"), decodedUrl;
  const filePath = decodedUrl.split(`${folderName}`)[1];
  console.log(filePath);
  const fileName = `${folderName}/${filePath}`;
  await new AWS.S3()
    .deleteObject({
      Bucket: "insta-clone-upload",
      Key: fileName,
    })
    .promise();
};
