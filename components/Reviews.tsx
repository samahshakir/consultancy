
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  // Triple the reviews to ensure smooth continuous scrolling
  const duplicatedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_logo_2015.svg" className="h-4" alt="Google" />
            <span className="text-sm font-bold text-slate-600">تقييماتنا الرسمية على قوقل</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">ماذا يقول عملاؤنا عنا؟</h2>
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-amber-500 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 text-xl font-bold text-slate-900">5.0 / 5.0</span>
          </div>
          <p className="text-slate-500 text-sm">بناءً على التقييمات الحقيقية لعملائنا</p>
        </div>
      </div>

      {/* Horizontal Scrolling Wrapper */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="flex gap-6 animate-marquee pause-on-hover whitespace-nowrap w-max">
          {duplicatedReviews.map((review, index) => (
            <div 
              key={`${review.id}-${index}`} 
              className="inline-block w-[350px] bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:bg-white whitespace-normal"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{review.author}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-700 mb-3 leading-relaxed text-sm">"{review.text}"</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200/50">
                <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">مراجعة جوجل</span>
                <span className="text-[10px] text-slate-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse Marquee for second row if desired, or just one large one. Let's keep one elegant one. */}
      <div className="mt-8 text-center">
        <a 
          href="https://www.google.com/search?q=%D9%85%D9%83%D8%AA%D8%A8+%D9%88%D8%B3%D8%A7%D9%85+%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg inline-flex items-center gap-2"
        >
          أضف تقييمك على قوقل
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Reviews;
