// swagger-platform-msg-api-test

const REMOTE: string = 'swagger-platform-msg-api-test';
const execSync = require('child_process').execSync;

export function pushSdk(clientPath: string): string {
  /* Unzips an SDK for a Spec
  * @param {string} zipPath - Zip folder to unzip
  */
  console.log('push sdk: ' + clientPath);
  const cmd = '/bin/sh ' + clientPath + '/git_push.sh darvid7 ' + REMOTE + ' \"publish API\"';
  let code = execSync(cmd);

  console.log(code.toString('utf-8'));

  return 'done';
}


