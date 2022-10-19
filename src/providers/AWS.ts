/**
 * AWS
 */
import * as aws from 'aws-sdk';

const AWS = aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: process.env.AWS_VERSION
});

export default AWS;
