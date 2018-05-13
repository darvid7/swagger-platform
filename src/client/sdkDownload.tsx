import * as fs from 'fs';
import fetch from 'node-fetch';
import { unzipSdk } from 'client/sdkUnzip';
const TEMP_DIR: string = 'tmp/';

export async function downloadSdk(url: string): Promise<any> {
  /* Downloads an SDK for a Spec
  * @param {string} url - Download link for the generated SDK
  */

  /* tslint:disable:no-console */
  // TODO: Use a logging framework instead of console.log

  let url2 = url.slice(5, url.length);
  url2 = 'http' + url2;
  console.log('downloadSdk');
  const downloadedSdk = await fetch(url2);
  const result = await downloadedSdk;
  const response = {};
  // async.
  const asyncWriteStream = new Promise((resolve, reject) => {
    // TODO: UUID for names.
    const writeStream = fs.createWriteStream(TEMP_DIR + 'test-dl.zip');
    writeStream.on('error', () => {
      console.log('writing file errored');
      response.download = "Error";
      reject();
    });
    writeStream.on('close', () => {
      console.log('finish writing file');
      response.download = "Success";
      resolve();
    });
    result.body.pipe(writeStream);
  });
  await asyncWriteStream;
  const unzipedName = unzipSdk(TEMP_DIR + 'test-dl.zip');
  console.log('unzipedName below');
  console.log(unzipedName);
  response.unziped = unzipedName;
  return response;
}


