"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const SalesPage: React.FC = () => {
  const [rows] = useState([
    {
      id: "1",
      customer: { full_name: "John Doe" },
      total_amount: 200,
      sale_status: "draft",
    },
    {
      id: "2",
      customer: { full_name: "Jane Smith" },
      total_amount: 300,
      sale_status: "Pending",
    },
    {
      id: "3",
      customer: { full_name: "Alice Johnson" },
      total_amount: 150,
      sale_status: "Approved",
    },
    {
      id: "4",
      customer: { full_name: "Bob Brown" },
      total_amount: 400,
      sale_status: "draft",
    },
  ]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "customer",
      headerName: "Customer",
      width: 200,
      renderCell: (params) => params.value.full_name,
    },
    { field: "total_amount", headerName: "Amount", width: 150 },
    {
      field: "sale_status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => <span>{params.value}</span>,
    },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   width: 200,
    //   renderCell: (params) => (
    //     <div style={{ display: "flex", gap: "10px" }}>
    //       {params.row.sale_status === "draft" && (
    //         <Button variant="outlined" startIcon={<FaEdit />}>
    //           Edit
    //         </Button>
    //       )}
    //       {params.row.sale_status === "Pending" && (
    //         <Button variant="text" startIcon={<Printer />}>
    //           Print
    //         </Button>
    //       )}
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="container mx-auto py-32 p-2">
      <h1>Sales Data</h1>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default SalesPage;
