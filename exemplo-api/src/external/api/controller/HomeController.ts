import { Express } from 'express';

export default class HomeController {
    constructor(
        servidor: Express
    ) {
        servidor.post('/api/home', async (req, res) => {
            try {
                res.status(200).send("Running!");
            } catch (e: any) {
                res.status(400).send(e.message);
            }
        });
    }
}