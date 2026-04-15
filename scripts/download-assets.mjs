import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const assets = [
  // Hero video background
  {
    url: 'https://idxboost-spw-assets.idxboost.us/assets/themes/avanti/videos/video-bg-home.mp4',
    dest: 'videos/video-bg-home.mp4'
  },
  // Avanti Way logo (white - header + footer)
  {
    url: 'https://idxboost-spw-assets.idxboost.us/assets/images/logo-avanti-white.png',
    dest: 'images/logo-avanti-white.png'
  },
  // Realtor logo (white - footer)
  {
    url: 'https://idxboost-spw-assets.idxboost.us/assets/images/logo-realtor-white.svg',
    dest: 'images/logo-realtor-white.svg'
  },
  // TREM Group logo
  {
    url: 'https://idxboost-spw-assets.idxboost.us/assets/images/logo-tremgroup-150x18.svg',
    dest: 'images/logo-tremgroup-150x18.svg'
  },
  // Favicon
  {
    url: 'https://realtorramonrodriguez.com/df181e37dd4f3cc27b632f09153b750a.png',
    dest: 'seo/favicon.png'
  },
  // OG image
  {
    url: 'https://idxboost-single-property.s3.amazonaws.com/e518e5c94e6e9d6d359f9e15c5d5a31a/ff0bd1c69680bebe18c3621b5822f506.png',
    dest: 'seo/og-image.png'
  },
  // New construction images
  {
    url: 'https://idxboost-single-property.s3.amazonaws.com/e518e5c94e6e9d6d359f9e15c5d5a31a/57cea51b0d18d845e235b3705e7f215d-2048x638.jpg',
    dest: 'images/new-constructions/mercedes-benz-places.jpg'
  },
  {
    url: 'https://idxboost-single-property.s3.amazonaws.com/e518e5c94e6e9d6d359f9e15c5d5a31a/5164c69641794a1a07412f70553e1512-2048x1004.jpg',
    dest: 'images/new-constructions/shoma-bay.jpg'
  },
  {
    url: 'https://idxboost-single-property.s3.amazonaws.com/e518e5c94e6e9d6d359f9e15c5d5a31a/f84e4b441d9e3057e32f2a9702dc2bd1-2048x983.jpg',
    dest: 'images/new-constructions/the-rider-residences.jpg'
  },
  {
    url: 'https://idxboost-single-property.s3.amazonaws.com/e518e5c94e6e9d6d359f9e15c5d5a31a/e10c2d15e4899e6d790169eac9ca1009-2048x1200.jpg',
    dest: 'images/new-constructions/domus-brickell.jpg'
  },
];

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(publicDir, destPath);
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });

    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const stream = fs.createWriteStream(fullPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`OK: ${destPath} (${fs.statSync(fullPath).size} bytes)`);
        resolve();
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log(`Downloading ${assets.length} assets to ${publicDir}...`);

  // Download 4 at a time
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.allSettled(
      batch.map(a => download(a.url, a.dest))
    ).then(results => {
      results.forEach((r, idx) => {
        if (r.status === 'rejected') {
          console.error(`FAIL: ${batch[idx].dest} - ${r.reason.message}`);
        }
      });
    });
  }

  console.log('Done!');
}

main().catch(console.error);
