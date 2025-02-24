
import { Activity, Bell, MessageSquare } from "lucide-react";

const StatCard = ({ icon: Icon, title, value, change }: any) => (
  <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(114,137,218,0.2)] transition-all duration-500 hover:translate-y-[-2px]">
    <div className="flex items-center">
      <div className="p-3 rounded-xl bg-gradient-to-br from-discord to-discord-dark">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold bg-gradient-to-r from-discord via-discord-light to-discord-dark bg-clip-text text-transparent">
          {value}
        </p>
        {change && (
          <p className="text-sm text-green-500 flex items-center">
            <span className="mr-1">↑</span>
            {change}% vs last week
          </p>
        )}
      </div>
    </div>
  </div>
);

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in">
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
