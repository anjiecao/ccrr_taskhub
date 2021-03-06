function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

single_triads = shuffle([
                        ["茶杯", ["玻璃杯", "水壶"]], 
                        ["啤酒", ["果汁", "派对"]],
                        ["鸽子", ["鸭", "鸟巢"]], 
                        ["球", ["骰子", "儿童"]], 
                        ["靴子", ["拖鞋", "脚"]], 
                        ["头发", ["胡子", "梳子"]],
                        ["子弹", ["箭", "手枪"]], 
                        ["胡萝卜", ["豌豆", "兔子"]], 
                        ["椅", ["凳", "桌"]],
                        ["粉笔", ["马克笔", "黑板"]], 
                        ["烟囱", ["墙", "火"]],
                        ["松鼠", ["老鼠", "橡实"]], 
                        ["蜡笔", ["油漆刷", "图画"]], 
                        ["杯子", ["茶碟", "咖啡"]],
                        ["门", ["窗户", "钥匙"]], 
                        ["钢琴", ["长笛", "歌"]], 
                        ["灰尘", ["灰烬", "扫帚"]],
                        ["足球", ["网球", "球门"]], 
                        ["厨房", ["卧室", "冰箱"]], 
                        ["骑士", ["士兵", "盔甲"]], 
                        ["手套", ["短裤", "滑雪"]], 
                        ["嘴", ["鼻", "牙刷"]],
                        ["电影", ["卡通片", "导演"]], 
                        //["针", ["别针", "缝纫机"]], 
                        ["蚌", ["蛤蜊", "珍珠"]], 
                        ["快递员", ["消防员", "包裹"]], 
                        ["洗脸盆", ["浴缸", "肥皂"]], 
                        ["蜘蛛", ["蚱蜢", "网"]],
                        ["弯刀", ["匕首", "海盗"]], 
                        ["帐篷", ["小木屋", "篝火"]], 
                        ["毛巾", ["手帕", "浴室"]], 
                        ["火车", ["公交车", "轨道"]],
                        ["桃", ["李子", "果核"]], 
                        ["小号", ["小提琴", "管弦乐队"]] 
                     ]);


    // arrays of 2 each
dup_triads_1 = shuffle([
        [ ["飞机", ["轮船", "飞行员"]], 
            ["汽车", ["摩托车", "红绿灯"]], 
             ["海鸥", ["蝙蝠", "天空"]]
            
        ],
        [ ["水手", ["飞行员", "轮船"]], 
            ["飞机", ["直升机", "天空"]], 
            ["汽车", ["自行车", "轮胎"]],
         ["头盔", ["便帽", "摩托车"]]
            
        ]
        
    ]);
        
dup_triads_2 = shuffle([
        [ ["锤子", ["锯子", "钉子"]]
        ],
        [ ["锯子", ["锤子 ", "木板"]]
        ]
    ]);
        
dup_triads_3 = shuffle([
        [ ["苹果", ["草莓", "树"]], 
            ["仙人掌", ["灌木", "沙子"]], 
             ["洒水壶", ["桶", "花朵"]]
            
        ],
        [ ["苹果", ["橙子", "篮子"]], 
            ["椰子", ["芒果", "树"]], 
            ["斧子", ["剪刀", "树桩"]],
         ["花朵", ["灌木", "花瓶"]]
            
        ]
        
    ]);
        
dup_triads_4 = shuffle([
        [ ["宝宝", ["成人", "奶瓶"]], 
            ["床", ["长沙发", "枕头"]]
            
        ],
        [ ["婴儿床", ["床", "宝宝"]], 
            ["罐", ["瓶", "吸管"]]
        ]
        
    ]);
        
dup_triads_5 = shuffle([
        [ ["蜜蜂", ["瓢虫", "花园"]]
            
        ],
        [ ["蜜蜂", ["蝴蝶", "蜂蜜"]], 
            ["房子", ["小屋", "花园"]]
        ]
        
    ]);
    
