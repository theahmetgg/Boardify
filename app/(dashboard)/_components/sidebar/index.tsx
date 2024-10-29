import List from "@/app/(dashboard)/_components/sidebar/list";
import NewButton from "@/app/(dashboard)/_components/sidebar/new-button";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
