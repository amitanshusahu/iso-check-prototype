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
 
const invoices = [
  {
    sn: "1",
    cat: "Security Controls",
    comp: "10",
    noncomp: "5",
  },
  {
    sn: "2",
    cat: "Regulatory Requirements",
    comp: "6",
    noncomp: "2",
  },
  {
    sn: "3",
    cat: "Admistrative Controls",
    comp: "5",
    noncomp: "2",
  },
]
 
export function Table2() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.no</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Compliance</TableHead>
          <TableHead className="text-right">Non-Compliance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.sn}>
            <TableCell className="font-medium">{invoice.sn}</TableCell>
            <TableCell>{invoice.cat}</TableCell>
            <TableCell>{invoice.comp}</TableCell>
            <TableCell className="text-right">{invoice.noncomp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}