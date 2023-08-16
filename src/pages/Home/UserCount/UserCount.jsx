import CountUp from "react-countup";

const UserCount = () => {
  return (
    <>
      <section>
        <div className="flexcode-container">
          <div className="rounded-xl py-16 text-center border-[#0fcda156] border-2 drop-shadow-lg grid gap-10 lg:gap-0 lg:grid-cols-3 justify-center text-white  montserrat divide-x-2 divide-[#0fcda156]">
            <div className="flex flex-col gap-5 justify-center items-center">
              <h2 className="text-7xl font-bold">
                <CountUp start={0} end={856} duration={4} />&#43;
              </h2>
              <p className="text-lg tracking-wider font-thin">
                Total users in FlexCode.
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <h2 className="text-7xl font-bold">
                <CountUp start={0} end={518} duration={3} />&#43;
              </h2>
              <p className="text-lg tracking-wider">
                Total problems in our site.
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <h2 className="text-7xl font-bold">
                {" "}
                <CountUp start={0} end={451} duration={3} />{" "}
              </h2>
              <p className="text-lg tracking-wider">
                Completed Problems in this month.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UserCount;
