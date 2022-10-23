import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const response = await fetch(
          `${process.env.API_URL}/clients?${new URLSearchParams(req.query as { [key: string]: string }).toString()}`
        );
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
