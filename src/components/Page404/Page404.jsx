import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16 bg-[#AFF0E4]">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="  text-center">
            <img
              src="https://media3.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif" 
              alt="404 Error"
              className="mb-8  mx-auto"
            />
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span> 
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we could not find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But do not worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to='/'
              className="px-8 py-3 font-semibold rounded bg-[#28806C] text-white hover:bg-gray-600 btn"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page404;
