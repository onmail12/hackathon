import { createConnection } from "mysql2/promise";

const getConnection = async () => {
  return await createConnection({
    host: "localhost",
    user: "root",
    database: "kupeduli",
  });
};

let con = await getConnection();

export const getAllLaporan = async () => {
  const [data] = await con.query("SELECT * FROM laporan");
  return data;
};

export const addLaporan = async (name, email, address, jenisLimbah) => {
  await con.query(
    "INSERT INTO laporan (id, nama, email, address, jenis_limbah) VALUES (?,?,?,?,?)",
    name,
    email,
    address,
    jenisLimbah
  );
};
