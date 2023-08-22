import img from "/20230810_125620.png";

const Subscribe = () => {
  return (
    <section>
      <div className="flexcode-container mb-16">
        <div className="flex justify-center items-center ">
          <div className="text-center">
            <div className="h-44 w-44 mx-auto">
              <img src={img} alt="" sizes="200" />
            </div>
            <h1 className="text-6xl text-white font-bold mt-2">Premium</h1>
            <p className="text-2xl font-semibold mt-2">
              Get started with a{" "}
              <span className="text-[#00ffc3] font-semibold ">Flex</span>code
              Subscription that works for you.
            </p>
          </div>
        </div>
        {/* You can open the modal using ID.showModal() method */}

        <div className="flex justify-center mt-16">
          <button
            className="flexcode-button py-3 px-5 "
            onClick={() => window.my_modal_3.showModal()}
          >
            Subscribe
          </button>
        </div>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box text-black">
            <button className="btn btn-sm btn-circle text-red absolute right-2 top-2">
              ✕
            </button>
            <div className="w- h-[500px]">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </form>
        </dialog>
      </div>
    </section>
  );
};

export default Subscribe;
