import { Listbox, ListboxItem } from "@nextui-org/react";

const rootUrl = "/dashboard";

const sideBarItems = [
  { key: `${rootUrl}/lapor`, label: "Laporan" },
  { key: `${rootUrl}/izin`, label: "Pengajuan Izin" },
  { key: `${rootUrl}/riwayat`, label: "Riwayat" },
];

const SideBar = () => {
  return (
    <aside className="max-w-[400px] bg-gray-100 h-screen">
      <h3 className="font-medium">Admin KUPEDULI</h3>
      <Listbox className="px-8" variant="faded">
        {sideBarItems.map((item) => {
          return (
            <ListboxItem key={item.key} href={item.key}>
              {item.label}
            </ListboxItem>
          );
        })}
      </Listbox>
    </aside>
  );
};

export default SideBar;
