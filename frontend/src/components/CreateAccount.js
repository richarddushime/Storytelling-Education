function CreateAccount() {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="flex flex-col bg-purple-700 md:w-1/3 w-full">
        <h1 className="text-4xl pl-10 pt-14 text-white"> Site Logo</h1>
        <h1 className="text-white pl-10 text-2xl pr-10 md:pl-10 md:pt-36 py-10">
          Just a few clicks away from reaching great minds
        </h1>
      </div>
      <div className="flex flex-col w-full">
        <div className="p-16 pl-20">
          <h1 className="mt-10 font-semibold text-2xl">Create an Account</h1>
          <p className="text-black mt-6">
            Share your knowledge and stay up to date with all things tech
          </p>
          <form>
            <div className="grid grid-rows-3 gap-y-16 pt-10 grid-cols-1 md:grid-cols-2">
              <div>
                <h1 className="text-xl font-semibold">First Name</h1>
                <input
                  className="border border-purple-700 w-11/12 h-10 rounded mt-2 p-3"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Last Name</h1>
                <input
                  className="border border-purple-700 w-11/12 h-10 rounded mt-2 p-3"
                  type="text"
                  placeholder="Doe"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Phone Number</h1>
                <input
                  className="border border-purple-700 w-11/12 h-10 rounded mt-2 p-3"
                  type="text"
                  placeholder="6105336030"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Email Address</h1>
                <input
                  className="border border-purple-700 w-11/12 h-10 rounded mt-2 p-3"
                  type="text"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Password</h1>
                <input
                  className="border border-purple-700 w-11/12 h-10 rounded mt-2 p-3"
                  type="text"
                  placeholder="..........."
                />
              </div>
              <div className="">
                <h1 className="text-xl font-semibold">Confirm Password</h1>
                <input
                  className="border border-purple-700 w-11/12 h-10 rounded mt-2 p-3"
                  type="text"
                  placeholder="..........."
                />
              </div>
            </div>
            <div className="pt-10">
              <input
                className="mr-2"
                type="checkbox"
                id="terms"
                name="terms"
              />
              <label for="terms">
                I agree to the Terms and Conditions of the Educate blog
              </label>
            </div>
            <div className="pt-10">
              <input
                className="mr-2 bg-purple-800 px-14 text-white rounded py-3"
                type="submit"
                value="Create Account"
              />
            </div>
          </form>
          <p className="pt-10">Already have an account? <a className="text-purple-600" href="/">Log In</a> </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
