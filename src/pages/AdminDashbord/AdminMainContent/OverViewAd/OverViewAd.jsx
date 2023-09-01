import UserCard from "./UserCard";
import ProblemsCard from "./ProblemsCard";
import BlogCard from "./BlogCard";
import PreUserCard from "./PreUserCard";

const OverViewAd = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <UserCard />
      <ProblemsCard />
      <BlogCard />
      <PreUserCard />
    </div>
  );
};

export default OverViewAd;
