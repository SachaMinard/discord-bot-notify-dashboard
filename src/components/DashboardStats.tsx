
import { Activity, Bell, MessageSquare } from "lucide-react";

const StatCard = ({ icon: Icon, title, value, change }: any) => (
  <div className="p-6 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex items-center">
      <div className="p-2 rounded-full bg-discord/10">
        <Icon className="w-5 h-5 text-discord" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {change && (
          <p className="text-sm text-green-500">+{change}% vs last week</p>
        )}
      </div>
    </div>
  </div>
);

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in">
      <StatCard
        icon={Bell}
        title="Total Notifications"
        value="1,234"
        change="12"
      />
      <StatCard
        icon={MessageSquare}
        title="Active Channels"
        value="8"
        change="5"
      />
      <StatCard icon={Activity} title="Active Bots" value="3" />
    </div>
  );
};
