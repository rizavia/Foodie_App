const Login = () => {
  return (
    <div className="flex  justify-center items-center pt-14">
      <div className="border-black border-2 p-14 bg-amber-200 ">
        <form className="">
          <h1 className="text-3xl">Login to continue</h1>

          <div className="flex flex-col my-7">
            <input
              type="email"
              placeholder="Email"
              className="border-2 mb-5 p-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 p-2 rounded-md"
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-slate-200 px-12 py-2 rounded-md font-semibold ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
