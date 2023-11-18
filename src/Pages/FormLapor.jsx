import React from "react";
import { Input, Button } from "@nextui-org/react";
import {
  Person,
  At,
  House,
  Radioactive,
  Telephone,
} from "react-bootstrap-icons";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { addLaporan } from "../Database/db";
import UploadField from "../Components/UploadField";
import LayoutUser from "../Layouts/LayoutUser";

const FormLapor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [address, setAddress] = useState("");
  const [wasteType, setWasteType] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("picture", file);

    await addLaporan({ name, email, address, wasteType, noTelp }, formData);
  };

  const limbahItems = ["Limbah Industri", "Limbah Pertanian", "Limbah lainnya"];

  return (
    <LayoutUser>
      <h3 className="font-medium text-3xl my-12 text-center">
        ISI DATA LAPORAN
      </h3>
      <div className="flex flex-col items-center w-3/4 mb-16 mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 rounded-2xl bg-white flex flex-col items-center p-12 gap-4 w-full"
        >
          <Input
            isRequired
            type="text"
            name="name"
            label="Nama Pelapor"
            radius="sm"
            size="lg"
            labelPlacement="outside"
            startContent={<Person size={24} />}
            placeholder="Masukkan nama anda..."
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            isRequired
            type="Email"
            name="email"
            label="Email"
            radius="sm"
            size="lg"
            labelPlacement="outside"
            startContent={<At size={24} />}
            placeholder="Masukkan email ex: 123@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            isRequired
            type="text"
            name="notelp"
            label="No. Telp"
            radius="sm"
            size="lg"
            labelPlacement="outside"
            startContent={<Telephone size={24} />}
            placeholder="Masukkan no.telp ex: (0812xxxxxxx)"
            onChange={(e) => setNoTelp(e.target.value)}
          />

          <Input
            isRequired
            type="text"
            name="address"
            label="Alamat Domisili"
            radius="sm"
            size="lg"
            labelPlacement="outside"
            startContent={<House size={24} />}
            placeholder="Masukkan tempat tinggal anda..."
            onChange={(e) => setAddress(e.target.value)}
          />

          <Select
            label="Jenis Limbah"
            placeholder="Pilih jenis limbah"
            labelPlacement="outside"
            radius="sm"
            size="lg"
            startContent={<Radioactive size={22} color="" />}
            onChange={(e) => setWasteType(e.target.value)}
          >
            {limbahItems.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </Select>

          <UploadField file={file} setFile={setFile} />

          <Button type="submit" color="primary">
            Laporkan
          </Button>
        </form>
      </div>
    </LayoutUser>
  );
};

export default FormLapor;
