import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Palette, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft,
  Star,
  Instagram,
  Twitter,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'ایده‌پردازی هوشمند',
    desc: 'با یک توصیف کوتاه، ده‌ها ایده جذاب برای پست‌های خود دریافت کنید.',
    icon: Zap,
    color: 'bg-amber-500'
  },
  {
    title: 'تولید پوستر و کاروسل',
    desc: 'طراحی‌های حرفه‌ای و متناسب با برند شما در کمتر از چند ثانیه.',
    icon: Palette,
    color: 'bg-blue-500'
  },
  {
    title: 'ویرایشگر آنلاین',
    desc: 'محتوای تولید شده را به سادگی شخصی‌سازی و ویرایش کنید.',
    icon: Sparkles,
    color: 'bg-purple-500'
  },
  {
    title: 'زمان‌بندی هوشمند',
    desc: 'پست‌های خود را برای بهترین زمان انتشار برنامه‌ریزی کنید.',
    icon: Calendar,
    color: 'bg-emerald-500'
  }
];

const plans = [
  {
    name: 'پایه',
    price: '۱۵۰,۰۰۰',
    features: ['۱۰ تولید محتوا در ماه', 'ایده‌پردازی محدود', 'پشتیبانی ایمیلی'],
    recommended: false
  },
  {
    name: 'حرفه‌ای',
    price: '۳۵۰,۰۰۰',
    features: ['۵۰ تولید محتوا در ماه', 'ایده‌پردازی نامحدود', 'زمان‌بندی پست‌ها', 'پشتیبانی ۲۴ ساعته'],
    recommended: true
  },
  {
    name: 'استودیو',
    price: '۷۵۰,۰۰۰',
    features: ['تولید محتوای نامحدود', 'مدیریت تیمی', 'آنالیز پیشرفته', 'پنل اختصاصی آژانس'],
    recommended: false
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white">
              <Sparkles size={24} />
            </div>
            <span className="font-bold text-xl text-slate-900">استودیو ایرانی</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#features" className="hover:text-blue-600 transition-colors">ویژگی‌ها</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">قیمت‌گذاری</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">نظرات</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-slate-600 font-medium hover:text-blue-600 transition-colors">ورود</Link>
            <Link to="/register" className="px-6 py-2.5 gradient-primary text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
              شروع رایگان
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
              محتوای حرفه‌ای بسازید <br />
              <span className="gradient-text">با هوش مصنوعی</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              سریع، ارزان و کاملاً ایرانی. از ایده‌پردازی تا طراحی و زمان‌بندی پست‌های اینستاگرام، همه در یک پلتفرم هوشمند.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register" className="w-full sm:w-auto px-10 py-4 gradient-primary text-white rounded-full text-lg font-bold shadow-xl shadow-blue-200 hover:shadow-2xl transition-all">
                شروع کنید
              </Link>
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                نمایش دمو
                <ArrowLeft size={20} />
              </button>
            </div>
          </motion.div>

          {/* Abstract background elements */}
          <div className="absolute top-0 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">هر آنچه برای رشد نیاز دارید</h2>
            <p className="text-slate-500">ابزارهای هوشمند برای خلق محتوای خیره‌کننده</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">مورد اعتماد سازندگان محتوا</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  "این پلتفرم واقعاً روند تولید محتوای من رو تغییر داد. قبلاً ساعت‌ها وقت صرف طراحی می‌کردم، اما الان در عرض چند دقیقه پست‌های حرفه‌ای می‌سازم."
                </p>
                <div className="flex items-center gap-4">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} className="w-12 h-12 rounded-full bg-white" alt="" />
                  <div>
                    <p className="font-bold text-slate-900">سارا محمدی</p>
                    <p className="text-sm text-slate-500">بلاگر تکنولوژی</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">پلن‌های اشتراک</h2>
            <p className="text-slate-400">متناسب با نیاز و بودجه شما</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-3xl border ${p.recommended ? 'border-blue-500 bg-slate-800 scale-105' : 'border-slate-700 bg-slate-800/50'} flex flex-col`}
              >
                {p.recommended && (
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">پیشنهادی</span>
                )}
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black">{p.price}</span>
                  <span className="text-slate-400">تومان / ماه</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 size={18} className="text-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${p.recommended ? 'gradient-primary text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40' : 'bg-white text-slate-900 hover:bg-slate-100'}`}>
                  انتخاب پلن
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white">
                  <Sparkles size={18} />
                </div>
                <span className="font-bold text-lg text-slate-900">استودیو ایرانی</span>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                اولین پلتفرم جامع تولید محتوای هوشمند در ایران. ما به شما کمک می‌کنیم تا در شبکه‌های اجتماعی بدرخشید.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">محصولات</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">تولید پوستر</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">ایده‌پردازی AI</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">زمان‌بندی پست</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">ویرایشگر آنلاین</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">شرکت</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">درباره ما</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">تماس با ما</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">وبلاگ</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">قوانین و مقررات</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">خبرنامه</h4>
              <p className="text-slate-500 mb-6">برای دریافت آخرین اخبار و تخفیف‌ها عضو شوید.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="ایمیل شما" className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                <button className="px-4 py-2 gradient-primary text-white rounded-xl font-bold">عضویت</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
            <p>© ۱۴۰۴ استودیو محتوای ایرانی. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
