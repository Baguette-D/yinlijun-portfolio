export default function Contact() {
  return (
    <div className="max-w-xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-gray-600">I'm always open to discussing new opportunities and international collaborations.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            📧
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Email</p>
            <p className="text-lg font-semibold">yinlj@cpase.org.cn</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            📱
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Phone / WeChat</p>
            <p className="text-lg font-semibold">+86 186 0010 7403</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
            📍
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Location</p>
            <p className="text-lg font-semibold">Chaoyang, Beijing, China</p>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Quick Message</label>
          <textarea 
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            rows={4}
            placeholder="How can I help you?"
          ></textarea>
          <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition active:scale-95">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
