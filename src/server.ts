import { app } from './app';
import * as dotenv from 'dotenv';
import { prisma } from './prisma-client';
dotenv.config();

// Create Express server
const PORT = process.env.PORT;

const server = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
    } catch (err) {
        console.error(err);
        throw err;
    }
};

server()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
