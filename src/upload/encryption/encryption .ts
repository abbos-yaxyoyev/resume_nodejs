
import axios from "axios";
import fs from 'fs';
import path from 'path';
// import { promisify } from 'util';

export async function encryption(fileName) {
  try {
    const url = `https://api.systematicdev.uz/crypto-api/bookuz/download/${fileName}`

    const direction = path.join(__dirname, '../../../');
    const wstream = fs.createWriteStream(direction + 'public/' + `encryption/${fileName}`);

    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
    })

    response.data.pipe(wstream)

    new Promise((resolve, reject) => {
      wstream.on('finish', resolve)
      wstream.on('error', reject)
    })

    return `encryption/${fileName}`;

  } catch (e) {
    console.log("encryuption error: ", e);
    throw new Error(e)
  }
}

// export async function encryption(fileName) {
//   await downloadFile(fileName);
//   return `encryption/${fileName}`;
// }

