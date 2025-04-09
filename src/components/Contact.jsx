import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const BOT_TOKEN = '7330849668:AAH6-V7mMPu9Rha2infXYwBQ7zbVDRRbHe0';
  const CHAT_ID = '7426153375';

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `📩 Yangi xabar!\n\n👤 Ism: ${formData.name}\n📧 Email: ${formData.email}\n📝 Xabar: ${formData.message}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text
        })
      });

      if (res.ok) {
        toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Xabar yuborishda xatolik yuz berdi.");
      }
    } catch (err) {
      toast.error("Server bilan bog‘lanib bo‘lmadi.");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-10" id='contact'>
      <div className="bg-white rounded-4xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2">
        <div className="bg-orange-400 text-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Aloqa ma'lumotlari</h2>
          <p className="mb-6 text-gray-100">Men bilan bog‘lanish uchun quyidagi ma’lumotlardan foydalaning:</p>
          <ul className="space-y-4 text-sm">
            <li><strong>Telefon:</strong> <a href="tel:+998902640680">+998 90 264 06 80</a></li>
            <li><strong>Email:</strong> egamberdiyevOybek@example.com</li>
            <li><strong>Manzil:</strong> Toshkent shahri, Mirzo Ulug'bek tumani</li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">Telegram</a>
            <a href="#" className="hover:text-gray-300">Facebook</a>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bizga xabar qoldiring</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600">Ismingiz</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ism"
                className="w-full shadow-2xl mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="w-full shadow-2xl mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-600">Xabaringiz</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Xabar yozing..."
                rows="4"
                className="w-full shadow-2xl mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-orange-400 hover:bg-orange-700 text-white py-2 px-4 rounded-4xl transition duration-300"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
