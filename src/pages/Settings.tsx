import { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  CreditCard, 
  Shield, 
  Bell, 
  Globe, 
  Key,
  Check,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Settings() {
  const { user } = useStore();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'پروفایل کاربری', icon: User },
    { id: 'billing', name: 'اشتراک و پرداخت', icon: CreditCard },
    { id: 'security', name: 'امنیت', icon: Shield },
    { id: 'notifications', name: 'اطلاع‌رسانی', icon: Bell },
    { id: 'api', name: 'تنظیمات API', icon: Key },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
          <SettingsIcon className="text-slate-500" size={32} />
          تنظیمات حساب
        </h1>
        <p className="text-slate-500 mt-2">مدیریت اطلاعات کاربری، اشتراک و تنظیمات پلتفرم.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-100' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              <tab.icon size={20} />
              <span className="text-sm">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-8">
          {activeTab === 'profile' && (
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-8">
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <img src={user?.avatar} className="w-24 h-24 rounded-full border-4 border-slate-50 shadow-md" alt="" />
                  <button className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                    تغییر عکس
                  </button>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{user?.name}</h3>
                  <p className="text-slate-500">{user?.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">نام و نام خانوادگی</label>
                  <input type="text" defaultValue={user?.name} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">ایمیل</label>
                  <input type="email" defaultValue={user?.email} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">زبان پلتفرم</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none">
                      <option>فارسی (IR)</option>
                      <option>English (US)</option>
                    </select>
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="px-8 py-3 gradient-primary text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-all">
                  ذخیره تغییرات
                </button>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-blue-100 text-sm mb-1">پلن فعلی شما</p>
                    <h3 className="text-3xl font-black mb-4">حرفه‌ای (Pro)</h3>
                    <div className="flex items-center gap-2 text-blue-100 text-sm">
                      <Check size={16} />
                      <span>تمدید خودکار در تاریخ ۱۴۰۴/۱۲/۲۵</span>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                    <Sparkles size={18} />
                    ارتقای پلن
                  </button>
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6">آمار مصرف اعتبار</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500">اعتبار استفاده شده</span>
                      <span className="font-bold text-slate-800">۸۰٪</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div className="w-[80%] h-full gradient-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">کل پست‌ها</p>
                      <p className="text-xl font-black text-slate-900">۲۳</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">ایده‌ها</p>
                      <p className="text-xl font-black text-slate-900">۱۴۵</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">روزهای باقی‌مانده</p>
                      <p className="text-xl font-black text-slate-900">۱۸</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">اعتبار هدیه</p>
                      <p className="text-xl font-black text-slate-900">۵</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Key size={20} className="text-blue-500" />
                تنظیمات API
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                از کلیدهای API برای اتصال استودیو ایرانی به ابزارهای دیگر خود استفاده کنید. مراقب باشید این کلیدها را در اختیار کسی قرار ندهید.
              </p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">کلید دسترسی (API Key)</label>
                  <div className="flex gap-2">
                    <input 
                      type="password" 
                      readOnly 
                      value="sk_test_51MzBy6L9Y2pW4X7q8r9s0t1u2v3w4x5y6z" 
                      className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none font-mono text-sm" 
                    />
                    <button className="px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all">کپی</button>
                  </div>
                </div>
                <button className="text-sm font-bold text-red-600 hover:underline">تولید مجدد کلید</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
