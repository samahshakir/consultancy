
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800/50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">تواصل معنا</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">جاهز للبدء بمشروعك القادم؟ نحن هنا للمساعدة</h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              فريقنا من المهندسين والمستشارين جاهز للرد على استفساراتكم وتقديم الدعم اللازم لتحويل أفكاركم إلى واقع ملموس.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 transition-all">
                   <svg className="w-6 h-6 text-amber-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">الموقع</h5>
                  <p className="text-slate-400">خميس مشيط - خلف البلدية القديمة</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 transition-all">
                   <svg className="w-6 h-6 text-amber-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">البريد الإلكتروني</h5>
                  <p className="text-slate-400">info@wessambinaa.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 transition-all">
                   <svg className="w-6 h-6 text-amber-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">الهاتف</h5>
                  <p className="text-slate-400" dir="ltr">0530136456</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">أرسل استفسارك</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">الاسم بالكامل</label>
                  <input type="text" className="w-full bg-slate-100 border-none rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-amber-500 transition-all" placeholder="الاسم هنا" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">رقم الجوال</label>
                  <input type="tel" className="w-full bg-slate-100 border-none rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-amber-500 transition-all" placeholder="05xxxxxxxx" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">نوع الخدمة</label>
                <select className="w-full bg-slate-100 border-none rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-amber-500 transition-all appearance-none">
                  <option>تصميم معماري</option>
                  <option>إشراف هندسي</option>
                  <option>تخطيط عمراني</option>
                  <option>استشارة هندسية</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">رسالتك</label>
                <textarea rows={4} className="w-full bg-slate-100 border-none rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-amber-500 transition-all" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>
              <button type="button" className="w-full gradient-gold text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all transform hover:scale-[1.02]">
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
