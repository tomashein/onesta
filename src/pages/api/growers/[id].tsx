import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  switch (req.method) {
    case 'GET':
      try {
        const response = await fetch(`${process.env.API_URL}/growers/${id}`);
        const data = await response.json();
        res.status(200).send(data);
      } catch {
        res.status(404).end('Error');
      }
      break;
    default:
      res.status(405).end('Method Not Allowed');
      break;
  }
};

export default handler;
