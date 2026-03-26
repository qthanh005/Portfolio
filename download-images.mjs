import fs from 'fs';
import https from 'https';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'services');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const images = [
    { name: 'corporate.jpg', url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'realestate.jpg', url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'interior.jpg', url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'travel.jpg', url: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'construction.jpg', url: 'https://images.pexels.com/photos/159306/pexels-photo-159306.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'restaurant.jpg', url: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'news.jpg', url: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'hospital.jpg', url: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'spa.jpg', url: 'https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'fashion.jpg', url: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600' }
];

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        }, function(response) {
            
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // follow redirect
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }

            response.pipe(file);
            
            file.on('finish', function() {
                file.close(() => resolve(true)); 
            });
        }).on('error', function(err) {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

(async () => {
    for (const img of images) {
        console.log(`Downloading ${img.name}...`);
        try {
            await downloadFile(img.url, path.join(outDir, img.name));
            console.log(`OK: ${img.name}`);
        } catch(e) {
            console.error(`ERROR: ${img.name}`, e.message);
        }
    }
})();
