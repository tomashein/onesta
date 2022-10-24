import { HarvestSchema } from '@/modules/harvests';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const response = await fetch(
          `${process.env.API_URL}/harvests?${new URLSearchParams(req.query as { [key: string]: string }).toString()}`
        );
        const data = await response.json();
        res.status(200).send(data);
      } catch {
        res.status(404).end('Error');
      }
      break;
    case 'POST':
      try {
        const { error } = HarvestSchema.validate(JSON.parse(req.body));
        if (error) {
          res.status(400).end('Invalid parameters');
          break;
        }
        const response = await fetch(`${process.env.API_URL}/harvests`, {
          method: 'POST',
          body: req.body
        });
        if (response.status !== 200) {
          res.status(400).end('Unexpected error');
          break;
        }
        const data = await response.json();
        res.status(200).send(data);
      } catch (err) {
        res.status(404).end(err);
      }
      break;
    default:
      res.status(405).end('Method Not Allowed');
      break;
  }
};

export default handler;
