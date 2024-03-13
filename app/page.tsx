/** @format */

export default function Home() {
  return (
    <div className="bg-black md:flex">
      <div className=" text-white flex justify-center items-center h-[18vh] md:w-[60%]">
        <p className="font-bold text-[32px]">Social Media App</p>
      </div>

      <div className="bg-white rounded-t-[60px] md:rounded-l-[60px] md:px-16 md:py-12 md:w-[40%] md:h-screen md:rounded-tr-none">
        {/* sign in thing */}
        <div className="p-12 flex flex-col gap-6 md:gap-4 text-black ">
          <p className="text-[32px] font-semibold self-center ">Sign In</p>
          <button className="border-black h-12 border-2 text-2xl rounded-3xl">
            lo Continue with Google
          </button>
          <button className="border-black h-12 border-2 text-2xl rounded-3xl">
            lo Continue with Twitter
          </button>
          <div className="flex gap-4 md:my-2">
            <hr className="w-[40%] h-1 bg-black self-center" />
            <p>OR</p>
            <hr className="w-[40%] h-1 bg-black self-center" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-md"> User name or email address</p>
            <input
              type="text"
              id="username"
              className="h-12 border-black border-2 rounded-lg "
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <p className="text-md"> Your password</p>
              <p className="text-md"> Hide</p>
            </div>
            <input
              type="password"
              id="password"
              className="h-12 border-black border-2 rounded-lg "
            />
            <p className="text-md underline self-end"> Forget your password</p>
          </div>

          <button className="w-[70%] self-center bg-gray-200 text-white font-bold text-xl p-4 rounded-3xl">
            Sign In
          </button>

          <p className="self-center text-md mt-[-10px]">
            Don't have an account?<span className="underline"> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
