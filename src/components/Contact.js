const Contact = () => {
    return (
        <div className="mt-32">
            <div className="w-full md:w-8/12 lg:w-6/12 mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            placeholder="Enter your name"
                            className="border border-gray-300 rounded-lg p-3 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mesg" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="mesg"
                            placeholder="Enter your message"
                            className="border border-gray-300 rounded-lg p-3 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
