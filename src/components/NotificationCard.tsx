
import { MessageSquare, Bot, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface NotificationCardProps {
  botName: string;
  message: string;
  timestamp: string;
  channel: string;
}

export const NotificationCard = ({
  botName,
  message,
  timestamp,
  channel,
}: NotificationCardProps) => {
  return (
    <Card className="p-6 hover:shadow-[0_8px_32px_rgba(114,137,218,0.15)] transition-all duration-500 hover:translate-y-[-2px] backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 animate-fade-in">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-discord to-discord-dark">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-gray-900 bg-gradient-to-r from-discord to-discord-dark bg-clip-text text-transparent">
              {botName}
            </h3>
            <span className="text-sm text-gray-500 flex items-center bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
              <Clock className="w-4 h-4 mr-1" />
              {timestamp}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{message}</p>
          <div className="flex items-center mt-3 text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit backdrop-blur-md">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>{channel}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
