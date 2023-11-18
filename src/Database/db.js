import axios from "axios";

const url = "http://localhost:3000";

export const addLaporan = async (
  { name, email, noTelp, address, wasteType },
  formData
) => {
  const responseUpload = await axios.post(
    "http://localhost:3000/upload",
    formData
  );

  const response = await axios.post("http://localhost:3000/laporan", {
    name,
    email,
    notelp: noTelp,
    address,
    jenis_limbah: wasteType,
    img_name: formData.get("picture").name,
  });

  console.log(response);
};

export const reqAllLaporan = async () => {
  const response = await axios.get("http://localhost:3000/laporan");

  return response.data;
};
