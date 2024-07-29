/* eslint-disable no-undef */
import { promisify } from "util";
import { exec } from "child_process";

const execPromise = promisify(exec);
const OwnerName = process.env.CERT_OWNERNAME;

export const SignTool = async (config) => {
  if (OwnerName) {
    console.info(`Signing ${config.path} to ${OwnerName}`);
    return await execPromise(`signtool sign /fd sha256 /n "${OwnerName}" "${config.path}"`);
  } else {
    console.info('code signing skipped');
  }
};