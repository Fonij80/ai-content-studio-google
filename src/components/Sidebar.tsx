import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Lightbulb, 
  Palette, 
  Calendar, 
  History, 
  Settings, 
  LogOut,
  Sparkles
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'خانه', icon: Home, path: '/dashboard' },
  { name: 'ایده‌پردازی', icon: Lightbulb, path: '/dashboard/ideas' },
  { name: 'تولید محتوا', icon: Palette, path: '/dashboard/create' },
  { name: 'زمان‌بندی', icon: Calendar, path: '/dashboard/schedule' },
  { name: 'تاریخچه', icon: History, path: '/dashboard/history' },
  { name: 'تنظیمات', icon: Settings, path: '/dashboard/settings' },
];

export default function Sidebar() {
  const { logout } = useStore();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-l border-slate-200 shadow-sm">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white shadow-lg shadow-blue-200">
          <Sparkles size={24} />
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-800">استودیو ایرانی</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-blue-50 text-blue-600 font-medium" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              )
            }
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut size={20} />
          <span>خروج از حساب</span>
        </button>
      </div>
    </aside>
  );
}
