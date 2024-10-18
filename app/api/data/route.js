import { connectToDatabase } from '@/lib/mongodb';
import Data from '@/models/DataModel';

export async function GET(request) {
  try {
    await connectToDatabase();
    const data = await Data.find({});
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
