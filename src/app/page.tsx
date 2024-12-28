"use client";

import React, { useState } from 'react';
import { Search, Video, X, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import guestsData from '@/data/guests.json';

const KnowledgeUniverse = () => {
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Main guests data
  const allGuests = guestsData;

  const filteredGuests = allGuests
    .filter((guest) => {
      const lowerSearch = searchTerm.toLowerCase();
      return guest.name.toLowerCase().includes(lowerSearch) ||
             guest.role.toLowerCase().includes(lowerSearch) ||
             guest.episodes.some(ep => ep.title.toLowerCase().includes(lowerSearch));
    })
    .sort((a, b) => b.totalViews - a.totalViews);
  
  const getBilibiliEmbedURL = (url) => {
    const regex = /bilibili\.com\/video\/(BV\w+)/;
    const match = url.match(regex);
    return match ? `https://player.bilibili.com/player.html?bvid=${match[1]}&autoplay=0` : url;
  };
  
  const VideoDialog = ({ video, onClose }) => {
    if (!video?.url) return null;
    const embedURL = getBilibiliEmbedURL(video.url);

    return (
      <Dialog open={!!video} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl p-0">
          <DialogTitle className="sr-only">{video.title}</DialogTitle>
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full"
              src={embedURL}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>

      </Dialog>
    );
  };
 // 排序 episodes
  const sortedEpisodes = selectedGuest
    ? [...selectedGuest.episodes].sort((a, b) => {
        if (a.views && b.views) {
          return b.views - a.views; // 按播放量从高到低排序
        }
        return a.views ? -1 : 1; // 无播放量的排后面
      })
    : [];
  
  return (
    <div className="w-full min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-6xl mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">课代表的嘉宾们</h1>
            <div className="relative w-64">
              <Input
                type="text"
                placeholder="搜索嘉宾或话题..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {filteredGuests.length === 0 ? (
          <Alert className="bg-slate-800 border-slate-700 text-white">
            <AlertTitle>没有找到结果</AlertTitle>
            <AlertDescription>
              暂无匹配的嘉宾，请尝试其他搜索词
            </AlertDescription>
          </Alert>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuests.map((guest) => (
              <Card 
                key={guest.id} 
                className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer"
                onClick={() => setSelectedGuest(guest)}
              >
                <CardHeader>
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 flex-shrink-0">
                      <img
                        src={`https://raw.githubusercontent.com/xihajun/kedaibiao_bilibili_profile/refs/heads/main/images/${guest.id}/face_0.png`}
                        alt={guest.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%232563eb"/><text x="50%" y="50%" fill="white" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16" font-weight="bold">${guest.name.slice(0, 2)}</text></svg>`;
                        }}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-white">{guest.name}</CardTitle>
                      <CardDescription className="text-slate-400">{guest.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-slate-700 text-slate-200">
                      {guest.episodes.length} 集
                    </Badge>
                    <span className="text-sm text-slate-400">
                      {guest.totalViews.toLocaleString()} 次观看
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Selected guest sidebar */}
      {selectedGuest && (
        <div className="fixed inset-y-0 right-0 w-96 bg-slate-800 border-l border-slate-700 p-6 overflow-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-slate-400 hover:text-white"
            onClick={() => setSelectedGuest(null)}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <h2 className="text-2xl font-bold mb-2 text-white">{selectedGuest.name}</h2>
          <p className="text-slate-400 mb-4">{selectedGuest.role}</p>
          
          <div className="space-y-4">
            {sortedEpisodes.map((episode, index) => (
              <Card
                key={index}
                className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors cursor-pointer"
                onClick={() => setSelectedVideo(episode)}
              >
                <CardHeader>
                  <CardTitle className="text-base flex items-center text-white">
                    <Video className="w-4 h-4 mr-2 text-blue-400" />
                    {episode.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">
                      {episode.views
                        ? `${episode.views.toLocaleString()} 次观看`
                        : "暂无播放量"}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-white"
                      asChild
                    >
                      <a
                        href={episode.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        查看原视频
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-700">
            <div className="text-sm text-slate-400">
              总观看: {selectedGuest.totalViews.toLocaleString()}
            </div>
          </div>
        </div>
      )}

      {/* Video dialog */}
      <VideoDialog video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};

export default KnowledgeUniverse;