dup_triads_6 = shuffle([
        [ ["鸡", ["天鹅", "蛋"]], 
            ["草", ["叶子", "马"]], 
             ["牛", ["猪", "牛奶"]], 
            ["猴", ["驴", "丛林"]], 
            
        ],
        [ ["牛", ["鸡", "草"]], 
            ["大象", ["长颈鹿", "动物园"]], 
            ["马", ["驴", "鞍"]]
            
        ]
        
    ]);
        
dup_triads_7 = shuffle([
        [ ["蛋糕", ["曲奇", "生日"]]
            
        ],
        [ ["蝴蝶酥", ["蛋糕", "烘焙师"]] 

        ]
        
    ]);
        
dup_triads_8 = shuffle([
        [ ["腿", ["手臂", "裤子"]]
            
        ],
        [ ["连衣裙", ["裤子", "衣架"]] 

        ]
        
    ]);
    
dup_triads_9 = shuffle([
        [ ["碗", ["盘子", "汤"]], 
            ["汤锅", ["平底锅", "长柄勺"]], 
             ["勺", ["叉子", "汤"]]
            
        ],
        [ ["面包", ["米饭", "烤箱"]], 
            ["汤锅", ["平底锅", "炉灶"]], 
            ["勺", ["长柄勺", "碗"]]
            
        ]
        
    ]);
    
dup_triads_10 = shuffle([
        [ ["狗", ["猫", "狗链"]]       
        ],
        [ ["狗", ["猫", "骨头"]]
        ]
        
    ]);
    
dup_triads_11 = shuffle([
        [ ["湖", ["溪流", "鱼"]], 
            ["海洋", ["河流", "鲸"]], 
            ["链条", ["绳子", "锁"]]
        ],
        [ ["海洋", ["溪流", "船"]],
            ["网", ["绳子", "鱼"]]
        ]
        
    ]);
    
dup_triads_12 = shuffle([
        [ ["大衣", ["运动衫", "伞"]]
            
        ],
        [ ["夹克", ["毛衣", "冬天"]] 

        ]
        
    ]);
    
dup_triads_13 = shuffle([
        [ ["洋葱", ["番茄", "农民"]], 
            ["绵羊", ["山羊", "羊毛"]]
        ],
        [ ["农民", ["屠夫", "拖拉机"]], 
            ["山羊", ["鹿", "草地"]], 
            ["洋葱", ["胡椒", "炒锅"]]
        ]
        
    ]);
    
dup_triads_14 = shuffle([
        [ ["皇冠", ["帽子", "女王"]]
            
        ],
        [ ["帽子", ["皇冠", "头"]] 

        ]
        
    ]);
    
dup_triads_15 = shuffle([
        [ ["老师", ["警察", "桌子"]], 
            ["医生", ["工程师", "医院"]]
        ],
        [ ["灯", ["手电筒", "桌子"]], 
            ["警察", ["老师", "监狱"]]
        ]
        
    ]);
    
dup_triads_16 = shuffle([
        [ ["青蛙", ["乌龟", "池塘"]]
            
        ],
        [ ["睡莲", ["玫瑰花", "池塘"]] 

        ]
        
    ]);
    
dup_triads_17 = shuffle([
        [ ["戒指", ["项链", "手"]], 
            ["铅笔", ["钢笔", "橡皮"]]
        ],
        [ ["手", ["脚", "手镯"]], 
            ["笔记本", ["书本", "双肩包"]], 
            ["钢笔", ["铅笔", "纸"]]
        ]
        
    ]);
    
dup_triads_18 = shuffle([
        [ ["学校", ["教堂", "学生"]]
            
        ],
        [ ["大学", ["学校", "教授"]] 

        ]
        
    ]);
    
dup_triads_19 = shuffle([
        [ ["雪", ["冰", "山峰"]],
        ],
        [ ["山峰", ["悬崖", "雪"]],
            ["企鹅", ["鹅", "雪"]]

        ]
        
    ]);

/*
dup_triads_20 = shuffle([
        [ ["drum", ["trumpet", "sticks"]]
            
        ],
        [ ["trumpet", ["violin", "orchestra"]] 

        ]
        
]);
*/

