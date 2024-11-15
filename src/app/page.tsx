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
    "id": 1,
    "name": "硅谷徐老师",
    "role": "Tech Leader",
    "category": "tech",
    "episodes": [
      {
        "title": "AI元年复盘：如何独立思考，抓住未来机会？｜硅谷徐老师（上）",
        "views": 130000,
        "url": "https://www.youtube.com/watch?v=awaZBWTss-4&t=44s",
        "uploadTime": "10个月前"
      },
      {
        "title": "2024剧变之年，如何抓住人生机会？| 硅谷徐老师（中）",
        "views": 54000,
        "url": "https://www.youtube.com/watch?v=PWqmRub9wdI",
        "uploadTime": "10个月前"
      },
      {
        "title": "90%的工作都没价值？｜噪音时代，如何获取有价值的信息？｜硅谷徐老师访谈 3/3",
        "views": 30000,
        "url": "https://www.youtube.com/watch?v=P-frv84l3Fk&t=521s",
        "uploadTime": "6个月前"
      },
      {
        "title": "问硅谷华人高管：竹子天花板存在吗？｜和硅谷徐老师一起拉票",
        "views": 7803,
        "url": "https://www.youtube.com/watch?v=omAUYRo3Fvc",
        "uploadTime": "3个月前"
      }
    ],
    "totalViews": 221803
  },
  {
    "id": 2,
    "name": "Leon",
    "role": "Financial Expert",
    "category": "life",
    "episodes": [
      {
        "title": "如何积累第一桶金？｜摆脱韭菜思维的最后一次努力｜Leon访谈_上",
        "views": 110000,
        "url": "https://www.youtube.com/watch?v=9opd3YjEr14",
        "uploadTime": "9个月前"
      },
      {
        "title": "如何超越中产阶级？｜Leon谈财富_下",
        "views": 100000,
        "url": "https://www.youtube.com/watch?v=FsYCf_YuYvs&t=819s",
        "uploadTime": "8个月前"
      }
    ],
    "totalViews": 210000
  },
  {
    "id": 3,
    "name": "Kevin教授",
    "role": "Academic Expert",
    "category": "thinking",
    "episodes": [
      {
        "title": "提升判断力的关键？｜驱动科技进步靠什么？｜Kevin教授上",
        "views": 30000,
        "url": "https://www.youtube.com/watch?v=6FvFgTWO9BU",
        "uploadTime": "9个月前"
      },
      {
        "title": "看懂人类顶尖科研，才能理解科学的局限｜Kevin教授_2/3",
        "views": 11000,
        "url": "https://www.youtube.com/watch?v=2fpnJlHPhGA",
        "uploadTime": "8个月前"
      },
      {
        "title": "MIT教授vs.康奈尔博士：科学重要吗？｜Kevin教授_3/3",
        "views": 10000,
        "url": "https://www.youtube.com/watch?v=UlZJd6XpkAQ&t=8s",
        "uploadTime": "7个月前"
      },
      {
        "title": "MIT教授：为什么聪明人容易犯错？",
        "views": 4942,
        "url": "https://www.youtube.com/watch?v=vwoj6fHdxNI",
        "uploadTime": "1年前"
      }
    ],
    "totalViews": 55942
  },
  {
    "id": 4,
    "name": "杨帆",
    "role": "Business Leader",
    "category": "career",
    "episodes": [
      {
        "title": "如何越级搞定大佬？｜杨帆1/4",
        "views": 13000,
        "url": "https://www.youtube.com/watch?v=DCwVgje4JZA",
        "uploadTime": "9个月前"
      },
      {
        "title": "如何用”玩“来降维打击工作？｜杨帆4/4",
        "views": 11000,
        "url": "https://www.youtube.com/watch?v=t9opGmGaJAI",
        "uploadTime": "9个月前"
      },
      {
        "title": "年轻人为什么忽视制造业巨头？｜杨帆2/4",
        "views": 9245,
        "url": "https://www.youtube.com/watch?v=cQxoilIZfTc&t=1s",
        "uploadTime": "9个月前"
      },
      {
        "title": "如何理解00后？自媒体有多赚钱？｜杨帆3/4",
        "views": 6130,
        "url": "https://www.youtube.com/watch?v=tGB9IbZhEO0",
        "uploadTime": "9个月前"
      }
    ],
    "totalViews": 39375
  }
];


  // 访谈嘉宾数据
  const guestStars = [
    {
      "id": 5,
      "name": "YC",
      "role": "Product Leader",
      "category": "career",
      "episodes": [
        {
          "title": "90后首席产品官，如何成功适应新工作？｜YC访谈1/3",
          "views": 9390,
          "url": "https://www.youtube.com/watch?v=WDSPYtv8rXY",
          "uploadTime": "1个月前"
        }
      ],
      "totalViews": 9390
    },
    {
      "id": 6,
      "name": "Riley",
      "role": "Career Coach",
      "category": "thinking",
      "episodes": [
        {
          "title": "工作中没有自己想法，是怎么回事？| Riley 4/5",
          "views": 2759,
          "url": "https://www.youtube.com/watch?v=o-RlaLqTdLQ&t=20s",
          "uploadTime": "1年前"
        },
        {
          "title": "人生最大的真相｜Riley 3/5",
          "views": 2401,
          "url": "https://www.youtube.com/watch?v=4iKB7_YH1wc",
          "uploadTime": "1年前"
        },
        {
          "title": "第一个追随者才是真正的leader｜Riley聊天5/5",
          "views": 2336,
          "url": "https://www.youtube.com/watch?v=fy8bpHXqw6Q",
          "uploadTime": "1年前"
        }
      ],
      "totalViews": 7496
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
