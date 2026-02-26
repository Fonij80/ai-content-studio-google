import { motion } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowLeft,
  Zap,
  Calendar
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useStore();

  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl"
      >
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            سلام {user?.name} عزیز! 👋
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            امروز ۳ ایده جدید و جذاب برای محتوای شما داریم. آماده‌اید تا با هم یک پست خیره‌کننده بسازیم؟
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/dashboard/create" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
              <Sparkles size={18} />
              تولید محتوای جدید
            </Link>
            <Link to="/dashboard/ideas" className="px-8 py-3 bg-slate-800 text-white border border-slate-700 rounded-full font-bold hover:bg-slate-700 transition-all">
              مشاهده ایده‌ها
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px]"></div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'محتوای تولید شده', value: '۲۳', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'پست‌های زمان‌بندی شده', value: '۵', icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'اعتبار باقی‌مانده', value: `${user?.credits}`, icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5"
          >
            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shadow-inner`}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <Clock size={20} className="text-blue-500" />
              فعالیت‌های اخیر
            </h3>
            <Link to="/dashboard/history" className="text-sm text-blue-600 font-medium hover:underline">مشاهده همه</Link>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { title: 'پوستر تبلیغاتی کفش', date: '۲ ساعت پیش', status: 'تکمیل شده' },
              { title: 'کاروسل آموزشی هوش مصنوعی', date: 'دیروز', status: 'تکمیل شده' },
              { title: 'طراحی استوری اینستاگرام', date: '۲ روز پیش', status: 'تکمیل شده' },
            ].map((item, i) => (
              <div key={i} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold">
                  <CheckCircle2 size={14} />
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap size={20} />
              نکته روز
            </h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              استفاده از رنگ‌های مکمل در طراحی پوستر می‌تواند نرخ تعامل پست‌های شما را تا ۳۰٪ افزایش دهد. هوش مصنوعی ما این موضوع را در طراحی‌های شما لحاظ می‌کند.
            </p>
            <button className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-bold transition-all backdrop-blur-sm">
              بیشتر بدانید
            </button>
          </div>
          <Sparkles className="absolute -bottom-10 -left-10 w-40 h-40 text-white/10 rotate-12" />
        </div>
      </div>
    </div>
  );
}
