import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

let clipboardText: string = ''; 

// POST endpoint to accept text
app.post('/clipboard', (req: Request, res: Response) => {
    clipboardText = req.body.text; 
    res.status(200).send({ message: 'Text saved successfully' });
});

// GET endpoint to retrieve the text
app.get('/clipboard', (req: Request, res: Response) => {
    res.status(200).send({ text: clipboardText }); 
});

const port: string | number = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));