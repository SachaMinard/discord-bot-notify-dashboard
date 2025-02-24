
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
    <Card className="p-4 hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/80 animate-fade-in">
      <div className="flex items-start space-x-4">
        <div className="p-2 rounded-full bg-discord/10">
          <Bot className="w-5 h-5 text-discord" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{botName}</h3>
            <span className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {timestamp}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{message}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>{channel}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
