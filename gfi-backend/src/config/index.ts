import dotenv from 'dotenv';
import path from 'path';

// __dirname bulunduğumuz klasörü (src/config) gösterir.
// ../../.env diyerek kök dizindeki .env dosyasına ulaşıyoruz.
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
    apiKey: process.env.API_KEY,
    databaseUrl: process.env.DATABASE_URL
};
