import CountUp from "react-countup";
import Container from "../../pages/Shared/Container/Container";

const UserCount = () => {
  return (
    <>
      <Container>
        <div className="my-10 w-full rounded-xl border-[#00ffc3] border-2 drop-shadow-lg grid px-10 py-16 gap-10 lg:gap-0 lg:grid-cols-3 justify-center text-white montserrat">
          <div className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-7xl">
              <CountUp start={0} end={1000} duration={4} /> &#43;
            </h2>
            <p className="text-lg tracking-wider font-thin">
              Total users in FlexCode.
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-7xl">
              <CountUp start={0} end={500} duration={3} /> &#43;
            </h2>
            <p className="text-lg tracking-wider">
              Total problems in our site.
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <h2 className="text-7xl">
              {" "}
              <CountUp start={0} end={451} duration={3} />{" "}
            </h2>
            <p className="text-lg tracking-wider">
              Completed Problems in this month.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
export default UserCount;
