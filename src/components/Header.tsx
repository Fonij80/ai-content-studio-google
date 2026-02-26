import { Bell, Search, User as UserIcon, ChevronDown, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Header() {
  const { user } = useStore();

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="جستجو در محتوا..."
            className="w-full pr-10 pl-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100">
          <Sparkles size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-blue-700">
            {user?.credits} / {user?.maxCredits} اعتبار
          </span>
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 left-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="text-left hidden lg:block">
            <p className="text-sm font-bold text-slate-800 text-right">{user?.name}</p>
            <p className="text-xs text-slate-500 text-right">{user?.plan === 'Pro' ? 'پلن حرفه‌ای' : user?.plan}</p>
          </div>
          <button className="flex items-center gap-1 group">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-9 h-9 rounded-full border-2 border-white shadow-sm group-hover:border-blue-200 transition-all"
            />
            <ChevronDown size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
}
