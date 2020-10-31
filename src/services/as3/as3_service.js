import AWS from 'aws-sdk';
import 'dotenv/config';
import fs from 'fs';

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
const BUCKET_NAME = process.env.BUCKET_NAME;

/* 
       Bucket: BUCKET_NAME,
        Key: fileName.originalname, // File name you want to save as in S3
        Body: fileContent,
        ContentType: 'image/jpeg',
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentDisposition: 'inline',
        ExtraArgs:{
            "ContentType": 'image/jpeg'
        } */
export const uploadFile = async (fileName) => {

    // Read content from the file
    const fileContent = Buffer.from(fileName.buffer, 'binary');
    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName.originalname, // File name you want to save as in S3
        Body: fileContent,
        ContentType: 'image/jpeg',
        ACL: 'public-read',
        ContentEncoding: 'base64',
        ContentDisposition: 'inline',
    };

        return new Promise(function (resolve, reject) {
        s3.upload(params, function (err, data) {
            if (err) {
                return reject(err);
            } else {
                return resolve(data);
            }
        });
    });

};
