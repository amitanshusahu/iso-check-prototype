import { connectToDatabase } from '@/lib/mongodb';
import Data from '@/models/DataModel';

const categories = [
  'compliance',
  'non compliance',
  'partially compliant',
  'not applicable',
  'not evaluated',
];

// Helper function to generate random category and comp values
function getRandomCategory() {
  return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomComp() {
  return Math.floor(Math.random() * 101); // Random number between 0-100
}

export async function GET(request) {
  try {
    await connectToDatabase();

    // Delete existing data (optional: if you want a fresh insert every time)
    await Data.deleteMany({});

    // Generate and insert 
    const dataEntries = Array.from({ length: 5 }, (_, i) => ({
      sn: i + 1,
      category: getRandomCategory(),
      comp: getRandomComp(),
    }));

    await Data.insertMany(dataEntries);

    return new Response(
      JSON.stringify({ message: 'Data populated successfully: existing data was deleted and 5 random data were added' }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to populate data' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
