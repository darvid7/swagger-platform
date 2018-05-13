import * as fs from 'fs';
import {unzip} from "zlib";
const TEMP_DIR: string = 'tmp/';
const execSync = require('child_process').execSync;

export function unzipSdk(basePath: string, zipName: string): Promise<any> {
  /* Unzips an SDK for a Spec
  * @param {string} zipPath - Zip folder to unzip
  */
  const result = {};

  console.log('syncUnzip');
  console.log(basePath + zipName);
  let code = execSync('unzip -o ' + basePath + zipName + ' -d ' + basePath);

  console.log(code.toString('utf-8'));
  console.log(code);
  let names = code.toString('utf-8');
  names = names.replace(' ', '');
  names = names.split('\n');
  console.log(names);
  // TODO: Check non empty.
  console.log(names[1]);
  let sdkName = names[1];
  sdkName = sdkName.replace(' inflating: ', '');
  const tokens = sdkName.split('/');
  console.log(tokens);
  let cleanNamed = tokens[2].trimLeft();
  console.log(cleanNamed);
  return cleanNamed; // python-client
}


