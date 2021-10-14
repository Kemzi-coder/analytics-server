import {mongoURI} from './private.js';
import mongoose from 'mongoose';
import express from 'express';
import router from './router.js';
import path from 'path';
import cors from 'cors';

const PORT = process.env.PORT ?? 3000;
const app = express();

const __dirname = path.resolve();

app.use(express.static(path.resolve(__dirname, 'static')));

app.use(cors());

app.use(express.json());

app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(mongoURI);
		app.listen(PORT, () => {
			console.log('Server is working');
		})
	} catch (e) {
		console.log(e);
	}
}


startApp();



