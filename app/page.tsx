"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CircularProgress, Typography, Box } from "@mui/material";

interface VendorData {
  id: number;
  kyc_id: number;
  full_name: string;
  contact_number: string;
  address: string;
  code_name: string;
  gender: string;
  pan_no: string;
  name: string;
  credit_period: number;
  debit_period: number;
  remarks: string | null;
  status: number;
  created_by: number;
  updated_by: number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

const DataTablePage: React.FC = () => {
  const [rows, setRows] = useState<VendorData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://erp.pioneerassociate1234.com.np/api/v1/ams/vendors/41",
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
            },
          }
        );
        if (response.data.success) {
          setRows([response.data.data]); // Wrap data in an array for DataGrid
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "kyc_id", headerName: "KYC ID", flex: 1 },
    { field: "full_name", headerName: "Full Name", flex: 1 },
    { field: "contact_number", headerName: "Contact Number", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "pan_no", headerName: "PAN Number", flex: 1 },
  ];

  return (
    <Box sx={{ maxWidth: "100%", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Vendor Data Table
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            getRowId={(row) => row.id}
          />
        </div>
      )}
    </Box>
  );
};

export default DataTablePage;
