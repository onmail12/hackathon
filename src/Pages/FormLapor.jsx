import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Person, At, House, Radioactive } from "react-bootstrap-icons";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

import { addLaporan } from "../Database/db";

const FormLapor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [wasteType, setWasteType] = useState("");

  const handleSubmit = async () => {
    await addLaporan(name, email, address, wasteType);
  };

  const limbahItems = ["Limbah Industri", "Limbah Pertanian", "Limbah lainnya"];

  return (
    <div className="flex flex-col items-center w-3/4 my-16">
      <h3 className="font-bold text-3xl mb-4 text-center">ISI DATA LAPORAN</h3>
      <form className="bg-white rounded-2xl flex flex-col items-center p-12 gap-4 w-full">
        <Input
          type="text"
          name="name"
          label="Nama"
          radius="sm"
          size="lg"
          labelPlacement="outside"
          startContent={<Person size={24} />}
          placeholder="Masukkan nama anda..."
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="Email"
          name="email"
          label="Email"
          radius="sm"
          size="lg"
          labelPlacement="outside"
          startContent={<At size={24} />}
          placeholder="Masukkan email anda..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
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

        <Button onClick={handleSubmit} color="primary">
          Laporkan
        </Button>
      </form>
    </div>
  );
};

export default FormLapor;
