import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

const contact = [
    {id: 1, nome: "Bosta Liquida", email: "bostaliquida123@gmail.com"},
    {id: 2, nome: "Pitbull Samba", email: "pitbulldosamba1@gmail.com"},
    {id: 3, nome: "Mauro Shampu", email: "ibisfc@gmail.com"},
];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/contatos', (req: Request, res: Response) => {
  res.send(contact);
});

app.listen(port, () => {
  console.log(`Servidor inciado em: http://localhost:${port}`);
});