fillers_a = shuffle([
                        ["柠檬", ["葡萄", "梨"]], 
                        ["图书馆", ["银行", "电影院"]],
                        ["风筝", ["篮球", "秋千"]], 
                        ["桥", ["隧道", "公路"]], 
                        ["婴儿", ["男人", "女人"]], 
                        ["香菜", ["盐", "胡椒"]], 
                        ["祖父", ["姐妹", "叔叔"]], 
                        ["蜡烛", ["火炬", "灯笼"]],
                        ["狐狸", ["老虎", "狮子"]], 
                        ["树枝", ["根", "茎"]], 
                        ["鹦鹉", ["鹰", "夜莺"]], 
                        ["新芽", ["小树苗", "植物"]], 
                        ["鼻", ["大拇指", "手指"]], 
                        ["黄瓜", ["玉米", "土豆"]], 
                        ["围巾", ["袜子", "毛线帽"]], 
                        ["铲子", ["耙子", "锄头"]],
                        ["醋", ["油", "黄油"]], 
                        ["漫画", ["杂志", "报纸"]],
                        ["纽扣", ["袖子", "衣领"]],
                        ["床垫", ["床单", "毯子"]], 
                        ["茶", ["苏打水", "柠檬水"]],
                        ["狼", ["熊", "豹"]], 
                        ["鸟", ["蜥蜴", "蟾蜍"]],
                        ["抽屉", ["架子", "储藏柜"]], 
                        ["脖子", ["下巴", "肩膀"]], 
                        ["地", ["小地毯", "瓷砖"]],
                        ["水蛭", ["跳蚤", "虱子"]],
                        //["spider", ["mosquito", "fly"]],
                        ["气球", ["弹珠", "玩具娃娃"]], 
                        //["dentist", ["tooth", "mouth"]],
                        ["歌手", ["作家", "诗人"]],  
                        ["机器人", ["电话", "电脑"]],
                        ["舌头", ["牙齿", "嘴唇"]], 
                        ["大蒜", ["生姜", "香叶"]], 
                        ["西瓜", ["木瓜", "西柚"]], 
                        ["心脏", ["胃", "肺"]], 
                        ["珊瑚", ["鲨鱼", "海豚"]], 
                        ["蠕虫", ["蚂蚁", "蟑螂"]],
                        ["海岸", ["港湾", "码头"]], 
                        ["蘑菇", ["南瓜", "茄子"]], 
                        ["博物馆", ["操场", "公园"]], 
                        ["瀑布", ["洞穴", "裂谷"]],
                        ["兰花", ["茉莉花", "莲花"]],
                        ["骆驼", ["犀牛", "大猩猩"]], 
                        //["soap", ["fragrance", "lotion"]], 
                        ["爆米花", ["薯片", "梳打饼"]],
                        ["电", ["热", "阳光"]], 
                        ["相机", ["钟", "吸尘器"]], 
                        ["石头", ["土壤", "水晶"]], 
                        ["拐杖", ["手杖", "轮椅"]],
                        //["bone", ["skin", "muscle"]], 
                        ["音乐家", ["艺术家", "演员"]], 
                        ["销售员", ["商店", "市场"]],
                        ["章鱼", ["海星", "水母"]], 
                        ["盾", ["大炮", "矛"]], 
                        ["冠军", ["运动员", "名人"]], 
                        ["小镇", ["村庄", "城市"]], 
                        ["胶水", ["酒精", "汽油"]]
    ])
    
