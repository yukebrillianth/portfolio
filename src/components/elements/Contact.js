import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({});

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const { name, email, message } = formData
        if (name !== undefined && name !== '' && email !== undefined && email !== '' && message !== undefined && message !== '') {
            try {
                setLoading(true);
                await fetch(
                    "https://v1.nocodeapi.com/yukebrillianth/google_sheets/cMfsoImazTeyjYlr?tabId=Feedback",
                    {
                        method: "post",
                        body: JSON.stringify([[name, email, message]]),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
                setLoading(false);
                setMessage({
                    isError: false,
                    text: "Sukses mengirim pesan!"
                });
                setFormData({})
                document.querySelector('#name').value = '';
                document.querySelector('#email').value = '';
                document.querySelector('#message').value = '';
            } catch (error) {
                setLoading(false);
                console.error("Error:", error);
                setMessage({
                    isError: true,
                    text: error
                });
            }
        } else {
            setMessage({
                isError: true,
                text: "Semua field haru diisi!"
            });
        }
    };
    return (
        <section className="text-gray-600 body-font py-12 relative" id="Contact">
            <h2 className="title-font sm:text-4xl mb-8 text-4xl font-semibold text-gray-900 text-center">Contact Me</h2>
            <div className="container px-5 mx-auto">
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input
                                    onChange={handleInput}
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name here"
                                    className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input onChange={handleInput} required type="email" id="email" name="email" placeholder="Your email here" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea onChange={handleInput} required id="message" name="message" placeholder="Your message here" className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 h-32 outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-sm"></textarea>
                            </div>
                        </div>
                        {message.text ? (
                            <small className="p-2">
                                {message.isError ? (
                                    <b className="text-red-700">{message.text}</b>
                                ) : (
                                    <b className="text-green-700">{message.text}</b>
                                )}
                            </small>
                        ) : undefined}
                        <div className="p-2 w-full">
                            <button
                                onClick={sendData}
                                type="submit"
                                className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
                            >
                                {loading ? (
                                    <svg className="mt-1 animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : undefined}
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
