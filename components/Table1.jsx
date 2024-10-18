"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from 'react';
 
const invoices = [
  {
    sn: "1",
    cat: "Compliance",
    comp: "100",
  },
  {
    sn: "2",
    cat: "Non-Compliance",
    comp: "5",
  },
  {
    sn: "3",
    cat: "Partially Compliant",
    comp: "3",
  },
  {
    sn: "4",
    cat: "Not Applicable",
    comp: "3",
  },
  {
    sn: "5",
    cat: "Not Evaluated",
    comp: "10",
  },
]
 
export function Table1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        for(let i = 0; i< invoices.length; i++){
          invoices[i].comp = result[i].comp;
          invoices[i].cat = result[i].category;
        }
        setData(invoices);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.no</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Compliance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice) => (
          <TableRow key={invoice.sn}>
            <TableCell className="font-medium">{invoice.sn}</TableCell>
            <TableCell>{invoice.cat}</TableCell>
            <TableCell className="text-right">{invoice.comp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}