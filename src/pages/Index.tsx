import { useState, useMemo } from "react";
import { NotificationCard } from "@/components/NotificationCard";
import { DashboardStats } from "@/components/DashboardStats";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Topbar } from "@/components/Topbar";

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

  // Filtrer les notifications en fonction de la recherche
  const filteredNotifications = useMemo(() => {
    if (!searchQuery.trim()) return mockNotifications;
    
    const searchLower = searchQuery.toLowerCase();
    return mockNotifications.filter(
      notification =>
        notification.botName.toLowerCase().includes(searchLower) ||
        notification.message.toLowerCase().includes(searchLower)
    );
  }, [searchQuery]);

  // Message si aucun résultat
  const noResults = searchQuery.trim() && filteredNotifications.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">
      <Topbar />
      <div className="max-w-7xl mx-auto space-y-10 pt-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-discord via-discord-light to-discord-dark bg-clip-text text-transparent">
            Discord Bot Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Supervisez vos notifications Discord en temps réel
          </p>
        </div>

        <DashboardStats />

        <div className="flex flex-col sm:flex-row gap-4 backdrop-blur-md bg-white/10 dark:bg-black/10 p-4 rounded-xl border border-white/20">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10 bg-white/50 dark:bg-black/50 border-white/20 backdrop-blur-sm"
              placeholder="Rechercher par nom de bot ou message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="bg-discord hover:bg-discord-dark transition-all duration-300 hover:shadow-lg hover:shadow-discord/20">
            <Filter className="w-4 h-4 mr-2" />
            Filtrer
          </Button>
        </div>

        <div className="grid gap-6 animate-fade-in">
          {noResults ? (
            <div className="text-center p-8 bg-white/10 dark:bg-black/10 rounded-xl backdrop-blur-md border border-white/20">
              <p className="text-gray-600 dark:text-gray-400">Aucune notification trouvée pour "{searchQuery}"</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                botName={notification.botName}
                message={notification.message}
                timestamp={notification.timestamp}
                channel={notification.channel}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
