import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

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

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const text = `📩 Yangi xabar!\n\n👤 Ism: ${name}\n📧 Email: ${email}\n📝 Xabar: ${message}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text
        })
      });

      if (res.ok) {
        toast.success("✅ Xabaringiz muvaffaqiyatli yuborildi!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("❌ Xabar yuborilmadi, qaytadan urinib ko'ring.");
      }
    } catch (error) {
      toast.error("❌ Serverga ulanishda xatolik yuz berdi.");
    }
  };

  return (
    <div data-aos='zoom-in' className="flex items-center justify-center px-4 py-10 sm:py-16" id='contact'>
      <div className="bg-white rounded-2xl md:rounded-4xl shadow-lg md:shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left side - contact info */}
        <div className="bg-orange-400 text-white rounded-t-2xl md:rounded-l-2xl md:rounded-r-none p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Aloqa ma'lumotlari</h2>
          <p className="mb-4 md:mb-6 text-gray-100 text-sm md:text-base">
            Men bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning:
          </p>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
            <li className="flex items-start">
              <strong className="w-16 md:w-20">Telefon:</strong> 
              <a href="tel:+998902640680" className="hover:underline">+998 90 264 06 80</a>
            </li>
            <li className="flex items-start">
              <strong className="w-16 md:w-20">Email:</strong> 
              <span>egamberdiyevOybek@example.com</span>
            </li>
            <li className="flex items-start">
              <strong className="w-16 md:w-20">Manzil:</strong> 
              <span>Toshkent shahri, Mirzo Ulug'bek tumani</span>
            </li>
          </ul>
          <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4">
            <a href="#" className="hover:text-gray-300 text-sm md:text-base">Instagram</a>
            <a href="#" className="hover:text-gray-300 text-sm md:text-base">Telegram</a>
            <a href="#" className="hover:text-gray-300 text-sm md:text-base">Facebook</a>
          </div>
        </div>

        {/* Right side - form */}
        <div className="p-6 md:p-8 order-1 md:order-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Bizga xabar qoldiring</h2>
          <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 text-sm md:text-base">Ismingiz</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ism"
                className="w-full shadow-sm md:shadow-2xl mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm md:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="w-full shadow-sm md:shadow-2xl mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm md:text-base">Xabaringiz</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Xabar yozing..."
                rows="4"
                className="w-full shadow-sm md:shadow-2xl mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-orange-400 hover:bg-orange-700 text-white py-2 px-4 rounded-2xl md:rounded-4xl transition duration-300 text-sm md:text-base"
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