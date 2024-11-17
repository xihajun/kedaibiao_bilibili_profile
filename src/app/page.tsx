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
    "name": "Richard",
    "role": "CTO, Blockchain Advocate, Founder, Huma Finance, Experienced Entrepreneur, Senior Engineer and Mentor, Entrepreneur",
    "category": "career",
    "episodes": [
      {
        "title": "听完我对Web3黑转粉了，你呢？",
        "views": "12K views",
        "url": "https://www.youtube.com/watch?v=-6CS95pZoIM",
        "uploadTime": "1个月前"
      },
      {
        "title": "华人在硅谷怎么做(不)到VP？",
        "views": "192K views",
        "url": "https://www.youtube.com/watch?v=8omGQSetKMA",
        "uploadTime": "3个月前"
      },
      {
        "title": "【圈内人故事】创业估值过亿真的爽，但是…",
        "views": "9.2K views",
        "url": "https://www.youtube.com/watch?v=CU_jBN8gvq8",
        "uploadTime": "6个月前"
      },
      {
        "title": "全网唯一，不搞噱头的Web3",
        "views": "19K views",
        "url": "https://www.youtube.com/watch?v=G_tWnkZoSyc",
        "uploadTime": "1个月前"
      },
      {
        "title": "都来过一遍的大佬教我们，选工作最重要的事情是什么？｜Fintech到底是干嘛的？｜不精致利己也能赚钱？",
        "views": "61K views",
        "url": "https://www.youtube.com/watch?v=R92hV48dENI",
        "uploadTime": "2个月前"
      },
      {
        "title": "Web3其实是二次元？｜如何判断新技术？",
        "views": "3.5K views",
        "url": "https://www.youtube.com/watch?v=uO8LTlmyfGk",
        "uploadTime": "3个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 2,
    "name": "Richard",
    "role": "CTO, Blockchain Advocate, Founder, Huma Finance, Experienced Entrepreneur, Senior Engineer and Mentor, Entrepreneur",
    "category": "tech",
    "episodes": [
      {
        "title": "听完我对Web3黑转粉了，你呢？",
        "views": "12K views",
        "url": "https://www.youtube.com/watch?v=-6CS95pZoIM",
        "uploadTime": "1个月前"
      },
      {
        "title": "华人在硅谷怎么做(不)到VP？",
        "views": "192K views",
        "url": "https://www.youtube.com/watch?v=8omGQSetKMA",
        "uploadTime": "3个月前"
      },
      {
        "title": "【圈内人故事】创业估值过亿真的爽，但是…",
        "views": "9.2K views",
        "url": "https://www.youtube.com/watch?v=CU_jBN8gvq8",
        "uploadTime": "6个月前"
      },
      {
        "title": "全网唯一，不搞噱头的Web3",
        "views": "19K views",
        "url": "https://www.youtube.com/watch?v=G_tWnkZoSyc",
        "uploadTime": "1个月前"
      },
      {
        "title": "都来过一遍的大佬教我们，选工作最重要的事情是什么？｜Fintech到底是干嘛的？｜不精致利己也能赚钱？",
        "views": "61K views",
        "url": "https://www.youtube.com/watch?v=R92hV48dENI",
        "uploadTime": "2个月前"
      },
      {
        "title": "Web3其实是二次元？｜如何判断新技术？",
        "views": "3.5K views",
        "url": "https://www.youtube.com/watch?v=uO8LTlmyfGk",
        "uploadTime": "3个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 4,
    "name": "张明",
    "role": "Content Creator, Entrepreneur, Founder & CEO, Product Manager, AI课程创作者, 魅力教练, AI工程师, 工程师, 数据科学家, Senior Engineer, 世界咖啡冠军, 资深工程师, Manager, Sales Manager, Economist, Economics PhD, 餐饮业主, 博士后/金融专业, 投资银行家, 生活方式顾问",
    "category": "thinking",
    "episodes": [
      {
        "title": "AI真的能帮到我们吗？备完700美元课程后，我对抓住AI机会的新体悟",
        "views": "7.9K views",
        "url": "https://www.youtube.com/watch?v=-CtjOzJXWgo",
        "uploadTime": "1个月前"
      },
      {
        "title": "留美14年，为何在升职前夕决定回国？｜游戏行业有多厉害？",
        "views": "46K views",
        "url": "https://www.youtube.com/watch?v=0__vGsiB5yk",
        "uploadTime": "3个月前"
      },
      {
        "title": "从金融到互联网：职业选择的深刻思考 | 张明访谈",
        "views": 12000,
        "url": "https://example.com/interview-zhangming",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何面对生活中的选择与压力？",
        "views": 15000,
        "url": "https://www.youtube.com/watch?v=example",
        "uploadTime": "3个月前"
      },
      {
        "title": "中国顶级FA，总结互联网白银年代，怎么看AI时代的机会？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=4PdNNi_eYKE",
        "uploadTime": "1个月前"
      },
      {
        "title": "大厂产品越来越难用，数据科学家请主动背锅",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=5S35kzkM6gE",
        "uploadTime": "3个月前"
      },
      {
        "title": "想清楚这些，才能成为财富的主人｜Multiple-Fire系列",
        "views": "39K views",
        "url": "https://www.youtube.com/watch?v=AqQ6HQXFueE",
        "uploadTime": "1个月前"
      },
      {
        "title": "用Growth Mindset快乐驱动你的职业和人生",
        "views": "41K views",
        "url": "https://www.youtube.com/watch?v=D_-hU1O7IVw",
        "uploadTime": "1个月前"
      },
      {
        "title": "怎样通过工作实现跳槽自由？",
        "views": "12K views",
        "url": "https://www.youtube.com/watch?v=Qnqecz4Fw5g",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何找好、做好Manager？｜Meta三代DS manager的干货分享",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=R-wEqPs_CEs",
        "uploadTime": "1个月前"
      },
      {
        "title": "抱歉无法替你做选择，但这些经验会有借鉴｜如何选择职业 1/4",
        "views": "8.2K views",
        "url": "https://www.youtube.com/watch?v=UmkSlB9HaC0",
        "uploadTime": "1个月前"
      },
      {
        "title": "从销售到管理：团队建设的艺术 | 张明访谈",
        "views": "10000",
        "url": "https://www.example.com/interview-zhangming",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何请Leo多教我一些魅力之道？| @charisma-Leo 聊天1/4",
        "views": "4K views",
        "url": "https://www.youtube.com/watch?v=bcWYOkDa66k",
        "uploadTime": "3个月前"
      },
      {
        "title": "社区深夜食堂，好开吗？",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=cXy3hB__GUo",
        "uploadTime": "3个月前"
      },
      {
        "title": "开放式问题怎么答？Product Sense面试最常犯的错误",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=dbnavqzaTmA",
        "uploadTime": "1个月前"
      },
      {
        "title": "美国疫情期间，补贴餐饮业的真实情况",
        "views": "5.4K views",
        "url": "https://www.youtube.com/watch?v=eYWAeGpKD6Q",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何把爱好做到世界顶级？｜美国拉花冲煮双料冠军 1/2",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=kc4sey7gFLQ",
        "uploadTime": "2个月前"
      },
      {
        "title": "面对网络负面舆论的勇气和正确选择 | 张明访谈",
        "views": "15000",
        "url": "https://www.example.com/interview-zhang-ming",
        "uploadTime": "1个月前"
      },
      {
        "title": "经济学启示：关注均衡；关注边际；尊重自由",
        "views": "1.8K views",
        "url": "https://www.youtube.com/watch?v=o4W3WhKatxE",
        "uploadTime": "3个月前"
      },
      {
        "title": "Deep learning大佬客串讲座 — 如何科学喷DL",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=pimbKzfM9DY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 87000
  },
  {
    "id": 5,
    "name": "张明",
    "role": "Content Creator, Entrepreneur, Founder & CEO, Product Manager, AI课程创作者, 魅力教练, AI工程师, 工程师, 数据科学家, Senior Engineer, 世界咖啡冠军, 资深工程师, Manager, Sales Manager, Economist, Economics PhD, 餐饮业主, 博士后/金融专业, 投资银行家, 生活方式顾问",
    "category": "hobby",
    "episodes": [
      {
        "title": "AI真的能帮到我们吗？备完700美元课程后，我对抓住AI机会的新体悟",
        "views": "7.9K views",
        "url": "https://www.youtube.com/watch?v=-CtjOzJXWgo",
        "uploadTime": "1个月前"
      },
      {
        "title": "留美14年，为何在升职前夕决定回国？｜游戏行业有多厉害？",
        "views": "46K views",
        "url": "https://www.youtube.com/watch?v=0__vGsiB5yk",
        "uploadTime": "3个月前"
      },
      {
        "title": "从金融到互联网：职业选择的深刻思考 | 张明访谈",
        "views": 12000,
        "url": "https://example.com/interview-zhangming",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何面对生活中的选择与压力？",
        "views": 15000,
        "url": "https://www.youtube.com/watch?v=example",
        "uploadTime": "3个月前"
      },
      {
        "title": "中国顶级FA，总结互联网白银年代，怎么看AI时代的机会？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=4PdNNi_eYKE",
        "uploadTime": "1个月前"
      },
      {
        "title": "大厂产品越来越难用，数据科学家请主动背锅",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=5S35kzkM6gE",
        "uploadTime": "3个月前"
      },
      {
        "title": "想清楚这些，才能成为财富的主人｜Multiple-Fire系列",
        "views": "39K views",
        "url": "https://www.youtube.com/watch?v=AqQ6HQXFueE",
        "uploadTime": "1个月前"
      },
      {
        "title": "用Growth Mindset快乐驱动你的职业和人生",
        "views": "41K views",
        "url": "https://www.youtube.com/watch?v=D_-hU1O7IVw",
        "uploadTime": "1个月前"
      },
      {
        "title": "怎样通过工作实现跳槽自由？",
        "views": "12K views",
        "url": "https://www.youtube.com/watch?v=Qnqecz4Fw5g",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何找好、做好Manager？｜Meta三代DS manager的干货分享",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=R-wEqPs_CEs",
        "uploadTime": "1个月前"
      },
      {
        "title": "抱歉无法替你做选择，但这些经验会有借鉴｜如何选择职业 1/4",
        "views": "8.2K views",
        "url": "https://www.youtube.com/watch?v=UmkSlB9HaC0",
        "uploadTime": "1个月前"
      },
      {
        "title": "从销售到管理：团队建设的艺术 | 张明访谈",
        "views": "10000",
        "url": "https://www.example.com/interview-zhangming",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何请Leo多教我一些魅力之道？| @charisma-Leo 聊天1/4",
        "views": "4K views",
        "url": "https://www.youtube.com/watch?v=bcWYOkDa66k",
        "uploadTime": "3个月前"
      },
      {
        "title": "社区深夜食堂，好开吗？",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=cXy3hB__GUo",
        "uploadTime": "3个月前"
      },
      {
        "title": "开放式问题怎么答？Product Sense面试最常犯的错误",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=dbnavqzaTmA",
        "uploadTime": "1个月前"
      },
      {
        "title": "美国疫情期间，补贴餐饮业的真实情况",
        "views": "5.4K views",
        "url": "https://www.youtube.com/watch?v=eYWAeGpKD6Q",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何把爱好做到世界顶级？｜美国拉花冲煮双料冠军 1/2",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=kc4sey7gFLQ",
        "uploadTime": "2个月前"
      },
      {
        "title": "面对网络负面舆论的勇气和正确选择 | 张明访谈",
        "views": "15000",
        "url": "https://www.example.com/interview-zhang-ming",
        "uploadTime": "1个月前"
      },
      {
        "title": "经济学启示：关注均衡；关注边际；尊重自由",
        "views": "1.8K views",
        "url": "https://www.youtube.com/watch?v=o4W3WhKatxE",
        "uploadTime": "3个月前"
      },
      {
        "title": "Deep learning大佬客串讲座 — 如何科学喷DL",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=pimbKzfM9DY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 87000
  },
  {
    "id": 6,
    "name": "张明",
    "role": "Content Creator, Entrepreneur, Founder & CEO, Product Manager, AI课程创作者, 魅力教练, AI工程师, 工程师, 数据科学家, Senior Engineer, 世界咖啡冠军, 资深工程师, Manager, Sales Manager, Economist, Economics PhD, 餐饮业主, 博士后/金融专业, 投资银行家, 生活方式顾问",
    "category": "life",
    "episodes": [
      {
        "title": "AI真的能帮到我们吗？备完700美元课程后，我对抓住AI机会的新体悟",
        "views": "7.9K views",
        "url": "https://www.youtube.com/watch?v=-CtjOzJXWgo",
        "uploadTime": "1个月前"
      },
      {
        "title": "留美14年，为何在升职前夕决定回国？｜游戏行业有多厉害？",
        "views": "46K views",
        "url": "https://www.youtube.com/watch?v=0__vGsiB5yk",
        "uploadTime": "3个月前"
      },
      {
        "title": "从金融到互联网：职业选择的深刻思考 | 张明访谈",
        "views": 12000,
        "url": "https://example.com/interview-zhangming",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何面对生活中的选择与压力？",
        "views": 15000,
        "url": "https://www.youtube.com/watch?v=example",
        "uploadTime": "3个月前"
      },
      {
        "title": "中国顶级FA，总结互联网白银年代，怎么看AI时代的机会？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=4PdNNi_eYKE",
        "uploadTime": "1个月前"
      },
      {
        "title": "大厂产品越来越难用，数据科学家请主动背锅",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=5S35kzkM6gE",
        "uploadTime": "3个月前"
      },
      {
        "title": "想清楚这些，才能成为财富的主人｜Multiple-Fire系列",
        "views": "39K views",
        "url": "https://www.youtube.com/watch?v=AqQ6HQXFueE",
        "uploadTime": "1个月前"
      },
      {
        "title": "用Growth Mindset快乐驱动你的职业和人生",
        "views": "41K views",
        "url": "https://www.youtube.com/watch?v=D_-hU1O7IVw",
        "uploadTime": "1个月前"
      },
      {
        "title": "怎样通过工作实现跳槽自由？",
        "views": "12K views",
        "url": "https://www.youtube.com/watch?v=Qnqecz4Fw5g",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何找好、做好Manager？｜Meta三代DS manager的干货分享",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=R-wEqPs_CEs",
        "uploadTime": "1个月前"
      },
      {
        "title": "抱歉无法替你做选择，但这些经验会有借鉴｜如何选择职业 1/4",
        "views": "8.2K views",
        "url": "https://www.youtube.com/watch?v=UmkSlB9HaC0",
        "uploadTime": "1个月前"
      },
      {
        "title": "从销售到管理：团队建设的艺术 | 张明访谈",
        "views": "10000",
        "url": "https://www.example.com/interview-zhangming",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何请Leo多教我一些魅力之道？| @charisma-Leo 聊天1/4",
        "views": "4K views",
        "url": "https://www.youtube.com/watch?v=bcWYOkDa66k",
        "uploadTime": "3个月前"
      },
      {
        "title": "社区深夜食堂，好开吗？",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=cXy3hB__GUo",
        "uploadTime": "3个月前"
      },
      {
        "title": "开放式问题怎么答？Product Sense面试最常犯的错误",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=dbnavqzaTmA",
        "uploadTime": "1个月前"
      },
      {
        "title": "美国疫情期间，补贴餐饮业的真实情况",
        "views": "5.4K views",
        "url": "https://www.youtube.com/watch?v=eYWAeGpKD6Q",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何把爱好做到世界顶级？｜美国拉花冲煮双料冠军 1/2",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=kc4sey7gFLQ",
        "uploadTime": "2个月前"
      },
      {
        "title": "面对网络负面舆论的勇气和正确选择 | 张明访谈",
        "views": "15000",
        "url": "https://www.example.com/interview-zhang-ming",
        "uploadTime": "1个月前"
      },
      {
        "title": "经济学启示：关注均衡；关注边际；尊重自由",
        "views": "1.8K views",
        "url": "https://www.youtube.com/watch?v=o4W3WhKatxE",
        "uploadTime": "3个月前"
      },
      {
        "title": "Deep learning大佬客串讲座 — 如何科学喷DL",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=pimbKzfM9DY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 87000
  },
  {
    "id": 7,
    "name": "张明",
    "role": "Content Creator, Entrepreneur, Founder & CEO, Product Manager, AI课程创作者, 魅力教练, AI工程师, 工程师, 数据科学家, Senior Engineer, 世界咖啡冠军, 资深工程师, Manager, Sales Manager, Economist, Economics PhD, 餐饮业主, 博士后/金融专业, 投资银行家, 生活方式顾问",
    "category": "career",
    "episodes": [
      {
        "title": "AI真的能帮到我们吗？备完700美元课程后，我对抓住AI机会的新体悟",
        "views": "7.9K views",
        "url": "https://www.youtube.com/watch?v=-CtjOzJXWgo",
        "uploadTime": "1个月前"
      },
      {
        "title": "留美14年，为何在升职前夕决定回国？｜游戏行业有多厉害？",
        "views": "46K views",
        "url": "https://www.youtube.com/watch?v=0__vGsiB5yk",
        "uploadTime": "3个月前"
      },
      {
        "title": "从金融到互联网：职业选择的深刻思考 | 张明访谈",
        "views": 12000,
        "url": "https://example.com/interview-zhangming",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何面对生活中的选择与压力？",
        "views": 15000,
        "url": "https://www.youtube.com/watch?v=example",
        "uploadTime": "3个月前"
      },
      {
        "title": "中国顶级FA，总结互联网白银年代，怎么看AI时代的机会？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=4PdNNi_eYKE",
        "uploadTime": "1个月前"
      },
      {
        "title": "大厂产品越来越难用，数据科学家请主动背锅",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=5S35kzkM6gE",
        "uploadTime": "3个月前"
      },
      {
        "title": "想清楚这些，才能成为财富的主人｜Multiple-Fire系列",
        "views": "39K views",
        "url": "https://www.youtube.com/watch?v=AqQ6HQXFueE",
        "uploadTime": "1个月前"
      },
      {
        "title": "用Growth Mindset快乐驱动你的职业和人生",
        "views": "41K views",
        "url": "https://www.youtube.com/watch?v=D_-hU1O7IVw",
        "uploadTime": "1个月前"
      },
      {
        "title": "怎样通过工作实现跳槽自由？",
        "views": "12K views",
        "url": "https://www.youtube.com/watch?v=Qnqecz4Fw5g",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何找好、做好Manager？｜Meta三代DS manager的干货分享",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=R-wEqPs_CEs",
        "uploadTime": "1个月前"
      },
      {
        "title": "抱歉无法替你做选择，但这些经验会有借鉴｜如何选择职业 1/4",
        "views": "8.2K views",
        "url": "https://www.youtube.com/watch?v=UmkSlB9HaC0",
        "uploadTime": "1个月前"
      },
      {
        "title": "从销售到管理：团队建设的艺术 | 张明访谈",
        "views": "10000",
        "url": "https://www.example.com/interview-zhangming",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何请Leo多教我一些魅力之道？| @charisma-Leo 聊天1/4",
        "views": "4K views",
        "url": "https://www.youtube.com/watch?v=bcWYOkDa66k",
        "uploadTime": "3个月前"
      },
      {
        "title": "社区深夜食堂，好开吗？",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=cXy3hB__GUo",
        "uploadTime": "3个月前"
      },
      {
        "title": "开放式问题怎么答？Product Sense面试最常犯的错误",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=dbnavqzaTmA",
        "uploadTime": "1个月前"
      },
      {
        "title": "美国疫情期间，补贴餐饮业的真实情况",
        "views": "5.4K views",
        "url": "https://www.youtube.com/watch?v=eYWAeGpKD6Q",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何把爱好做到世界顶级？｜美国拉花冲煮双料冠军 1/2",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=kc4sey7gFLQ",
        "uploadTime": "2个月前"
      },
      {
        "title": "面对网络负面舆论的勇气和正确选择 | 张明访谈",
        "views": "15000",
        "url": "https://www.example.com/interview-zhang-ming",
        "uploadTime": "1个月前"
      },
      {
        "title": "经济学启示：关注均衡；关注边际；尊重自由",
        "views": "1.8K views",
        "url": "https://www.youtube.com/watch?v=o4W3WhKatxE",
        "uploadTime": "3个月前"
      },
      {
        "title": "Deep learning大佬客串讲座 — 如何科学喷DL",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=pimbKzfM9DY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 87000
  },
  {
    "id": 8,
    "name": "张明",
    "role": "Content Creator, Entrepreneur, Founder & CEO, Product Manager, AI课程创作者, 魅力教练, AI工程师, 工程师, 数据科学家, Senior Engineer, 世界咖啡冠军, 资深工程师, Manager, Sales Manager, Economist, Economics PhD, 餐饮业主, 博士后/金融专业, 投资银行家, 生活方式顾问",
    "category": "tech",
    "episodes": [
      {
        "title": "AI真的能帮到我们吗？备完700美元课程后，我对抓住AI机会的新体悟",
        "views": "7.9K views",
        "url": "https://www.youtube.com/watch?v=-CtjOzJXWgo",
        "uploadTime": "1个月前"
      },
      {
        "title": "留美14年，为何在升职前夕决定回国？｜游戏行业有多厉害？",
        "views": "46K views",
        "url": "https://www.youtube.com/watch?v=0__vGsiB5yk",
        "uploadTime": "3个月前"
      },
      {
        "title": "从金融到互联网：职业选择的深刻思考 | 张明访谈",
        "views": 12000,
        "url": "https://example.com/interview-zhangming",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何面对生活中的选择与压力？",
        "views": 15000,
        "url": "https://www.youtube.com/watch?v=example",
        "uploadTime": "3个月前"
      },
      {
        "title": "中国顶级FA，总结互联网白银年代，怎么看AI时代的机会？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=4PdNNi_eYKE",
        "uploadTime": "1个月前"
      },
      {
        "title": "大厂产品越来越难用，数据科学家请主动背锅",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=5S35kzkM6gE",
        "uploadTime": "3个月前"
      },
      {
        "title": "想清楚这些，才能成为财富的主人｜Multiple-Fire系列",
        "views": "39K views",
        "url": "https://www.youtube.com/watch?v=AqQ6HQXFueE",
        "uploadTime": "1个月前"
      },
      {
        "title": "用Growth Mindset快乐驱动你的职业和人生",
        "views": "41K views",
        "url": "https://www.youtube.com/watch?v=D_-hU1O7IVw",
        "uploadTime": "1个月前"
      },
      {
        "title": "怎样通过工作实现跳槽自由？",
        "views": "12K views",
        "url": "https://www.youtube.com/watch?v=Qnqecz4Fw5g",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何找好、做好Manager？｜Meta三代DS manager的干货分享",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=R-wEqPs_CEs",
        "uploadTime": "1个月前"
      },
      {
        "title": "抱歉无法替你做选择，但这些经验会有借鉴｜如何选择职业 1/4",
        "views": "8.2K views",
        "url": "https://www.youtube.com/watch?v=UmkSlB9HaC0",
        "uploadTime": "1个月前"
      },
      {
        "title": "从销售到管理：团队建设的艺术 | 张明访谈",
        "views": "10000",
        "url": "https://www.example.com/interview-zhangming",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何请Leo多教我一些魅力之道？| @charisma-Leo 聊天1/4",
        "views": "4K views",
        "url": "https://www.youtube.com/watch?v=bcWYOkDa66k",
        "uploadTime": "3个月前"
      },
      {
        "title": "社区深夜食堂，好开吗？",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=cXy3hB__GUo",
        "uploadTime": "3个月前"
      },
      {
        "title": "开放式问题怎么答？Product Sense面试最常犯的错误",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=dbnavqzaTmA",
        "uploadTime": "1个月前"
      },
      {
        "title": "美国疫情期间，补贴餐饮业的真实情况",
        "views": "5.4K views",
        "url": "https://www.youtube.com/watch?v=eYWAeGpKD6Q",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何把爱好做到世界顶级？｜美国拉花冲煮双料冠军 1/2",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=kc4sey7gFLQ",
        "uploadTime": "2个月前"
      },
      {
        "title": "面对网络负面舆论的勇气和正确选择 | 张明访谈",
        "views": "15000",
        "url": "https://www.example.com/interview-zhang-ming",
        "uploadTime": "1个月前"
      },
      {
        "title": "经济学启示：关注均衡；关注边际；尊重自由",
        "views": "1.8K views",
        "url": "https://www.youtube.com/watch?v=o4W3WhKatxE",
        "uploadTime": "3个月前"
      },
      {
        "title": "Deep learning大佬客串讲座 — 如何科学喷DL",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=pimbKzfM9DY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 87000
  },
  {
    "id": 9,
    "name": "柯代表",
    "role": "Management Consultant, 职业发展专家, Tech Industry Expert, Career Consultant",
    "category": "career",
    "episodes": [
      {
        "title": "汇报重要，还是工作重要？",
        "views": "5.8K views",
        "url": "https://www.youtube.com/watch?v=-JjEDPb1xas",
        "uploadTime": "2个月前"
      },
      {
        "title": "找不到理想工作的原因，与成功跳槽的三个秘诀｜YC 2/3",
        "views": "12K views",
        "url": "https://www.youtube.com/watch?v=6puUPZA0wVs",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何取得老板的帮助和培养？｜课代表的神仙老板们",
        "views": "24K views",
        "url": "https://www.youtube.com/watch?v=Tk49xo6i-04",
        "uploadTime": "3个月前"
      },
      {
        "title": "教老板做事？这样汇报就对了！",
        "views": "34K views",
        "url": "https://www.youtube.com/watch?v=Wg7TaFNdHBo",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 10000
  },
  {
    "id": 10,
    "name": "未知",
    "role": "MCN支持人员, AI技术专家, 创业者, 交魅力UP主, 沟通专家, 葡萄酒专家, 经济学家, 访谈者, 魅力之道博主, AI研究者, 互联网分析师, 数据科学家, 生活方式专家, 婚礼策划者, 政治分析师",
    "category": "thinking",
    "episodes": [
      {
        "title": "陈哲：如何培养审美，用机器学习的方法？",
        "views": "860 views",
        "url": "https://www.youtube.com/watch?v=-iLBagRDlUE",
        "uploadTime": "1个月前"
      },
      {
        "title": "3 李森采访3",
        "views": "510 views",
        "url": "https://www.youtube.com/watch?v=2vZGD67NTzY",
        "uploadTime": "3个月前"
      },
      {
        "title": "「实体化」自己的工作",
        "views": "18K views",
        "url": "https://www.youtube.com/watch?v=6rHgvfYn2Mo",
        "uploadTime": "2周前"
      },
      {
        "title": "你的工作汇报太戏精吗？ ｜试试 倒金字塔叙事",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=8PEnhKMzs0s",
        "uploadTime": "1个月前"
      },
      {
        "title": "自信的本质与自我认知 | 访谈",
        "views": 1200,
        "url": "https://example.com/episode1",
        "uploadTime": "2个月前"
      },
      {
        "title": "策划婚礼、制定预算、选择vendor的思路｜备婚心得3/3",
        "views": "1.6K views",
        "url": "https://www.youtube.com/watch?v=GI_OGXKUE3g",
        "uploadTime": "3个月前"
      },
      {
        "title": "2 李森采访 2",
        "views": "610 views",
        "url": "https://www.youtube.com/watch?v=GUOfaIhVQoA",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何丝滑地展示自己社交标签？｜@charisma-Leo 2/4",
        "views": "2.6K views",
        "url": "https://www.youtube.com/watch?v=PHIhRTl2HHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "Fine tune概念已过时？｜强化学习的数学直觉｜AGI的自我迭代｜开源vs闭源的第一性原理｜说胡话的原理｜大语言模型技术深度访谈2/3",
        "views": "6K views",
        "url": "https://www.youtube.com/watch?v=QY5-3kl5tPY",
        "uploadTime": "2个月前"
      },
      {
        "title": "约会给人坏体验，有何不可？| @charisma-Leo 4/4",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=UsMKU7qcywY",
        "uploadTime": "1个月前"
      },
      {
        "title": "人的价值（不该）如何定义？",
        "views": "2.7K views",
        "url": "https://www.youtube.com/watch?v=VcJRre-HOzU",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   什么是natural wine",
        "views": "131 views",
        "url": "https://www.youtube.com/watch?v=dHUXu4K2D4U",
        "uploadTime": "1个月前"
      },
      {
        "title": "网红到底多赚钱？",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=niRGfSqtIac",
        "uploadTime": "3个月前"
      },
      {
        "title": "美国大选的决定性因素？外交精英们的宗法？",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=pANssHiZT8I",
        "uploadTime": "2个月前"
      },
      {
        "title": "好学生和大厂员工创业，为什么容易失败？",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=q9l686Css_w",
        "uploadTime": "3个月前"
      },
      {
        "title": "你的坚持值得吗？| Conviction",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=qNXkqghRMEM",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何理解00后？自媒体有多赚钱？｜杨帆3/4",
        "views": "6.1K views",
        "url": "https://www.youtube.com/watch?v=tGB9IbZhEO0",
        "uploadTime": "1个月前"
      },
      {
        "title": "亚马逊招些经济学家来做森魔？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=v4eu9vY75KY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 1200
  },
  {
    "id": 11,
    "name": "未知",
    "role": "MCN支持人员, AI技术专家, 创业者, 交魅力UP主, 沟通专家, 葡萄酒专家, 经济学家, 访谈者, 魅力之道博主, AI研究者, 互联网分析师, 数据科学家, 生活方式专家, 婚礼策划者, 政治分析师",
    "category": "hobby",
    "episodes": [
      {
        "title": "陈哲：如何培养审美，用机器学习的方法？",
        "views": "860 views",
        "url": "https://www.youtube.com/watch?v=-iLBagRDlUE",
        "uploadTime": "1个月前"
      },
      {
        "title": "3 李森采访3",
        "views": "510 views",
        "url": "https://www.youtube.com/watch?v=2vZGD67NTzY",
        "uploadTime": "3个月前"
      },
      {
        "title": "「实体化」自己的工作",
        "views": "18K views",
        "url": "https://www.youtube.com/watch?v=6rHgvfYn2Mo",
        "uploadTime": "2周前"
      },
      {
        "title": "你的工作汇报太戏精吗？ ｜试试 倒金字塔叙事",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=8PEnhKMzs0s",
        "uploadTime": "1个月前"
      },
      {
        "title": "自信的本质与自我认知 | 访谈",
        "views": 1200,
        "url": "https://example.com/episode1",
        "uploadTime": "2个月前"
      },
      {
        "title": "策划婚礼、制定预算、选择vendor的思路｜备婚心得3/3",
        "views": "1.6K views",
        "url": "https://www.youtube.com/watch?v=GI_OGXKUE3g",
        "uploadTime": "3个月前"
      },
      {
        "title": "2 李森采访 2",
        "views": "610 views",
        "url": "https://www.youtube.com/watch?v=GUOfaIhVQoA",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何丝滑地展示自己社交标签？｜@charisma-Leo 2/4",
        "views": "2.6K views",
        "url": "https://www.youtube.com/watch?v=PHIhRTl2HHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "Fine tune概念已过时？｜强化学习的数学直觉｜AGI的自我迭代｜开源vs闭源的第一性原理｜说胡话的原理｜大语言模型技术深度访谈2/3",
        "views": "6K views",
        "url": "https://www.youtube.com/watch?v=QY5-3kl5tPY",
        "uploadTime": "2个月前"
      },
      {
        "title": "约会给人坏体验，有何不可？| @charisma-Leo 4/4",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=UsMKU7qcywY",
        "uploadTime": "1个月前"
      },
      {
        "title": "人的价值（不该）如何定义？",
        "views": "2.7K views",
        "url": "https://www.youtube.com/watch?v=VcJRre-HOzU",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   什么是natural wine",
        "views": "131 views",
        "url": "https://www.youtube.com/watch?v=dHUXu4K2D4U",
        "uploadTime": "1个月前"
      },
      {
        "title": "网红到底多赚钱？",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=niRGfSqtIac",
        "uploadTime": "3个月前"
      },
      {
        "title": "美国大选的决定性因素？外交精英们的宗法？",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=pANssHiZT8I",
        "uploadTime": "2个月前"
      },
      {
        "title": "好学生和大厂员工创业，为什么容易失败？",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=q9l686Css_w",
        "uploadTime": "3个月前"
      },
      {
        "title": "你的坚持值得吗？| Conviction",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=qNXkqghRMEM",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何理解00后？自媒体有多赚钱？｜杨帆3/4",
        "views": "6.1K views",
        "url": "https://www.youtube.com/watch?v=tGB9IbZhEO0",
        "uploadTime": "1个月前"
      },
      {
        "title": "亚马逊招些经济学家来做森魔？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=v4eu9vY75KY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 1200
  },
  {
    "id": 12,
    "name": "未知",
    "role": "MCN支持人员, AI技术专家, 创业者, 交魅力UP主, 沟通专家, 葡萄酒专家, 经济学家, 访谈者, 魅力之道博主, AI研究者, 互联网分析师, 数据科学家, 生活方式专家, 婚礼策划者, 政治分析师",
    "category": "life",
    "episodes": [
      {
        "title": "陈哲：如何培养审美，用机器学习的方法？",
        "views": "860 views",
        "url": "https://www.youtube.com/watch?v=-iLBagRDlUE",
        "uploadTime": "1个月前"
      },
      {
        "title": "3 李森采访3",
        "views": "510 views",
        "url": "https://www.youtube.com/watch?v=2vZGD67NTzY",
        "uploadTime": "3个月前"
      },
      {
        "title": "「实体化」自己的工作",
        "views": "18K views",
        "url": "https://www.youtube.com/watch?v=6rHgvfYn2Mo",
        "uploadTime": "2周前"
      },
      {
        "title": "你的工作汇报太戏精吗？ ｜试试 倒金字塔叙事",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=8PEnhKMzs0s",
        "uploadTime": "1个月前"
      },
      {
        "title": "自信的本质与自我认知 | 访谈",
        "views": 1200,
        "url": "https://example.com/episode1",
        "uploadTime": "2个月前"
      },
      {
        "title": "策划婚礼、制定预算、选择vendor的思路｜备婚心得3/3",
        "views": "1.6K views",
        "url": "https://www.youtube.com/watch?v=GI_OGXKUE3g",
        "uploadTime": "3个月前"
      },
      {
        "title": "2 李森采访 2",
        "views": "610 views",
        "url": "https://www.youtube.com/watch?v=GUOfaIhVQoA",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何丝滑地展示自己社交标签？｜@charisma-Leo 2/4",
        "views": "2.6K views",
        "url": "https://www.youtube.com/watch?v=PHIhRTl2HHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "Fine tune概念已过时？｜强化学习的数学直觉｜AGI的自我迭代｜开源vs闭源的第一性原理｜说胡话的原理｜大语言模型技术深度访谈2/3",
        "views": "6K views",
        "url": "https://www.youtube.com/watch?v=QY5-3kl5tPY",
        "uploadTime": "2个月前"
      },
      {
        "title": "约会给人坏体验，有何不可？| @charisma-Leo 4/4",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=UsMKU7qcywY",
        "uploadTime": "1个月前"
      },
      {
        "title": "人的价值（不该）如何定义？",
        "views": "2.7K views",
        "url": "https://www.youtube.com/watch?v=VcJRre-HOzU",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   什么是natural wine",
        "views": "131 views",
        "url": "https://www.youtube.com/watch?v=dHUXu4K2D4U",
        "uploadTime": "1个月前"
      },
      {
        "title": "网红到底多赚钱？",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=niRGfSqtIac",
        "uploadTime": "3个月前"
      },
      {
        "title": "美国大选的决定性因素？外交精英们的宗法？",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=pANssHiZT8I",
        "uploadTime": "2个月前"
      },
      {
        "title": "好学生和大厂员工创业，为什么容易失败？",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=q9l686Css_w",
        "uploadTime": "3个月前"
      },
      {
        "title": "你的坚持值得吗？| Conviction",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=qNXkqghRMEM",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何理解00后？自媒体有多赚钱？｜杨帆3/4",
        "views": "6.1K views",
        "url": "https://www.youtube.com/watch?v=tGB9IbZhEO0",
        "uploadTime": "1个月前"
      },
      {
        "title": "亚马逊招些经济学家来做森魔？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=v4eu9vY75KY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 1200
  },
  {
    "id": 13,
    "name": "未知",
    "role": "MCN支持人员, AI技术专家, 创业者, 交魅力UP主, 沟通专家, 葡萄酒专家, 经济学家, 访谈者, 魅力之道博主, AI研究者, 互联网分析师, 数据科学家, 生活方式专家, 婚礼策划者, 政治分析师",
    "category": "career",
    "episodes": [
      {
        "title": "陈哲：如何培养审美，用机器学习的方法？",
        "views": "860 views",
        "url": "https://www.youtube.com/watch?v=-iLBagRDlUE",
        "uploadTime": "1个月前"
      },
      {
        "title": "3 李森采访3",
        "views": "510 views",
        "url": "https://www.youtube.com/watch?v=2vZGD67NTzY",
        "uploadTime": "3个月前"
      },
      {
        "title": "「实体化」自己的工作",
        "views": "18K views",
        "url": "https://www.youtube.com/watch?v=6rHgvfYn2Mo",
        "uploadTime": "2周前"
      },
      {
        "title": "你的工作汇报太戏精吗？ ｜试试 倒金字塔叙事",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=8PEnhKMzs0s",
        "uploadTime": "1个月前"
      },
      {
        "title": "自信的本质与自我认知 | 访谈",
        "views": 1200,
        "url": "https://example.com/episode1",
        "uploadTime": "2个月前"
      },
      {
        "title": "策划婚礼、制定预算、选择vendor的思路｜备婚心得3/3",
        "views": "1.6K views",
        "url": "https://www.youtube.com/watch?v=GI_OGXKUE3g",
        "uploadTime": "3个月前"
      },
      {
        "title": "2 李森采访 2",
        "views": "610 views",
        "url": "https://www.youtube.com/watch?v=GUOfaIhVQoA",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何丝滑地展示自己社交标签？｜@charisma-Leo 2/4",
        "views": "2.6K views",
        "url": "https://www.youtube.com/watch?v=PHIhRTl2HHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "Fine tune概念已过时？｜强化学习的数学直觉｜AGI的自我迭代｜开源vs闭源的第一性原理｜说胡话的原理｜大语言模型技术深度访谈2/3",
        "views": "6K views",
        "url": "https://www.youtube.com/watch?v=QY5-3kl5tPY",
        "uploadTime": "2个月前"
      },
      {
        "title": "约会给人坏体验，有何不可？| @charisma-Leo 4/4",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=UsMKU7qcywY",
        "uploadTime": "1个月前"
      },
      {
        "title": "人的价值（不该）如何定义？",
        "views": "2.7K views",
        "url": "https://www.youtube.com/watch?v=VcJRre-HOzU",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   什么是natural wine",
        "views": "131 views",
        "url": "https://www.youtube.com/watch?v=dHUXu4K2D4U",
        "uploadTime": "1个月前"
      },
      {
        "title": "网红到底多赚钱？",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=niRGfSqtIac",
        "uploadTime": "3个月前"
      },
      {
        "title": "美国大选的决定性因素？外交精英们的宗法？",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=pANssHiZT8I",
        "uploadTime": "2个月前"
      },
      {
        "title": "好学生和大厂员工创业，为什么容易失败？",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=q9l686Css_w",
        "uploadTime": "3个月前"
      },
      {
        "title": "你的坚持值得吗？| Conviction",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=qNXkqghRMEM",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何理解00后？自媒体有多赚钱？｜杨帆3/4",
        "views": "6.1K views",
        "url": "https://www.youtube.com/watch?v=tGB9IbZhEO0",
        "uploadTime": "1个月前"
      },
      {
        "title": "亚马逊招些经济学家来做森魔？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=v4eu9vY75KY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 1200
  },
  {
    "id": 14,
    "name": "未知",
    "role": "MCN支持人员, AI技术专家, 创业者, 交魅力UP主, 沟通专家, 葡萄酒专家, 经济学家, 访谈者, 魅力之道博主, AI研究者, 互联网分析师, 数据科学家, 生活方式专家, 婚礼策划者, 政治分析师",
    "category": "tech",
    "episodes": [
      {
        "title": "陈哲：如何培养审美，用机器学习的方法？",
        "views": "860 views",
        "url": "https://www.youtube.com/watch?v=-iLBagRDlUE",
        "uploadTime": "1个月前"
      },
      {
        "title": "3 李森采访3",
        "views": "510 views",
        "url": "https://www.youtube.com/watch?v=2vZGD67NTzY",
        "uploadTime": "3个月前"
      },
      {
        "title": "「实体化」自己的工作",
        "views": "18K views",
        "url": "https://www.youtube.com/watch?v=6rHgvfYn2Mo",
        "uploadTime": "2周前"
      },
      {
        "title": "你的工作汇报太戏精吗？ ｜试试 倒金字塔叙事",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=8PEnhKMzs0s",
        "uploadTime": "1个月前"
      },
      {
        "title": "自信的本质与自我认知 | 访谈",
        "views": 1200,
        "url": "https://example.com/episode1",
        "uploadTime": "2个月前"
      },
      {
        "title": "策划婚礼、制定预算、选择vendor的思路｜备婚心得3/3",
        "views": "1.6K views",
        "url": "https://www.youtube.com/watch?v=GI_OGXKUE3g",
        "uploadTime": "3个月前"
      },
      {
        "title": "2 李森采访 2",
        "views": "610 views",
        "url": "https://www.youtube.com/watch?v=GUOfaIhVQoA",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何丝滑地展示自己社交标签？｜@charisma-Leo 2/4",
        "views": "2.6K views",
        "url": "https://www.youtube.com/watch?v=PHIhRTl2HHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "Fine tune概念已过时？｜强化学习的数学直觉｜AGI的自我迭代｜开源vs闭源的第一性原理｜说胡话的原理｜大语言模型技术深度访谈2/3",
        "views": "6K views",
        "url": "https://www.youtube.com/watch?v=QY5-3kl5tPY",
        "uploadTime": "2个月前"
      },
      {
        "title": "约会给人坏体验，有何不可？| @charisma-Leo 4/4",
        "views": "1.9K views",
        "url": "https://www.youtube.com/watch?v=UsMKU7qcywY",
        "uploadTime": "1个月前"
      },
      {
        "title": "人的价值（不该）如何定义？",
        "views": "2.7K views",
        "url": "https://www.youtube.com/watch?v=VcJRre-HOzU",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   什么是natural wine",
        "views": "131 views",
        "url": "https://www.youtube.com/watch?v=dHUXu4K2D4U",
        "uploadTime": "1个月前"
      },
      {
        "title": "网红到底多赚钱？",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=niRGfSqtIac",
        "uploadTime": "3个月前"
      },
      {
        "title": "美国大选的决定性因素？外交精英们的宗法？",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=pANssHiZT8I",
        "uploadTime": "2个月前"
      },
      {
        "title": "好学生和大厂员工创业，为什么容易失败？",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=q9l686Css_w",
        "uploadTime": "3个月前"
      },
      {
        "title": "你的坚持值得吗？| Conviction",
        "views": "6.2K views",
        "url": "https://www.youtube.com/watch?v=qNXkqghRMEM",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何理解00后？自媒体有多赚钱？｜杨帆3/4",
        "views": "6.1K views",
        "url": "https://www.youtube.com/watch?v=tGB9IbZhEO0",
        "uploadTime": "1个月前"
      },
      {
        "title": "亚马逊招些经济学家来做森魔？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=v4eu9vY75KY",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 1200
  },
  {
    "id": 16,
    "name": "Emily",
    "role": "MBA Student, Entrepreneur, MBA Student at Yale",
    "category": "career",
    "episodes": [
      {
        "title": "做完选择就不要纠结",
        "views": "2.7K views",
        "url": "https://www.youtube.com/watch?v=0RzapwIAo6Y",
        "uploadTime": "1个月前"
      },
      {
        "title": "00后耶鲁MBA，是什么体验？",
        "views": "3.6K views",
        "url": "https://www.youtube.com/watch?v=Ril9owWEHxg",
        "uploadTime": "3个月前"
      },
      {
        "title": "深度挖掘，00后耶鲁MBA，如何做到的？",
        "views": "5.1K views",
        "url": "https://www.youtube.com/watch?v=xrBlVBhl7WI",
        "uploadTime": "2个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 17,
    "name": "李明",
    "role": "Data Scientist, Content Creator, HRBP (Human Resources Business Partner)",
    "category": "career",
    "episodes": [
      {
        "title": "Data Scientist是干嘛的 | 机器学习是归宿吗｜数据科学家的价值何在",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=11B89hfa-xY",
        "uploadTime": "3个月前"
      },
      {
        "title": "HRBP为什么有这么强的好奇心？｜国内大厂HRBP揭秘 — 中",
        "views": "4.1K views",
        "url": "https://www.youtube.com/watch?v=6P6ClAtxa8U",
        "uploadTime": "3个月前"
      },
      {
        "title": "构建有意义的社群：李明访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=qazg9OZDp6o",
        "uploadTime": "2周前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 18,
    "name": "李明",
    "role": "Data Scientist, Content Creator, HRBP (Human Resources Business Partner)",
    "category": "life",
    "episodes": [
      {
        "title": "Data Scientist是干嘛的 | 机器学习是归宿吗｜数据科学家的价值何在",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=11B89hfa-xY",
        "uploadTime": "3个月前"
      },
      {
        "title": "HRBP为什么有这么强的好奇心？｜国内大厂HRBP揭秘 — 中",
        "views": "4.1K views",
        "url": "https://www.youtube.com/watch?v=6P6ClAtxa8U",
        "uploadTime": "3个月前"
      },
      {
        "title": "构建有意义的社群：李明访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=qazg9OZDp6o",
        "uploadTime": "2周前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 22,
    "name": "课代表",
    "role": "博士生, 职业人士兼内容创作者, Content Creator, 数据分析师, Motivational Speaker, Data Science Educator, 数据科学家, Former NCAA Swimmer, Data Scientist, Educational Content Creator, Programmer, Entrepreneur",
    "category": "thinking",
    "episodes": [
      {
        "title": "为什么越卷越失败？｜Simple vs. Easy",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=294hs14mMcA",
        "uploadTime": "2个月前"
      },
      {
        "title": "画柱状图凭啥拿百万年薪？｜DS的产品理解和PM有什么不一样？｜课代表聊数据第10期",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=4xusmN8-zTs",
        "uploadTime": "3个月前"
      },
      {
        "title": "没有996？同事竟很nice？回国工作时间和生活成本大揭秘！",
        "views": "37K views",
        "url": "https://www.youtube.com/watch?v=D9aAmsriEjk",
        "uploadTime": "2个月前"
      },
      {
        "title": "学会吃苦！",
        "views": "8.6K views",
        "url": "https://www.youtube.com/watch?v=H7spE0UiGTg",
        "uploadTime": "3个月前"
      },
      {
        "title": "认知最重要，可什么是认知？｜课代表聊数据第8期",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=Hkn4YtTW02w",
        "uploadTime": "1个月前"
      },
      {
        "title": "用更清楚的三个属性划分广告和内容",
        "views": "1.5K views",
        "url": "https://www.youtube.com/watch?v=RRMNpbzOkyI",
        "uploadTime": "2天前"
      },
      {
        "title": "为什么考试成绩不代表能力｜学校里学了什么？｜如何准备托福",
        "views": "3.4K views",
        "url": "https://www.youtube.com/watch?v=UGQKx4QuqsQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "是什么在阻碍你提升思维能力？",
        "views": "292 views",
        "url": "https://www.youtube.com/watch?v=XO0eAK_aED0",
        "uploadTime": "1个月前"
      },
      {
        "title": "关于留存的所有知识｜PMF指标之一",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=Yj9XouK-hi0",
        "uploadTime": "3个月前"
      },
      {
        "title": "你为什么会轻易放弃思考？",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=Yn6DgCdgsjQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "数据工作的三大类｜用人工智能装逼被打脸的故事｜课代表聊数据第一期",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=dhYFSLmICVg",
        "uploadTime": "1个月前"
      },
      {
        "title": "初中参加机器人AI比赛，竟领悟获益终身的创业教训？｜课代表故事会",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=fJd66ZcnTS8",
        "uploadTime": "3个月前"
      },
      {
        "title": "数据科学到底在做什么？ - 2022总结版",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=hveZx2CN8Sg",
        "uploadTime": "2个月前"
      },
      {
        "title": "读常青藤博士的五个终身收获",
        "views": "7.3K views",
        "url": "https://www.youtube.com/watch?v=prQCLH9x7OI",
        "uploadTime": "1个月前"
      },
      {
        "title": "Adoption很重要，但经常被忽视｜常见四个错误｜PMF指标之二",
        "views": "8.1K views",
        "url": "https://www.youtube.com/watch?v=qgtijiTjfgw",
        "uploadTime": "1个月前"
      },
      {
        "title": "这个机器学习模型是牛叉，装叉，还是傻叉？｜课代表聊数据第五期",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=sNJ09NOqBXk",
        "uploadTime": "2周前"
      },
      {
        "title": "每周两小时就能做UP主？｜被叫网红竟会不开心？｜会被骂哭吗？",
        "views": "6.4K views",
        "url": "https://www.youtube.com/watch?v=t8IBO-1TaHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何重拾人生的掌控感？｜如何了解部门业务全貌？",
        "views": "9.6K views",
        "url": "https://www.youtube.com/watch?v=w091n34lBuE",
        "uploadTime": "2个月前"
      },
      {
        "title": "九分钟零基础搞懂「深度学习」｜课代表讲数据第二期",
        "views": "6.7K views",
        "url": "https://www.youtube.com/watch?v=yBAqlG4-pg0",
        "uploadTime": "几个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 23,
    "name": "课代表",
    "role": "博士生, 职业人士兼内容创作者, Content Creator, 数据分析师, Motivational Speaker, Data Science Educator, 数据科学家, Former NCAA Swimmer, Data Scientist, Educational Content Creator, Programmer, Entrepreneur",
    "category": "hobby",
    "episodes": [
      {
        "title": "为什么越卷越失败？｜Simple vs. Easy",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=294hs14mMcA",
        "uploadTime": "2个月前"
      },
      {
        "title": "画柱状图凭啥拿百万年薪？｜DS的产品理解和PM有什么不一样？｜课代表聊数据第10期",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=4xusmN8-zTs",
        "uploadTime": "3个月前"
      },
      {
        "title": "没有996？同事竟很nice？回国工作时间和生活成本大揭秘！",
        "views": "37K views",
        "url": "https://www.youtube.com/watch?v=D9aAmsriEjk",
        "uploadTime": "2个月前"
      },
      {
        "title": "学会吃苦！",
        "views": "8.6K views",
        "url": "https://www.youtube.com/watch?v=H7spE0UiGTg",
        "uploadTime": "3个月前"
      },
      {
        "title": "认知最重要，可什么是认知？｜课代表聊数据第8期",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=Hkn4YtTW02w",
        "uploadTime": "1个月前"
      },
      {
        "title": "用更清楚的三个属性划分广告和内容",
        "views": "1.5K views",
        "url": "https://www.youtube.com/watch?v=RRMNpbzOkyI",
        "uploadTime": "2天前"
      },
      {
        "title": "为什么考试成绩不代表能力｜学校里学了什么？｜如何准备托福",
        "views": "3.4K views",
        "url": "https://www.youtube.com/watch?v=UGQKx4QuqsQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "是什么在阻碍你提升思维能力？",
        "views": "292 views",
        "url": "https://www.youtube.com/watch?v=XO0eAK_aED0",
        "uploadTime": "1个月前"
      },
      {
        "title": "关于留存的所有知识｜PMF指标之一",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=Yj9XouK-hi0",
        "uploadTime": "3个月前"
      },
      {
        "title": "你为什么会轻易放弃思考？",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=Yn6DgCdgsjQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "数据工作的三大类｜用人工智能装逼被打脸的故事｜课代表聊数据第一期",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=dhYFSLmICVg",
        "uploadTime": "1个月前"
      },
      {
        "title": "初中参加机器人AI比赛，竟领悟获益终身的创业教训？｜课代表故事会",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=fJd66ZcnTS8",
        "uploadTime": "3个月前"
      },
      {
        "title": "数据科学到底在做什么？ - 2022总结版",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=hveZx2CN8Sg",
        "uploadTime": "2个月前"
      },
      {
        "title": "读常青藤博士的五个终身收获",
        "views": "7.3K views",
        "url": "https://www.youtube.com/watch?v=prQCLH9x7OI",
        "uploadTime": "1个月前"
      },
      {
        "title": "Adoption很重要，但经常被忽视｜常见四个错误｜PMF指标之二",
        "views": "8.1K views",
        "url": "https://www.youtube.com/watch?v=qgtijiTjfgw",
        "uploadTime": "1个月前"
      },
      {
        "title": "这个机器学习模型是牛叉，装叉，还是傻叉？｜课代表聊数据第五期",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=sNJ09NOqBXk",
        "uploadTime": "2周前"
      },
      {
        "title": "每周两小时就能做UP主？｜被叫网红竟会不开心？｜会被骂哭吗？",
        "views": "6.4K views",
        "url": "https://www.youtube.com/watch?v=t8IBO-1TaHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何重拾人生的掌控感？｜如何了解部门业务全貌？",
        "views": "9.6K views",
        "url": "https://www.youtube.com/watch?v=w091n34lBuE",
        "uploadTime": "2个月前"
      },
      {
        "title": "九分钟零基础搞懂「深度学习」｜课代表讲数据第二期",
        "views": "6.7K views",
        "url": "https://www.youtube.com/watch?v=yBAqlG4-pg0",
        "uploadTime": "几个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 24,
    "name": "课代表",
    "role": "博士生, 职业人士兼内容创作者, Content Creator, 数据分析师, Motivational Speaker, Data Science Educator, 数据科学家, Former NCAA Swimmer, Data Scientist, Educational Content Creator, Programmer, Entrepreneur",
    "category": "life",
    "episodes": [
      {
        "title": "为什么越卷越失败？｜Simple vs. Easy",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=294hs14mMcA",
        "uploadTime": "2个月前"
      },
      {
        "title": "画柱状图凭啥拿百万年薪？｜DS的产品理解和PM有什么不一样？｜课代表聊数据第10期",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=4xusmN8-zTs",
        "uploadTime": "3个月前"
      },
      {
        "title": "没有996？同事竟很nice？回国工作时间和生活成本大揭秘！",
        "views": "37K views",
        "url": "https://www.youtube.com/watch?v=D9aAmsriEjk",
        "uploadTime": "2个月前"
      },
      {
        "title": "学会吃苦！",
        "views": "8.6K views",
        "url": "https://www.youtube.com/watch?v=H7spE0UiGTg",
        "uploadTime": "3个月前"
      },
      {
        "title": "认知最重要，可什么是认知？｜课代表聊数据第8期",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=Hkn4YtTW02w",
        "uploadTime": "1个月前"
      },
      {
        "title": "用更清楚的三个属性划分广告和内容",
        "views": "1.5K views",
        "url": "https://www.youtube.com/watch?v=RRMNpbzOkyI",
        "uploadTime": "2天前"
      },
      {
        "title": "为什么考试成绩不代表能力｜学校里学了什么？｜如何准备托福",
        "views": "3.4K views",
        "url": "https://www.youtube.com/watch?v=UGQKx4QuqsQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "是什么在阻碍你提升思维能力？",
        "views": "292 views",
        "url": "https://www.youtube.com/watch?v=XO0eAK_aED0",
        "uploadTime": "1个月前"
      },
      {
        "title": "关于留存的所有知识｜PMF指标之一",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=Yj9XouK-hi0",
        "uploadTime": "3个月前"
      },
      {
        "title": "你为什么会轻易放弃思考？",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=Yn6DgCdgsjQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "数据工作的三大类｜用人工智能装逼被打脸的故事｜课代表聊数据第一期",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=dhYFSLmICVg",
        "uploadTime": "1个月前"
      },
      {
        "title": "初中参加机器人AI比赛，竟领悟获益终身的创业教训？｜课代表故事会",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=fJd66ZcnTS8",
        "uploadTime": "3个月前"
      },
      {
        "title": "数据科学到底在做什么？ - 2022总结版",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=hveZx2CN8Sg",
        "uploadTime": "2个月前"
      },
      {
        "title": "读常青藤博士的五个终身收获",
        "views": "7.3K views",
        "url": "https://www.youtube.com/watch?v=prQCLH9x7OI",
        "uploadTime": "1个月前"
      },
      {
        "title": "Adoption很重要，但经常被忽视｜常见四个错误｜PMF指标之二",
        "views": "8.1K views",
        "url": "https://www.youtube.com/watch?v=qgtijiTjfgw",
        "uploadTime": "1个月前"
      },
      {
        "title": "这个机器学习模型是牛叉，装叉，还是傻叉？｜课代表聊数据第五期",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=sNJ09NOqBXk",
        "uploadTime": "2周前"
      },
      {
        "title": "每周两小时就能做UP主？｜被叫网红竟会不开心？｜会被骂哭吗？",
        "views": "6.4K views",
        "url": "https://www.youtube.com/watch?v=t8IBO-1TaHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何重拾人生的掌控感？｜如何了解部门业务全貌？",
        "views": "9.6K views",
        "url": "https://www.youtube.com/watch?v=w091n34lBuE",
        "uploadTime": "2个月前"
      },
      {
        "title": "九分钟零基础搞懂「深度学习」｜课代表讲数据第二期",
        "views": "6.7K views",
        "url": "https://www.youtube.com/watch?v=yBAqlG4-pg0",
        "uploadTime": "几个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 25,
    "name": "课代表",
    "role": "博士生, 职业人士兼内容创作者, Content Creator, 数据分析师, Motivational Speaker, Data Science Educator, 数据科学家, Former NCAA Swimmer, Data Scientist, Educational Content Creator, Programmer, Entrepreneur",
    "category": "career",
    "episodes": [
      {
        "title": "为什么越卷越失败？｜Simple vs. Easy",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=294hs14mMcA",
        "uploadTime": "2个月前"
      },
      {
        "title": "画柱状图凭啥拿百万年薪？｜DS的产品理解和PM有什么不一样？｜课代表聊数据第10期",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=4xusmN8-zTs",
        "uploadTime": "3个月前"
      },
      {
        "title": "没有996？同事竟很nice？回国工作时间和生活成本大揭秘！",
        "views": "37K views",
        "url": "https://www.youtube.com/watch?v=D9aAmsriEjk",
        "uploadTime": "2个月前"
      },
      {
        "title": "学会吃苦！",
        "views": "8.6K views",
        "url": "https://www.youtube.com/watch?v=H7spE0UiGTg",
        "uploadTime": "3个月前"
      },
      {
        "title": "认知最重要，可什么是认知？｜课代表聊数据第8期",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=Hkn4YtTW02w",
        "uploadTime": "1个月前"
      },
      {
        "title": "用更清楚的三个属性划分广告和内容",
        "views": "1.5K views",
        "url": "https://www.youtube.com/watch?v=RRMNpbzOkyI",
        "uploadTime": "2天前"
      },
      {
        "title": "为什么考试成绩不代表能力｜学校里学了什么？｜如何准备托福",
        "views": "3.4K views",
        "url": "https://www.youtube.com/watch?v=UGQKx4QuqsQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "是什么在阻碍你提升思维能力？",
        "views": "292 views",
        "url": "https://www.youtube.com/watch?v=XO0eAK_aED0",
        "uploadTime": "1个月前"
      },
      {
        "title": "关于留存的所有知识｜PMF指标之一",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=Yj9XouK-hi0",
        "uploadTime": "3个月前"
      },
      {
        "title": "你为什么会轻易放弃思考？",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=Yn6DgCdgsjQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "数据工作的三大类｜用人工智能装逼被打脸的故事｜课代表聊数据第一期",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=dhYFSLmICVg",
        "uploadTime": "1个月前"
      },
      {
        "title": "初中参加机器人AI比赛，竟领悟获益终身的创业教训？｜课代表故事会",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=fJd66ZcnTS8",
        "uploadTime": "3个月前"
      },
      {
        "title": "数据科学到底在做什么？ - 2022总结版",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=hveZx2CN8Sg",
        "uploadTime": "2个月前"
      },
      {
        "title": "读常青藤博士的五个终身收获",
        "views": "7.3K views",
        "url": "https://www.youtube.com/watch?v=prQCLH9x7OI",
        "uploadTime": "1个月前"
      },
      {
        "title": "Adoption很重要，但经常被忽视｜常见四个错误｜PMF指标之二",
        "views": "8.1K views",
        "url": "https://www.youtube.com/watch?v=qgtijiTjfgw",
        "uploadTime": "1个月前"
      },
      {
        "title": "这个机器学习模型是牛叉，装叉，还是傻叉？｜课代表聊数据第五期",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=sNJ09NOqBXk",
        "uploadTime": "2周前"
      },
      {
        "title": "每周两小时就能做UP主？｜被叫网红竟会不开心？｜会被骂哭吗？",
        "views": "6.4K views",
        "url": "https://www.youtube.com/watch?v=t8IBO-1TaHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何重拾人生的掌控感？｜如何了解部门业务全貌？",
        "views": "9.6K views",
        "url": "https://www.youtube.com/watch?v=w091n34lBuE",
        "uploadTime": "2个月前"
      },
      {
        "title": "九分钟零基础搞懂「深度学习」｜课代表讲数据第二期",
        "views": "6.7K views",
        "url": "https://www.youtube.com/watch?v=yBAqlG4-pg0",
        "uploadTime": "几个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 26,
    "name": "课代表",
    "role": "博士生, 职业人士兼内容创作者, Content Creator, 数据分析师, Motivational Speaker, Data Science Educator, 数据科学家, Former NCAA Swimmer, Data Scientist, Educational Content Creator, Programmer, Entrepreneur",
    "category": "tech",
    "episodes": [
      {
        "title": "为什么越卷越失败？｜Simple vs. Easy",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=294hs14mMcA",
        "uploadTime": "2个月前"
      },
      {
        "title": "画柱状图凭啥拿百万年薪？｜DS的产品理解和PM有什么不一样？｜课代表聊数据第10期",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=4xusmN8-zTs",
        "uploadTime": "3个月前"
      },
      {
        "title": "没有996？同事竟很nice？回国工作时间和生活成本大揭秘！",
        "views": "37K views",
        "url": "https://www.youtube.com/watch?v=D9aAmsriEjk",
        "uploadTime": "2个月前"
      },
      {
        "title": "学会吃苦！",
        "views": "8.6K views",
        "url": "https://www.youtube.com/watch?v=H7spE0UiGTg",
        "uploadTime": "3个月前"
      },
      {
        "title": "认知最重要，可什么是认知？｜课代表聊数据第8期",
        "views": "7.4K views",
        "url": "https://www.youtube.com/watch?v=Hkn4YtTW02w",
        "uploadTime": "1个月前"
      },
      {
        "title": "用更清楚的三个属性划分广告和内容",
        "views": "1.5K views",
        "url": "https://www.youtube.com/watch?v=RRMNpbzOkyI",
        "uploadTime": "2天前"
      },
      {
        "title": "为什么考试成绩不代表能力｜学校里学了什么？｜如何准备托福",
        "views": "3.4K views",
        "url": "https://www.youtube.com/watch?v=UGQKx4QuqsQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "是什么在阻碍你提升思维能力？",
        "views": "292 views",
        "url": "https://www.youtube.com/watch?v=XO0eAK_aED0",
        "uploadTime": "1个月前"
      },
      {
        "title": "关于留存的所有知识｜PMF指标之一",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=Yj9XouK-hi0",
        "uploadTime": "3个月前"
      },
      {
        "title": "你为什么会轻易放弃思考？",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=Yn6DgCdgsjQ",
        "uploadTime": "1个月前"
      },
      {
        "title": "数据工作的三大类｜用人工智能装逼被打脸的故事｜课代表聊数据第一期",
        "views": "5.2K views",
        "url": "https://www.youtube.com/watch?v=dhYFSLmICVg",
        "uploadTime": "1个月前"
      },
      {
        "title": "初中参加机器人AI比赛，竟领悟获益终身的创业教训？｜课代表故事会",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=fJd66ZcnTS8",
        "uploadTime": "3个月前"
      },
      {
        "title": "数据科学到底在做什么？ - 2022总结版",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=hveZx2CN8Sg",
        "uploadTime": "2个月前"
      },
      {
        "title": "读常青藤博士的五个终身收获",
        "views": "7.3K views",
        "url": "https://www.youtube.com/watch?v=prQCLH9x7OI",
        "uploadTime": "1个月前"
      },
      {
        "title": "Adoption很重要，但经常被忽视｜常见四个错误｜PMF指标之二",
        "views": "8.1K views",
        "url": "https://www.youtube.com/watch?v=qgtijiTjfgw",
        "uploadTime": "1个月前"
      },
      {
        "title": "这个机器学习模型是牛叉，装叉，还是傻叉？｜课代表聊数据第五期",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=sNJ09NOqBXk",
        "uploadTime": "2周前"
      },
      {
        "title": "每周两小时就能做UP主？｜被叫网红竟会不开心？｜会被骂哭吗？",
        "views": "6.4K views",
        "url": "https://www.youtube.com/watch?v=t8IBO-1TaHs",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何重拾人生的掌控感？｜如何了解部门业务全貌？",
        "views": "9.6K views",
        "url": "https://www.youtube.com/watch?v=w091n34lBuE",
        "uploadTime": "2个月前"
      },
      {
        "title": "九分钟零基础搞懂「深度学习」｜课代表讲数据第二期",
        "views": "6.7K views",
        "url": "https://www.youtube.com/watch?v=yBAqlG4-pg0",
        "uploadTime": "几个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 28,
    "name": "不详",
    "role": "Whiskey Expert, Investment Expert, Professional, Content Creator, Product Manager, 高级工程师, 职业工作者",
    "category": "thinking",
    "episodes": [
      {
        "title": "看懂人类顶尖科研，才能理解科学的局限｜Kevin教授_2/3",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=2fpnJlHPhGA",
        "uploadTime": "2个月前"
      },
      {
        "title": "提升判断力秘籍！",
        "views": "2.1K views",
        "url": "https://www.youtube.com/watch?v=J2Yx5DDSNYc",
        "uploadTime": "2个月前"
      },
      {
        "title": "自己工作，自己说了算！",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=Q31nzYvxl0Y",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何跟老板1:1？",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=ZGXECENR6qU",
        "uploadTime": "1个月前"
      },
      {
        "title": "Product Sense面试心法第一决 — MECE框架",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=pPPGa3x7zBM",
        "uploadTime": "2个月前"
      },
      {
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": "7K views",
        "url": "https://www.youtube.com/watch?v=rCYw13Ad2ig",
        "uploadTime": "3个月前"
      },
      {
        "title": "投资人解析，短剧为什么这么火？｜ 大观资本Richer 1/2",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=rVnrixEfNMM",
        "uploadTime": "1个月前"
      },
      {
        "title": "Whiskey的内行大实话，钱花在哪里了？",
        "views": "3.6K views",
        "url": "https://www.youtube.com/watch?v=uAIeLutRuYc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 29,
    "name": "不详",
    "role": "Whiskey Expert, Investment Expert, Professional, Content Creator, Product Manager, 高级工程师, 职业工作者",
    "category": "hobby",
    "episodes": [
      {
        "title": "看懂人类顶尖科研，才能理解科学的局限｜Kevin教授_2/3",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=2fpnJlHPhGA",
        "uploadTime": "2个月前"
      },
      {
        "title": "提升判断力秘籍！",
        "views": "2.1K views",
        "url": "https://www.youtube.com/watch?v=J2Yx5DDSNYc",
        "uploadTime": "2个月前"
      },
      {
        "title": "自己工作，自己说了算！",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=Q31nzYvxl0Y",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何跟老板1:1？",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=ZGXECENR6qU",
        "uploadTime": "1个月前"
      },
      {
        "title": "Product Sense面试心法第一决 — MECE框架",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=pPPGa3x7zBM",
        "uploadTime": "2个月前"
      },
      {
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": "7K views",
        "url": "https://www.youtube.com/watch?v=rCYw13Ad2ig",
        "uploadTime": "3个月前"
      },
      {
        "title": "投资人解析，短剧为什么这么火？｜ 大观资本Richer 1/2",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=rVnrixEfNMM",
        "uploadTime": "1个月前"
      },
      {
        "title": "Whiskey的内行大实话，钱花在哪里了？",
        "views": "3.6K views",
        "url": "https://www.youtube.com/watch?v=uAIeLutRuYc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 30,
    "name": "不详",
    "role": "Whiskey Expert, Investment Expert, Professional, Content Creator, Product Manager, 高级工程师, 职业工作者",
    "category": "life",
    "episodes": [
      {
        "title": "看懂人类顶尖科研，才能理解科学的局限｜Kevin教授_2/3",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=2fpnJlHPhGA",
        "uploadTime": "2个月前"
      },
      {
        "title": "提升判断力秘籍！",
        "views": "2.1K views",
        "url": "https://www.youtube.com/watch?v=J2Yx5DDSNYc",
        "uploadTime": "2个月前"
      },
      {
        "title": "自己工作，自己说了算！",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=Q31nzYvxl0Y",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何跟老板1:1？",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=ZGXECENR6qU",
        "uploadTime": "1个月前"
      },
      {
        "title": "Product Sense面试心法第一决 — MECE框架",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=pPPGa3x7zBM",
        "uploadTime": "2个月前"
      },
      {
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": "7K views",
        "url": "https://www.youtube.com/watch?v=rCYw13Ad2ig",
        "uploadTime": "3个月前"
      },
      {
        "title": "投资人解析，短剧为什么这么火？｜ 大观资本Richer 1/2",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=rVnrixEfNMM",
        "uploadTime": "1个月前"
      },
      {
        "title": "Whiskey的内行大实话，钱花在哪里了？",
        "views": "3.6K views",
        "url": "https://www.youtube.com/watch?v=uAIeLutRuYc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 31,
    "name": "不详",
    "role": "Whiskey Expert, Investment Expert, Professional, Content Creator, Product Manager, 高级工程师, 职业工作者",
    "category": "career",
    "episodes": [
      {
        "title": "看懂人类顶尖科研，才能理解科学的局限｜Kevin教授_2/3",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=2fpnJlHPhGA",
        "uploadTime": "2个月前"
      },
      {
        "title": "提升判断力秘籍！",
        "views": "2.1K views",
        "url": "https://www.youtube.com/watch?v=J2Yx5DDSNYc",
        "uploadTime": "2个月前"
      },
      {
        "title": "自己工作，自己说了算！",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=Q31nzYvxl0Y",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何跟老板1:1？",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=ZGXECENR6qU",
        "uploadTime": "1个月前"
      },
      {
        "title": "Product Sense面试心法第一决 — MECE框架",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=pPPGa3x7zBM",
        "uploadTime": "2个月前"
      },
      {
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": "7K views",
        "url": "https://www.youtube.com/watch?v=rCYw13Ad2ig",
        "uploadTime": "3个月前"
      },
      {
        "title": "投资人解析，短剧为什么这么火？｜ 大观资本Richer 1/2",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=rVnrixEfNMM",
        "uploadTime": "1个月前"
      },
      {
        "title": "Whiskey的内行大实话，钱花在哪里了？",
        "views": "3.6K views",
        "url": "https://www.youtube.com/watch?v=uAIeLutRuYc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 32,
    "name": "不详",
    "role": "Whiskey Expert, Investment Expert, Professional, Content Creator, Product Manager, 高级工程师, 职业工作者",
    "category": "tech",
    "episodes": [
      {
        "title": "看懂人类顶尖科研，才能理解科学的局限｜Kevin教授_2/3",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=2fpnJlHPhGA",
        "uploadTime": "2个月前"
      },
      {
        "title": "提升判断力秘籍！",
        "views": "2.1K views",
        "url": "https://www.youtube.com/watch?v=J2Yx5DDSNYc",
        "uploadTime": "2个月前"
      },
      {
        "title": "自己工作，自己说了算！",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=Q31nzYvxl0Y",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何跟老板1:1？",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=ZGXECENR6qU",
        "uploadTime": "1个月前"
      },
      {
        "title": "Product Sense面试心法第一决 — MECE框架",
        "views": "7.5K views",
        "url": "https://www.youtube.com/watch?v=pPPGa3x7zBM",
        "uploadTime": "2个月前"
      },
      {
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": "7K views",
        "url": "https://www.youtube.com/watch?v=rCYw13Ad2ig",
        "uploadTime": "3个月前"
      },
      {
        "title": "投资人解析，短剧为什么这么火？｜ 大观资本Richer 1/2",
        "views": "4.7K views",
        "url": "https://www.youtube.com/watch?v=rVnrixEfNMM",
        "uploadTime": "1个月前"
      },
      {
        "title": "Whiskey的内行大实话，钱花在哪里了？",
        "views": "3.6K views",
        "url": "https://www.youtube.com/watch?v=uAIeLutRuYc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 40,
    "name": "友超",
    "role": "职业发展顾问, 年轻微的管理者, 职业发展专家",
    "category": "career",
    "episodes": [
      {
        "title": "如何通过简历脱颖而出？| 友超访谈",
        "views": "50000",
        "url": "https://www.youtube.com/watch?v=4eYzTGxZazw",
        "uploadTime": "1个月前"
      },
      {
        "title": "职业的沉淀和变现｜学校专业怎么选｜衡量职业的维度｜每次走半步",
        "views": "9.8K views",
        "url": "https://www.youtube.com/watch?v=KYxw-9oWpVo",
        "uploadTime": "3个月前"
      },
      {
        "title": "大厂总监天天靠开会能为公司创造什么价值？",
        "views": "21K views",
        "url": "https://www.youtube.com/watch?v=lhcQkrkTUhc",
        "uploadTime": "2个月前"
      }
    ],
    "totalViews": 50000
  },
  {
    "id": 49,
    "name": "主持人",
    "role": "Host, Career Coach, Content Creator, 数据可视化专家, Data Scientist",
    "category": "hobby",
    "episodes": [
      {
        "title": "区块链能解决信任问题？想清楚什么是信任了吗？",
        "views": "1.2K views",
        "url": "https://www.youtube.com/watch?v=6G7KE0KIwWU",
        "uploadTime": "1个月前"
      },
      {
        "title": "想「成事」，先改造潜意识",
        "views": "13K views",
        "url": "https://www.youtube.com/watch?v=6QPju9vbb0c",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何通过解读Job Description，让自己的简历被认真对待？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=EFqKAU76Hlg",
        "uploadTime": "1个月前"
      },
      {
        "title": "动态思维 vs 静态思维",
        "views": "1.3K views",
        "url": "https://www.youtube.com/watch?v=NibvAnZ6e5s",
        "uploadTime": "1个月前"
      },
      {
        "title": "什么是好的产品经理（PM）｜PM都在干什么｜人人都应该做PM",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=gDPkMR8zNRE",
        "uploadTime": "2个月前"
      },
      {
        "title": "一款T恤的诞生：设计、定价、生产、物流、销售",
        "views": "1.7K views",
        "url": "https://www.youtube.com/watch?v=ijZ9pRW3UOo",
        "uploadTime": "1个月前"
      },
      {
        "title": "什么是好的数据可视化｜YouTube和B站后台对比｜不要用饼状图",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=tEbm8tuNlfY",
        "uploadTime": "1个月前"
      },
      {
        "title": "后悔：无用且有毒",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=tQ7MvzhdUtc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 50,
    "name": "主持人",
    "role": "Host, Career Coach, Content Creator, 数据可视化专家, Data Scientist",
    "category": "thinking",
    "episodes": [
      {
        "title": "区块链能解决信任问题？想清楚什么是信任了吗？",
        "views": "1.2K views",
        "url": "https://www.youtube.com/watch?v=6G7KE0KIwWU",
        "uploadTime": "1个月前"
      },
      {
        "title": "想「成事」，先改造潜意识",
        "views": "13K views",
        "url": "https://www.youtube.com/watch?v=6QPju9vbb0c",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何通过解读Job Description，让自己的简历被认真对待？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=EFqKAU76Hlg",
        "uploadTime": "1个月前"
      },
      {
        "title": "动态思维 vs 静态思维",
        "views": "1.3K views",
        "url": "https://www.youtube.com/watch?v=NibvAnZ6e5s",
        "uploadTime": "1个月前"
      },
      {
        "title": "什么是好的产品经理（PM）｜PM都在干什么｜人人都应该做PM",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=gDPkMR8zNRE",
        "uploadTime": "2个月前"
      },
      {
        "title": "一款T恤的诞生：设计、定价、生产、物流、销售",
        "views": "1.7K views",
        "url": "https://www.youtube.com/watch?v=ijZ9pRW3UOo",
        "uploadTime": "1个月前"
      },
      {
        "title": "什么是好的数据可视化｜YouTube和B站后台对比｜不要用饼状图",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=tEbm8tuNlfY",
        "uploadTime": "1个月前"
      },
      {
        "title": "后悔：无用且有毒",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=tQ7MvzhdUtc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 51,
    "name": "主持人",
    "role": "Host, Career Coach, Content Creator, 数据可视化专家, Data Scientist",
    "category": "career",
    "episodes": [
      {
        "title": "区块链能解决信任问题？想清楚什么是信任了吗？",
        "views": "1.2K views",
        "url": "https://www.youtube.com/watch?v=6G7KE0KIwWU",
        "uploadTime": "1个月前"
      },
      {
        "title": "想「成事」，先改造潜意识",
        "views": "13K views",
        "url": "https://www.youtube.com/watch?v=6QPju9vbb0c",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何通过解读Job Description，让自己的简历被认真对待？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=EFqKAU76Hlg",
        "uploadTime": "1个月前"
      },
      {
        "title": "动态思维 vs 静态思维",
        "views": "1.3K views",
        "url": "https://www.youtube.com/watch?v=NibvAnZ6e5s",
        "uploadTime": "1个月前"
      },
      {
        "title": "什么是好的产品经理（PM）｜PM都在干什么｜人人都应该做PM",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=gDPkMR8zNRE",
        "uploadTime": "2个月前"
      },
      {
        "title": "一款T恤的诞生：设计、定价、生产、物流、销售",
        "views": "1.7K views",
        "url": "https://www.youtube.com/watch?v=ijZ9pRW3UOo",
        "uploadTime": "1个月前"
      },
      {
        "title": "什么是好的数据可视化｜YouTube和B站后台对比｜不要用饼状图",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=tEbm8tuNlfY",
        "uploadTime": "1个月前"
      },
      {
        "title": "后悔：无用且有毒",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=tQ7MvzhdUtc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 52,
    "name": "主持人",
    "role": "Host, Career Coach, Content Creator, 数据可视化专家, Data Scientist",
    "category": "tech",
    "episodes": [
      {
        "title": "区块链能解决信任问题？想清楚什么是信任了吗？",
        "views": "1.2K views",
        "url": "https://www.youtube.com/watch?v=6G7KE0KIwWU",
        "uploadTime": "1个月前"
      },
      {
        "title": "想「成事」，先改造潜意识",
        "views": "13K views",
        "url": "https://www.youtube.com/watch?v=6QPju9vbb0c",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何通过解读Job Description，让自己的简历被认真对待？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=EFqKAU76Hlg",
        "uploadTime": "1个月前"
      },
      {
        "title": "动态思维 vs 静态思维",
        "views": "1.3K views",
        "url": "https://www.youtube.com/watch?v=NibvAnZ6e5s",
        "uploadTime": "1个月前"
      },
      {
        "title": "什么是好的产品经理（PM）｜PM都在干什么｜人人都应该做PM",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=gDPkMR8zNRE",
        "uploadTime": "2个月前"
      },
      {
        "title": "一款T恤的诞生：设计、定价、生产、物流、销售",
        "views": "1.7K views",
        "url": "https://www.youtube.com/watch?v=ijZ9pRW3UOo",
        "uploadTime": "1个月前"
      },
      {
        "title": "什么是好的数据可视化｜YouTube和B站后台对比｜不要用饼状图",
        "views": "3.3K views",
        "url": "https://www.youtube.com/watch?v=tEbm8tuNlfY",
        "uploadTime": "1个月前"
      },
      {
        "title": "后悔：无用且有毒",
        "views": "15K views",
        "url": "https://www.youtube.com/watch?v=tQ7MvzhdUtc",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 60,
    "name": "Unknown",
    "role": "Wine Expert, Tech Professional, Guest, Content Creator, Performer, Data Analyst, Actor, Tech Executive, Entrepreneur",
    "category": "thinking",
    "episodes": [
      {
        "title": "跨赛道跳槽的经验｜跳槽的最佳时机？｜如何选择职业4/4",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=9AOBt5e4fME",
        "uploadTime": "3个月前"
      },
      {
        "title": "大厂打工，需要尽早意识到的真相",
        "views": "16K views",
        "url": "https://www.youtube.com/watch?v=ACfLoZ92B-g",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何成熟面对新挑战？Meta Staff Eng的经验",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=CUvzoZKdFBk",
        "uploadTime": "1个月前"
      },
      {
        "title": "从美国到东京：影视拍摄体验分享",
        "views": 12345,
        "url": "https://example.com/tokyo-filming",
        "uploadTime": "2个月前"
      },
      {
        "title": "摆脱不痛不痒的工作习惯",
        "views": "4.3K views",
        "url": "https://www.youtube.com/watch?v=POK2sywfzso",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   Casetta 1990",
        "views": "129 views",
        "url": "https://www.youtube.com/watch?v=SqnAN2nx0qc",
        "uploadTime": "1个月前"
      },
      {
        "title": "提升运气秘籍！",
        "views": "8.8K views",
        "url": "https://www.youtube.com/watch?v=Wk0Ne1kx9rQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "婚后生活就像 -- 打地鼠？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=YjNhoEESO08",
        "uploadTime": "2个月前"
      },
      {
        "title": "和Leon聊天，正好天降大雨，画面很不错",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=tPKp4Y90HZM",
        "uploadTime": "1周前"
      }
    ],
    "totalViews": 12345
  },
  {
    "id": 61,
    "name": "Unknown",
    "role": "Wine Expert, Tech Professional, Guest, Content Creator, Performer, Data Analyst, Actor, Tech Executive, Entrepreneur",
    "category": "hobby",
    "episodes": [
      {
        "title": "跨赛道跳槽的经验｜跳槽的最佳时机？｜如何选择职业4/4",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=9AOBt5e4fME",
        "uploadTime": "3个月前"
      },
      {
        "title": "大厂打工，需要尽早意识到的真相",
        "views": "16K views",
        "url": "https://www.youtube.com/watch?v=ACfLoZ92B-g",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何成熟面对新挑战？Meta Staff Eng的经验",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=CUvzoZKdFBk",
        "uploadTime": "1个月前"
      },
      {
        "title": "从美国到东京：影视拍摄体验分享",
        "views": 12345,
        "url": "https://example.com/tokyo-filming",
        "uploadTime": "2个月前"
      },
      {
        "title": "摆脱不痛不痒的工作习惯",
        "views": "4.3K views",
        "url": "https://www.youtube.com/watch?v=POK2sywfzso",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   Casetta 1990",
        "views": "129 views",
        "url": "https://www.youtube.com/watch?v=SqnAN2nx0qc",
        "uploadTime": "1个月前"
      },
      {
        "title": "提升运气秘籍！",
        "views": "8.8K views",
        "url": "https://www.youtube.com/watch?v=Wk0Ne1kx9rQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "婚后生活就像 -- 打地鼠？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=YjNhoEESO08",
        "uploadTime": "2个月前"
      },
      {
        "title": "和Leon聊天，正好天降大雨，画面很不错",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=tPKp4Y90HZM",
        "uploadTime": "1周前"
      }
    ],
    "totalViews": 12345
  },
  {
    "id": 62,
    "name": "Unknown",
    "role": "Wine Expert, Tech Professional, Guest, Content Creator, Performer, Data Analyst, Actor, Tech Executive, Entrepreneur",
    "category": "life",
    "episodes": [
      {
        "title": "跨赛道跳槽的经验｜跳槽的最佳时机？｜如何选择职业4/4",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=9AOBt5e4fME",
        "uploadTime": "3个月前"
      },
      {
        "title": "大厂打工，需要尽早意识到的真相",
        "views": "16K views",
        "url": "https://www.youtube.com/watch?v=ACfLoZ92B-g",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何成熟面对新挑战？Meta Staff Eng的经验",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=CUvzoZKdFBk",
        "uploadTime": "1个月前"
      },
      {
        "title": "从美国到东京：影视拍摄体验分享",
        "views": 12345,
        "url": "https://example.com/tokyo-filming",
        "uploadTime": "2个月前"
      },
      {
        "title": "摆脱不痛不痒的工作习惯",
        "views": "4.3K views",
        "url": "https://www.youtube.com/watch?v=POK2sywfzso",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   Casetta 1990",
        "views": "129 views",
        "url": "https://www.youtube.com/watch?v=SqnAN2nx0qc",
        "uploadTime": "1个月前"
      },
      {
        "title": "提升运气秘籍！",
        "views": "8.8K views",
        "url": "https://www.youtube.com/watch?v=Wk0Ne1kx9rQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "婚后生活就像 -- 打地鼠？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=YjNhoEESO08",
        "uploadTime": "2个月前"
      },
      {
        "title": "和Leon聊天，正好天降大雨，画面很不错",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=tPKp4Y90HZM",
        "uploadTime": "1周前"
      }
    ],
    "totalViews": 12345
  },
  {
    "id": 63,
    "name": "Unknown",
    "role": "Wine Expert, Tech Professional, Guest, Content Creator, Performer, Data Analyst, Actor, Tech Executive, Entrepreneur",
    "category": "career",
    "episodes": [
      {
        "title": "跨赛道跳槽的经验｜跳槽的最佳时机？｜如何选择职业4/4",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=9AOBt5e4fME",
        "uploadTime": "3个月前"
      },
      {
        "title": "大厂打工，需要尽早意识到的真相",
        "views": "16K views",
        "url": "https://www.youtube.com/watch?v=ACfLoZ92B-g",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何成熟面对新挑战？Meta Staff Eng的经验",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=CUvzoZKdFBk",
        "uploadTime": "1个月前"
      },
      {
        "title": "从美国到东京：影视拍摄体验分享",
        "views": 12345,
        "url": "https://example.com/tokyo-filming",
        "uploadTime": "2个月前"
      },
      {
        "title": "摆脱不痛不痒的工作习惯",
        "views": "4.3K views",
        "url": "https://www.youtube.com/watch?v=POK2sywfzso",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   Casetta 1990",
        "views": "129 views",
        "url": "https://www.youtube.com/watch?v=SqnAN2nx0qc",
        "uploadTime": "1个月前"
      },
      {
        "title": "提升运气秘籍！",
        "views": "8.8K views",
        "url": "https://www.youtube.com/watch?v=Wk0Ne1kx9rQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "婚后生活就像 -- 打地鼠？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=YjNhoEESO08",
        "uploadTime": "2个月前"
      },
      {
        "title": "和Leon聊天，正好天降大雨，画面很不错",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=tPKp4Y90HZM",
        "uploadTime": "1周前"
      }
    ],
    "totalViews": 12345
  },
  {
    "id": 64,
    "name": "Unknown",
    "role": "Wine Expert, Tech Professional, Guest, Content Creator, Performer, Data Analyst, Actor, Tech Executive, Entrepreneur",
    "category": "tech",
    "episodes": [
      {
        "title": "跨赛道跳槽的经验｜跳槽的最佳时机？｜如何选择职业4/4",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=9AOBt5e4fME",
        "uploadTime": "3个月前"
      },
      {
        "title": "大厂打工，需要尽早意识到的真相",
        "views": "16K views",
        "url": "https://www.youtube.com/watch?v=ACfLoZ92B-g",
        "uploadTime": "1个月前"
      },
      {
        "title": "如何成熟面对新挑战？Meta Staff Eng的经验",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=CUvzoZKdFBk",
        "uploadTime": "1个月前"
      },
      {
        "title": "从美国到东京：影视拍摄体验分享",
        "views": 12345,
        "url": "https://example.com/tokyo-filming",
        "uploadTime": "2个月前"
      },
      {
        "title": "摆脱不痛不痒的工作习惯",
        "views": "4.3K views",
        "url": "https://www.youtube.com/watch?v=POK2sywfzso",
        "uploadTime": "1个月前"
      },
      {
        "title": "冯老师品酒课   Casetta 1990",
        "views": "129 views",
        "url": "https://www.youtube.com/watch?v=SqnAN2nx0qc",
        "uploadTime": "1个月前"
      },
      {
        "title": "提升运气秘籍！",
        "views": "8.8K views",
        "url": "https://www.youtube.com/watch?v=Wk0Ne1kx9rQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "婚后生活就像 -- 打地鼠？",
        "views": "2.4K views",
        "url": "https://www.youtube.com/watch?v=YjNhoEESO08",
        "uploadTime": "2个月前"
      },
      {
        "title": "和Leon聊天，正好天降大雨，画面很不错",
        "views": "4.2K views",
        "url": "https://www.youtube.com/watch?v=tPKp4Y90HZM",
        "uploadTime": "1周前"
      }
    ],
    "totalViews": 12345
  },
  {
    "id": 65,
    "name": "Leon",
    "role": "Senior Leader, Relationship Expert, Retired Entrepreneur, Investment Expert",
    "category": "thinking",
    "episodes": [
      {
        "title": "打工人如何获得财富自由？｜什么才是真正的财富和真正的自由？（中文字幕）｜Multiple-Fire系列",
        "views": "119K views",
        "url": "https://www.youtube.com/watch?v=9LKJ8JdLtfI",
        "uploadTime": "2个月前"
      },
      {
        "title": "Influence Without Authority ｜ 人生元能力",
        "views": "118K views",
        "url": "https://www.youtube.com/watch?v=CTcMvIZFQcw",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何摆脱无意义的工作？｜Multiple-Fire系列",
        "views": "162K views",
        "url": "https://www.youtube.com/watch?v=dlv97OHFnGY",
        "uploadTime": "1个月前"
      },
      {
        "title": "爱情中的安全感与表白：Leon访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=nTTj3z3QiyU",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 66,
    "name": "Leon",
    "role": "Senior Leader, Relationship Expert, Retired Entrepreneur, Investment Expert",
    "category": "career",
    "episodes": [
      {
        "title": "打工人如何获得财富自由？｜什么才是真正的财富和真正的自由？（中文字幕）｜Multiple-Fire系列",
        "views": "119K views",
        "url": "https://www.youtube.com/watch?v=9LKJ8JdLtfI",
        "uploadTime": "2个月前"
      },
      {
        "title": "Influence Without Authority ｜ 人生元能力",
        "views": "118K views",
        "url": "https://www.youtube.com/watch?v=CTcMvIZFQcw",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何摆脱无意义的工作？｜Multiple-Fire系列",
        "views": "162K views",
        "url": "https://www.youtube.com/watch?v=dlv97OHFnGY",
        "uploadTime": "1个月前"
      },
      {
        "title": "爱情中的安全感与表白：Leon访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=nTTj3z3QiyU",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 67,
    "name": "Leon",
    "role": "Senior Leader, Relationship Expert, Retired Entrepreneur, Investment Expert",
    "category": "life",
    "episodes": [
      {
        "title": "打工人如何获得财富自由？｜什么才是真正的财富和真正的自由？（中文字幕）｜Multiple-Fire系列",
        "views": "119K views",
        "url": "https://www.youtube.com/watch?v=9LKJ8JdLtfI",
        "uploadTime": "2个月前"
      },
      {
        "title": "Influence Without Authority ｜ 人生元能力",
        "views": "118K views",
        "url": "https://www.youtube.com/watch?v=CTcMvIZFQcw",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何摆脱无意义的工作？｜Multiple-Fire系列",
        "views": "162K views",
        "url": "https://www.youtube.com/watch?v=dlv97OHFnGY",
        "uploadTime": "1个月前"
      },
      {
        "title": "爱情中的安全感与表白：Leon访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=nTTj3z3QiyU",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 71,
    "name": "孙老板",
    "role": "AI应用科学家, Tech Entrepreneur, 科技行业高管",
    "category": "career",
    "episodes": [
      {
        "title": "如何在一个月内快速入门大模型？| 孙老板访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=A12Z_CHi7PE",
        "uploadTime": "1个月前"
      },
      {
        "title": "跳槽前应该做哪些研究？",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=DW24krQCXM4",
        "uploadTime": "3个月前"
      },
      {
        "title": "人工智能@互联网大厂 - 下 ｜ 现状与边界",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=VLnNmARqa3Y",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 72,
    "name": "孙老板",
    "role": "AI应用科学家, Tech Entrepreneur, 科技行业高管",
    "category": "tech",
    "episodes": [
      {
        "title": "如何在一个月内快速入门大模型？| 孙老板访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=A12Z_CHi7PE",
        "uploadTime": "1个月前"
      },
      {
        "title": "跳槽前应该做哪些研究？",
        "views": "14K views",
        "url": "https://www.youtube.com/watch?v=DW24krQCXM4",
        "uploadTime": "3个月前"
      },
      {
        "title": "人工智能@互联网大厂 - 下 ｜ 现状与边界",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=VLnNmARqa3Y",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 100,
    "name": "独白",
    "role": "Content Creator, Technology Analyst, Economics PhD with Finance Concentration, Data Analyst, Content Analyst, Career Development Expert, Economics Doctor, 职业发展专家",
    "category": "thinking",
    "episodes": [
      {
        "title": "ChatGPT的泡沫快碎了吗？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=F8udMyNXq88",
        "uploadTime": "1个月前"
      },
      {
        "title": "普通人获得好运的完整方法（非玄学）",
        "views": "9.7K views",
        "url": "https://www.youtube.com/watch?v=vmtHbWyg2oU&t=53s",
        "uploadTime": "1个月前"
      },
      {
        "title": "AB Testing概览",
        "views": "5.9K views",
        "url": "https://www.youtube.com/watch?v=vx15aj-ah1c",
        "uploadTime": "2个月前"
      },
      {
        "title": "成熟打工人，多谈得失，少谈对错",
        "views": "10K views",
        "url": "https://www.youtube.com/watch?v=wo_DPVH89os",
        "uploadTime": "1个月前"
      },
      {
        "title": "世界和平需要先解决这两个问题，但是……",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=x3tzOuTG1IQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何战略忽悠住你的老板？｜视频的广告和付费模式",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=x_NiQHffddY",
        "uploadTime": "1个月前"
      },
      {
        "title": "比特币、Game Stop、选美比赛的共同点，让人一夜暴富/破产？",
        "views": "1.1K views",
        "url": "https://www.youtube.com/watch?v=y6lFVM5djiE",
        "uploadTime": "2个月前"
      },
      {
        "title": "不被奋斗困住，不求世俗认同，不恋过往｜如何选择职业 2/4",
        "views": "10K views",
        "url": "https://www.youtube.com/watch?v=y9G95GJIjzE",
        "uploadTime": "2个月前"
      },
      {
        "title": "改变因果观，化焦虑为动力",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=zVp2uXHic8s",
        "uploadTime": "最近"
      }
    ],
    "totalViews": 27567
  },
  {
    "id": 101,
    "name": "独白",
    "role": "Content Creator, Technology Analyst, Economics PhD with Finance Concentration, Data Analyst, Content Analyst, Career Development Expert, Economics Doctor, 职业发展专家",
    "category": "life",
    "episodes": [
      {
        "title": "ChatGPT的泡沫快碎了吗？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=F8udMyNXq88",
        "uploadTime": "1个月前"
      },
      {
        "title": "普通人获得好运的完整方法（非玄学）",
        "views": "9.7K views",
        "url": "https://www.youtube.com/watch?v=vmtHbWyg2oU&t=53s",
        "uploadTime": "1个月前"
      },
      {
        "title": "AB Testing概览",
        "views": "5.9K views",
        "url": "https://www.youtube.com/watch?v=vx15aj-ah1c",
        "uploadTime": "2个月前"
      },
      {
        "title": "成熟打工人，多谈得失，少谈对错",
        "views": "10K views",
        "url": "https://www.youtube.com/watch?v=wo_DPVH89os",
        "uploadTime": "1个月前"
      },
      {
        "title": "世界和平需要先解决这两个问题，但是……",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=x3tzOuTG1IQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何战略忽悠住你的老板？｜视频的广告和付费模式",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=x_NiQHffddY",
        "uploadTime": "1个月前"
      },
      {
        "title": "比特币、Game Stop、选美比赛的共同点，让人一夜暴富/破产？",
        "views": "1.1K views",
        "url": "https://www.youtube.com/watch?v=y6lFVM5djiE",
        "uploadTime": "2个月前"
      },
      {
        "title": "不被奋斗困住，不求世俗认同，不恋过往｜如何选择职业 2/4",
        "views": "10K views",
        "url": "https://www.youtube.com/watch?v=y9G95GJIjzE",
        "uploadTime": "2个月前"
      },
      {
        "title": "改变因果观，化焦虑为动力",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=zVp2uXHic8s",
        "uploadTime": "最近"
      }
    ],
    "totalViews": 27567
  },
  {
    "id": 102,
    "name": "独白",
    "role": "Content Creator, Technology Analyst, Economics PhD with Finance Concentration, Data Analyst, Content Analyst, Career Development Expert, Economics Doctor, 职业发展专家",
    "category": "career",
    "episodes": [
      {
        "title": "ChatGPT的泡沫快碎了吗？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=F8udMyNXq88",
        "uploadTime": "1个月前"
      },
      {
        "title": "普通人获得好运的完整方法（非玄学）",
        "views": "9.7K views",
        "url": "https://www.youtube.com/watch?v=vmtHbWyg2oU&t=53s",
        "uploadTime": "1个月前"
      },
      {
        "title": "AB Testing概览",
        "views": "5.9K views",
        "url": "https://www.youtube.com/watch?v=vx15aj-ah1c",
        "uploadTime": "2个月前"
      },
      {
        "title": "成熟打工人，多谈得失，少谈对错",
        "views": "10K views",
        "url": "https://www.youtube.com/watch?v=wo_DPVH89os",
        "uploadTime": "1个月前"
      },
      {
        "title": "世界和平需要先解决这两个问题，但是……",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=x3tzOuTG1IQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何战略忽悠住你的老板？｜视频的广告和付费模式",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=x_NiQHffddY",
        "uploadTime": "1个月前"
      },
      {
        "title": "比特币、Game Stop、选美比赛的共同点，让人一夜暴富/破产？",
        "views": "1.1K views",
        "url": "https://www.youtube.com/watch?v=y6lFVM5djiE",
        "uploadTime": "2个月前"
      },
      {
        "title": "不被奋斗困住，不求世俗认同，不恋过往｜如何选择职业 2/4",
        "views": "10K views",
        "url": "https://www.youtube.com/watch?v=y9G95GJIjzE",
        "uploadTime": "2个月前"
      },
      {
        "title": "改变因果观，化焦虑为动力",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=zVp2uXHic8s",
        "uploadTime": "最近"
      }
    ],
    "totalViews": 27567
  },
  {
    "id": 103,
    "name": "独白",
    "role": "Content Creator, Technology Analyst, Economics PhD with Finance Concentration, Data Analyst, Content Analyst, Career Development Expert, Economics Doctor, 职业发展专家",
    "category": "tech",
    "episodes": [
      {
        "title": "ChatGPT的泡沫快碎了吗？",
        "views": "11K views",
        "url": "https://www.youtube.com/watch?v=F8udMyNXq88",
        "uploadTime": "1个月前"
      },
      {
        "title": "普通人获得好运的完整方法（非玄学）",
        "views": "9.7K views",
        "url": "https://www.youtube.com/watch?v=vmtHbWyg2oU&t=53s",
        "uploadTime": "1个月前"
      },
      {
        "title": "AB Testing概览",
        "views": "5.9K views",
        "url": "https://www.youtube.com/watch?v=vx15aj-ah1c",
        "uploadTime": "2个月前"
      },
      {
        "title": "成熟打工人，多谈得失，少谈对错",
        "views": "10K views",
        "url": "https://www.youtube.com/watch?v=wo_DPVH89os",
        "uploadTime": "1个月前"
      },
      {
        "title": "世界和平需要先解决这两个问题，但是……",
        "views": "2.2K views",
        "url": "https://www.youtube.com/watch?v=x3tzOuTG1IQ",
        "uploadTime": "3个月前"
      },
      {
        "title": "如何战略忽悠住你的老板？｜视频的广告和付费模式",
        "views": "3.9K views",
        "url": "https://www.youtube.com/watch?v=x_NiQHffddY",
        "uploadTime": "1个月前"
      },
      {
        "title": "比特币、Game Stop、选美比赛的共同点，让人一夜暴富/破产？",
        "views": "1.1K views",
        "url": "https://www.youtube.com/watch?v=y6lFVM5djiE",
        "uploadTime": "2个月前"
      },
      {
        "title": "不被奋斗困住，不求世俗认同，不恋过往｜如何选择职业 2/4",
        "views": "10K views",
        "url": "https://www.youtube.com/watch?v=y9G95GJIjzE",
        "uploadTime": "2个月前"
      },
      {
        "title": "改变因果观，化焦虑为动力",
        "views": "8.5K views",
        "url": "https://www.youtube.com/watch?v=zVp2uXHic8s",
        "uploadTime": "最近"
      }
    ],
    "totalViews": 27567
  },
  {
    "id": 136,
    "name": "光叔",
    "role": "面试官, Brand Manager, HR Manager",
    "category": "career",
    "episodes": [
      {
        "title": "面试的核心是围绕这两件事",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=OR6rikid31g",
        "uploadTime": "3个月前"
      },
      {
        "title": "这些面试技巧对相亲也是很有帮助的！",
        "views": "9.8K views",
        "url": "https://www.youtube.com/watch?v=ZIyLgob1ReY",
        "uploadTime": "1个月前"
      },
      {
        "title": "黑神话悟空：从非共识到全球成功的传奇",
        "views": 50000000,
        "url": "https://www.youtube.com/watch?v=Zm8JbIUgn2I",
        "uploadTime": "4个月前"
      }
    ],
    "totalViews": 50000000
  },
  {
    "id": 137,
    "name": "光叔",
    "role": "面试官, Brand Manager, HR Manager",
    "category": "hobby",
    "episodes": [
      {
        "title": "面试的核心是围绕这两件事",
        "views": "17K views",
        "url": "https://www.youtube.com/watch?v=OR6rikid31g",
        "uploadTime": "3个月前"
      },
      {
        "title": "这些面试技巧对相亲也是很有帮助的！",
        "views": "9.8K views",
        "url": "https://www.youtube.com/watch?v=ZIyLgob1ReY",
        "uploadTime": "1个月前"
      },
      {
        "title": "黑神话悟空：从非共识到全球成功的传奇",
        "views": 50000000,
        "url": "https://www.youtube.com/watch?v=Zm8JbIUgn2I",
        "uploadTime": "4个月前"
      }
    ],
    "totalViews": 50000000
  },
  {
    "id": 141,
    "name": "徐老师",
    "role": "Chief AI Officer, Entrepreneur and Investor, 资深硅谷导师, Cyber Security SVP",
    "category": "thinking",
    "episodes": [
      {
        "title": "90%的工作都没价值？｜噪音时代，如何获取有价值的信息？｜硅谷徐老师访谈 3/3",
        "views": "30K views",
        "url": "https://www.youtube.com/watch?v=P-frv84l3Fk",
        "uploadTime": "2个月前"
      },
      {
        "title": "如何在硅谷找到高速成长公司？| 徐老师访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=PWqmRub9wdI",
        "uploadTime": "3个月前"
      },
      {
        "title": "硅谷Networking的艺术与实战",
        "views": "1000",
        "url": "https://www.youtube.com/watch?v=mEVk5i6BL9o",
        "uploadTime": "2天前"
      },
      {
        "title": "硅谷高层职场突破：华人如何成为AI领导者？",
        "views": 10000,
        "url": "https://example.com/xu-interview",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 11000
  },
  {
    "id": 142,
    "name": "徐老师",
    "role": "Chief AI Officer, Entrepreneur and Investor, 资深硅谷导师, Cyber Security SVP",
    "category": "career",
    "episodes": [
      {
        "title": "90%的工作都没价值？｜噪音时代，如何获取有价值的信息？｜硅谷徐老师访谈 3/3",
        "views": "30K views",
        "url": "https://www.youtube.com/watch?v=P-frv84l3Fk",
        "uploadTime": "2个月前"
      },
      {
        "title": "如何在硅谷找到高速成长公司？| 徐老师访谈",
        "views": "",
        "url": "https://www.youtube.com/watch?v=PWqmRub9wdI",
        "uploadTime": "3个月前"
      },
      {
        "title": "硅谷Networking的艺术与实战",
        "views": "1000",
        "url": "https://www.youtube.com/watch?v=mEVk5i6BL9o",
        "uploadTime": "2天前"
      },
      {
        "title": "硅谷高层职场突破：华人如何成为AI领导者？",
        "views": 10000,
        "url": "https://example.com/xu-interview",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 11000
  },
  {
    "id": 146,
    "name": "主播",
    "role": "YouTuber, Content Creator",
    "category": "career",
    "episodes": [
      {
        "title": "寻找一个视频制作合伙人，频道收入全归你",
        "views": "7.7K views",
        "url": "https://www.youtube.com/watch?v=PwreY7Va_bs",
        "uploadTime": "几天前"
      },
      {
        "title": "AI时代，如何找到属于你的机会？",
        "views": "16K views",
        "url": "https://www.youtube.com/watch?v=WATIlXkbaLs",
        "uploadTime": "3个月前"
      },
      {
        "title": "头铁up主，中英夹杂还有理了？",
        "views": "6.5K views",
        "url": "https://www.youtube.com/watch?v=nBQ-fcPkZG0",
        "uploadTime": "2个月前"
      }
    ],
    "totalViews": 20000
  },
  {
    "id": 147,
    "name": "主播",
    "role": "YouTuber, Content Creator",
    "category": "life",
    "episodes": [
      {
        "title": "寻找一个视频制作合伙人，频道收入全归你",
        "views": "7.7K views",
        "url": "https://www.youtube.com/watch?v=PwreY7Va_bs",
        "uploadTime": "几天前"
      },
      {
        "title": "AI时代，如何找到属于你的机会？",
        "views": "16K views",
        "url": "https://www.youtube.com/watch?v=WATIlXkbaLs",
        "uploadTime": "3个月前"
      },
      {
        "title": "头铁up主，中英夹杂还有理了？",
        "views": "6.5K views",
        "url": "https://www.youtube.com/watch?v=nBQ-fcPkZG0",
        "uploadTime": "2个月前"
      }
    ],
    "totalViews": 20000
  },
  {
    "id": 148,
    "name": "主播",
    "role": "YouTuber, Content Creator",
    "category": "hobby",
    "episodes": [
      {
        "title": "寻找一个视频制作合伙人，频道收入全归你",
        "views": "7.7K views",
        "url": "https://www.youtube.com/watch?v=PwreY7Va_bs",
        "uploadTime": "几天前"
      },
      {
        "title": "AI时代，如何找到属于你的机会？",
        "views": "16K views",
        "url": "https://www.youtube.com/watch?v=WATIlXkbaLs",
        "uploadTime": "3个月前"
      },
      {
        "title": "头铁up主，中英夹杂还有理了？",
        "views": "6.5K views",
        "url": "https://www.youtube.com/watch?v=nBQ-fcPkZG0",
        "uploadTime": "2个月前"
      }
    ],
    "totalViews": 20000
  },
  {
    "id": 175,
    "name": "Nick",
    "role": "Wine and Sake Specialist, 模特经纪公司老板, Master Sommelier",
    "category": "life",
    "episodes": [
      {
        "title": "How to price \"flavor\" in a wine? By a master sommelier",
        "views": "1K views",
        "url": "https://www.youtube.com/watch?v=WV6QExN58vo",
        "uploadTime": "3个月前"
      },
      {
        "title": "A Master Sommelier's Special Selection of Good Wine @mediumplus",
        "views": "970 views",
        "url": "https://www.youtube.com/watch?v=WaHh7lW4uiI",
        "uploadTime": "1个月前"
      },
      {
        "title": "模特行业内幕揭秘｜模特公司老板访谈-上",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=osZDEDx8fyE",
        "uploadTime": "3个月前"
      }
    ],
    "totalViews": 0
  },
  {
    "id": 176,
    "name": "Nick",
    "role": "Wine and Sake Specialist, 模特经纪公司老板, Master Sommelier",
    "category": "hobby",
    "episodes": [
      {
        "title": "How to price \"flavor\" in a wine? By a master sommelier",
        "views": "1K views",
        "url": "https://www.youtube.com/watch?v=WV6QExN58vo",
        "uploadTime": "3个月前"
      },
      {
        "title": "A Master Sommelier's Special Selection of Good Wine @mediumplus",
        "views": "970 views",
        "url": "https://www.youtube.com/watch?v=WaHh7lW4uiI",
        "uploadTime": "1个月前"
      },
      {
        "title": "模特行业内幕揭秘｜模特公司老板访谈-上",
        "views": "2.8K views",
        "url": "https://www.youtube.com/watch?v=osZDEDx8fyE",
        "uploadTime": "3个月前"
      }
    ],
    "totalViews": 0
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
