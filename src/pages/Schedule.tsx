import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Instagram, 
  Send, 
  Video, 
  MoreVertical, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { ScheduledPost } from '../types';

const mockScheduled: ScheduledPost[] = [
  {
    id: '1',
    platform: 'Instagram',
    imageUrl: 'https://picsum.photos/seed/sch1/400/400',
    caption: 'جشنواره تابستانه ما شروع شد! 😍',
    scheduledAt: '۱۴۰۴/۱۲/۰۷ - ۱۰:۳۰',
    status: 'Pending'
  },
  {
    id: '2',
    platform: 'Telegram',
    imageUrl: 'https://picsum.photos/seed/sch2/400/400',
    caption: 'آموزش جدید در کانال قرار گرفت.',
    scheduledAt: '۱۴۰۴/۱۲/۰۸ - ۱۸:۰۰',
    status: 'Pending'
  },
  {
    id: '3',
    platform: 'Instagram',
    imageUrl: 'https://picsum.photos/seed/sch3/400/400',
    caption: 'رضایت مشتریان عزیز ما...',
    scheduledAt: '۱۴۰۴/۱۲/۰۵ - ۱۲:۰۰',
    status: 'Published'
  }
];

export default function Schedule() {
  const [posts, setPosts] = useState<ScheduledPost[]>(mockScheduled);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <CalendarIcon className="text-emerald-500" size={32} />
            زمان‌بندی محتوا
          </h1>
          <p className="text-slate-500 mt-2">مدیریت و برنامه‌ریزی انتشار پست‌ها در شبکه‌های اجتماعی.</p>
        </div>
        <button className="px-6 py-3 gradient-primary text-white rounded-xl font-bold shadow-lg shadow-blue-200 flex items-center gap-2 hover:scale-105 transition-all">
          <Plus size={20} />
          پست جدید
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View (Mock) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-lg text-slate-800">اسفند ۱۴۰۴</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><ChevronRight size={20} /></button>
                <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><ChevronLeft size={20} /></button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'].map(d => (
                <div key={d} className="text-xs font-bold text-slate-400 py-2">{d}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 30 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 border transition-all cursor-pointer ${
                    i + 1 === 7 ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-500/10' : 'border-slate-50 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-sm font-bold ${i + 1 === 7 ? 'text-blue-600' : 'text-slate-600'}`}>{i + 1}</span>
                  {i + 1 === 7 && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>}
                  {i + 1 === 8 && <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
              <Clock size={20} className="text-blue-500" />
              لیست انتشار
            </h3>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 group hover:bg-white hover:shadow-md transition-all">
                  <img src={post.imageUrl} className="w-16 h-16 rounded-xl object-cover shadow-sm" alt="" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {post.platform === 'Instagram' ? <Instagram size={14} className="text-pink-600" /> : 
                       post.platform === 'Telegram' ? <Send size={14} className="text-blue-500" /> : <Video size={14} className="text-red-500" />}
                      <span className="text-xs font-bold text-slate-500">{post.platform}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 truncate">{post.caption}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{post.scheduledAt}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                      post.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {post.status === 'Published' ? 'منتشر شده' : 'در انتظار'}
                    </span>
                    <button className="p-1 text-slate-400 hover:text-slate-600"><MoreVertical size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-[2rem] text-white shadow-xl shadow-emerald-200/50">
            <h3 className="text-xl font-bold mb-4">وضعیت انتشار</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>پست‌های این ماه</span>
                  <span>۱۲ / ۲۰</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="w-[60%] h-full bg-white rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <p className="text-xs text-emerald-100 mb-1">موفق</p>
                  <p className="text-2xl font-black">۸</p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <p className="text-xs text-emerald-100 mb-1">ناموفق</p>
                  <p className="text-2xl font-black">۰</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">بهترین زمان انتشار</h3>
            <div className="space-y-4">
              {[
                { day: 'شنبه', time: '۱۹:۳۰', score: '۹۵٪' },
                { day: 'دوشنبه', time: '۲۱:۰۰', score: '۸۸٪' },
                { day: 'چهارشنبه', time: '۱۰:۰۰', score: '۸۲٪' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.day}</p>
                    <p className="text-[10px] text-slate-500">{item.time}</p>
                  </div>
                  <div className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                    {item.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
