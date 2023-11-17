import axios from "axios";

const url = "http://localhost:3000";

export const addLaporan = async ({ name, email, address, wasteType }) => {
  console.log({ name, email, address, jenis_limbah: wasteType });
  const response = await axios.post("http://localhost:3000/laporan", {
    name,
    email,
    address,
    jenis_limbah: wasteType,
  });
  console.log(response);
};
