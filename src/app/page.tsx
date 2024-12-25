"use client";

import React, { useState } from 'react';
import { Search, Video, X, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const KnowledgeUniverse = () => {
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Main guests data
  const allGuests = [
  {
    "name": "Angelina Yang",
    "role": "硅谷中场数据负责人",
    "category": "['leadership', 'leadership']",
    "id": 1,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "数据科学对公司的真正价值，以及向上管理秘籍",
        "views": 2387,
        "url": "https://www.bilibili.com/video/BV1AW4y1F7bv",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "圈内秘籍：如何搞清楚权力的分配？| 数据团队如何做出影响力？｜前创业公司数据负责人Angelina",
        "views": 13830,
        "url": "https://www.bilibili.com/video/BV1Fb421n7qc",
        "uploadTime": "Not available"
      }
    ],
    "totalViews": 16217
  },
  {
    "name": "Bailu Xu",
    "role": "BCG咨询顾问",
    "category": "['consulting_career']",
    "id": 2,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "去魅管理咨询-下 | 咨询如何为专业的甲方提供价值 | 咨询顾问都有什么背景和特质 | 如何进入咨询 | 与互联网职级对应",
        "views": 5161,
        "url": "https://www.bilibili.com/video/BV1uh411d7wi",
        "uploadTime": "2 days ago"
      }
    ],
    "totalViews": 5161
  },
  {
    "name": "Ben and David",
    "role": "Hosts of Acquired Podcast",
    "category": "['leadership']",
    "id": 3,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "采访小扎之后呢？｜从Acquired Duo身上学习“定力”",
        "views": 3886,
        "url": "https://www.bilibili.com/video/BV178x7eqEM4",
        "uploadTime": "2 days ago"
      }
    ],
    "totalViews": 3886
  },
  {
    "name": "Charles",
    "role": "Software Development Manager at Amazon",
    "category": "['leadership']",
    "id": 4,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "94年的亚马逊Manager，他的成功（真的）可以复制",
        "views": 6465,
        "url": "https://www.bilibili.com/video/BV1Yh41127rz",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 6465
  },
  {
    "name": "Cooper Lu",
    "role": "AI Scientist at Meta/Amazon",
    "category": "['technical_career', 'technical_career', 'technical_career', 'entrepreneurship']",
    "id": 5,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "Web3与区块链的技术本质",
        "views": 16617,
        "url": "https://www.bilibili.com/video/BV12d4y1k7U8",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "人工智能在互联网互联网大厂的应用-上",
        "views": 5808,
        "url": "https://www.bilibili.com/video/BV1664y1F7ag",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "人工智能在互联网互联网大厂的应用-下",
        "views": 5597,
        "url": "https://www.bilibili.com/video/BV1AT4y177Ri",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "Web3不解决这几个问题，怕是做不大？",
        "views": 11987,
        "url": "https://www.bilibili.com/video/BV1qP411g74h",
        "uploadTime": "2 weeks ago"
      }
    ],
    "totalViews": 40009
  },
  {
    "name": "Daliana Liu",
    "role": "Senior Data Scientist, Entrepreneur",
    "category": "['entrepreneurship']",
    "id": 6,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "大连数据科学家，领英29万粉，分享如何打造英文个人品牌",
        "views": 4609,
        "url": "https://www.bilibili.com/video/BV1i5CXYxEh2",
        "uploadTime": "recent"
      }
    ],
    "totalViews": 4609
  },
  {
    "name": "David Sun",
    "role": "Founding Engineer",
    "category": "['entrepreneurship']",
    "id": 7,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "2021年，脸书谷歌跳槽startup体验-下",
        "views": 595,
        "url": "https://www.bilibili.com/video/BV1D94y1H7Ai",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 595
  },
  {
    "name": "Deb Liu",
    "role": "CEO of Ancestry, Former VP at Meta",
    "category": "['leadership']",
    "id": 8,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "硅谷华裔女高管：「伯乐」才是职业发展最大的加速器",
        "views": 877,
        "url": "https://www.bilibili.com/video/BV1kh4y1a7qL",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 877
  },
  {
    "name": "Emily",
    "role": "00后耶鲁MBA",
    "category": "['work_life']",
    "id": 9,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "深度挖掘，00后耶鲁MBA，如何做到的？",
        "views": 4322,
        "url": "https://www.bilibili.com/video/BV13w411r7BS",
        "uploadTime": "Unknown"
      },
      {
        "platform": "bilibili",
        "title": "00后耶鲁MBA，是什么体验？",
        "views": 3439,
        "url": "https://www.bilibili.com/video/BV1nw411A7eP",
        "uploadTime": "Not specified"
      }
    ],
    "totalViews": 7761
  },
  {
    "name": "Ethan Evans",
    "role": "Former Amazon VP, Executive Coach",
    "category": "['leadership']",
    "id": 10,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "职业发展如何平衡技术、人脉、和业务？｜前亚马逊VP访谈1/3",
        "views": 4441,
        "url": "https://www.bilibili.com/video/BV1JS42197Bk",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "听懂这条面试核心理念，搞定一切behavioral interview｜访谈前亚马逊副总裁",
        "views": 7847,
        "url": "https://www.bilibili.com/video/BV1aPyjYnEMb",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "亚马逊前VP：我需要的是谋臣和大使",
        "views": 4485,
        "url": "https://www.bilibili.com/video/BV1eZ421N753",
        "uploadTime": "Not specified"
      },
      {
        "platform": "bilibili",
        "title": "前亚马逊VP教我们职业发展｜课代表networking的案例展示",
        "views": 39331,
        "url": "https://www.bilibili.com/video/BV1sT4216747",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "VP揭秘，如何当好一个总监？｜面试、管理、谈判、influence、培养人、解决问题｜前亚马逊副总裁访谈第二轮",
        "views": 8117,
        "url": "https://www.bilibili.com/video/BV1tVyjY5EQX",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 64221
  },
  {
    "name": "Ethan Zhu",
    "role": "Analytics Manager at DoorDash",
    "category": "['work_life', 'technical_career']",
    "id": 11,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "从临时工到资深经理，如何在工作中找到自信？｜DoorDash分析经理访谈1/3",
        "views": 6955,
        "url": "https://www.bilibili.com/video/BV1Y14y1B7BD",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": 16174,
        "url": "https://www.bilibili.com/video/BV18X4y177ic",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "升职加薪的意义是什么来着？｜DoorDash分析经理访谈 3/3",
        "views": 4633,
        "url": "https://www.bilibili.com/video/BV1Ck4y1u7dd",
        "uploadTime": "3 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": 16174,
        "url": "https://www.bilibili.com/video/BV18X4y177ic",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "升职加薪的意义是什么来着？｜DoorDash分析经理访谈 3/3",
        "views": 4633,
        "url": "https://www.bilibili.com/video/BV1Ck4y1u7dd",
        "uploadTime": "3 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": 16174,
        "url": "https://www.bilibili.com/video/BV18X4y177ic",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "升职加薪的意义是什么来着？｜DoorDash分析经理访谈 3/3",
        "views": 4633,
        "url": "https://www.bilibili.com/video/BV1Ck4y1u7dd",
        "uploadTime": "3 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "主动掌控工作｜Doordash分析经理访谈2/3",
        "views": 16174,
        "url": "https://www.bilibili.com/video/BV18X4y177ic",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "升职加薪的意义是什么来着？｜DoorDash分析经理访谈 3/3",
        "views": 4633,
        "url": "https://www.bilibili.com/video/BV1Ck4y1u7dd",
        "uploadTime": "3 weeks ago"
      }
    ],
    "totalViews": 69376
  },
  {
    "name": "Eugene Wang",
    "role": "前亚马逊首席产品经理",
    "category": "['leadership']",
    "id": 12,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "如何在职场里有效沟通？",
        "views": 5570,
        "url": "https://www.bilibili.com/video/BV1XC4y1a7QA",
        "uploadTime": "2 weeks ago"
      }
    ],
    "totalViews": 5570
  },
  {
    "name": "Francer",
    "role": "Tencent Game Operations and Project Management",
    "category": "['job_search']",
    "id": 13,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "「运营」和「项目管理」工作内容分享｜琐碎的工作如何做出花样？｜留学生面试国内大厂体验｜应届生采访系列 2",
        "views": 10985,
        "url": "https://www.bilibili.com/video/BV1Cq4y1a7s1",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "面对困难如何保持积极？｜如何找到感兴趣的专业？｜应届生采访系列 3",
        "views": 4817,
        "url": "https://www.bilibili.com/video/BV18S4y1Y7Mp",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 15802
  },
  {
    "name": "Howard Li",
    "role": "Meta DS Director",
    "category": "['technical_career', 'leadership', 'leadership', 'leadership']",
    "id": 14,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "什么是manager心中好IC，和promotion游戏怎么玩？｜Facebook Marketplace三级别DS managers访谈",
        "views": 1316,
        "url": "https://www.bilibili.com/video/BV11g4y1Z7au",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "怎样才是Meta数据科学director眼中的好员工？",
        "views": 21004,
        "url": "https://www.bilibili.com/video/BV155411B7AQ",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "对DS manager们的建议",
        "views": 759,
        "url": "https://www.bilibili.com/video/BV1Ka4y1r7zW",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何找好、做好Manager？｜Meta三代DS manager的干货分享",
        "views": 9592,
        "url": "https://www.bilibili.com/video/BV1gZ421b7F6",
        "uploadTime": "not specified"
      }
    ],
    "totalViews": 32671
  },
  {
    "name": "Howie",
    "role": "硅谷徐老师，Gen Chief AI Officer，投资人，创业者，斯坦福客座教授",
    "category": "['entrepreneurship']",
    "id": 15,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "问硅谷华人高管：竹子天花板存在吗？｜和硅谷徐老师一起拉票",
        "views": 5084,
        "url": "https://www.bilibili.com/video/BV12r421M7Py",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "90%的工作都没价值？｜噪音时代，如何获取有价值的信息？｜硅谷徐老师访谈 3/3",
        "views": 28980,
        "url": "https://www.bilibili.com/video/BV1o1421z7aC",
        "uploadTime": "2 months ago"
      },
      {
        "platform": "bilibili",
        "title": "听懂这一件事，每天都能提高自己的沟通能力",
        "views": 26595,
        "url": "https://www.bilibili.com/video/BV1f3411f7Vg",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何「不靠运气」也能火箭速度升职？",
        "views": 14567,
        "url": "https://www.bilibili.com/video/BV1n3411f7Gt",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "如何得到intellectual honesty？｜硅谷徐老师P3完整版",
        "views": 3770,
        "url": "https://www.bilibili.com/video/BV17T4y1x72V",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "听懂这一件事，每天都能提高自己的沟通能力",
        "views": 26595,
        "url": "https://www.bilibili.com/video/BV1f3411f7Vg",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何「不靠运气」也能火箭速度升职？",
        "views": 14567,
        "url": "https://www.bilibili.com/video/BV1n3411f7Gt",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "如何得到intellectual honesty？｜硅谷徐老师P3完整版",
        "views": 3770,
        "url": "https://www.bilibili.com/video/BV17T4y1x72V",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何得到intellectual honesty？｜硅谷徐老师P3完整版",
        "views": 3770,
        "url": "https://www.bilibili.com/video/BV17T4y1x72V",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "天之骄子进大厂，有被浪费吗？｜如何多学知识并融会贯通｜应届生采访4",
        "views": 13648,
        "url": "https://www.bilibili.com/video/BV1Gi4y1m75c",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "如何得到intellectual honesty？｜硅谷徐老师P3完整版",
        "views": 3770,
        "url": "https://www.bilibili.com/video/BV17T4y1x72V",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "天之骄子进大厂，有被浪费吗？｜如何多学知识并融会贯通｜应届生采访4",
        "views": 13648,
        "url": "https://www.bilibili.com/video/BV1Gi4y1m75c",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "我们如何利用好这轮衰退？｜生成式AI神预言",
        "views": 538928,
        "url": "https://www.bilibili.com/video/BV1md4y1v7hk",
        "uploadTime": "2 months ago"
      },
      {
        "platform": "bilibili",
        "title": "2024创业需要注意什么？｜硅谷徐老师访谈P2_完整版",
        "views": 3298,
        "url": "https://www.bilibili.com/video/BV1CN4y1s7HU",
        "uploadTime": "2 days ago"
      },
      {
        "platform": "bilibili",
        "title": "2024创业需要注意什么？｜硅谷徐老师访谈P2_完整版",
        "views": 3298,
        "url": "https://www.bilibili.com/video/BV1CN4y1s7HU",
        "uploadTime": "2 days ago"
      },
      {
        "platform": "bilibili",
        "title": "AI元年复盘：如何独立思考，抓住未来机会？｜硅谷徐老师（上）",
        "views": 45607,
        "url": "https://www.bilibili.com/video/BV18e411r7dV",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "中国SaaS公司为什么不赚钱？",
        "views": 73844,
        "url": "https://www.bilibili.com/video/BV1DB4y1j7Cc",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "中国SaaS公司为什么不赚钱？",
        "views": 73844,
        "url": "https://www.bilibili.com/video/BV1DB4y1j7Cc",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "历史钟摆原理｜微软今天的种子，桑提亚二十年前就在播种了？｜硅谷徐老师深度访谈",
        "views": 6237,
        "url": "https://www.bilibili.com/video/BV1Gz421B7cn",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "硅谷圈内如何networking？徐老师四条职场人脉原则 ｜领航十周年公益活动",
        "views": 5024,
        "url": "https://www.bilibili.com/video/BV1AVHReuEM9",
        "uploadTime": "3 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "历史钟摆原理｜微软今天的种子，桑提亚二十年前就在播种了？｜硅谷徐老师深度访谈",
        "views": 6237,
        "url": "https://www.bilibili.com/video/BV1Gz421B7cn",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 915081
  },
  {
    "name": "Kathy and Ashley",
    "role": "Software Engineers at Google and Meta",
    "category": "['technical_career']",
    "id": 16,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "转码vs科班程序员，最奇妙的样本",
        "views": 15825,
        "url": "https://www.bilibili.com/video/BV1k84y1679E",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 15825
  },
  {
    "name": "Kelly Xu",
    "role": "创业者，网红，前Airbnb数据科学家",
    "category": "['entrepreneurship', 'technical_career', 'technical_career', 'technical_career', 'technical_career', 'technical_career']",
    "id": 17,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "kelly连线回放，对中美经济看法，如何学习，工作人生心得",
        "views": 844,
        "url": "https://www.bilibili.com/video/BV1HH4y1D7Mf",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 103997
  },
  {
    "name": "Kevin Chen",
    "role": "MIT Professor",
    "category": "['technical_career', 'job_search']",
    "id": 18,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "对话顶级科学家半小时，收获大于读半年书？｜中美科研差距有多大？｜理想主义如何驱动科技进步｜Kevin教授_1/3",
        "views": 60255,
        "url": "https://www.bilibili.com/video/BV18w411772U",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "MIT教授：我能理解，科学的尽头是信仰",
        "views": 10689,
        "url": "https://www.bilibili.com/video/BV1Vj421X7i2",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "与MIT教授畅聊科学方法与玄学世界观",
        "views": 3219,
        "url": "https://www.bilibili.com/video/BV1kF411S7g6",
        "uploadTime": "2 days ago"
      },
      {
        "platform": "bilibili",
        "title": "MIT教授讲解实验到底多厉害，以及为什么科技研究不能太追求落地？",
        "views": 2054,
        "url": "https://www.bilibili.com/video/BV1m14y167xk",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "MIT教授vs.康奈尔博士：科学重要吗？｜Kevin教授_3/3",
        "views": 26936,
        "url": "https://www.bilibili.com/video/BV1wm411C72W",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "用面试和工作提升人生价值｜课代表network秘籍大揭秘",
        "views": 14120,
        "url": "https://www.bilibili.com/video/BV1jS4y1j7yx",
        "uploadTime": "relative time not specified"
      },
      {
        "platform": "bilibili",
        "title": "看懂人类顶尖科研，才能理解科学的局限｜Kevin教授_2/3｜一百年前劳斯莱斯就预言了电动车",
        "views": 18660,
        "url": "https://www.bilibili.com/video/BV1TJ4m1Y71W",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 167279
  },
  {
    "name": "Leon",
    "role": "前Meta E7 Tech Lead, 亚马逊L7, 个人投资者",
    "category": "['entrepreneurship', 'entrepreneurship', 'work_life', 'work_life', 'work_life']",
    "id": 19,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "Influence Without Authority ｜ 职业前十年看懂这一期就够了｜人生元能力｜值得在家长群里分享的视频",
        "views": 78077,
        "url": "https://www.bilibili.com/video/BV1tq4y1X7dj",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "LuluLeon谈教育_下",
        "views": 4929,
        "url": "https://www.bilibili.com/video/BV1am411C7zA",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "有意义的人生只有这么短？｜结婚九周年的角色扮演",
        "views": 16001,
        "url": "https://www.bilibili.com/video/BV16V4y117n2",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "LuluLeon谈教育_下",
        "views": 4929,
        "url": "https://www.bilibili.com/video/BV1am411C7zA",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "如何摆脱无意义的工作？",
        "views": 106110,
        "url": "https://www.bilibili.com/video/BV1Jc411A75X",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何摆脱无意义的工作？",
        "views": 106110,
        "url": "https://www.bilibili.com/video/BV1Jc411A75X",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何积累第一桶金？｜摆脱韭菜思维的最后一次努力｜Leon访谈_上",
        "views": 117431,
        "url": "https://www.bilibili.com/video/BV1Uc411s7Fw",
        "uploadTime": "2023-10-01"
      },
      {
        "platform": "bilibili",
        "title": "想清楚这些，才能成为财富的主人",
        "views": 25973,
        "url": "https://www.bilibili.com/video/BV1314y1Q7Ba",
        "uploadTime": "3 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "什么才是真正的财富和自由？",
        "views": 29622,
        "url": "https://www.bilibili.com/video/BV18q4y1Q7ZT",
        "uploadTime": "最近"
      },
      {
        "platform": "bilibili",
        "title": "鸡娃错在哪里？AI时代如何教育孩子？｜Leonlulu谈教育_上",
        "views": 9181,
        "url": "https://www.bilibili.com/video/BV1Kr421G7k1",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "AI时代，中国家长如何做好家庭教育？｜Lululeon谈教育-上",
        "views": 7596,
        "url": "https://www.bilibili.com/video/BV1dZ421T75s",
        "uploadTime": "1月前"
      },
      {
        "platform": "bilibili",
        "title": "如何超越中产阶级？｜Leon谈财富_下",
        "views": 113082,
        "url": "https://www.bilibili.com/video/BV1hm411S7AE",
        "uploadTime": "a few days ago"
      },
      {
        "platform": "bilibili",
        "title": "想清楚这些，才能成为财富的主人",
        "views": 25973,
        "url": "https://www.bilibili.com/video/BV1314y1Q7Ba",
        "uploadTime": "3 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "什么才是真正的财富和自由？",
        "views": 29622,
        "url": "https://www.bilibili.com/video/BV18q4y1Q7ZT",
        "uploadTime": "最近"
      },
      {
        "platform": "bilibili",
        "title": "鸡娃错在哪里？AI时代如何教育孩子？｜Leonlulu谈教育_上",
        "views": 9181,
        "url": "https://www.bilibili.com/video/BV1Kr421G7k1",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "AI时代，中国家长如何做好家庭教育？｜Lululeon谈教育-上",
        "views": 7596,
        "url": "https://www.bilibili.com/video/BV1dZ421T75s",
        "uploadTime": "1月前"
      },
      {
        "platform": "bilibili",
        "title": "如何超越中产阶级？｜Leon谈财富_下",
        "views": 113082,
        "url": "https://www.bilibili.com/video/BV1hm411S7AE",
        "uploadTime": "a few days ago"
      }
    ],
    "totalViews": 804495
  },
  {
    "name": "Mike Vernal",
    "role": "Former Meta VP, Sequoia Capital Partner",
    "category": "['leadership']",
    "id": 20,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "前Sequoia合伙人，Meta VP：增长要义是聚焦｜Mike Vernal",
        "views": 2720,
        "url": "https://www.bilibili.com/video/BV1Qp421R7YW",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "前Meta高管，红杉合伙人：为什么大厂不应该裁员80%？",
        "views": 10346,
        "url": "https://www.bilibili.com/video/BV1vT421Q7sT",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "前Meta高管，红杉合伙人：为什么大厂不应该裁员80%？",
        "views": 10346,
        "url": "https://www.bilibili.com/video/BV1vT421Q7sT",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "Mike Vernal聊公司生命周期，管理，文化，创始人",
        "views": 3506,
        "url": "https://www.bilibili.com/video/BV13D421A7ko",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "Mike Vernal聊公司生命周期，管理，文化，创始人",
        "views": 3506,
        "url": "https://www.bilibili.com/video/BV13D421A7ko",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 23412
  },
  {
    "name": "Nan Zhou",
    "role": "Director at Qualcomm Ventures, Board Observer for Multiple Companies",
    "category": "['entrepreneurship']",
    "id": 23,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "创业必看；董事会权力竟然这么大？",
        "views": 4069,
        "url": "https://www.bilibili.com/video/BV1vj411H7dT",
        "uploadTime": "Uploaded 3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "打入美国主流创投的华人--为什么(不)是你？｜大厂打工如何接触投资行业？",
        "views": 3988,
        "url": "https://www.bilibili.com/video/BV1Pw4m1D7kP",
        "uploadTime": "Not specified"
      },
      {
        "platform": "bilibili",
        "title": "打入美国主流创投的华人--为什么(不)是你？｜大厂打工如何接触投资行业？",
        "views": 3988,
        "url": "https://www.bilibili.com/video/BV1Pw4m1D7kP",
        "uploadTime": "Not specified"
      },
      {
        "platform": "bilibili",
        "title": "「门当户对」的职业更长久？｜高通创投director介绍VC经验",
        "views": 4877,
        "url": "https://www.bilibili.com/video/BV1im421L7n8",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 12045
  },
  {
    "name": "Newton",
    "role": "微软程序员，餐馆老板",
    "category": "['entrepreneurship', 'entrepreneurship']",
    "id": 25,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "美国程序员业余开餐馆，哪儿来的时间和钱？",
        "views": 4025,
        "url": "https://www.bilibili.com/video/BV1tt421T74P",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "程序员开餐馆，真实经历、心态、历练分享｜生意是道场｜会员专属",
        "views": 6014,
        "url": "https://www.bilibili.com/video/BV1w1421D7jr",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "全职程序员如何当餐馆老板？｜会员专属8",
        "views": 3688,
        "url": "https://www.bilibili.com/video/BV16642137j6",
        "uploadTime": "Unknown"
      }
    ],
    "totalViews": 10039
  },
  {
    "name": "OE_Ben",
    "role": "软件工程师",
    "category": "['workplace']",
    "id": 26,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "打两份工攒四份钱，反而比一份工作更轻松，如何走向正循环？｜OE_上",
        "views": 10728,
        "url": "https://www.bilibili.com/video/BV1MF4m1E7pC",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "通过同时打两份码农工，领悟的高效工作的秘诀，完整分享｜OE_下",
        "views": 5399,
        "url": "https://www.bilibili.com/video/BV1Br421p7yn",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "第一桶金系列：如何把攒钱速度提高四倍？",
        "views": 21822,
        "url": "https://www.bilibili.com/video/BV1kW421N7tn",
        "uploadTime": "relative time not available"
      }
    ],
    "totalViews": 37949
  },
  {
    "name": "Rachel王然",
    "role": "创始人, 区块链早期玩家, 投资分析师",
    "category": "['entrepreneurship']",
    "id": 27,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "炒币赚的巨款怎么赔光的？｜消费主义的思考｜财富自由，来自创业大V的另一个角度｜殊途同归的大佬们｜Rachel王然",
        "views": 4769,
        "url": "https://www.bilibili.com/video/BV1vy4y1V7wH",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "【圈内人】创业估值过亿是什么体验？又为什么来美国了？｜Rachel王然",
        "views": 4193,
        "url": "https://www.bilibili.com/video/BV1ug41157aj",
        "uploadTime": "2 months ago"
      }
    ],
    "totalViews": 8962
  },
  {
    "name": "Reynold Xin",
    "role": "Databricks联合创始人",
    "category": "['entrepreneurship']",
    "id": 28,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "凭什么招人比谷歌还严？｜用AI颠覆自己才能活下去？｜Databricks Cofounder Reynold Xin访谈_下",
        "views": 3640,
        "url": "https://www.bilibili.com/video/BV1oFSMYUEQV",
        "uploadTime": "2 days ago"
      },
      {
        "platform": "bilibili",
        "title": "十年估值三千亿，创始人首次揭秘，如何识别并抓住机会？｜Databricks Cofounder Reynold访谈_上",
        "views": 10289,
        "url": "https://www.bilibili.com/video/BV1jVmoY7EBs",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "第一性原理思考的至高境界｜Databricks联合创始人Reynold Xin访谈完整版",
        "views": 44423,
        "url": "https://www.bilibili.com/video/BV1T9mdYwE5F",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 58352
  },
  {
    "name": "Richer徐瑞呈",
    "role": "大观资本合伙人，出海同学会主理人",
    "category": "['entrepreneurship', 'entrepreneurship', 'entrepreneurship']",
    "id": 29,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "投资人解析，短剧为什么这么火？｜大观资本 Richer 1/2",
        "views": 3762,
        "url": "https://www.bilibili.com/video/BV1Rs421T781",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "一年前布局短剧出海，对投资和创业的见解｜大观资本Richer访谈完整版",
        "views": 1098,
        "url": "https://www.bilibili.com/video/BV1XN4y1a7mM",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "说自己是AI公司等于没说？｜行业洞察方法论｜大观资本Richer  2/2",
        "views": 4259,
        "url": "https://www.bilibili.com/video/BV1dS411A7e3",
        "uploadTime": "2天前"
      }
    ],
    "totalViews": 9119
  },
  {
    "name": "Riley Shu",
    "role": "Data Scientist at Epic Games",
    "category": "['work_life', 'leadership']",
    "id": 30,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "数据工作不被信任，如何打开局面？",
        "views": 4180,
        "url": "https://www.bilibili.com/video/BV1bp4y1L7b8",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "工作中没有自己想法，是怎么回事？| Riley 4/5",
        "views": 4263,
        "url": "https://www.bilibili.com/video/BV18H4y1D7jS",
        "uploadTime": "Unknown"
      },
      {
        "platform": "bilibili",
        "title": "第一个追随者才是真正的领导者｜Riley 5/5",
        "views": 3934,
        "url": "https://www.bilibili.com/video/BV1pV411A7gM",
        "uploadTime": "Unknown"
      }
    ],
    "totalViews": 12377
  },
  {
    "name": "Rod谭",
    "role": "中国直播玩法创始人，前腾讯QQ小世界总监",
    "category": "['entrepreneurship', 'entrepreneurship', 'entrepreneurship']",
    "id": 31,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "应届生三年为公司赚五十亿？ | 直播如何利用人性？",
        "views": 14271,
        "url": "https://www.bilibili.com/video/BV1Ko4y1F7pr",
        "uploadTime": "2 days ago"
      },
      {
        "platform": "bilibili",
        "title": "每天拥有四十小时？｜判断力的重要",
        "views": 15444,
        "url": "https://www.bilibili.com/video/BV1QL411U7yC",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何自我和解，财富自由，抓住本质，活出自己，找到幸福？",
        "views": 7743,
        "url": "https://www.bilibili.com/video/BV1sN411w7xN",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 37458
  },
  {
    "name": "SVTC",
    "role": "Data Scientist",
    "category": "['leadership']",
    "id": 32,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "在线回答一小时关于职业发展的各种问题｜SVTC讲座（下）",
        "views": 2519,
        "url": "https://www.bilibili.com/video/BV1iB4y1Y7tY",
        "uploadTime": "not specified"
      },
      {
        "platform": "bilibili",
        "title": "如何正直地向上管理｜SVTC讲座（上）",
        "views": 5264,
        "url": "https://www.bilibili.com/video/BV1L94y197ia",
        "uploadTime": "3 months ago"
      }
    ],
    "totalViews": 7783
  },
  {
    "name": "Sam Zhang",
    "role": "字节早期员工, Unity",
    "category": "['entrepreneurship']",
    "id": 33,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "字节早期，中美体验，创业大厂，元宇宙",
        "views": 1361,
        "url": "https://www.bilibili.com/video/BV1MG411C7oB",
        "uploadTime": "not provided"
      }
    ],
    "totalViews": 1361
  },
  {
    "name": "Shaojun Zhu",
    "role": "Director Engineer at Stack AV",
    "category": "['technical_career', 'technical_career']",
    "id": 34,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "自动驾驶快实现了吗？｜为什么认为特斯拉的宣传不道德？",
        "views": 5766,
        "url": "https://www.bilibili.com/video/BV1fTxTerEXn",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何总结人生的「成功」与「失败」，寻找经验和意义？",
        "views": 1934,
        "url": "https://www.bilibili.com/video/BV14j411k7G7",
        "uploadTime": "2 days ago"
      },
      {
        "platform": "bilibili",
        "title": "自动驾驶的技术、商业、与未来｜Stack AV主任工程师",
        "views": 4340,
        "url": "https://www.bilibili.com/video/BV1z1421b7xB",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 12040
  },
  {
    "name": "Teri 张雅缇",
    "role": "腾讯总监，PPT达人",
    "category": "['technical_career']",
    "id": 35,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "一小时能写30页PPT？还吊打全场？｜有「目的性」的PPT才值得写",
        "views": 54885,
        "url": "https://www.bilibili.com/video/BV1wZ4y1X7HR",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 54885
  },
  {
    "name": "Terry Chen",
    "role": "YouTube Influencer, Engineer, Investor",
    "category": "['technical_career']",
    "id": 36,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "30万粉兼职Up主，如何选择不做什么？",
        "views": 1425,
        "url": "https://www.bilibili.com/video/BV1A64y1W7Rp",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "四十万粉了，为什么还要靠打工赚钱？",
        "views": 16967,
        "url": "https://www.bilibili.com/video/BV1Uj411n7XN",
        "uploadTime": "2 months ago"
      },
      {
        "platform": "bilibili",
        "title": "数据科学家在中国跟美国的工资",
        "views": 62017,
        "url": "https://www.bilibili.com/video/BV1UW4y1A7Pn",
        "uploadTime": "Unknown"
      },
      {
        "platform": "bilibili",
        "title": "数据科学家在中国跟美国的工资",
        "views": 62017,
        "url": "https://www.bilibili.com/video/BV1UW4y1A7Pn",
        "uploadTime": "Unknown"
      }
    ],
    "totalViews": 142426
  },
  {
    "name": "Tim Chan",
    "role": "Head of Data at Statsig",
    "category": "['leadership']",
    "id": 37,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "创业公司也需要数据科学家？",
        "views": 20982,
        "url": "https://www.bilibili.com/video/BV1nA411C7XS",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "How to say NO to your stakeholders?",
        "views": 767,
        "url": "https://www.bilibili.com/video/BV1T94y1b7W5",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "How to say NO to your stakeholders?",
        "views": 767,
        "url": "https://www.bilibili.com/video/BV1T94y1b7W5",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 22516
  },
  {
    "name": "Tristan崔老师",
    "role": "IG百万粉网红，自由职业者",
    "category": "['entrepreneurship']",
    "id": 38,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "从没上过班的Ins网红摄影师，如何找到自己的喜爱？",
        "views": 1721,
        "url": "https://www.bilibili.com/video/BV1Yi4y1a7eU",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 1721
  },
  {
    "name": "Vijaye Raji",
    "role": "Statsig创始人，前Meta副总裁",
    "category": "['entrepreneurship']",
    "id": 39,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "你的AB实验白跑了？你的数据科学家白招了？",
        "views": 8907,
        "url": "https://www.bilibili.com/video/BV1U3411Z7MB",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "Facebook印度高管，创业一年的体验",
        "views": 17224,
        "url": "https://www.bilibili.com/video/BV1QY41197iD",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "Facebook印度高管，创业一年的体验",
        "views": 17224,
        "url": "https://www.bilibili.com/video/BV1QY41197iD",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "【纯英文纯干货预警】硅谷顶级的AB Testing工具竟然这么厉害？｜Statsig CEO产品演示",
        "views": 7259,
        "url": "https://www.bilibili.com/video/BV1k64y1477K",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "【硅谷顶级职业建议】怎样想清楚自己的职业目标？｜来自Facebook副总裁，Statsig创始人的职业故事（英文）",
        "views": 23000,
        "url": "https://www.bilibili.com/video/BV1z44y1q7rB",
        "uploadTime": "1个月前"
      }
    ],
    "totalViews": 73614
  },
  {
    "name": "Vivian Wang",
    "role": "前平安副总裁, Palpay中国产品总经理, 连续创业者",
    "category": "['entrepreneurship', 'leadership', 'leadership']",
    "id": 40,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "如何判断市场需求的真伪？｜Vivian 访谈 2/2",
        "views": 3852,
        "url": "https://www.bilibili.com/video/BV1V1421t773",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "大厂员工的创业误区｜Vivian访谈2/2",
        "views": 5211,
        "url": "https://www.bilibili.com/video/BV12Z421N7dm",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "前高管解密升职加薪的游戏规则 -- 情绪价值｜Vivian 访谈 1/2",
        "views": 8999,
        "url": "https://www.bilibili.com/video/BV1Ez421i7zh",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "升职本质是给老板提供情绪价值？｜Vivian访谈1/2",
        "views": 30065,
        "url": "https://www.bilibili.com/video/BV1VM4m117c4",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "大厂员工的创业误区｜Vivian访谈2/2",
        "views": 5211,
        "url": "https://www.bilibili.com/video/BV12Z421N7dm",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "前高管解密升职加薪的游戏规则 -- 情绪价值｜Vivian 访谈 1/2",
        "views": 8999,
        "url": "https://www.bilibili.com/video/BV1Ez421i7zh",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "升职本质是给老板提供情绪价值？｜Vivian访谈1/2",
        "views": 30065,
        "url": "https://www.bilibili.com/video/BV1VM4m117c4",
        "uploadTime": "1 month ago"
      }
    ],
    "totalViews": 92402
  },
  {
    "name": "Yujie",
    "role": "Staff Engineer, Team Lead at Meta",
    "category": "['work_life']",
    "id": 41,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "如何成熟面对新挑战？Meta Staff Eng的经验",
        "views": 3514,
        "url": "https://www.bilibili.com/video/BV13V411w7MG",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何在模糊问题中找到机会？",
        "views": 3766,
        "url": "https://www.bilibili.com/video/BV1hp4y1c7ib",
        "uploadTime": "not specified"
      },
      {
        "platform": "bilibili",
        "title": "如何不后悔，不纠结？",
        "views": 3951,
        "url": "https://www.bilibili.com/video/BV1aw41117dB",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 11231
  },
  {
    "name": "Yuyu",
    "role": "前腾讯员工，百万网红",
    "category": "['entrepreneurship']",
    "id": 42,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "一年涨粉百万后从腾讯离职，分享经历，希望对你有用～",
        "views": 54718,
        "url": "https://www.bilibili.com/video/BV1tC411a7Ui",
        "uploadTime": "2020年4月12日"
      }
    ],
    "totalViews": 54718
  },
  {
    "name": "何冬阳",
    "role": "前国企金融负责人，卡电宝创始人",
    "category": "['entrepreneurship']",
    "id": 43,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "年轻有为的国企老总，为什么选择从头创业？",
        "views": 13506,
        "url": "https://www.bilibili.com/video/BV1944y1w7CR",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 13506
  },
  {
    "name": "余超旻",
    "role": "Staff Engineer",
    "category": "['work_life']",
    "id": 44,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "回国体验坦白局",
        "views": 1340,
        "url": "https://www.bilibili.com/video/BV1mF411S7nc",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 1340
  },
  {
    "name": "佳科",
    "role": "Outer创始人",
    "category": "['entrepreneurship']",
    "id": 45,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "如何把中国制造高价卖给美国人？｜Z世代理解｜产品、品牌、企业人格｜新生代顶级创始人佳科全网最深度访谈",
        "views": 5832,
        "url": "https://www.bilibili.com/video/BV1Ki4y1M7eK",
        "uploadTime": "3 months ago"
      }
    ],
    "totalViews": 5832
  },
  {
    "name": "保罗",
    "role": "前微软产品经理，抖音网红",
    "category": "['entrepreneurship']",
    "id": 46,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "来听听千万博主的心里话｜保罗在美国｜无剪辑会员专属版",
        "views": 6840,
        "url": "https://www.bilibili.com/video/BV1cu4m1P71E",
        "uploadTime": "not available"
      },
      {
        "platform": "bilibili",
        "title": "拍着拍着就火了？｜火了以后怎样更火？｜千万网红保罗分享起号经历与方法",
        "views": 8414,
        "url": "https://www.bilibili.com/video/BV1SD421E7rL",
        "uploadTime": "1 month ago"
      }
    ],
    "totalViews": 15254
  },
  {
    "name": "俞奕舟",
    "role": "Meta程序员",
    "category": "['work_life']",
    "id": 48,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "挑战自己、建立信念、说服他人",
        "views": 3965,
        "url": "https://www.bilibili.com/video/BV1R4421f7pZ",
        "uploadTime": "1周前"
      },
      {
        "platform": "bilibili",
        "title": "如何坚持自己观点并说服他人？",
        "views": 5415,
        "url": "https://www.bilibili.com/video/BV1FM4m1y73T",
        "uploadTime": "2 weeks ago"
      }
    ],
    "totalViews": 3965
  },
  {
    "name": "光芒",
    "role": "腾讯GM，虚环主理人",
    "category": "['leadership', 'job_search', 'job_search']",
    "id": 49,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "面试的核心是围绕这两件事 | 《虚环》主理人面试心得分享 3/3",
        "views": 188125,
        "url": "https://www.bilibili.com/video/BV1DF411d79a",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "这些面试技巧对相亲也是很有帮助的！|《虚环》主理人面试心得分享 2/3",
        "views": 33058,
        "url": "https://www.bilibili.com/video/BV1J14y127TH",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "真诚是面试第一要义 |《虚环》主理人面试心得分享 1/3",
        "views": 45064,
        "url": "https://www.bilibili.com/video/BV1Wh411K77L",
        "uploadTime": "2 weeks ago"
      }
    ],
    "totalViews": 266247
  },
  {
    "name": "刘友忠",
    "role": "Huma Finance创始人, 前Earning CTO, 谷歌Director, 领航计划创始人, 投资人",
    "category": "['entrepreneurship']",
    "id": 50,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "全网唯一，不忽悠您的Web3",
        "views": 42210,
        "url": "https://www.bilibili.com/video/BV1DK411Q7AT",
        "uploadTime": "1 year ago"
      },
      {
        "platform": "bilibili",
        "title": "聊完我对Web3黑转粉了，你呢？",
        "views": 18042,
        "url": "https://www.bilibili.com/video/BV1TG411L7ax",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "华人在硅谷怎么做(不)到VP？",
        "views": 279262,
        "url": "https://www.bilibili.com/video/BV1zM4y137h1",
        "uploadTime": "3天前"
      },
      {
        "platform": "bilibili",
        "title": "聊完我对Web3黑转粉了，你呢？",
        "views": 18042,
        "url": "https://www.bilibili.com/video/BV1TG411L7ax",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "华人在硅谷怎么做(不)到VP？",
        "views": 279262,
        "url": "https://www.bilibili.com/video/BV1zM4y137h1",
        "uploadTime": "3天前"
      },
      {
        "platform": "bilibili",
        "title": "从谷歌总监到创业公司CTO，都来一遍的大佬教你怎么选？｜Fintech到底是干嘛的？｜不精致利己也能赚钱？｜投公司看哪三条？",
        "views": 30319,
        "url": "https://www.bilibili.com/video/BV1cg411L7aX",
        "uploadTime": "3 months ago"
      }
    ],
    "totalViews": 667137
  },
  {
    "name": "刘律师",
    "role": "硅谷公司法律师",
    "category": "['entrepreneurship']",
    "id": 51,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "我的期权值多少钱｜startup股权架构如何设置｜从律师角度看startup的九死一生",
        "views": 7100,
        "url": "https://www.bilibili.com/video/BV1d2421A7cp",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 7100
  },
  {
    "name": "刘若曦",
    "role": "Investor, Former Product and Engineering at Facebook",
    "category": "['job_search']",
    "id": 52,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "Product Sense Mock Interview｜为什么你被面经坑了｜面试官内心戏详解",
        "views": 6428,
        "url": "https://www.bilibili.com/video/BV1Jy4y167wh",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 6428
  },
  {
    "name": "Monica",
    "role": "创业公司 head of AI, 华盛顿大学客座教授, 前苹果AI",
    "category": "['technical_career']",
    "id": 53,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "Fine tune概念已过时？｜强化学习的数学直觉｜AGI的自我迭代｜开源vs闭源的第一性原理｜说胡话的原理｜大语言模型技术深度访谈2/3",
        "views": 10803,
        "url": "https://www.bilibili.com/video/BV1kH4y1D7gS",
        "uploadTime": "2 days ago"
      },
      {
        "platform": "bilibili",
        "title": "降低hallucination技巧｜人类和机器的区别｜ChatGPT不好用可能是你的问题｜如何做一个合格的降临派｜大语言模型技术深度访谈3/3",
        "views": 3944,
        "url": "https://www.bilibili.com/video/BV1N8411q7HA",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "ChatGPT的信念与没走的捷径｜对LLM的常见理解误区｜垂类模型有前途吗？｜大语言模型技术深度访谈1/3",
        "views": 12719,
        "url": "https://www.bilibili.com/video/BV1dk4y1c7vh",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 14747
  },
  {
    "name": "吴晶辰",
    "role": "Amazon算法科学家",
    "category": "['technical_career']",
    "id": 55,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "「算法」究竟是啥？可以帮助找女朋友吗？来听「戏精」算法科学家用生活小例子帮大家理解算法",
        "views": 888,
        "url": "https://www.bilibili.com/video/BV1Rv41157a3",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 888
  },
  {
    "name": "娄洋",
    "role": "光源资本董事总经理",
    "category": "['entrepreneurship', 'entrepreneurship']",
    "id": 56,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "中国最大的FA，总结互联网白银年代，怎么看AI时代的机会？",
        "views": 6225,
        "url": "https://www.bilibili.com/video/BV1Nm421E7xi",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "移动互联网白银年代，对AGI创投的启示｜光源资本娄洋访谈",
        "views": 4124,
        "url": "https://www.bilibili.com/video/BV1wZ4y1n7t5",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 10349
  },
  {
    "name": "课代表本代表",
    "role": "Data Scientist",
    "category": "['technical_career']",
    "id": 57,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "数据科学如何提高战略决策质量 | Datafun论坛分享",
        "views": 3068,
        "url": "https://www.bilibili.com/video/BV1ja411f7ak",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "“个人品牌/副业”是自媒体的陷阱？历史收入揭秘｜领航分享",
        "views": 3966,
        "url": "https://www.bilibili.com/video/BV1Cx4y167Wx",
        "uploadTime": "not available"
      }
    ],
    "totalViews": 3068
  },
  {
    "name": "宋明阳",
    "role": "美图秀秀海外CEO",
    "category": "['work_life']",
    "id": 58,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "素人参加拳击比赛，“完全是另一个世界”",
        "views": 3768,
        "url": "https://www.bilibili.com/video/BV1V841117Be",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 3768
  },
  {
    "name": "尚书",
    "role": "《ToB的本质》作者",
    "category": "['entrepreneurship']",
    "id": 59,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "十年创业，阿里收购，辛酸艰苦坦白局｜九州云腾-尚书",
        "views": 13557,
        "url": "https://www.bilibili.com/video/BV1MK41187tX",
        "uploadTime": "Not provided"
      }
    ],
    "totalViews": 13557
  },
  {
    "name": "尤拉",
    "role": "小红书网红",
    "category": "['entrepreneurship', 'entrepreneurship']",
    "id": 60,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "网红心得！",
        "views": 4790,
        "url": "https://www.bilibili.com/video/BV1F94y1F7c1",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "替各位问网红九个问题",
        "views": 10332,
        "url": "https://www.bilibili.com/video/BV1L24y1p7mf",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 15122
  },
  {
    "name": "崔老师",
    "role": "IG百万粉网红，自由职业者",
    "category": "['work_life']",
    "id": 61,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "不上班不创业，如何养活自己？｜对教育的启发｜干货无鸡汤",
        "views": 16835,
        "url": "https://www.bilibili.com/video/BV1MC411n7Di",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 16835
  },
  {
    "name": "张国琪",
    "role": "腾讯HRBP",
    "category": "['workplace', 'workplace', 'workplace']",
    "id": 62,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "鹅厂资深HR，工作内容真诚分享（上）",
        "views": 12205,
        "url": "https://www.bilibili.com/video/BV1fb4y1s735",
        "uploadTime": "3 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "HRBP为什么有这么强的好奇心？｜国内大厂HRBP揭秘 — 中",
        "views": 16966,
        "url": "https://www.bilibili.com/video/BV1mS4y1S7Yb",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "应届生的常见误区？｜资深HR对职业发展的真诚建议｜HRBP采访 3/3",
        "views": 10840,
        "url": "https://www.bilibili.com/video/BV1rS4y1u7DT",
        "uploadTime": "2 days ago"
      }
    ],
    "totalViews": 40011
  },
  {
    "name": "徐白露",
    "role": "BCG咨询顾问",
    "category": "['leadership']",
    "id": 63,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "去魅管理咨询-上",
        "views": 5193,
        "url": "https://www.bilibili.com/video/BV1Gi4y1g73X",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 5193
  },
  {
    "name": "戴维",
    "role": "Salesforce Director，前谷歌/微软",
    "category": "['technical_career']",
    "id": 64,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "从云游戏到云一切 — 来自互联网巨头们的「降维打击」",
        "views": 972,
        "url": "https://www.bilibili.com/video/BV1gy4y187S4",
        "uploadTime": "3天前"
      }
    ],
    "totalViews": 972
  },
  {
    "name": "星瞳",
    "role": "国内头部Vlogger",
    "category": "['work_life']",
    "id": 65,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "互联网公主星瞳·马的一天和一年",
        "views": 43736,
        "url": "https://www.bilibili.com/video/BV1Rm4y187Wm",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 43736
  },
  {
    "name": "李梦颖",
    "role": "天使投资人，前Notion Head of Growth DS，MotherDuck Head of Growth，前Meta/微软",
    "category": "['entrepreneurship']",
    "id": 66,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "数据科学何去何从：管理还是专家？大厂还是创业公司？｜西雅图DS线下讨论",
        "views": 1161,
        "url": "https://www.bilibili.com/video/BV1rz4y1w7Gt",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "打工人如何入圈天使投资，开始复利游戏？",
        "views": 11275,
        "url": "https://www.bilibili.com/video/BV1Pu4m1P7vE",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "打工人如何入行天使投资？",
        "views": 1112,
        "url": "https://www.bilibili.com/video/BV1Y94y1V7WS",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 13548
  },
  {
    "name": "杨小露",
    "role": "亚马逊Principal PM",
    "category": "['work_life', 'work_life']",
    "id": 68,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "不是主业不给力，副业更有性价比｜亚马逊首席(L7)产品经理小露",
        "views": 5541,
        "url": "https://www.bilibili.com/video/BV1Ncy7YGEES",
        "uploadTime": "22年10月"
      },
      {
        "platform": "bilibili",
        "title": "亚马逊L7 PM，如何意识到副业比主业更有意义？带来了怎样的纠结与成长？ | 品牌和渠道为什么是冲突的？",
        "views": 8108,
        "url": "https://www.bilibili.com/video/BV1scxaeXEcK",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 13649
  },
  {
    "name": "杨帆",
    "role": "浦思学院创始人",
    "category": "['entrepreneurship', 'entrepreneurship', 'entrepreneurship', 'leadership']",
    "id": 69,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "如何用”玩“来降维打击工作？｜杨帆4/4",
        "views": 12495,
        "url": "https://www.bilibili.com/video/BV16m411Q7DP",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "年轻人为什么忽视制造业巨头？｜杨帆2/4",
        "views": 78692,
        "url": "https://www.bilibili.com/video/BV1Ly421Y7tE",
        "uploadTime": "not provided"
      },
      {
        "platform": "bilibili",
        "title": "如何理解00后？自媒体有多赚钱？｜杨帆3/4",
        "views": 8022,
        "url": "https://www.bilibili.com/video/BV1iA4m157eR",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "如何越级搞定大佬？｜杨帆1/4",
        "views": 15176,
        "url": "https://www.bilibili.com/video/BV1uC411z7s5",
        "uploadTime": "2 weeks ago"
      }
    ],
    "totalViews": 114385
  },
  {
    "name": "柯西",
    "role": "现EM，之前在Meta工作四年",
    "category": "['job_search']",
    "id": 70,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "硕士毕业，在Facebook四年升三级(P9)是什么体验？有什么可复制的经验吗？",
        "views": 6327,
        "url": "https://www.bilibili.com/video/BV1WA41137yW",
        "uploadTime": "最近"
      },
      {
        "platform": "bilibili",
        "title": "在在大厂刚升职加薪完，就加入了早期Startup？｜Startup怎么选？",
        "views": 6236,
        "url": "https://www.bilibili.com/video/BV1sg411G7A7",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 12563
  },
  {
    "name": "熊力",
    "role": "Databricks Engineering Manager, Former Senior Manager at Microsoft",
    "category": "['job_search']",
    "id": 72,
    "episodes": [

      {
        "platform": "bilibili",
        "title": "如何选老板和团队？｜找工作口碑最重要？｜IPO前加入Databricks需要注意什么？ ｜Databricks招聘经理访谈_下",
        "views": 3794,
        "url": "https://www.bilibili.com/video/BV1TdSLYsEbu",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "新时代的招聘现实和应对方法｜熊力访谈_上",
        "views": 3117,
        "url": "https://www.bilibili.com/video/BV1TdSLYsEnx",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "从Databricks的人才态度，看懂人才与公司的双向选择｜卷是坏事吗？｜熊力访谈_下",
        "views": 5768,
        "url": "https://www.bilibili.com/video/BV14vDFY2E2D",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "从Databricks的人才态度，看懂人才与公司的双向选择｜卷是坏事吗？｜熊力访谈_下",
        "views": 5768,
        "url": "https://www.bilibili.com/video/BV14vDFY2E2D",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "刷题+海投已失效，好工作需要这三件事｜Databricks招聘经理访谈 - 上",
        "views": 12075,
        "url": "https://www.bilibili.com/video/BV1ghSjYhEX8",
        "uploadTime": "2 weeks ago"
      }
    ],
    "totalViews": 12075
  },
  {
    "name": "王亚雄",
    "role": "Credit Karma",
    "category": "['entrepreneurship', 'workplace']",
    "id": 73,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "衰退分析，个人准备的完整版｜Credit Karma王亚雄访谈",
        "views": 1729,
        "url": "https://www.bilibili.com/video/BV16j411E74S",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "若衰退来临，我们如何准备？",
        "views": 30895,
        "url": "https://www.bilibili.com/video/BV1Vj411J7d6",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 32624
  },
  {
    "name": "王家侃",
    "role": "Head of Enterprise Engineering",
    "category": "['entrepreneurship']",
    "id": 74,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "去年采访的创业公司程序员，股价翻了十倍……",
        "views": 13367,
        "url": "https://www.bilibili.com/video/BV1D24y1U7rQ",
        "uploadTime": "1 year ago"
      },
      {
        "platform": "bilibili",
        "title": "在顶配创业公司当前几号员工，是什么体验？",
        "views": 6135,
        "url": "https://www.bilibili.com/video/BV1wB4y1K7qN",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "从大厂跳入创业公司，能适应吗？",
        "views": 20225,
        "url": "https://www.bilibili.com/video/BV1444y1o74j",
        "uploadTime": "Unknown"
      },
      {
        "platform": "bilibili",
        "title": "从大厂跳入创业公司，能适应吗？",
        "views": 20225,
        "url": "https://www.bilibili.com/video/BV1444y1o74j",
        "uploadTime": "Unknown"
      }
    ],
    "totalViews": 59952
  },
  {
    "name": "王晨璐",
    "role": "Meta DS，前亚马逊BIE",
    "category": "['job_search', 'job_search']",
    "id": 75,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "Data Scientist工作要求能力如何获取 ｜ Data Scientist找工作系列2/3",
        "views": 2183,
        "url": "https://www.bilibili.com/video/BV1Dt4y1i7qU",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "充满诚意求职经验分享 ｜New Grad找工作与在职跳槽｜Data Scientist找工作系列3/3",
        "views": 7420,
        "url": "https://www.bilibili.com/video/BV1EV411m7Ne",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "互联网大厂对数据科学家的能力要求 | 数据科学家找工作系列1/3",
        "views": 10056,
        "url": "https://www.bilibili.com/video/BV1e5411h7Xt",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 9603
  },

  {
    "name": "罗超元",
    "role": "腾讯应届生，管培",
    "category": "['job_search']",
    "id": 77,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "天之骄子进大厂，有被浪费吗？｜如何多学知识并融会贯通｜应届生采访4",
        "views": 13648,
        "url": "https://www.bilibili.com/video/BV1Gi4y1m75c",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 13648
  },
  {
    "name": "菁菁",
    "role": "微软Principal PM",
    "category": "['leadership']",
    "id": 78,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "微软两年升四级，分享如何找到「贵人」？",
        "views": 27331,
        "url": "https://www.bilibili.com/video/BV1fC4y1372P",
        "uploadTime": "not specified"
      }
    ],
    "totalViews": 27331
  },
  {
    "name": "董有超",
    "role": "飞书深诺CPO，前字节Pangle GM，爱奇艺资深总监，腾讯总监",
    "category": "['job_search', 'job_search', 'technical_career', 'job_search', 'leadership', 'career_development', 'technical_career', 'leadership']",
    "id": 79,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "大佬告诉我，简历竟然应该这么改？",
        "views": 62279,
        "url": "https://www.bilibili.com/video/BV1gZ4y1f7En",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "90后首席产品官，如何成功适应新工作？｜YC访谈1/3",
        "views": 5159,
        "url": "https://www.bilibili.com/video/BV1zmtJeSESu",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "业务一号位，如何深入了解细节，统筹产研运？｜YC2023 访谈 1/3",
        "views": 9269,
        "url": "https://www.bilibili.com/video/BV1wm421574q",
        "uploadTime": "about 2 months ago"
      },
      {
        "platform": "bilibili",
        "title": "用面试和工作提升人生价值｜课代表network秘籍大揭秘",
        "views": 14120,
        "url": "https://www.bilibili.com/video/BV1jS4y1j7yx",
        "uploadTime": "relative time not specified"
      },
      {
        "platform": "bilibili",
        "title": "用面试和工作提升人生价值｜课代表network秘籍大揭秘",
        "views": 14120,
        "url": "https://www.bilibili.com/video/BV1jS4y1j7yx",
        "uploadTime": "relative time not specified"
      },
      {
        "platform": "bilibili",
        "title": "全网最资深经验分享，助您降维打击一切面试",
        "views": 31346,
        "url": "https://www.bilibili.com/video/BV1pP4y1E76m",
        "uploadTime": "1 month ago"
      },
      {
        "platform": "bilibili",
        "title": "找不到理想工作的原因，与成功跳槽的三个秘诀｜YC 2/3",
        "views": 7865,
        "url": "https://www.bilibili.com/video/BV16UtHeoEGy",
        "uploadTime": "2 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "如何用工作实现跳槽自由？｜选offer时候的mindset",
        "views": 10130,
        "url": "https://www.bilibili.com/video/BV1AL4y1x7h5",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "起跑线重置！如何在大模型时代职业弯道超车？｜YC 3/3",
        "views": 6653,
        "url": "https://www.bilibili.com/video/BV1K1tUeyEkM",
        "uploadTime": "3 days ago"
      },
      {
        "platform": "bilibili",
        "title": "跳槽前要做哪些研究？",
        "views": 16704,
        "url": "https://www.bilibili.com/video/BV1QT4y1y7vW",
        "uploadTime": "Not specified"
      },
      {
        "platform": "bilibili",
        "title": "CPO是什么体会？｜如何步步高升？｜大模型的市场行业应用｜YC新访谈",
        "views": 6122,
        "url": "https://www.bilibili.com/video/BV1RZ42157jB",
        "uploadTime": "recent"
      },
      {
        "platform": "bilibili",
        "title": "职业的沉淀和变现｜衡量职业的维度｜综合排名还是专业排名？",
        "views": 18069,
        "url": "https://www.bilibili.com/video/BV1Rb4y1J7hd",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "中国互联网大厂跟硅谷有什么不同？",
        "views": 10723,
        "url": "https://www.bilibili.com/video/BV1oP4y1A7vN",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "你的总监在想什么？成天开会有价值吗？高阶管理心得坦诚分享",
        "views": 46390,
        "url": "https://www.bilibili.com/video/BV1uT4y1i7xn",
        "uploadTime": "最近上传"
      }
    ],
    "totalViews": 258949
  },
  {
    "name": "贾扬清",
    "role": "PyTorch创始人之一，前Meta Director，阿里VP，Lepton AI创始人",
    "category": "['entrepreneurship']",
    "id": 80,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "GenAI全明星：硅谷徐老师，贾扬清，Martian，OpusPro｜成本、问题、市场、现状、发展",
        "views": 9790,
        "url": "https://www.bilibili.com/video/BV12n4y1d76z",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 9790
  },
  {
    "name": "赵勇",
    "role": "君子厨房创始人",
    "category": "['entrepreneurship']",
    "id": 81,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "考进北大耶鲁，结果去中开餐馆了？",
        "views": 25068,
        "url": "https://www.bilibili.com/video/BV1WJ4m1J7rf",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "耶鲁博士退学，餐饮创业的人生智慧",
        "views": 1531,
        "url": "https://www.bilibili.com/video/BV1Vu411A7Pq",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 26599
  },
  {
    "name": "辛西娅酱",
    "role": "UX Designer, Formerly in Commercial Real Estate",
    "category": "['job_search']",
    "id": 82,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "大龄转行Q&A｜如何面对不确定性？",
        "views": 36521,
        "url": "https://www.bilibili.com/video/BV1vm4y1g76E",
        "uploadTime": "Not specified"
      }
    ],
    "totalViews": 36521
  },
  {
    "name": "边璐",
    "role": "字节Manager，前Meta/亚马逊",
    "category": "['workplace']",
    "id": 83,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "中美工作体验对比｜我的平行人生（亚麻-脸书-字节，生娃，INTJ）｜大厂的本质问题",
        "views": 4494,
        "url": "https://www.bilibili.com/video/BV1J7z3YBEoQ",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 4494
  },
  {
    "name": "邹昕",
    "role": "字节DS manager，前Meta/Discover",
    "category": "['leadership']",
    "id": 84,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "中美数据科学家为什么不一样？来听听横跨两国的manager怎么说吧～｜TikTok一线manager采访（下）",
        "views": 5504,
        "url": "https://www.bilibili.com/video/BV1SD4y1C7Nf",
        "uploadTime": "not provided"
      },
      {
        "platform": "bilibili",
        "title": "一起聊聊什么是理想中「资深数据分析师」？｜feat. 抖音一年200+面试的资深面试官",
        "views": 12652,
        "url": "https://www.bilibili.com/video/BV1hM4y1u7nU",
        "uploadTime": "3 weeks ago"
      },
      {
        "platform": "bilibili",
        "title": "TikTok一线 manager，分享海外Office的经验教训（上）",
        "views": 8428,
        "url": "https://www.bilibili.com/video/BV1UV4y1T7hh",
        "uploadTime": "2 months ago"
      }
    ],
    "totalViews": 26584
  },
  {
    "name": "郭浩宇",
    "role": "游戏策划",
    "category": "['technical_career']",
    "id": 85,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "游戏策划是做什么的？｜年轻人如何保留自己的棱角？｜校招应届生分享就业体验与心得",
        "views": 5360,
        "url": "https://www.bilibili.com/video/BV1YS4y1m7AZ",
        "uploadTime": "1 week ago"
      }
    ],
    "totalViews": 5360
  },
  {
    "name": "金海峰",
    "role": "被谷歌收编的开源博士",
    "category": "['technical_career']",
    "id": 86,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "第一代自动深度学习开源平台，如何被Google招安的？",
        "views": 10672,
        "url": "https://www.bilibili.com/video/BV1jL4y1v7Jy",
        "uploadTime": "1 week ago"
      },
      {
        "platform": "bilibili",
        "title": "开源的初心与商业逻辑｜拿谷歌高薪，给自己打工？",
        "views": 5160,
        "url": "https://www.bilibili.com/video/BV1j34y1d7qw",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 15832
  },
  {
    "name": "钟远",
    "role": "Head of Data and AI at Rappi, former Senior Manager at Amazon",
    "category": "['technical_career']",
    "id": 87,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "这是不花钱也能看的吗？｜亚马逊Science Managers们的AMA｜最实在的高端数据科学职场分享｜四位加起来27级的纯干货",
        "views": 11126,
        "url": "https://www.bilibili.com/video/BV1Rq4y1S7Nk",
        "uploadTime": "1 month ago"
      }
    ],
    "totalViews": 11126
  },
  {
    "name": "陈字昕",
    "role": "Stanford Student and Oracle Employee",
    "category": "['work_life']",
    "id": 88,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "全职工作全职读书，举重若轻的秘诀是什么？",
        "views": 2228,
        "url": "https://www.bilibili.com/video/BV1JN411V7yB",
        "uploadTime": "unknown"
      },
      {
        "platform": "bilibili",
        "title": "全职读研+全职工作，这三招平衡时间精力",
        "views": 19083,
        "url": "https://www.bilibili.com/video/BV1PK421Y74y",
        "uploadTime": "unknown"
      }
    ],
    "totalViews": 21311
  },
  {
    "name": "陈湘宇",
    "role": "CEO of 创梦天地",
    "category": "['entrepreneurship', 'entrepreneurship']",
    "id": 89,
    "episodes": [
      {
        "platform": "bilibili",
        "title": "AI会颠覆微信群聊吗？｜创梦CEO访谈2/2",
        "views": 3731,
        "url": "https://www.bilibili.com/video/BV1Hb4y1j7Pg",
        "uploadTime": "2 days ago"
      },
      {
        "platform": "bilibili",
        "title": "技术、眼光、运气，在成功中的作用｜创梦天地访谈 1/2",
        "views": 6329,
        "url": "https://www.bilibili.com/video/BV1Xg4y1R7MN",
        "uploadTime": "3 days ago"
      }
    ],
    "totalViews": 10060
  }
];

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
