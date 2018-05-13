// swagger-platform-msg-api-test


const REMOTE: string = 'swagger-platform-msg-api-test';
const execSync = require('child_process').execSync;

export function pushSdk(clientPath: string): string {
  /* Unzips an SDK for a Spec
  * @param {string} zipPath - Zip folder to unzip
  */
  console.log('client path: ' + clientPath);
  const tokens = clientPath.split('/');
  const root = tokens[tokens.length - 1];
  console.log('tokens: ' + JSON.stringify(tokens));
  console.log(root);
  console.log('push sdk: ' + clientPath);
  const cmd = 'cd ' + clientPath + ' && /bin/sh ./git_push.sh darvid7 ' + REMOTE + ' \"publish API\"';
  console.log('exe cmd: ' + cmd);
  let code = execSync(cmd);

  console.log(code.toString('utf-8'));

  return 'done';
}


