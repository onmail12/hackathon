import LayoutAdmin from "../Layouts/LayoutAdmin";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  ButtonGroup,
  Chip,
} from "@nextui-org/react";
import { reqAllLaporan } from "../Database/db";
import { useEffect } from "react";
import { useState } from "react";

const DashboardLaporan = () => {
  const [laporan, setLaporan] = useState([]);

  const getChipColor = (status) => {
    if (status == "Menunggu verifikasi") {
      return "warning";
    } else if (status == "Selesai") {
      return "success";
    } else if (status == "Selesai") {
      return "danger";
    }
  };

  useEffect(() => {
    const getAllLaporan = async () => {
      const data = await reqAllLaporan();
      setLaporan(data);
    };

    getAllLaporan();
  }, []);

  console.log(laporan);

  return (
    <LayoutAdmin>
      <h3 className="font-medium text-3xl mb-8">Laporan</h3>
      <Table shadow="none">
        <TableHeader>
          <TableColumn>Nama</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>No.Telp</TableColumn>
          <TableColumn>Alamat</TableColumn>
          <TableColumn>Jenis Limbah</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn width={100}>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {laporan.map((lapor, i) => {
            return (
              <TableRow key={lapor.id}>
                <TableCell>{lapor.nama}</TableCell>
                <TableCell>{lapor.email}</TableCell>
                <TableCell>{lapor.notelp}</TableCell>
                <TableCell>{lapor.address}</TableCell>
                <TableCell>{lapor.jenis_limbah}</TableCell>
                <TableCell>
                  <Chip
                    color={getChipColor(lapor.status)}
                    className="text-white"
                  >
                    {lapor.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  <ButtonGroup>
                    <Button radius="sm" color="primary">
                      Terima
                    </Button>
                    <Button radius="sm" className="bg-red-600 text-white">
                      Tolak
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </LayoutAdmin>
  );
};

export default DashboardLaporan;
