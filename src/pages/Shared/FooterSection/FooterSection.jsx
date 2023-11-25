import { Helmet } from "react-helmet";

const FooterSection = () => {
  return (
    <section className="flexcode-container flexcode-banner-bg">
      <Helmet title="Flex Code | Privacy Policy"/>
      <div className="px-4">
        <h1 className="text-2xl pb-4">Flex Code Privacy Policy</h1>
        <p>last update September 9, 2023</p>

        <p className="mb-12">
          This privacy policy sets out how our website uses and protects any
          information that you give us when you use this website.
        </p>

        <h2 className="text-2xl mb-4">
          What do we mean by "personal information?"
        </h2>

        {/* <p className="mb-2">#We may collect the following information:</p> */}
        <p className="pb-4">
          For us, "personal information" means information which either directly
          identifies you (like your name, email address, or billing information)
          or can be reasonably linked or combined to identify you (like an
          account identification number or IP address). We’ll always tell you
          what personal information we’re collecting from you. See each
          product’s Privacy Notice for specific details.
        </p>

        <ul className="list-disc list-inside mb-4 pl-8">
          <li>Your name and contact information</li>
          <li>Demographic information</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 className="text-2xl mb-4 mt-14">
          What do we do with your information once we have it?
        </h2>

        <p className="mb-4">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>

        <ul className="list-disc list-inside mb-4 pl-8">
          <li>Internal record keeping</li>
          <li>Improving our products and services</li>
          <li>
            Sending promotional emails about new products, special offers, or
            other information which we think you may find interesting
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone, or
            mail. We may use the information to customize the website according
            to your interests.
          </li>
        </ul>

        <h2 className="text-2xl  mb-4 mt-14">
          How do we store and protect your personal information?
        </h2>

        <p className="mb-4">
          We are committed to protecting your personal information once we have
          it. We implement physical, business and technical security measures.
          Despite our efforts, if we learn of a security breach, we'll notify
          you so that you can take appropriate protective steps.
        </p>
        <p>
          We also don't want your personal information for any longer than we
          need it, so we only keep it long enough to do what we collected it
          for. Once we don't need it, we take steps to destroy it unless we are
          required by law to keep it longer.
        </p>

        <h2 className="text-2xl mb-4 mt-16">
          Websites, Communications & Cookies Privacy Notice
        </h2>

        <p className="mb-3">
          We care about your privacy. When Mozilla (that's us) collects
          information about you, our Flex Code Privacy Policy describes how we
          handle that information.
        </p>

        <p className="mb-4">
          This privacy notice applies to Mozilla operated websites and mobile
          apps, which include the domains mozillians.org, mozilla.org, and
          firefox.com, among others. This includes, for example,
          foundation.mozilla.org, bugzilla.mozilla.org, reps.mozilla.org,
          careers.mozilla.org, developer.mozilla.org, support.mozilla.org,
          addons.mozilla.org, and wiki.mozilla.org.
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
