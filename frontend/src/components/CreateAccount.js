function CreateAccount() {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col w-1/3 bg-purple-700">
        <h1 className="text-4xl pl-10 pt-14 text-white"> Site Logo</h1>
        <h1 className="text-white pl-10 pt-36 text-2xl pr-10">
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
            <div className="grid grid-cols-2 grid-rows-3 gap-y-16 pt-10">
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
                  placeholder="aryaman@vivid.lol"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Password</h1>
                <input
                  className="border border-purple-700 w-11/12 h-10 rounded mt-2"
                  type="text"
                />
              </div>
              <div className="font-semibold">
                <h1 className="text-xl">Confirm Password</h1>
                <input
                  className="border border-purple-700 w-11/12 h-10 rounded mt-2"
                  type="text"
                />
              </div>
            </div>
            <div className="pt-10">
              <input
                className="mr-2"
                type="checkbox"
                id="terms"
                name="terms"
                checked
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
          <p className="pt-10">Already have an account? Log In</p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
