"use client";

import React, { useState } from 'react';
import { Sun, User, Video, Star, Briefcase, Code, Brain, Heart, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const KnowledgeUniverse = () => {
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const categories = {
    career: {
      name: "职业发展",
      color: "from-blue-400 to-blue-600",
      iconColor: "text-blue-400",
      icon: Briefcase,
    },
    tech: {
      name: "科技创新",
      color: "from-purple-400 to-purple-600",
      iconColor: "text-purple-400",
      icon: Code,
    },
    thinking: {
      name: "思维方法",
      color: "from-green-400 to-green-600",
      iconColor: "text-green-400",
      icon: Brain,
    },
    life: {
      name: "生活方式",
      color: "from-red-400 to-red-600",
      iconColor: "text-red-400",
      icon: Heart,
    },
    hobby: {
      name: "兴趣爱好",
      color: "from-yellow-400 to-yellow-600",
      iconColor: "text-yellow-400",
      icon: Coffee,
    },
  };

  // 核心嘉宾数据
  const mainGuests = [
    {
      id: 1,
      name: "Leon",
      role: "Financial Expert",
      category: "thinking",
      episodes: [
        { 
          title: "如何积累第一桶金",
          views: 118526,
          url: "https://www.youtube.com/watch?v=9opd3YjEr14"
        }
      ],
      totalViews: 118526,
    },
    {
      id: 2,
      name: "硅谷徐老师",
      role: "Tech Leader",
      category: "tech",
      episodes: [
        { 
          title: "AI元年复盘",
          views: 135624,
          url: "https://www.youtube.com/watch?v=awaZBWTss-4"
        }
      ],
      totalViews: 135624,
    },
    {
      id: 3,
      name: "YC",
      role: "Product Leader",
      category: "career",
      episodes: [
        {
          title: "90后首席产品官",
          views: 9090,
          url: "https://www.youtube.com/watch?v=WDSPYtv8rXY"
        }
      ],
      totalViews: 9090,
    }
  ];

  // 访谈嘉宾数据
  const guestStars = [
    {
      id: 4,
      name: "小露",
      role: "亚马逊PM",
      category: "career",
      episodes: [
        {
          title: "不是主业不给力，副业更有性价比",
          views: 6611,
          url: "https://www.youtube.com/watch?v=MWt3Zo1oC70"
        }
      ],
      totalViews: 6611,
    }
  ];

  const calculateOrbitPosition = (index, total, radius, offset = 0) => {
    const angle = (index * 2 * Math.PI) / total + offset;
    return {
      left: `${50 + radius * Math.cos(angle)}%`,
      top: `${50 + radius * Math.sin(angle)}%`
    };
  };

  const VideoDialog = ({ video }) => {
    if (!video?.url) return null;
    
    const getYouTubeId = (url) => {
      const match = url.match(/[?&]v=([^&]+)/);
      return match ? match[1] : '';
    };
    
    const videoId = getYouTubeId(video.url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return (
      <Dialog open={!!video} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[80vw]">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
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

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* 中心太阳（课代表） */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 animate-pulse flex items-center justify-center shadow-lg shadow-yellow-500/50">
          <Sun size={64} className="text-yellow-100" />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center">
          <div className="text-yellow-300 font-bold">课代表</div>
        </div>
      </div>

      {/* 分类指示器 */}
      {Object.entries(categories).map(([key, category], index) => {
        const CategoryIcon = category.icon;
        const position = calculateOrbitPosition(index, Object.keys(categories).length, 15);
        return (
          <div
            key={key}
            className={`absolute -translate-x-1/2 -translate-y-1/2 z-40 
            transition-all duration-300 ${selectedCategory && selectedCategory !== key ? 'opacity-30' : 'opacity-100'}`}
            style={position}
          >
            <div 
              className={`p-3 rounded-full cursor-pointer bg-gradient-to-r ${category.color}
              transition-transform hover:scale-110 shadow-lg`}
              onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
            >
              <CategoryIcon size={24} className="text-white" />
            </div>
          </div>
        );
      })}

      {/* 主要嘉宾轨道 */}
      {mainGuests.map((guest, index) => {
        const position = calculateOrbitPosition(
          index, 
          mainGuests.length, 
          25,
          Math.PI / 4
        );
        if (selectedCategory && guest.category !== selectedCategory) return null;
        return (
          <div
            key={guest.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500"
            style={position}
          >
            <div 
              className={`w-20 h-20 rounded-full cursor-pointer
              bg-gradient-to-r ${categories[guest.category].color}
              flex items-center justify-center
              transition-transform hover:scale-110 shadow-lg`}
              onClick={() => setSelectedGuest(guest)}
            >
              <User size={32} className="text-white" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center w-24">
                <div className="text-sm font-bold truncate">{guest.name}</div>
              </div>
            </div>
          </div>
        );
      })}

      {/* 访谈嘉宾轨道 */}
      {guestStars.map((guest, index) => {
        const position = calculateOrbitPosition(
          index,
          guestStars.length,
          35,
          Math.PI / 3
        );
        if (selectedCategory && guest.category !== selectedCategory) return null;
        return (
          <div
            key={guest.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500"
            style={position}
          >
            <div 
              className={`w-12 h-12 rounded-full cursor-pointer
              bg-gradient-to-r ${categories[guest.category].color}
              flex items-center justify-center
              transition-transform hover:scale-110 shadow-lg`}
              onClick={() => setSelectedGuest(guest)}
            >
              <Star size={20} className="text-white" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center w-20">
                <div className="text-xs font-bold truncate">{guest.name}</div>
              </div>
            </div>
          </div>
        );
      })}

      {/* 分类说明面板 */}
      <div className="absolute top-4 left-4 p-4 bg-gray-800 bg-opacity-80 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">课代表知识宇宙</h1>
        <div className="flex flex-col gap-2">
          {Object.entries(categories).map(([key, category]) => (
            <div 
              key={key}
              className={`flex items-center gap-2 cursor-pointer 
              hover:bg-gray-700 p-2 rounded transition-colors
              ${selectedCategory === key ? 'bg-gray-700' : ''}`}
              onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
            >
              <category.icon className={category.iconColor} size={16} />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 嘉宾信息卡片 */}
      {selectedGuest && (
        <Card className="absolute bottom-4 right-4 w-96 bg-gray-800 bg-opacity-80 text-white">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">{selectedGuest.name}</h2>
            <p className="text-sm text-gray-300 mb-4">{selectedGuest.role}</p>
            <div className="space-y-3">
              {selectedGuest.episodes.map((episode, index) => (
                <div 
                  key={index} 
                  className="group p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer"
                  onClick={() => setSelectedVideo(episode)}
                >
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span className="flex-1">{episode.title}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {episode.views.toLocaleString()} 次观看
                  </div>
                </div>
              ))}
              <div className="mt-2 pt-2 border-t border-gray-700 text-sm text-gray-300">
                总观看: {selectedGuest.totalViews.toLocaleString()}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 视频播放弹窗 */}
      <VideoDialog video={selectedVideo} />
    </div>
  );
};

export default KnowledgeUniverse;
