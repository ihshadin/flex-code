import React from "react";
import FlexcodeLoading from "../../../components/FlexcodeLoading/FlexcodeLoading";
import { useNavigation } from "react-router-dom";

const SingleBlog = () => {

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <FlexcodeLoading />;
  }

  return (
    <div className="flexcode-container">
      <section class=" dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="lg:flex lg:-mx-6">
            {/* Single Blog details side */}

            <div class="lg:w-3/4 lg:px-10  bg-[#1e2d40] py-10 mx-6 md:px-6 rounded-xl">
              <img
                class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div>
                <p class="mt-6 text-sm text-white uppercase">Want to know</p>

                <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-[#08ecb8] dark:text-white">
                  What do you want to know about UI
                </h1>

                <div class="flex items-center mt-6">
                  <img
                    class="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div class="mx-4">
                    <h1 class="text-sm text-white dark:text-gray-200">
                      Amelia. Anderson
                    </h1>
                    <p class="text-sm text-white dark:text-gray-400">
                      Lead Developer
                    </p>
                  </div>
                </div>
                <p className=" text-white mt-5 text-justify mb-10">
                  Unveiling the Essentials You Need to Know Introduction In
                  today's digital age, user interfaces (UI) play a pivotal role
                  in shaping user experiences across various platforms, from
                  websites to mobile apps and software applications. Whether
                  you're a seasoned developer, a curious designer, or an
                  end-user, understanding the fundamentals of UI is key to
                  crafting engaging, intuitive, and user-friendly interfaces. In
                  this article, we'll explore the crucial aspects of UI design
                  and development, helping you unravel the mysteries of this
                  dynamic field.
                  <br />
                  <br />
                  1. **UI: Beyond the Surface** UI, or user
                  interface, encompasses the visual and interactive elements
                  that users engage with when interacting with digital products.
                  It's more than just aesthetics; it's the bridge that connects
                  users to the functionality and features of an application.
                  From buttons and menus to layouts and color schemes, UI is the
                  culmination of design, psychology, and technology.
                  <br />
                  <br />
                  2.
                  **User-Centered Design** At the core of effective UI lies
                  user-centered design. This approach involves putting the
                  user's needs, preferences, and behaviors at the forefront of
                  the design process. Through research, personas, and usability
                  testing, designers gain insights into user expectations,
                  allowing them to create interfaces that align with user goals
                  and enhance their overall experience.
                  <br />
                  <br />
                  3. **Visual Hierarchy
                  and Layout** Visual hierarchy dictates how elements are
                  organized on a screen to guide users' attention and
                  interactions. It involves arranging elements based on their
                  importance, ensuring that users can quickly grasp the
                  content's structure. Proper layout and hierarchy facilitate
                  effortless navigation and prevent users from feeling
                  overwhelmed.
                  <br />
                  <br />
                  4. **Color and Typography** Colors evoke emotions
                  and convey meaning, making them powerful tools in UI design.
                  Understanding color psychology and its impact on user
                  perception can influence decisions, such as choosing a color
                  scheme that aligns with a brand's identity or a specific
                  application's purpose. Typography is equally crucial;
                  selecting fonts that enhance readability while complementing
                  the design aesthetic contributes to a cohesive user
                  experience.
                  <br />
                  <br />
                  5. **Interactive Elements and Feedback** Buttons,
                  links, forms, and other interactive elements form the backbone
                  of UI. These elements should be designed for clarity and ease
                  of use, ensuring users understand their purpose and how to
                  interact with them. Providing instant feedback (e.g., visual
                  changes or notifications) when users interact with these
                  elements enhances user confidence and reduces confusion.
                  <br />
                  <br />
                  6.
                  **Responsive and Adaptive Design** In a multi-device world, UI
                  must adapt to various screen sizes and orientations.
                  Responsive design ensures that interfaces scale seamlessly
                  across devices, while adaptive design involves tailoring UI
                  elements specifically to different devices. Prioritizing
                  responsive and adaptive design guarantees a consistent and
                  functional experience for all users.
                  <br />
                  <br />
                  7. **Accessibility and
                  Inclusivity** UI design should be accessible to all users,
                  including those with disabilities. Incorporating features like
                  screen reader compatibility, keyboard navigation, and proper
                  color contrast ensures that the interface can be used by a
                  diverse audience. Inclusivity in UI design reflects a
                  commitment to equal access and a more ethical digital
                  landscape.
                  <br />
                  <br />
                  8. **Evolution and Trends** UI design is an
                  ever-evolving field, with trends and technologies constantly
                  emerging. Staying up-to-date with the latest design patterns,
                  tools, and techniques is essential for maintaining a modern
                  and relevant interface. However, it's equally important to
                  assess new trends' suitability for the specific context of
                  your project and user base. Conclusion UI design is a
                  fascinating blend of creativity, psychology, and technology,
                  shaping the way users interact with digital products. By
                  delving into the essentials of user-centered design, visual
                  hierarchy, interactive elements, and accessibility, you lay
                  the foundation for crafting exceptional user experiences.
                  Whether you're curious about the intricacies of UI or eager to
                  enhance your design and development skills, the knowledge you
                  gain will undoubtedly contribute to creating interfaces that
                  resonate with users and leave a lasting impact.
                </p>
              </div>
            </div>

            {/* List of Blog Side side */}

            <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <h3 class="text-[#08ecb8] capitalize">Design instument</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-white hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  How to raise $100k+ by using blox ui kit on your design
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 class="text-[#08ecb8] capitalize">UI Resource</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-white hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Should you creat UI Product by using Blox?
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 class="text-[#08ecb8] capitalize">Premium Collection</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-white hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Top 10 Blocks you can get on Blox's collection.
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 class="text-[#08ecb8] capitalize">Premium kits</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-white hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  Top 10 Ui kit you can get on Blox's collection.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
