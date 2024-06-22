import { Link } from "react-router-dom";

const SectionLink = ({ link, label }: { link: string; label: string }) => {
  return (
    <Link
      className="w-full aspect-video p-[1rem] border hover:border-blue-500 transition"
      to={link}
    >
      <h1 className="text-[24px] font-bold">{label}</h1>
    </Link>
  );
};

const Dashboard = () => {
  return (
    <div className="">
      <h1 className="font-bold text-[32px]">Dashboard</h1>
      <hr />
      <div className="grid grid-cols-3 gap-[1rem] py-[1rem]">
        <SectionLink label="/TREES" link="trees" />
        <SectionLink label="/USERS" link="users" />
      </div>
    </div>
  );
};

export default Dashboard;
