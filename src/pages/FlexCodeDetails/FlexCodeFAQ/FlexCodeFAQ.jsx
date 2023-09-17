import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { faqImg } from "../../../assets/faq1.png";

const FlexCodeFAQ = () => {
  return (
    <section className="w-full">
      <Helmet title="Flex Code | FAQ"/>
      <div className="flexcode-container relative bg-[#17181b] ring-1 ring-gray-900/5  text-white">
        <div className="">
          <SectionTitle
            title="Frequntly Ask Questions"
            descrition="A brief list of common questions and answers, simplifying information access and reducing repetitive queries for users or customers."
          />
          <div className="md:flex justify-between gap-20 mt-5">
            <div className="mx-auto md:w-[60%]">
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-950 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className="mr-4 text-lg font-normal">01</span>What is
                  FlexCode?
                </div>
                <div className="collapse-content">
                  <p className="text-slate-300 ml-9 text-md font-normal mr-4">
                    FlexCode is a problem-solving platform that helps coding
                    enthusiasts improve their skills through engaging challenges
                    and interactive learning.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-950 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className="mr-4 text-lg font-normal">02</span>How do I
                  join FlexCode?
                </div>
                <div className="collapse-content">
                  <p className="text-slate-300 ml-9 text-md font-normal mr-4">
                    Joining FlexCode is easy! Simply sign up for an account, and
                    you'll have access to a wide range of coding challenges and
                    features.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-950 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className="mr-4 text-lg font-normal">03</span>Is
                  FlexCode suitable for beginners?
                </div>
                <div className="collapse-content">
                  <p className="text-slate-300 ml-9 text-md font-normal mr-4">
                    Yes, FlexCode is designed for all skill levels, including
                    beginners. Our platform provides challenges and resources
                    that cater to both newcomers and experienced coders.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-950 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className="mr-4 text-lg font-normal">04</span>Are there
                  any membership fees?
                </div>
                <div className="collapse-content">
                  <p className="text-slate-300 ml-9 text-md font-normal mr-4">
                    FlexCode offers a free basic membership with access to a
                    selection of challenges. We also have a premium membership
                    that provides access to our full range of challenges,
                    advanced features, and personalized learning paths.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-950 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className="mr-4 text-lg font-normal">05</span>How often
                  are new challenges added?
                </div>
                <div className="collapse-content">
                  <p className="text-slate-300 ml-9 text-md font-normal mr-4">
                    We regularly update FlexCode with new challenges to keep the
                    content fresh and engaging. You can expect new challenges to
                    be added on a weekly basis, offering you a continuous
                    learning experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%] pt-5">
              <img
                className="rounded-lg w-[380px]"
                src="https://i.ibb.co/cYRsvpY/faq1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexCodeFAQ;
