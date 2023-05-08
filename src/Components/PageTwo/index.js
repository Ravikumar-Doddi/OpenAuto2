import { ImFacebook, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import Phone from "../../Assets/picku service.png";

const PageTwo = () => {
  return (
    <div className="bg-[#202124] text-white h-auto p-10">
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-around lg:items-center lg:text-start">
        <div className="lg:w-1/2 w-auto">
          <h1 className="font-sans lg:text-5xl font-bold mb-4 text-4xl ">
            Focused on <br />
            Time Savigs
          </h1>
          <p className="mb-4">
            Lorum Ipsum is simpily dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industury standard dummy text ever
            since the 1500s when an unknown printer took a gully of type and
            scramble it to make a type specimen book.It has survived not only
            five centuries,but also the leap into electronic
            typesetting,remaining essentilly unchanged .It was
          </p>

          <button
            className="border mt-7 mb-7 w-full lg:w-2/5 p-2 rounded-2xl hover:bg-indigo-700"
            type="submit font-sans"
          >
            Download the mobile app
          </button>
        </div>

        <img src={Phone} alt="" className="lg:w-1/3 w-auto" />
      </div>

      <hr className="mt-10" />

      <div className="flex lg:flex-row lg:justify-between lg:items-center  flex-col mt-10">
        <h1 className="lg:text-3xl text-center font-sans text-3xl">
          Open Auto
        </h1>
        <div className="flex gap-10  text-center justify-between mt-8 lg:mt-0">
          <div className="flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-5 lg:h-5 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <h3>+769 586 4558</h3>
          </div>
          <div className="flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <h3>service@openauto.ca</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between  mt-3">
        <p className="self-center">Open Auto @ all rights reserved</p>

        <div className="flex visible lg:hidden justify-between w-full mt-8 lg:mt-0">
          <p>Privacy policy</p>
          <p>Terms of use</p>
          <p>Cookie policy</p>
        </div>

        <div className="flex justify-between w-full lg:w-auto mt-8 lg:mt-0">
          {" "}
          <ImFacebook className=" m-2" />
          <ImTwitter className="m-2" /> <ImYoutube className="m-2" />
          <ImLinkedin className="m-2" /> <BsInstagram className="m-2" />
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
