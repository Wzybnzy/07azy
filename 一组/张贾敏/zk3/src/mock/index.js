import Mock from 'mockjs'

Mock.mock('/list', () => {
    return [
        {
            type: 'A',
            children: [
                {
                    text: '奥迪',
                    id: 0,
                    carType: [
                        {
                            id: '0-1',
                            text: 'A4',
                            // type: 0 => 停产 1 => 在售
                            type: 0
                        },
                        {
                            id: '0-2',
                            text: 'A4L',
                            type: 1
                        },
                        {
                            id: '0-3',
                            text: 'A6',
                            type: 1
                        },
                        {
                            id: '0-4',
                            text: 'A6L',
                            type: 0
                        }
                    ]
                },
                {
                    text: '阿斯顿马丁',
                    id: 1
                },
                {
                    text: '阿尔法罗密欧',
                    id: 2
                },
                {
                    text: '奥拓',
                    id: 3
                }
            ]
        },
        {
            type: 'B',
            children: [
                {
                    text: '奔驰',
                    id: 4
                },
                {
                    text: '宝马',
                    id: 5
                },
                {
                    text: '保时捷',
                    id: 6
                },
                {
                    text: '布加迪威龙',
                    id: 7
                },
                {
                    text: '比亚迪',
                    id: 8
                }
            ]
        },
        {
            type: 'C',
            children: [
                {
                    text: '长安',
                    id: 9
                },
                {
                    text: '长城',
                    id: 10
                }
            ]
        },
        {
            type: 'D',
            children: [
                {
                    text: '大众',
                    id: 11
                },
                {
                    text: 'DS',
                    id: 12
                }
            ]
        },
        {
            type: 'F',
            children: [
                {
                    text: '法拉利',
                    id: 13
                },
                {
                    text: '丰田',
                    id: 14
                },
                {
                    text: '福特',
                    id: 15
                }
            ]
        },
        {
            type: 'L',
            children: [
                {
                    text: '林肯',
                    id: 16
                },
                {
                    text: '劳斯莱斯',
                    id: 17
                },
                {
                    text: '雷诺',
                    id: 18
                },
                {
                    text: '雷克萨斯',
                    id: 19
                },
                {
                    text: '兰博基尼',
                    id: 20
                },
                {
                    text: '路虎',
                    id: 21
                },
                {
                    text: '路风',
                    id: 22
                }
            ]
        }
    ]
})