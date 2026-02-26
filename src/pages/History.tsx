import { motion } from 'framer-motion';
import { 
  History as HistoryIcon, 
  Download, 
  ExternalLink, 
  Search, 
  Filter,
  MoreHorizontal,
  FileText,
  Layers
} from 'lucide-react';
import { HistoryItem } from '../types';

const mockHistory: HistoryItem[] = [
  { id: '1', date: '۱۴۰۴/۱۲/۰۵', type: 'Poster', platform: 'اینستاگرام', downloadUrl: '#' },
  { id: '2', date: '۱۴۰۴/۱۲/۰۴', type: 'Carousel', platform: 'اینستاگرام', downloadUrl: '#' },
  { id: '3', date: '۱۴۰۴/۱۲/۰۲', type: 'Poster', platform: 'تلگرام', downloadUrl: '#' },
  { id: '4', date: '۱۴۰۴/۱۱/۲۸', type: 'Poster', platform: 'آپارات', downloadUrl: '#' },
  { id: '5', date: '۱۴۰۴/۱۱/۲۵', type: 'Carousel', platform: 'اینستاگرام', downloadUrl: '#' },
  { id: '6', date: '۱۴۰۴/۱۱/۲۰', type: 'Poster', platform: 'اینستاگرام', downloadUrl: '#' },
];

export default function History() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <HistoryIcon className="text-purple-500" size={32} />
          تاریخچه تولیدات
        </h1>
        <p className="text-slate-500 mt-2">مشاهده و مدیریت تمامی محتواهای تولید شده توسط شما.</p>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="جستجو در تاریخچه..."
              className="w-full pr-10 pl-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-100 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-100 transition-all">
              <Filter size={16} />
              فیلتر کردن
            </button>
            <button className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-100 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-100 transition-all">
              خروجی اکسل
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-sm font-bold">
                <th className="px-6 py-4 font-bold">نوع محتوا</th>
                <th className="px-6 py-4 font-bold">تاریخ تولید</th>
                <th className="px-6 py-4 font-bold">پلتفرم هدف</th>
                <th className="px-6 py-4 font-bold">وضعیت</th>
                <th className="px-6 py-4 font-bold text-left">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockHistory.map((item, i) => (
                <motion.tr 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        item.type === 'Poster' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                        {item.type === 'Poster' ? <FileText size={20} /> : <Layers size={20} />}
                      </div>
                      <span className="font-bold text-slate-800">
                        {item.type === 'Poster' ? 'پوستر تک‌صفحه‌ای' : 'کاروسل چند‌اسلایدی'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-slate-600 text-sm">{item.date}</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">
                      {item.platform}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      تکمیل شده
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="دانلود">
                        <Download size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="مشاهده">
                        <ExternalLink size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-slate-50 flex items-center justify-center">
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold">۱</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-500 font-bold transition-all">۲</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-500 font-bold transition-all">۳</button>
          </div>
        </div>
      </div>
    </div>
  );
}