fillers_b = shuffle([
                        ["乌鸦", ["麻雀", "鹰"]], 
                        ["孔雀", ["鸵鸟", "猫头鹰"]],
                        ["楼梯", ["阁楼", "阳台"]],
                        ["羽毛", ["喙", "爪"]], 
                        ["屋顶", ["露台", "大门"]], 
                        ["城堡", ["宝座", "堡垒"]],
                        ["手肘", ["脚踝", "指关节"]], 
                        ["姨母", ["奶奶", "亲姐姐"]], 
                        ["月亮", ["行星", "小行星"]], 
                        ["女巫", ["仙女", "魔法师"]],
                        ["雨林", ["绿洲", "沼泽"]], 
                        ["水族馆", ["运河", "大坝"]], 
                        ["熊猫", ["树袋熊", "北极熊"]],
                        ["彗星", ["大气层", "星系"]], 
                        ["大理石", ["混凝土", "水泥"]], 
                        ["北", ["东", "西"]], 
                        ["喷泉", ["广场", "雕像"]], 
                        ["沙漠", ["北极", "岛屿"]],
                        ["侍者", ["厨师", "酒吧侍者"]], 
                        ["书架", ["壁炉", "空调"]],
                        ["地震", ["飓风", "海啸"]],
                        ["恐龙", ["鳄鱼", "蛇"]], 
                        ["皮革", ["丝绸", "天鹅绒"]],
                        ["眼镜", ["双筒望远镜", "单筒望远镜"]], 
                        ["管道", ["下水道", "泵"]], 
                        ["走廊", ["入口", "出口"]],
                        ["药", ["体温计", "听诊器"]], 
                        //["hammock", ["pillow", "clothesline"]], 
                        //["pit", ["trench", "ditch"]], 
                        ["中间", ["上面", "下面"]],
                        ["雇员", ["经理", "执行总监"]],
                        ["信件", ["便条", "文章"]], 
                        ["粗糙", ["坚硬", "尖锐"]], 
                        ["光滑", ["柔软", "轻便"]],
                        ["响", ["热", "亮"]], 
                        ["陷阱", ["诡计", "谎言"]], 
                        ["动物的口鼻部", ["爪子", "尾巴"]],
                        ["在……期间", ["在……之前", "在……之后"]], 
                        ["百", ["十", "千"]], 
                        ["六月", ["二月", "十月"]], 
                        ["椎骨", ["头骨", "肋骨"]], 
                        ["听众", ["病人", "顾客"]],
                        ["摩天大楼", ["体育场", "公寓"]], 
                        ["黑色", ["白色", "蓝色"]], 
                        ["早晨", ["傍晚", "下午"]], 
                        ["风", ["雨", "雪"]],
                        //["spring", ["winter", "summer"]], 
                        ["日落", ["白天", "夜晚"]],
                        ["三角形", ["圆圈", "星形"]],
                        ["伤心", ["害怕", "生气"]], 
                        ["人行道", ["十字路口", "马路"]], 
                        ["烟", ["雾", "蒸汽"]],
                        ["银", ["金", "铁"]], 
                        ["彩虹", ["云", "太阳"]], 
                        ["月", ["星期", "年"]],
                        ["高度", ["宽度", "深度"]], 
                        ["周三", ["周六", "周日"]], 
                        ["分钟", ["小时", "秒"]], 
                        ["今天", ["明天", "昨天"]]
    ])

all_filler_groups = shuffle([fillers_a, fillers_b]);
all_fillers = []
for (var i = 0; i < all_filler_groups.length; i++) {
    for (var j = 0; j < all_filler_groups[i].length; j++) {
        all_fillers.push(all_filler_groups[i][j]);
    }
}

attention_checks = shuffle([
                        ["选择“国王”", ["国王", "王子"]], 
                        ["选择“脸颊”", ["脸颊", "前额"]],
                        ["选择“晚餐”", ["晚餐", "午餐"]], 
                        ["选择“巧克力”", ["巧克力", "糖果"]],
                        ["选择“机场”", ["机场", "乘客"]], 
                        ["选择“膝盖”", ["手腕", "膝盖"]],
                        ["选择“地球仪”", ["地球仪", "地图"]],
                        ["选择“木材”", ["木材", "金属"]],
                        ["选择“妻子”", ["妻子", "丈夫"]], 
                        ["选择“喉咙”", ["喉咙", "下颌"]],
                        ["选择“办公室”", ["办公室", "文件"]]
                    ]);