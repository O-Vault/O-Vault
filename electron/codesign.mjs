/* eslint-disable no-undef */
import { promisify } from "util";
import { exec } from "child_process";

const execPromise = promisify(exec);
const OwnerName = process.env.CERT_OWNERNAME;
const TimeStampServer = 'http://time.certum.pl/';

export const SignTool = async (config) => {
  if (OwnerName) {
    console.info(`Signing ${config.path} to ${OwnerName}`);
    const cmd = `signtool sign /fd sha256 /tr "${TimeStampServer}" /td sha256 /n "${OwnerName}" "${config.path}"`;
    console.info(cmd);
    return await execPromise(cmd);
  } else {
    console.info('code signing skipped');
  }
};