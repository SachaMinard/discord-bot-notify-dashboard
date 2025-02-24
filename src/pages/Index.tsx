
import { useState } from "react";
import { NotificationCard } from "@/components/NotificationCard";
import { DashboardStats } from "@/components/DashboardStats";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

// Données de test
const mockNotifications = [
  {
    id: 1,
    botName: "ModeratorBot",
    message: "Nouveau membre rejoint le serveur",
    timestamp: "Il y a 5 min",
    channel: "#general"
  },
  {
    id: 2,
    botName: "MusicBot",
    message: "Playlist terminée",
    timestamp: "Il y a 15 min",
    channel: "#music"
  },
  {
    id: 3,
    botName: "WelcomeBot",
    message: "Message de bienvenue envoyé",
    timestamp: "Il y a 30 min",
    channel: "#welcome"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Discord Bot Dashboard</h1>
          <p className="text-gray-600">Supervisez vos notifications Discord en temps réel</p>
        </div>

        {/* Stats */}
        <DashboardStats />

        {/* Filtres et Recherche */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Rechercher des notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="bg-discord hover:bg-discord-dark transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Filtrer
          </Button>
        </div>

        {/* Liste des notifications */}
        <div className="grid gap-4 animate-fade-in">
          {mockNotifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              botName={notification.botName}
              message={notification.message}
              timestamp={notification.timestamp}
              channel={notification.channel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
