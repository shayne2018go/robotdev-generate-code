import { DBWSchema } from '@/types';

const webJson = {
  project: '646872534f9dc2ce4a7824fc',
  name: 'PC前台测试',
  desc: '项目提交到资源中心描述...',
  type: 'application',
  subType: 'client',
  terminal: 'pc',
  platforms: [],
  data: [
    {
      originId: '646872534f9dc2ce4a782504',
      project: '646872534f9dc2ce4a7824fc',
      name: '首页',
      type: 'page',
      cover: '62df689a9124c5a1826f5614/projects/646872534f9dc2ce4a7824fc/page/646872534f9dc2ce4a782504.png',
      nodes: [
        {
          id: 'O151',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: 'E467',
          name: '页面导航',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-20 flex items-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'yemiandaohang',
        },
        {
          id: 'O151#641a95e6cd3c6b0921a79f2a',
          parentId: 'O151',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S463',
          parentId: 'O151#641a95e6cd3c6b0921a79f2a',
          tag: 'f-b193776e',
          type: 'component',
          depth: 2,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '646acf7bf48a343baedb6cf4',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'icon',
                    value: {
                      lib: 'iconremix',
                      name: 'npmjs-line',
                      colors: ['#000'],
                      size: '24px',
                    },
                  },
                },
              },
              {
                propId: '646acf8af48a343baedb6cf5',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '新闻资讯网站',
                  },
                },
              },
              {
                propId: '646ad066f48a343baedb6cf7',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'module',
                    value: [
                      {
                        id: '',
                        type: 'data',
                        modeId: '',
                        mode: 'custom',
                        args: {
                          type: 'module',
                          value: [],
                        },
                      },
                      {
                        id: '',
                        type: 'data',
                        modeId: '',
                        mode: 'custom',
                        args: {
                          type: 'module',
                          value: [],
                        },
                      },
                      {
                        id: '',
                        type: 'data',
                        modeId: '',
                        mode: 'custom',
                        args: {
                          type: 'module',
                          value: [],
                        },
                      },
                    ],
                    multiple: true,
                  },
                },
              },
            ],
          },
          projectId: '646872354f9dc2ce4a7824ed',
        },
        {
          id: 'E467',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: 'O151',
          nextId: 'B572',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'E467#641a95e6cd3c6b0921a79f2a',
          parentId: 'E467',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W034',
          parentId: 'E467#641a95e6cd3c6b0921a79f2a',
          tag: 'f-375df87a',
          type: 'component',
          depth: 2,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full',
              },
              {
                propId: '646b227ee4e8b5cbf63a5ccc',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: [
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'text',
                          value: '//image.dreawer.com/pinhui/images/websiteHome/banner1.jpg',
                        },
                      },
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'text',
                          value: '//image.dreawer.com/pinhui/images/websiteHome/banner2.jpg',
                        },
                      },
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'text',
                          value: '//image.dreawer.com/pinhui/images/websiteHome/banner3.jpg',
                        },
                      },
                    ],
                    multiple: true,
                  },
                },
              },
            ],
          },
          projectId: '646872354f9dc2ce4a7824ed',
        },
        {
          id: 'B572',
          parentId: null,
          tag: 'a-tabs',
          type: 'element',
          depth: 0,
          preId: 'E467',
          nextId: 'D822',
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642baab',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7053cf44f6204642baad',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'large',
                  },
                },
              },
              {
                propId: '641a7053cf44f6204642baac',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7053cf44f6204642baaf',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'top',
                  },
                },
              },
              {
                propId: '641a7053cf44f6204642bab0',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'card',
                  },
                },
              },
              {
                propId: 'tabBarGutter',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 2,
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-[1200px] mx-auto',
              },
              {
                propId: '641a7053cf44f6204642baaa',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646b0ca700e0732fc04dccb8',
                  },
                },
              },
            ],
            events: [
              {
                eventId: '641a7053cf44f6204642bab3',
                actions: [
                  {
                    id: '646b119c4e1f9600c4c7c0d2',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646b119c4e1f9600c4c7c0d2',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646b0ca700e0732fc04dccb8',
                            value: {
                              type: 'data',
                              mode: 'getEventData',
                              args: {
                                id: '6433c91d142f1aa760d86c00',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'B572#641a7053cf44f6204642bab7',
          parentId: 'B572',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: 'B572#641a7053cf44f6204642bab8',
          slotId: '641a7053cf44f6204642bab7',
        },
        {
          id: 'O129',
          parentId: 'B572#641a7053cf44f6204642bab7',
          tag: 'a-tab-pane',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: 'N147',
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642babe',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '全部新闻',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
              {
                propId: '641a7053cf44f6204642babd',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '1',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'O129#641a7053cf44f6204642bac0',
          parentId: 'O129',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: 'O129#641a7053cf44f6204642babf',
          slotId: '641a7053cf44f6204642bac0',
        },
        {
          id: 'I212',
          parentId: 'O129#641a7053cf44f6204642bac0',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          name: '新闻卡片',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-[1200px] flex-row flex m-auto flex-wrap items-start justify-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'xinwenkapian',
        },
        {
          id: 'I212#641a95e6cd3c6b0921a79f2a',
          parentId: 'I212',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W209',
          parentId: 'I212#641a95e6cd3c6b0921a79f2a',
          tag: 'p',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'S053',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-neutral-500 text-2xl mb-6 font-bold',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W209#641a95e6cd3c6b0921a79f2a',
          parentId: 'W209',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'N095',
          parentId: 'W209#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '全部新闻',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'S053',
          parentId: 'I212#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'W209',
          nextId: 'Q209',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex w-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'S053#641a95e6cd3c6b0921a79f2a',
          parentId: 'S053',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S048',
          parentId: 'S053#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          name: '循环新闻列表',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b037c8becd52db1474c1',
                    path: ['data', '646b3a046e10705f2ff67a7a'],
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex w-full',
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
          key: 'xunhuanxinwenliebiao',
        },
        {
          id: 'S048#641a7052cf44f6204642b607',
          parentId: 'S048',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'K912',
          parentId: 'S048#641a7052cf44f6204642b607',
          tag: 'f-ec605e18',
          type: 'component',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '646ad69dad5484c5ef631bb3',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b187'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb4',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b188'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb5',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b189'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb6',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1f82a790c589a4b18a'],
                  },
                },
              },
              {
                propId: '646ad69ead5484c5ef631bb7',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1f82a790c589a4b18b'],
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
            ],
          },
          projectId: '646872354f9dc2ce4a7824ed',
        },
        {
          id: 'Q209',
          parentId: 'I212#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'S053',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Q209#641a95e6cd3c6b0921a79f2a',
          parentId: 'Q209',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'X881',
          parentId: 'Q209#641a95e6cd3c6b0921a79f2a',
          tag: 'a-pagination',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mt-4',
              },
              {
                propId: '641a7052cf44f6204642b745',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b744',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b743',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b741',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b740',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 10,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 10,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73d',
                value: null,
              },
              {
                propId: '641a7052cf44f6204642b74b',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'N147',
          parentId: 'B572#641a7053cf44f6204642bab7',
          tag: 'a-tab-pane',
          type: 'element',
          depth: 2,
          preId: 'O129',
          nextId: 'Z687',
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642babd',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '2',
                  },
                },
              },
              {
                propId: '641a7053cf44f6204642babe',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '企业新闻',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'N147#641a7053cf44f6204642bac0',
          parentId: 'N147',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: 'N147#641a7053cf44f6204642babf',
          slotId: '641a7053cf44f6204642bac0',
        },
        {
          id: 'T946',
          parentId: 'N147#641a7053cf44f6204642bac0',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          name: '新闻卡片',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-[1200px] flex-row flex m-auto flex-wrap items-start justify-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'xinwenkapian_2',
        },
        {
          id: 'T946#641a95e6cd3c6b0921a79f2a',
          parentId: 'T946',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'X675',
          parentId: 'T946#641a95e6cd3c6b0921a79f2a',
          tag: 'p',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'R634',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-neutral-500 text-2xl mb-6 font-bold',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'X675#641a95e6cd3c6b0921a79f2a',
          parentId: 'X675',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'I170',
          parentId: 'X675#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '企业新闻',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'R634',
          parentId: 'T946#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'X675',
          nextId: 'X211',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex w-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'R634#641a95e6cd3c6b0921a79f2a',
          parentId: 'R634',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'A155',
          parentId: 'R634#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          name: '循环新闻列表',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646adb3282a790c589a4b186',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex w-full',
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
          key: 'xunhuanxinwenliebiao_2',
        },
        {
          id: 'A155#641a7052cf44f6204642b607',
          parentId: 'A155',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'R653',
          parentId: 'A155#641a7052cf44f6204642b607',
          tag: 'f-ec605e18',
          type: 'component',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '646ad69dad5484c5ef631bb3',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b187'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb4',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b188'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb5',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b189'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb6',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1f82a790c589a4b18a'],
                  },
                },
              },
              {
                propId: '646ad69ead5484c5ef631bb7',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1f82a790c589a4b18b'],
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
            ],
          },
          projectId: '646872354f9dc2ce4a7824ed',
        },
        {
          id: 'X211',
          parentId: 'T946#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'R634',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'X211#641a95e6cd3c6b0921a79f2a',
          parentId: 'X211',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'K877',
          parentId: 'X211#641a95e6cd3c6b0921a79f2a',
          tag: 'a-pagination',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mt-4',
              },
              {
                propId: '641a7052cf44f6204642b745',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b744',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b743',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b741',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b740',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 10,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 10,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73d',
                value: null,
              },
              {
                propId: '641a7052cf44f6204642b74b',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'Z687',
          parentId: 'B572#641a7053cf44f6204642bab7',
          tag: 'a-tab-pane',
          type: 'element',
          depth: 2,
          preId: 'N147',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642babe',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '财务新闻',
                  },
                },
              },
              {
                propId: '641a7053cf44f6204642babd',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '3',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'Z687#641a7053cf44f6204642bac0',
          parentId: 'Z687',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: 'Z687#641a7053cf44f6204642babf',
          slotId: '641a7053cf44f6204642bac0',
        },
        {
          id: 'C145',
          parentId: 'Z687#641a7053cf44f6204642bac0',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          name: '新闻卡片',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-[1200px] flex-row flex m-auto flex-wrap items-start justify-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'xinwenkapian_3',
        },
        {
          id: 'C145#641a95e6cd3c6b0921a79f2a',
          parentId: 'C145',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'R505',
          parentId: 'C145#641a95e6cd3c6b0921a79f2a',
          tag: 'p',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'T749',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-neutral-500 text-2xl mb-6 font-bold',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'R505#641a95e6cd3c6b0921a79f2a',
          parentId: 'R505',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W969',
          parentId: 'R505#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '财务新闻',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'T749',
          parentId: 'C145#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'R505',
          nextId: 'J81',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex w-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'T749#641a95e6cd3c6b0921a79f2a',
          parentId: 'T749',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'T099',
          parentId: 'T749#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          name: '循环新闻列表',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646adb3282a790c589a4b186',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex w-full',
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
          key: 'xunhuanxinwenliebiao_3',
        },
        {
          id: 'T099#641a7052cf44f6204642b607',
          parentId: 'T099',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'U695',
          parentId: 'T099#641a7052cf44f6204642b607',
          tag: 'f-ec605e18',
          type: 'component',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '646ad69dad5484c5ef631bb3',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b187'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb4',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b188'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb5',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1e82a790c589a4b189'],
                  },
                },
              },
              {
                propId: '646ad69dad5484c5ef631bb6',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1f82a790c589a4b18a'],
                  },
                },
              },
              {
                propId: '646ad69ead5484c5ef631bb7',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'A155',
                    path: ['item', '646adf1f82a790c589a4b18b'],
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
            ],
          },
          projectId: '646872354f9dc2ce4a7824ed',
        },
        {
          id: 'J81',
          parentId: 'C145#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'T749',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'J81#641a95e6cd3c6b0921a79f2a',
          parentId: 'J81',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S821',
          parentId: 'J81#641a95e6cd3c6b0921a79f2a',
          tag: 'a-pagination',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mt-4',
              },
              {
                propId: '641a7052cf44f6204642b745',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b744',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b743',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b741',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b740',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 10,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 10,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b73d',
                value: null,
              },
              {
                propId: '641a7052cf44f6204642b74b',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'D822',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: 'B572',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-screen',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'D822#641a95e6cd3c6b0921a79f2a',
          parentId: 'D822',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'H002',
          parentId: 'D822#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: 'D549',
          name: '数据录入',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value:
                  'w-[1200px] flex-row flex m-auto justify-center flex-wrap items-start bg-neutral-50 p-8 px-16 mt-8',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'shujuluru',
        },
        {
          id: 'H002#641a95e6cd3c6b0921a79f2a',
          parentId: 'H002',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'L745',
          parentId: 'H002#641a95e6cd3c6b0921a79f2a',
          tag: 'p',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: 'V193',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-neutral-500 text-2xl mb-6 font-bold',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'L745#641a95e6cd3c6b0921a79f2a',
          parentId: 'L745',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'R549',
          parentId: 'L745#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '添加新闻',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'V193',
          parentId: 'H002#641a95e6cd3c6b0921a79f2a',
          tag: 'a-form',
          type: 'element',
          depth: 4,
          preId: 'L745',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full',
              },
              {
                propId: '641a7052cf44f6204642b848',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b844',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'right',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b845',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'vertical',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b843',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b84b',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'new',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'V193#641a7052cf44f6204642b856',
          parentId: 'V193',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b856',
        },
        {
          id: 'E239',
          parentId: 'V193#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'U675',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85d',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
              {
                propId: '641a7052cf44f6204642b861',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b85a',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b860',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'right',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b85e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '标题:',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'E239#641a7052cf44f6204642b86c',
          parentId: 'E239',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'E239#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'J164',
          parentId: 'E239#641a7052cf44f6204642b86c',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'B750',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '实时显示输入的标题：',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'B750',
          parentId: 'E239#641a7052cf44f6204642b86c',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: 'J164',
          nextId: 'O082',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646b3627f6ca4b0dda7d4d19',
                    path: ['646b3642f6ca4b0dda7d4d1a'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'O082',
          parentId: 'E239#641a7052cf44f6204642b86c',
          tag: 'a-input',
          type: 'element',
          depth: 8,
          preId: 'B750',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b872',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'default',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b874',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'text',
                  },
                },
              },
              {
                propId: '646b06ea0cba6dfc9f64b088',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '请输入新闻标题',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b875',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646b3627f6ca4b0dda7d4d19',
                    path: ['646b3642f6ca4b0dda7d4d1a'],
                  },
                },
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b87b',
                actions: [
                  {
                    id: '646b3783f6ca4b0dda7d4d25',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646b3783f6ca4b0dda7d4d25',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646b3627f6ca4b0dda7d4d19',
                            path: ['646b3642f6ca4b0dda7d4d1a'],
                            value: {
                              type: 'data',
                              mode: 'getEventData',
                              args: {
                                id: '642b8a819a04dc6fabaa5d55',
                                path: ['642b8a909a04dc6fabaa5d56', '642be22b451c381a2ec381f7'],
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'E239#641a7052cf44f6204642b86d',
          parentId: 'E239',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: 'E239#641a7052cf44f6204642b86b',
          nextId: null,
          slotId: '641a7052cf44f6204642b86d',
        },
        {
          id: 'L232',
          parentId: 'E239#641a7052cf44f6204642b86d',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'zxczxcv',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'U675',
          parentId: 'V193#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 6,
          preId: 'E239',
          nextId: 'E232',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '作者',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b860',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'right',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'U675#641a7052cf44f6204642b86c',
          parentId: 'U675',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'U675#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'X804',
          parentId: 'U675#641a7052cf44f6204642b86c',
          tag: 'a-input',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b872',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'default',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b874',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'text',
                  },
                },
              },
              {
                propId: '646b06ea0cba6dfc9f64b088',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '请输入',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b875',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646b3627f6ca4b0dda7d4d19',
                    path: ['646b3642f6ca4b0dda7d4d1b'],
                  },
                },
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b87b',
                actions: [
                  {
                    id: '646b391cf6ca4b0dda7d4d27',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646b391cf6ca4b0dda7d4d27',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646b3627f6ca4b0dda7d4d19',
                            path: ['646b3642f6ca4b0dda7d4d1b'],
                            value: {
                              type: 'data',
                              mode: 'getEventData',
                              args: {
                                id: '642b8a819a04dc6fabaa5d55',
                                path: ['642b8a909a04dc6fabaa5d56', '642be22b451c381a2ec381f7'],
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'E232',
          parentId: 'V193#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 6,
          preId: 'U675',
          nextId: 'Q450',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '来源',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'E232#641a7052cf44f6204642b86c',
          parentId: 'E232',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'E232#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'T541',
          parentId: 'E232#641a7052cf44f6204642b86c',
          tag: 'a-input',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b872',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'default',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b874',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'text',
                  },
                },
              },
              {
                propId: '646b06ea0cba6dfc9f64b088',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '请输入',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b875',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646b3627f6ca4b0dda7d4d19',
                    path: ['646b3642f6ca4b0dda7d4d1c'],
                  },
                },
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b87b',
                actions: [
                  {
                    id: '646b49cd0449fa688ec623e3',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646b49cd0449fa688ec623e3',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646b3627f6ca4b0dda7d4d19',
                            path: ['646b3642f6ca4b0dda7d4d1c'],
                            value: {
                              type: 'data',
                              mode: 'getEventData',
                              args: {
                                id: '642b8a819a04dc6fabaa5d55',
                                path: ['642b8a909a04dc6fabaa5d56', '642be22b451c381a2ec381f7'],
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'Q450',
          parentId: 'V193#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 6,
          preId: 'E232',
          nextId: 'K430',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '分类',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b861',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'Q450#641a7052cf44f6204642b86c',
          parentId: 'Q450',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'Q450#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'E238',
          parentId: 'Q450#641a7052cf44f6204642b86c',
          tag: 'a-select',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            events: [
              {
                eventId: '641a7052cf44f6204642b904',
                actions: [
                  {
                    id: '646b4a0a0449fa688ec623e6',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646b4a0a0449fa688ec623e6',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646b3627f6ca4b0dda7d4d19',
                            path: ['646b3642f6ca4b0dda7d4d1d'],
                            value: {
                              type: 'data',
                              mode: 'getEventData',
                              args: {
                                id: '642faefafa0f4c663f442ccb',
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'E238#641a7052cf44f6204642b905',
          parentId: 'E238',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: 'E238#641a7052cf44f6204642b906',
          slotId: '641a7052cf44f6204642b905',
        },
        {
          id: 'M685',
          parentId: 'E238#641a7052cf44f6204642b905',
          tag: 'ul',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'M685#641a95e6cd3c6b0921a79f2a',
          parentId: 'M685',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'R954',
          parentId: 'M685#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b00ac8becd52db147479',
                    path: ['data', '646b2b22bd904b1164cab6e7'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'R954#641a7052cf44f6204642b607',
          parentId: 'R954',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'O333',
          parentId: 'R954#641a7052cf44f6204642b607',
          tag: 'li',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'O333#641a95e6cd3c6b0921a79f2a',
          parentId: 'O333',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S733',
          parentId: 'O333#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'J569',
                    path: ['item', '646b2b32bd904b1164cab6e8'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'K430',
          parentId: 'V193#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 6,
          preId: 'Q450',
          nextId: 'Z950',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '内容',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b861',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'K430#641a7052cf44f6204642b86c',
          parentId: 'K430',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'K430#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'O659',
          parentId: 'K430#641a7052cf44f6204642b86c',
          tag: 'md-editor',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'border w-full h-[500px]',
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Z950',
          parentId: 'V193#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 6,
          preId: 'K430',
          nextId: 'U648',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '标签',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'Z950#641a7052cf44f6204642b86c',
          parentId: 'Z950',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'Z950#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'K901',
          parentId: 'Z950#641a7052cf44f6204642b86c',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex space-x-2',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'K901#641a95e6cd3c6b0921a79f2a',
          parentId: 'K901',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Q782',
          parentId: 'K901#641a95e6cd3c6b0921a79f2a',
          tag: 'a-input',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: 'W821',
          data: {
            props: [
              {
                propId: '646b06ea0cba6dfc9f64b088',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '添加标签',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-24',
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b87c',
                actions: [
                  {
                    id: '646b6d0e3df7c26e1008019a',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646b6d0e3df7c26e1008019a',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646b4aee0449fa688ec623e9',
                            value: {
                              type: 'data',
                              mode: 'custom',
                              args: {
                                type: 'text',
                                value: [],
                                multiple: true,
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'W821',
          parentId: 'K901#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 10,
          preId: 'Q782',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646b4aee0449fa688ec623e9',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'W821#641a7052cf44f6204642b607',
          parentId: 'W821',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'J096',
          parentId: 'W821#641a7052cf44f6204642b607',
          tag: 'a-tag',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642bac2',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: true,
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'J096#641a7053cf44f6204642bac9',
          parentId: 'J096',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: 'J096#641a7053cf44f6204642baca',
          slotId: '641a7053cf44f6204642bac9',
        },
        {
          id: 'I496',
          parentId: 'J096#641a7053cf44f6204642bac9',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'W821',
                    path: ['item'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'U648',
          parentId: 'V193#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 6,
          preId: 'Z950',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
              {
                propId: '641a7052cf44f6204642b860',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'right',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b861',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'whether',
                    value: false,
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'U648#641a7052cf44f6204642b86c',
          parentId: 'U648',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'U648#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'I779',
          parentId: 'U648#641a7052cf44f6204642b86c',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex justify-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'I779#641a95e6cd3c6b0921a79f2a',
          parentId: 'I779',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'E355',
          parentId: 'I779#641a95e6cd3c6b0921a79f2a',
          tag: 'a-button',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: 'P336',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b65c',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'default',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b65a',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'ghost',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b65b',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'middle',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mr-4',
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b665',
                actions: [
                  {
                    id: '646b6ebc3df7c26e1008019c',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646b6ebc3df7c26e1008019c',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646b3627f6ca4b0dda7d4d19',
                            value: {
                              type: 'data',
                              mode: 'custom',
                              args: {
                                type: 'module',
                                value: [],
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'E355#641a7052cf44f6204642b667',
          parentId: 'E355',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: 'E355#641a7052cf44f6204642b668',
          slotId: '641a7052cf44f6204642b667',
        },
        {
          id: 'V183',
          parentId: 'E355#641a7052cf44f6204642b667',
          tag: 'text',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '取消',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'P336',
          parentId: 'I779#641a95e6cd3c6b0921a79f2a',
          tag: 'a-button',
          type: 'element',
          depth: 10,
          preId: 'E355',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b65c',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'default',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b65a',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'primary',
                  },
                },
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b665',
                actions: [
                  {
                    id: '646b6f203df7c26e100801a0',
                    modeId: '6401884318eda303abe11c40',
                    mode: 'api',
                    name: '执行业务',
                    type: 'action',
                    args: {
                      id: '6469af09c8becd52db14745d',
                      params: {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'module',
                          value: [
                            {
                              propId: '6469ceb8a1070c3ff8fd7859',
                              value: {
                                type: 'data',
                                mode: 'getVar',
                                args: {
                                  id: '646b3627f6ca4b0dda7d4d19',
                                  path: ['646b3642f6ca4b0dda7d4d1a'],
                                },
                              },
                            },
                            {
                              propId: '6469d07ea1070c3ff8fd785a',
                              value: {
                                type: 'data',
                                mode: 'getVar',
                                args: {
                                  id: '646b3627f6ca4b0dda7d4d19',
                                  path: ['646b3643f6ca4b0dda7d4d1f'],
                                },
                              },
                            },
                            {
                              propId: '6469d07fa1070c3ff8fd785b',
                              value: {
                                type: 'data',
                                mode: 'getVar',
                                args: {
                                  id: '646b3627f6ca4b0dda7d4d19',
                                  path: ['646b3642f6ca4b0dda7d4d1b'],
                                },
                              },
                            },
                            {
                              propId: '6469d07fa1070c3ff8fd785c',
                              value: {
                                type: 'data',
                                mode: 'getVar',
                                args: {
                                  id: '646b3627f6ca4b0dda7d4d19',
                                  path: ['646b3642f6ca4b0dda7d4d1c'],
                                },
                              },
                            },
                            {
                              propId: '6469d080a1070c3ff8fd785d',
                              value: {
                                type: 'data',
                                mode: 'getVar',
                                args: {
                                  id: '646b3627f6ca4b0dda7d4d19',
                                  path: ['646b3642f6ca4b0dda7d4d1d'],
                                },
                              },
                            },
                            {
                              propId: '6469d081a1070c3ff8fd785e',
                              value: {
                                type: 'data',
                                mode: 'getVar',
                                args: {
                                  id: '646b3627f6ca4b0dda7d4d19',
                                  path: ['646b3642f6ca4b0dda7d4d1e'],
                                },
                              },
                            },
                          ],
                        },
                      },
                      success: [
                        {
                          id: '646b6fb43df7c26e100801a6',
                          modeId: '6401884318eda303abe11c40',
                          mode: 'api',
                          name: '执行业务',
                          type: 'action',
                          args: {
                            id: '6469b037c8becd52db1474c1',
                          },
                        },
                      ],
                      fail: [],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'P336#641a7052cf44f6204642b667',
          parentId: 'P336',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: 'P336#641a7052cf44f6204642b668',
          slotId: '641a7052cf44f6204642b667',
        },
        {
          id: 'D383',
          parentId: 'P336#641a7052cf44f6204642b667',
          tag: 'text',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '提交',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'D549',
          parentId: 'D822#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: 'H002',
          nextId: null,
          name: '页脚区域',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-[180px]',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'yejiaoquyu',
        },
        {
          id: 'D549#641a95e6cd3c6b0921a79f2a',
          parentId: 'D549',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'O859',
          parentId: 'D549#641a95e6cd3c6b0921a79f2a',
          tag: 'f-d62a8c30',
          type: 'component',
          depth: 4,
          preId: null,
          nextId: null,
          projectId: '646872354f9dc2ce4a7824ed',
        },
      ],
      decl: [
        {
          name: '新闻卡片',
          types: [
            {
              type: 'module',
              multiple: true,
              rules: {
                properties: [
                  {
                    name: '图片',
                    types: [
                      {
                        type: 'text',
                        default: {
                          type: 'data',
                          mode: 'custom',
                          args: {
                            type: 'text',
                            value: 'https://www.tencent.com/zh-cn/articles/2201592.html',
                          },
                        },
                      },
                    ],
                    id: '646adf1e82a790c589a4b187',
                    desc: '',
                    key: 'tupian',
                  },
                  {
                    name: '标题',
                    types: [
                      {
                        type: 'text',
                        default: {
                          type: 'data',
                          mode: 'custom',
                          args: {
                            type: 'text',
                            value: 'SPARK 2023发布会彰显腾讯游戏对创新游戏技术的不懈追求',
                          },
                        },
                      },
                    ],
                    id: '646adf1e82a790c589a4b188',
                    key: 'biaoti',
                  },
                  {
                    name: '描述',
                    types: [
                      {
                        type: 'text',
                        default: {
                          type: 'data',
                          mode: 'custom',
                          args: {
                            type: 'text',
                            value:
                              '腾讯游戏致力夯实底层技术，进一步提升技术水平。  在一年一度的SPARK大会上，腾讯游戏面向未来，发布了一系列针对中国市场的新项目。  在这场线上大会，腾讯高级副总裁马晓轶谈到了ChatGPT的兴起及其潜力。他表示，游戏研发和创新技术之间的共生关系日益密切，这对创新具有巨大的促进作用。',
                          },
                        },
                      },
                    ],
                    id: '646adf1e82a790c589a4b189',
                    key: 'miaoshu',
                  },
                  {
                    name: '作者',
                    types: [
                      {
                        type: 'text',
                        default: {
                          type: 'data',
                          mode: 'custom',
                          args: {
                            type: 'text',
                            value: '佚名',
                          },
                        },
                      },
                    ],
                    id: '646adf1f82a790c589a4b18a',
                    key: 'zuozhe',
                  },
                  {
                    name: '发布时间',
                    types: [
                      {
                        type: 'datetime',
                        default: {
                          type: 'data',
                          mode: 'custom',
                          args: {
                            type: 'datetime',
                            value: '2023-05-12 11:22',
                          },
                        },
                      },
                    ],
                    id: '646adf1f82a790c589a4b18b',
                    key: 'fabushijian',
                  },
                  {
                    name: '标签',
                    types: [
                      {
                        type: 'text',
                        multiple: true,
                      },
                    ],
                    id: '646b1d8b2472d815b50681f8',
                    key: 'biaoqian',
                  },
                ],
              },
            },
          ],
          id: '646adb3282a790c589a4b186',
          desc: '',
          key: 'xinwenkapian',
        },
        {
          name: '选项卡切换',
          types: [
            {
              type: 'text',
            },
          ],
          id: '646b0ca700e0732fc04dccb8',
          key: 'xuanxiangkaqiehuan',
        },
        {
          name: '轮播图片集',
          types: [
            {
              type: 'text',
              multiple: true,
              default: {
                type: 'data',
                mode: 'custom',
                args: {
                  type: 'text',
                  value: '//image.dreawer.com/pinhui/images/websiteHome/banner1.jpg',
                },
              },
              ui: {
                tag: 'textarea',
              },
            },
          ],
          id: '646b23ed1f1d13bbabb95bd6',
          key: 'lunbotupianji',
        },
        {
          name: '新增新闻',
          types: [
            {
              type: 'module',
              rules: {
                properties: [
                  {
                    name: '标题',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '646b3642f6ca4b0dda7d4d1a',
                    key: 'biaoti',
                  },
                  {
                    name: '作者',
                    types: [
                      {
                        type: 'text',
                        default: {
                          type: 'data',
                          mode: 'custom',
                          args: {
                            type: 'text',
                            value: '69531b589af14899a35eb8f169b67f8f',
                          },
                        },
                      },
                    ],
                    id: '646b3642f6ca4b0dda7d4d1b',
                    key: 'zuozhe',
                  },
                  {
                    name: '来源',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '646b3642f6ca4b0dda7d4d1c',
                    key: 'laiyuan',
                  },
                  {
                    name: '分类',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '646b3642f6ca4b0dda7d4d1d',
                    key: 'fenlei',
                  },
                  {
                    name: '标签',
                    types: [
                      {
                        type: 'text',
                        multiple: true,
                        ui: {
                          tag: 'textarea',
                        },
                      },
                    ],
                    id: '646b3642f6ca4b0dda7d4d1e',
                    key: 'biaoqian',
                  },
                  {
                    name: '内容',
                    types: [
                      {
                        type: 'richText',
                      },
                    ],
                    id: '646b3643f6ca4b0dda7d4d1f',
                    key: 'neirong',
                  },
                ],
              },
            },
          ],
          id: '646b3627f6ca4b0dda7d4d19',
          key: 'xinzengxinwen',
        },
        {
          name: '标签组',
          types: [
            {
              type: 'text',
              multiple: true,
            },
          ],
          id: '646b4aee0449fa688ec623e9',
          key: 'biaoqianzu',
        },
      ],
      events: [],
      classes: [],
      flowcharts: [
        '64699d18c8becd52db147422',
        '6469af09c8becd52db14745d',
        '6469b00ac8becd52db147479',
        '6469b037c8becd52db1474c1',
      ],
      extendPlatform: true,
      platforms: [],
      params: [],
    },
    {
      originId: '646872534f9dc2ce4a782505',
      project: '646872534f9dc2ce4a7824fc',
      name: '404',
      type: 'page',
      nodes: [],
      decl: [],
      events: [],
      classes: [],
      flowcharts: [],
      extendPlatform: true,
      platforms: [],
      params: [],
    },
    {
      originId: '646872534f9dc2ce4a782506',
      project: '646872534f9dc2ce4a7824fc',
      name: '502',
      type: 'page',
      nodes: [],
      decl: [],
      events: [],
      classes: [],
      flowcharts: [],
      extendPlatform: true,
      platforms: [],
      params: [],
    },
    {
      originId: '646872794f9dc2ce4a782546',
      project: '646872534f9dc2ce4a7824fc',
      name: '详情页',
      type: 'page',
      cover: '62df689a9124c5a1826f5614/projects/646872534f9dc2ce4a7824fc/page/646872794f9dc2ce4a782546.png',
      nodes: [
        {
          id: 'N025',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-screen',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N025#641a95e6cd3c6b0921a79f2a',
          parentId: 'N025',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'B434',
          parentId: 'N025#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: 'Q612',
          name: '页眉区域',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-20 flex w-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'yemeiquyu',
        },
        {
          id: 'B434#641a95e6cd3c6b0921a79f2a',
          parentId: 'B434',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'D595',
          parentId: 'B434#641a95e6cd3c6b0921a79f2a',
          tag: 'f-b193776e',
          type: 'component',
          depth: 4,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mt-0',
              },
              {
                propId: '646acf7bf48a343baedb6cf4',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'icon',
                    value: {
                      lib: 'iconpark',
                      name: 'tiktok',
                      colors: ['#69db78', '#95e89d', '#69db78'],
                      size: '48px',
                      strokeWidth: 2,
                    },
                  },
                },
              },
              {
                propId: '646acf8af48a343baedb6cf5',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '这个是测试网站',
                  },
                },
              },
              {
                propId: '646acf9af48a343baedb6cf6',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '40080813371',
                  },
                },
              },
              {
                propId: '646ad066f48a343baedb6cf7',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'module',
                    value: [
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'module',
                          value: [
                            {
                              propId: '646ad076f48a343baedb6cf8',
                              value: {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'text',
                                  value: '首页',
                                },
                              },
                            },
                            {
                              propId: '646ad084f48a343baedb6cf9',
                              value: {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'url',
                                  value: {
                                    mode: 'in',
                                    page: '646872534f9dc2ce4a782504',
                                  },
                                },
                              },
                            },
                            {
                              propId: '646ad0b5f48a343baedb6cfa',
                              value: {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'module',
                                  value: [
                                    {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'module',
                                        value: [
                                          {
                                            propId: '646ad0c5f48a343baedb6cfb',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'text',
                                                value: '新闻列表',
                                              },
                                            },
                                          },
                                          {
                                            propId: '646ad0c6f48a343baedb6cfc',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'url',
                                                value: {
                                                  mode: 'in',
                                                  page: '646872534f9dc2ce4a782504',
                                                },
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'module',
                                        value: [
                                          {
                                            propId: '646ad0c5f48a343baedb6cfb',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'text',
                                                value: '404错误',
                                              },
                                            },
                                          },
                                          {
                                            propId: '646ad0c6f48a343baedb6cfc',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'url',
                                                value: {
                                                  mode: 'in',
                                                  page: '646872534f9dc2ce4a782505',
                                                },
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'module',
                                        value: [
                                          {
                                            propId: '646ad0c5f48a343baedb6cfb',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'text',
                                                value: '跳到百度',
                                              },
                                            },
                                          },
                                          {
                                            propId: '646ad0c6f48a343baedb6cfc',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'url',
                                                value: {
                                                  mode: 'out',
                                                  url: 'https://www.baidu.com/',
                                                },
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                  multiple: true,
                                },
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'module',
                          value: [
                            {
                              propId: '646ad076f48a343baedb6cf8',
                              value: {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'text',
                                  value: '商情信息',
                                },
                              },
                            },
                            {
                              propId: '646ad084f48a343baedb6cf9',
                              value: {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'url',
                                  value: {
                                    mode: 'out',
                                    url: 'https://www.esmchina.com/news/',
                                  },
                                },
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'module',
                          value: [
                            {
                              propId: '646ad076f48a343baedb6cf8',
                              value: {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'text',
                                  value: '菜单2',
                                },
                              },
                            },
                            {
                              propId: '646ad084f48a343baedb6cf9',
                              value: {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'url',
                                  value: {
                                    mode: 'in',
                                  },
                                },
                              },
                            },
                            {
                              propId: '646ad0b5f48a343baedb6cfa',
                              value: {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'module',
                                  value: [
                                    {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'module',
                                        value: [
                                          {
                                            propId: '646ad0c5f48a343baedb6cfb',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'text',
                                                value: '11111',
                                              },
                                            },
                                          },
                                          {
                                            propId: '646ad0c6f48a343baedb6cfc',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'url',
                                                value: {
                                                  mode: 'in',
                                                  page: '646872534f9dc2ce4a782506',
                                                },
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'module',
                                        value: [
                                          {
                                            propId: '646ad0c5f48a343baedb6cfb',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'text',
                                                value: '502',
                                              },
                                            },
                                          },
                                          {
                                            propId: '646ad0c6f48a343baedb6cfc',
                                            value: {
                                              type: 'data',
                                              mode: 'custom',
                                              args: {
                                                type: 'url',
                                                value: {
                                                  mode: 'in',
                                                  page: '646872534f9dc2ce4a782506',
                                                },
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                  multiple: true,
                                },
                              },
                            },
                          ],
                        },
                      },
                    ],
                    multiple: true,
                  },
                },
              },
            ],
          },
          projectId: '646872354f9dc2ce4a7824ed',
        },
        {
          id: 'Q612',
          parentId: 'N025#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: 'B434',
          nextId: 'E442',
          name: '内容区域',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-full w-[1200px] justify-center flex-row flex m-auto flex-wrap items-start',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'neirongquyu',
        },
        {
          id: 'Q612#641a95e6cd3c6b0921a79f2a',
          parentId: 'Q612',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'E149',
          parentId: 'Q612#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: 'N712',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full flex items-start flex-wrap',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'E149#641a95e6cd3c6b0921a79f2a',
          parentId: 'E149',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'L093',
          parentId: 'E149#641a95e6cd3c6b0921a79f2a',
          tag: 'ul',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full flex',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'L093#641a95e6cd3c6b0921a79f2a',
          parentId: 'L093',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'X319',
          parentId: 'L093#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'A786',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b610',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '/',
                  },
                },
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'X319#641a95e6cd3c6b0921a79f2a',
          parentId: 'X319',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S291',
          parentId: 'X319#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'S291#641a95e6cd3c6b0921a79f2a',
          parentId: 'S291',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'L156',
          parentId: 'S291#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '首页',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'A786',
          parentId: 'L093#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 8,
          preId: 'X319',
          nextId: 'R408',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'ml-1 mr-1',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'A786#641a95e6cd3c6b0921a79f2a',
          parentId: 'A786',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S438',
          parentId: 'A786#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '>',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'R408',
          parentId: 'L093#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 8,
          preId: 'A786',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'R408#641a95e6cd3c6b0921a79f2a',
          parentId: 'R408',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'O929',
          parentId: 'R408#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b037c8becd52db1474b9',
                    path: ['data', '646ae7a1ec1677171046294c', '646ae7bfec1677171046294d'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'N712',
          parentId: 'Q612#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: 'E149',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full flex h-full flex-row flex-wrap',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N712#641a95e6cd3c6b0921a79f2a',
          parentId: 'N712',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W858',
          parentId: 'N712#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'S779',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-full w-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W858#641a95e6cd3c6b0921a79f2a',
          parentId: 'W858',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'H352',
          parentId: 'W858#641a95e6cd3c6b0921a79f2a',
          tag: 'h1',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'D637',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-h1',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'H352#641a95e6cd3c6b0921a79f2a',
          parentId: 'H352',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Y009',
          parentId: 'H352#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b037c8becd52db1474b9',
                    path: ['data', '646ae7a1ec1677171046294c', '646ae7bfec1677171046294d'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'D637',
          parentId: 'W858#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: 'H352',
          nextId: 'T007',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full h-8 flex',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'D637#641a95e6cd3c6b0921a79f2a',
          parentId: 'D637',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W146',
          parentId: 'D637#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: 'H936',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b037c8becd52db1474b9',
                    path: ['data', '646ae7a1ec1677171046294c', '646b01e0ec16771710462955'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'W146#641a7052cf44f6204642b607',
          parentId: 'W146',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'G461',
          parentId: 'W146#641a7052cf44f6204642b607',
          tag: 'a',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b610',
                value: {
                  id: '',
                  type: 'data',
                  modeId: '640aa8ec237f2a94b9bd85ab',
                  mode: 'concatString',
                  args: {
                    '641a7054cf44f6204642c32b': {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'text',
                        value: [
                          {
                            type: 'data',
                            mode: 'custom',
                            args: {
                              type: 'text',
                              value: '/tags/',
                            },
                          },
                          {
                            id: '',
                            type: 'data',
                            modeId: '',
                            mode: 'getEachData',
                            args: {
                              id: 'W146',
                              path: ['index'],
                            },
                          },
                        ],
                        multiple: true,
                      },
                    },
                  },
                },
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'G461#641a95e6cd3c6b0921a79f2a',
          parentId: 'G461',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'G038',
          parentId: 'G461#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'G038#641a95e6cd3c6b0921a79f2a',
          parentId: 'G038',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Q025',
          parentId: 'G038#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'W146',
                    path: ['item'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'H936',
          parentId: 'D637#641a95e6cd3c6b0921a79f2a',
          tag: 'p',
          type: 'element',
          depth: 10,
          preId: 'W146',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'H936#641a95e6cd3c6b0921a79f2a',
          parentId: 'H936',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'X257',
          parentId: 'H936#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: 'Z305',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'X257#641a95e6cd3c6b0921a79f2a',
          parentId: 'X257',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'B415',
          parentId: 'X257#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b037c8becd52db1474b9',
                    path: ['data', '646ae7a1ec1677171046294c', '646ae823ec16771710462950'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Z305',
          parentId: 'H936#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 12,
          preId: 'X257',
          nextId: 'V691',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Z305#641a95e6cd3c6b0921a79f2a',
          parentId: 'Z305',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'J229',
          parentId: 'Z305#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b037c8becd52db1474b9',
                    path: ['data', '646ae7a1ec1677171046294c', '646ae835ec16771710462951'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'V691',
          parentId: 'H936#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 12,
          preId: 'Z305',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'V691#641a95e6cd3c6b0921a79f2a',
          parentId: 'V691',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W945',
          parentId: 'V691#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b037c8becd52db1474b9',
                    path: ['data', '646ae7a1ec1677171046294c', '646ae8a4ec16771710462954'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'T007',
          parentId: 'W858#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: 'D637',
          nextId: 'I070',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full h-px mt-2 mb-2 bg-neutral-100',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'I070',
          parentId: 'W858#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: 'T007',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'I070#641a95e6cd3c6b0921a79f2a',
          parentId: 'I070',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'X495',
          parentId: 'I070#641a95e6cd3c6b0921a79f2a',
          tag: 'rtf',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b620',
                value: {
                  type: 'data',
                  mode: 'getApiData',
                  args: {
                    id: '6469b037c8becd52db1474b9',
                    path: ['data', '646ae7a1ec1677171046294c', '646ae813ec1677171046294f'],
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex p-1',
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'S779',
          parentId: 'N712#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'W858',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex justify-between items-center flex-nowrap w-full h-14',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'S779#641a95e6cd3c6b0921a79f2a',
          parentId: 'S779',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'C537',
          parentId: 'S779#641a95e6cd3c6b0921a79f2a',
          tag: 'ul',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full flex justify-between flex-nowrap pl-1 pr-1',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C537#641a95e6cd3c6b0921a79f2a',
          parentId: 'C537',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'U003',
          parentId: 'C537#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: 'O399',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'U003#641a95e6cd3c6b0921a79f2a',
          parentId: 'U003',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S266',
          parentId: 'U003#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'S266#641a95e6cd3c6b0921a79f2a',
          parentId: 'S266',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'P316',
          parentId: 'S266#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '上一篇：xxxxxxxxxxxxxxxxxxxxxxx',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'O399',
          parentId: 'C537#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 10,
          preId: 'U003',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'O399#641a95e6cd3c6b0921a79f2a',
          parentId: 'O399',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'I508',
          parentId: 'O399#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'I508#641a95e6cd3c6b0921a79f2a',
          parentId: 'I508',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'N888',
          parentId: 'I508#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '下一篇：xxxxxxxxxxxxxxxxxxxxxxx',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'E442',
          parentId: 'N025#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: 'Q612',
          nextId: null,
          name: '页脚区域',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-[180px]',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'yejiaoquyu',
        },
        {
          id: 'E442#641a95e6cd3c6b0921a79f2a',
          parentId: 'E442',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'L680',
          parentId: 'E442#641a95e6cd3c6b0921a79f2a',
          tag: 'f-d62a8c30',
          type: 'component',
          depth: 4,
          preId: null,
          nextId: null,
        },
      ],
      decl: [],
      events: [
        {
          eventId: '641a95e7cd3c6b0921a79f2b',
          actions: [
            {
              id: '646ae6e71bb8474269ed2c72',
              modeId: '6401884318eda303abe11c40',
              mode: 'api',
              name: '执行业务',
              type: 'action',
              args: {
                id: '6469b037c8becd52db1474b9',
                params: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'module',
                    value: [
                      {
                        propId: '6469b0514a1c9e864ecef994',
                        value: {
                          type: 'data',
                          mode: 'getParam',
                          args: {
                            id: '646ac4953fb607d13fd7fba6',
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      ],
      classes: [],
      flowcharts: ['6469b037c8becd52db1474b9'],
      extendPlatform: true,
      platforms: [],
      params: [
        {
          name: 'ID',
          types: [
            {
              type: 'text',
            },
          ],
          id: '646ac4953fb607d13fd7fba6',
          required: true,
          key: 'ID',
        },
      ],
    },
  ],
  themes: [
    {
      originId: '646872534f9dc2ce4a7824ff',
      name: '默认主题',
      project: '646872534f9dc2ce4a7824fc',
      styleType: 'tailwind',
      isDefault: true,
      colorSets: [
        {
          name: '主色',
          colors: [
            {
              name: '点击色',
              mode: 'hex',
              value: '#f0f7ff',
            },
            {
              name: '常规色',
              mode: 'hex',
              value: '#cce3ff',
            },
            {
              name: '悬浮色',
              mode: 'hex',
              value: '#a3c9ff',
            },
            {
              name: '特殊场景',
              mode: 'hex',
              value: '#7aadff',
            },
            {
              name: '一般禁用',
              mode: 'hex',
              value: '#4f8af7',
            },
            {
              name: '文字禁用',
              mode: 'hex',
              value: '#2563eb',
            },
            {
              name: '浅色背景',
              mode: 'hex',
              value: '#1647c4',
            },
          ],
        },
        {
          name: '中性色',
          colors: [
            {
              name: '标题强调',
              mode: 'hex',
              value: '#fafafa',
            },
            {
              name: '次级强调',
              mode: 'hex',
              value: '#e5e5e5',
            },
            {
              name: '次要信息',
              mode: 'hex',
              value: '#d4d4d4',
            },
            {
              name: '特殊场景',
              mode: 'hex',
              value: '#a3a3a3',
            },
            {
              name: '一般禁用',
              mode: 'hex',
              value: '#737373',
            },
            {
              name: '文字禁用',
              mode: 'hex',
              value: '#525252',
            },
            {
              name: '浅色背景',
              mode: 'hex',
              value: '#262626',
            },
          ],
        },
        {
          name: '成功色',
          colors: [
            {
              name: '点击色',
              mode: 'hex',
              value: '#dcf5de',
            },
            {
              name: '常规色',
              mode: 'hex',
              value: '#95e89d',
            },
            {
              name: '悬浮色',
              mode: 'hex',
              value: '#69db78',
            },
            {
              name: '特殊场景',
              mode: 'hex',
              value: '#42cf5a',
            },
            {
              name: '一般禁用',
              mode: 'hex',
              value: '#1fc240',
            },
            {
              name: '文字禁用',
              mode: 'hex',
              value: '#00b42a',
            },
            {
              name: '浅色背景',
              mode: 'hex',
              value: '#008f26',
            },
          ],
        },
        {
          name: '链接色',
          colors: [
            {
              name: '点击色',
              mode: 'hex',
              value: '#f0f9ff',
            },
            {
              name: '常规色',
              mode: 'hex',
              value: '#d9f0ff',
            },
            {
              name: '悬浮色',
              mode: 'hex',
              value: '#b0ddff',
            },
            {
              name: '特殊场景',
              mode: 'hex',
              value: '#87c7ff',
            },
            {
              name: '一般禁用',
              mode: 'hex',
              value: '#5eafff',
            },
            {
              name: '文字禁用',
              mode: 'hex',
              value: '#3491fa',
            },
            {
              name: '浅色背景',
              mode: 'hex',
              value: '#226fd4',
            },
          ],
        },
        {
          name: '警告色',
          colors: [
            {
              name: '点击色',
              mode: 'hex',
              value: '#fffdeb',
            },
            {
              name: '常规色',
              mode: 'hex',
              value: '#fff6c2',
            },
            {
              name: '悬浮色',
              mode: 'hex',
              value: '#ffec99',
            },
            {
              name: '特殊场景',
              mode: 'hex',
              value: '#ffe070',
            },
            {
              name: '一般禁用',
              mode: 'hex',
              value: '#ffd147',
            },
            {
              name: '文字禁用',
              mode: 'hex',
              value: '#f7ba1e',
            },
            {
              name: '浅色背景',
              mode: 'hex',
              value: '#d1940f',
            },
          ],
        },
        {
          name: '错误色',
          colors: [
            {
              name: '点击色',
              mode: 'hex',
              value: '#fff2f0',
            },
            {
              name: '常规色',
              mode: 'hex',
              value: '#ffe9e6',
            },
            {
              name: '悬浮色',
              mode: 'hex',
              value: '#ffc3bd',
            },
            {
              name: '特殊场景',
              mode: 'hex',
              value: '#ff9b94',
            },
            {
              name: '一般禁用',
              mode: 'hex',
              value: '#ff706b',
            },
            {
              name: '文字禁用',
              mode: 'hex',
              value: '#f53f3f',
            },
            {
              name: '浅色背景',
              mode: 'hex',
              value: '#cf2b31',
            },
          ],
        },
      ],
      texts: [
        {
          name: 'h1',
          fontSize: 3.5,
          unit: 'rem',
          lineHeight: 4,
          fontWeight: 900,
        },
        {
          name: 'h2',
          fontSize: 3,
          unit: 'rem',
          lineHeight: 3.5,
          fontWeight: 500,
        },
        {
          name: 'h3',
          fontSize: 2.25,
          unit: 'rem',
          lineHeight: 2.75,
          fontWeight: 500,
        },
        {
          name: 'h4',
          fontSize: 1.5,
          unit: 'rem',
          lineHeight: 2,
          fontWeight: 500,
        },
        {
          name: 'h5',
          fontSize: 1.25,
          unit: 'rem',
          lineHeight: 1.75,
          fontWeight: 500,
        },
        {
          name: 'h6',
          fontSize: 1,
          unit: 'rem',
          lineHeight: 1.5,
          fontWeight: 500,
        },
        {
          name: 'body',
          fontSize: 0.875,
          unit: 'rem',
          lineHeight: 1.25,
          fontWeight: 400,
        },
        {
          name: 'small',
          fontSize: 0.75,
          unit: 'rem',
          lineHeight: 1,
          fontWeight: 400,
        },
      ],
    },
  ],
  dependencies: [
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa72888e1',
      name: 'div 块元素',
      type: 'element',
      tag: 'div',
    },
    {
      projectId: '646872354f9dc2ce4a7824ed',
      name: '页眉',
      tag: 'f-b193776e',
      id: '6468bfbb4f9dc2ce4a78263d',
      nodes: [
        {
          id: 'U793',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full pl-2 pr-2 flex flex-nowrap items-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'U793#641a95e6cd3c6b0921a79f2a',
          parentId: 'U793',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'V891',
          parentId: 'U793#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: 'F303',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex justify-start items-center w-[300px]',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'V891#641a95e6cd3c6b0921a79f2a',
          parentId: 'V891',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Y694',
          parentId: 'V891#641a95e6cd3c6b0921a79f2a',
          tag: 'icon',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: 'T536',
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642bbd9',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646acf7bf48a343baedb6cf4',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'pt-1 pb-1 mr-6',
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'T536',
          parentId: 'V891#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 4,
          preId: 'Y694',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-4xl',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'T536#641a95e6cd3c6b0921a79f2a',
          parentId: 'T536',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'F384',
          parentId: 'T536#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646acf8af48a343baedb6cf5',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'F303',
          parentId: 'U793#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: 'V891',
          nextId: 'O312',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: ' w-[1400px] mt-1 mb-1',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'F303#641a95e6cd3c6b0921a79f2a',
          parentId: 'F303',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'R781',
          parentId: 'F303#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646ad066f48a343baedb6cf7',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'R781#641a7052cf44f6204642b607',
          parentId: 'R781',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'G079',
          parentId: 'R781#641a7052cf44f6204642b607',
          tag: 'ul',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'relative',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'G079#641a95e6cd3c6b0921a79f2a',
          parentId: 'G079',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W980',
          parentId: 'G079#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'R494',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b610',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'R781',
                    path: ['item', '646ad084f48a343baedb6cf9'],
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b611',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'self',
                  },
                },
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W980#641a95e6cd3c6b0921a79f2a',
          parentId: 'W980',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'O397',
          parentId: 'W980#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'O397#641a95e6cd3c6b0921a79f2a',
          parentId: 'O397',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'I270',
          parentId: 'O397#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'R781',
                    path: ['item', '646ad076f48a343baedb6cf8'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'R494',
          parentId: 'G079#641a95e6cd3c6b0921a79f2a',
          tag: 'cond',
          type: 'element',
          depth: 8,
          preId: 'W980',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b608',
                value: {
                  id: '',
                  type: 'data',
                  modeId: '64099739237f2a94b9bd798b',
                  mode: 'isNotEmpty',
                  args: {
                    '641a7054cf44f6204642c2f3': {
                      id: '',
                      type: 'data',
                      modeId: '',
                      mode: 'getEachData',
                      args: {
                        id: 'R781',
                        path: ['item', '646ad0b5f48a343baedb6cfa'],
                      },
                    },
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'R494#641a7052cf44f6204642b609',
          parentId: 'R494',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: 'R494#641a7052cf44f6204642b60a',
          slotId: '641a7052cf44f6204642b609',
        },
        {
          id: 'J494',
          parentId: 'R494#641a7052cf44f6204642b609',
          tag: 'div',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'absolute z-40 top-14',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'J494#641a95e6cd3c6b0921a79f2a',
          parentId: 'J494',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Z089',
          parentId: 'J494#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Z089#641a7052cf44f6204642b607',
          parentId: 'Z089',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'L234',
          parentId: 'Z089#641a7052cf44f6204642b607',
          tag: 'ul',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'relative',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'L234#641a95e6cd3c6b0921a79f2a',
          parentId: 'L234',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'H799',
          parentId: 'L234#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b610',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'R781',
                    path: ['item', '646ad084f48a343baedb6cf9'],
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b611',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'self',
                  },
                },
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'H799#641a95e6cd3c6b0921a79f2a',
          parentId: 'H799',
          tag: 'tpl',
          type: 'element',
          depth: 17,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'U672',
          parentId: 'H799#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 18,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'U672#641a95e6cd3c6b0921a79f2a',
          parentId: 'U672',
          tag: 'tpl',
          type: 'element',
          depth: 19,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'A694',
          parentId: 'U672#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 20,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'R781',
                    path: ['item', '646ad076f48a343baedb6cf8'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'R494#641a7052cf44f6204642b60a',
          parentId: 'R494',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: 'R494#641a7052cf44f6204642b609',
          nextId: null,
          slotId: '641a7052cf44f6204642b60a',
        },
        {
          id: 'O312',
          parentId: 'U793#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: 'F303',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex justify-end items-center flex-row text-2xl pl-3 pr-2',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'O312#641a95e6cd3c6b0921a79f2a',
          parentId: 'O312',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'G909',
          parentId: 'O312#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646acf9af48a343baedb6cf6',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
      ],
      decl: [
        {
          name: '显示二级菜单',
          types: [
            {
              type: 'text',
            },
          ],
          id: '646b0b61a92c5de701e5a37f',
          key: 'xianshierjicaidan',
        },
      ],
      events: [],
      spec: {
        props: [
          {
            name: 'logo',
            types: [
              {
                type: 'icon',
                multiple: false,
              },
            ],
            id: '646acf7bf48a343baedb6cf4',
            extendPlatform: true,
            required: true,
            key: 'logo',
          },
          {
            name: '网站标题',
            types: [
              {
                type: 'text',
              },
            ],
            id: '646acf8af48a343baedb6cf5',
            extendPlatform: true,
            required: true,
            key: 'wangzhanbiaoti',
          },
          {
            name: '联系电话',
            types: [
              {
                type: 'text',
              },
            ],
            id: '646acf9af48a343baedb6cf6',
            extendPlatform: true,
            key: 'lianxidianhua',
          },
          {
            name: '菜单',
            types: [
              {
                type: 'module',
                multiple: true,
                rules: {
                  properties: [
                    {
                      name: '菜单名称',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '646ad076f48a343baedb6cf8',
                      extendPlatform: true,
                      key: 'caidanmingcheng',
                    },
                    {
                      name: '链接地址',
                      types: [
                        {
                          type: 'url',
                          default: {
                            type: 'data',
                            mode: 'custom',
                            args: {
                              type: 'url',
                              value: {
                                mode: 'in',
                              },
                            },
                          },
                        },
                      ],
                      id: '646ad084f48a343baedb6cf9',
                      extendPlatform: true,
                      key: 'lianjiedizhi',
                    },
                    {
                      name: '子菜单',
                      types: [
                        {
                          type: 'module',
                          multiple: true,
                          rules: {
                            properties: [
                              {
                                name: '菜单名称',
                                types: [
                                  {
                                    type: 'text',
                                  },
                                ],
                                id: '646ad0c5f48a343baedb6cfb',
                                extendPlatform: true,
                                key: 'caidanmingcheng',
                              },
                              {
                                name: '链接地址',
                                types: [
                                  {
                                    type: 'url',
                                    default: {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'url',
                                        value: {
                                          mode: 'in',
                                        },
                                      },
                                    },
                                  },
                                ],
                                id: '646ad0c6f48a343baedb6cfc',
                                extendPlatform: true,
                                key: 'lianjiedizhi',
                              },
                            ],
                          },
                        },
                      ],
                      id: '646ad0b5f48a343baedb6cfa',
                      extendPlatform: true,
                      key: 'zicaidan',
                    },
                  ],
                },
              },
            ],
            id: '646ad066f48a343baedb6cf7',
            extendPlatform: true,
            key: 'caidan',
          },
        ],
      },
      key: 'yemei',
    },
    {
      productId: '6358fb8554bb9b1c84ce47a2',
      id: '62fcba919b358224524e3737',
      name: '图标',
      type: 'element',
      tag: 'icon',
      spec: {
        props: [
          {
            id: '641a7053cf44f6204642bbd9',
            key: 'config',
            types: [
              {
                type: 'icon',
              },
            ],
            name: '配置',
          },
        ],
      },
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa728890d',
      name: 'span 行内段落',
      type: 'element',
      tag: 'span',
      spec: {
        slots: [
          {
            id: '641a7052cf44f6204642b628',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
        ],
      },
    },
    {
      productId: '6358fb8554bb9b1c84ce47a2',
      id: '62c68d5d27d4bddfa72888fb',
      name: '文本',
      type: 'element',
      tag: 'text',
      spec: {
        props: [
          {
            name: '文本内容',
            types: [
              {
                type: 'text',
                ui: {
                  props: [
                    {
                      value: 10,
                      propId: 'rows',
                    },
                  ],
                  tag: 'textarea',
                },
              },
            ],
            id: '641a7052cf44f6204642b61f',
            key: 'text',
          },
        ],
      },
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa72888ef',
      name: 'ul 无序列表',
      type: 'element',
      tag: 'ul',
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa72888e7',
      name: 'a 超链接',
      type: 'element',
      tag: 'a',
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b610',
            key: 'href',
            types: [
              {
                type: 'text',
              },
            ],
            name: '超链接',
            desc: '超链接地址',
          },
          {
            id: '641a7052cf44f6204642b611',
            key: 'target',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '当前页面',
                      value: 'self',
                    },
                    {
                      label: '新开页签',
                      value: 'blank',
                    },
                    {
                      label: '父级窗口',
                      value: 'parent',
                    },
                    {
                      label: '定位位置',
                      value: 'top',
                    },
                  ],
                },
              },
            ],
            default: 'self',
            name: '打开方式',
            desc: '打开方式',
          },
          {
            id: '641a7052cf44f6204642b612',
            key: 'rel',
            types: [
              {
                type: 'text',
              },
            ],
            name: '目标说明',
            desc: '对目标地址的描述说明',
          },
          {
            id: '641a7052cf44f6204642b613',
            key: 'name',
            types: [
              {
                type: 'text',
              },
            ],
            name: '锚点名',
            desc: '定义锚点的目标位置',
          },
          {
            id: '641a7052cf44f6204642b614',
            key: 'download',
            types: [
              {
                type: 'text',
              },
            ],
            name: '下载地址',
            desc: '浏览器下载',
          },
        ],
      },
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa72888f3',
      name: 'li 列表项',
      type: 'element',
      tag: 'li',
    },
    {
      projectId: '646872354f9dc2ce4a7824ed',
      name: '轮播',
      tag: 'f-375df87a',
      id: '6468bfde4f9dc2ce4a782688',
      nodes: [
        {
          id: 'O816',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'relative m-0 p-0 overflow-hidden w-full h-[640px]',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'O816#641a95e6cd3c6b0921a79f2a',
          parentId: 'O816',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'A281',
          parentId: 'O816#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'overflow-hidden w-full h-full relative',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'A281#641a95e6cd3c6b0921a79f2a',
          parentId: 'A281',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'V217',
          parentId: 'A281#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: 'T360',
          name: 'div 块元素-计算变动style',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex flex-nowrap transform transition-all duration-1000 ease-linear h-full',
              },
              {
                propId: '641a95e6cd3c6b0921a79f27',
                value: 'transition-duration:1s;',
                dynamic: {
                  id: '',
                  type: 'data',
                  modeId: '640aa8ec237f2a94b9bd85ab',
                  mode: 'concatString',
                  args: {
                    '641a7054cf44f6204642c32b': {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'text',
                        value: [
                          {
                            type: 'data',
                            mode: 'custom',
                            args: {
                              type: 'text',
                              value: 'transform: translateX',
                            },
                          },
                          {
                            type: 'data',
                            mode: 'custom',
                            args: {
                              type: 'text',
                              value: '(calc(',
                            },
                          },
                          {
                            id: '',
                            type: 'data',
                            modeId: '640985ef237f2a94b9bd77b1',
                            mode: 'divide',
                            args: {
                              '641a7054cf44f6204642c2dd': {
                                id: '',
                                type: 'data',
                                modeId: '64098724237f2a94b9bd77f4',
                                mode: 'mod',
                                args: {
                                  '641a7054cf44f6204642c2e0': {
                                    id: '',
                                    type: 'data',
                                    modeId: '',
                                    mode: 'getVar',
                                    args: {
                                      id: '646c0efef19561c2def2fa20',
                                      path: [],
                                    },
                                  },
                                  '641a7054cf44f6204642c2e1': {
                                    id: '',
                                    type: 'data',
                                    modeId: '6470253467c147480397fbed',
                                    mode: 'getLength',
                                    args: {
                                      '64702554c291839adb14f5ad': {
                                        id: '',
                                        type: 'data',
                                        modeId: '',
                                        mode: 'getCmptPropData',
                                        args: {
                                          id: '646b227ee4e8b5cbf63a5ccc',
                                          path: [],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              '641a7054cf44f6204642c2de': {
                                id: '',
                                type: 'data',
                                modeId: '6470253467c147480397fbed',
                                mode: 'getLength',
                                args: {
                                  '64702554c291839adb14f5ad': {
                                    id: '',
                                    type: 'data',
                                    modeId: '',
                                    mode: 'getCmptPropData',
                                    args: {
                                      id: '646b227ee4e8b5cbf63a5ccc',
                                      path: [],
                                    },
                                  },
                                },
                              },
                            },
                          },
                          {
                            type: 'data',
                            mode: 'custom',
                            args: {
                              type: 'text',
                              value: '* -100%));',
                            },
                          },
                          {
                            type: 'data',
                            mode: 'custom',
                            args: {
                              type: 'text',
                              value: 'width:',
                            },
                          },
                          {
                            id: '',
                            type: 'data',
                            modeId: '64098540237f2a94b9bd7781',
                            mode: 'multiply',
                            args: {
                              '641a7054cf44f6204642c2dc': {
                                type: 'data',
                                mode: 'custom',
                                args: {
                                  type: 'number',
                                  value: [
                                    {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'number',
                                        value: 100,
                                      },
                                    },
                                    {
                                      id: '',
                                      type: 'data',
                                      modeId: '6470253467c147480397fbed',
                                      mode: 'getLength',
                                      args: {
                                        '64702554c291839adb14f5ad': {
                                          id: '',
                                          type: 'data',
                                          modeId: '',
                                          mode: 'getCmptPropData',
                                          args: {
                                            id: '646b227ee4e8b5cbf63a5ccc',
                                            path: [],
                                          },
                                        },
                                      },
                                    },
                                  ],
                                  multiple: true,
                                },
                              },
                            },
                          },
                          {
                            type: 'data',
                            mode: 'custom',
                            args: {
                              type: 'text',
                              value: '%;',
                            },
                          },
                        ],
                        multiple: true,
                      },
                    },
                  },
                },
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'divkuaiyuansu-jisuanbiandongstyle',
        },
        {
          id: 'V217#641a95e6cd3c6b0921a79f2a',
          parentId: 'V217',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'K195',
          parentId: 'V217#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646b227ee4e8b5cbf63a5ccc',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'K195#641a7052cf44f6204642b607',
          parentId: 'K195',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'R950',
          parentId: 'K195#641a7052cf44f6204642b607',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          name: 'div 图片',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-full h-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'divtupian',
        },
        {
          id: 'R950#641a95e6cd3c6b0921a79f2a',
          parentId: 'R950',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'J705',
          parentId: 'R950#641a95e6cd3c6b0921a79f2a',
          tag: 'img',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'object-cover object-center w-full h-[640px]',
              },
              {
                propId: '641a7052cf44f6204642b615',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'K195',
                    path: ['item'],
                  },
                },
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'T360',
          parentId: 'A281#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: 'V217',
          nextId: 'K634',
          name: '底部指示器',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'absolute bottom-8 w-full flex justify-center items-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'dibuzhishiqi',
        },
        {
          id: 'T360#641a95e6cd3c6b0921a79f2a',
          parentId: 'T360',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'P537',
          parentId: 'T360#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646b227ee4e8b5cbf63a5ccc',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'P537#641a7052cf44f6204642b607',
          parentId: 'P537',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'G627',
          parentId: 'P537#641a7052cf44f6204642b607',
          tag: 'button',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-16 h-0.5',
                dynamic: {
                  id: '',
                  type: 'data',
                  modeId: '64099416237f2a94b9bd7911',
                  mode: 'If',
                  args: {
                    '641a7054cf44f6204642c2ed': {
                      id: '',
                      type: 'data',
                      modeId: '64099793237f2a94b9bd7996',
                      mode: 'eq',
                      args: {
                        '641a7054cf44f6204642c2f4': {
                          id: '',
                          type: 'data',
                          modeId: '',
                          mode: 'getVar',
                          args: {
                            id: '646c0efef19561c2def2fa20',
                            path: [],
                          },
                        },
                        '641a7054cf44f6204642c2f5': {
                          id: '',
                          type: 'data',
                          modeId: '',
                          mode: 'getEachData',
                          args: {
                            id: 'P537',
                            path: ['index'],
                          },
                        },
                      },
                    },
                    '641a7054cf44f6204642c2ee': {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'text',
                        value: ' bg-white',
                      },
                    },
                    '641a7054cf44f6204642c2ef': {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'text',
                        value: 'bg-yellow-500',
                      },
                    },
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b617',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'button',
                  },
                },
              },
            ],
            events: [
              {
                eventId: '641a95cecd3c6b0921a79efa',
                actions: [
                  {
                    id: '646d7a29f19561c2def2fa27',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646d7a29f19561c2def2fa27',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646c0efef19561c2def2fa20',
                            value: {
                              type: 'data',
                              mode: 'getEachData',
                              args: {
                                id: 'P537',
                                path: ['index'],
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'K634',
          parentId: 'A281#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: 'T360',
          nextId: null,
          name: '左右控制器',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex flex-row justify-between w-full absolute h-full top-0 bottom-0',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
          key: 'zuoyoukongzhiqi',
        },
        {
          id: 'K634#641a95e6cd3c6b0921a79f2a',
          parentId: 'K634',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'T171',
          parentId: 'K634#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'J673',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f27',
                value: 'list-style-type:none;',
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-full flex justify-center items-center bg-neutral-200 opacity-70 w-20',
              },
            ],
            events: [
              {
                eventId: '641a95cecd3c6b0921a79efa',
                actions: [
                  {
                    id: '646d79eaf19561c2def2fa25',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646d79eaf19561c2def2fa25',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646c0efef19561c2def2fa20',
                            value: {
                              id: '',
                              type: 'data',
                              modeId: '64099416237f2a94b9bd7911',
                              mode: 'If',
                              args: {
                                '641a7054cf44f6204642c2ed': {
                                  id: '',
                                  type: 'data',
                                  modeId: '640998fe237f2a94b9bd7a17',
                                  mode: 'lte',
                                  args: {
                                    '641a7054cf44f6204642c300': {
                                      id: '',
                                      type: 'data',
                                      modeId: '',
                                      mode: 'getVar',
                                      args: {
                                        id: '646c0efef19561c2def2fa20',
                                        path: [],
                                      },
                                    },
                                    '641a7054cf44f6204642c301': {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'number',
                                        value: 0,
                                      },
                                    },
                                  },
                                },
                                '641a7054cf44f6204642c2ee': {
                                  id: '',
                                  type: 'data',
                                  modeId: '64098427237f2a94b9bd7730',
                                  mode: 'subtract',
                                  args: {
                                    '641a7054cf44f6204642c2d3': {
                                      id: '',
                                      type: 'data',
                                      modeId: '6470253467c147480397fbed',
                                      mode: 'getLength',
                                      args: {
                                        '64702554c291839adb14f5ad': {
                                          id: '',
                                          type: 'data',
                                          modeId: '',
                                          mode: 'getCmptPropData',
                                          args: {
                                            id: '646b227ee4e8b5cbf63a5ccc',
                                            path: [],
                                          },
                                        },
                                      },
                                    },
                                    '641a7054cf44f6204642c2d4': {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'number',
                                        value: 1,
                                      },
                                    },
                                  },
                                },
                                '641a7054cf44f6204642c2ef': {
                                  id: '',
                                  type: 'data',
                                  modeId: '64098427237f2a94b9bd7730',
                                  mode: 'subtract',
                                  args: {
                                    '641a7054cf44f6204642c2d3': {
                                      id: '',
                                      type: 'data',
                                      modeId: '',
                                      mode: 'getVar',
                                      args: {
                                        id: '646c0efef19561c2def2fa20',
                                        path: [],
                                      },
                                    },
                                    '641a7054cf44f6204642c2d4': {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'number',
                                        value: 1,
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'T171#641a95e6cd3c6b0921a79f2a',
          parentId: 'T171',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'I283',
          parentId: 'T171#641a95e6cd3c6b0921a79f2a',
          tag: 'icon',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642bbd9',
                value: {
                  lib: 'iconpark',
                  name: 'left-c',
                  colors: ['#525252'],
                  size: '42px',
                  strokeWidth: 3,
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'J673',
          parentId: 'K634#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 6,
          preId: 'T171',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f27',
                value: 'list-style-type:none;',
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'h-full flex justify-center items-center bg-neutral-200 opacity-70 w-20',
              },
            ],
            events: [
              {
                eventId: '641a95cecd3c6b0921a79efa',
                actions: [
                  {
                    id: '646d79eaf19561c2def2fa25',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '646d79eaf19561c2def2fa25',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '646c0efef19561c2def2fa20',
                            value: {
                              id: '',
                              type: 'data',
                              modeId: '64099416237f2a94b9bd7911',
                              mode: 'If',
                              args: {
                                '641a7054cf44f6204642c2ed': {
                                  id: '',
                                  type: 'data',
                                  modeId: '6409988d237f2a94b9bd79dd',
                                  mode: 'gte',
                                  args: {
                                    '641a7054cf44f6204642c2fa': {
                                      id: '',
                                      type: 'data',
                                      modeId: '',
                                      mode: 'getVar',
                                      args: {
                                        id: '646c0efef19561c2def2fa20',
                                        path: [],
                                      },
                                    },
                                    '641a7054cf44f6204642c2fb': {
                                      id: '',
                                      type: 'data',
                                      modeId: '64098427237f2a94b9bd7730',
                                      mode: 'subtract',
                                      args: {
                                        '641a7054cf44f6204642c2d3': {
                                          id: '',
                                          type: 'data',
                                          modeId: '6470253467c147480397fbed',
                                          mode: 'getLength',
                                          args: {
                                            '64702554c291839adb14f5ad': {
                                              id: '',
                                              type: 'data',
                                              modeId: '',
                                              mode: 'getCmptPropData',
                                              args: {
                                                id: '646b227ee4e8b5cbf63a5ccc',
                                                path: [],
                                              },
                                            },
                                          },
                                        },
                                        '641a7054cf44f6204642c2d4': {
                                          type: 'data',
                                          mode: 'custom',
                                          args: {
                                            type: 'number',
                                            value: 1,
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                '641a7054cf44f6204642c2ee': {
                                  id: '',
                                  type: 'data',
                                  modeId: '64098232237f2a94b9bd7695',
                                  mode: 'add',
                                  args: {
                                    '641a7054cf44f6204642c2cc': {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'number',
                                        value: [
                                          {
                                            id: '',
                                            type: 'data',
                                            modeId: '',
                                            mode: 'custom',
                                            args: {
                                              type: 'number',
                                              value: 0,
                                            },
                                          },
                                          {
                                            id: '',
                                            type: 'data',
                                            modeId: '',
                                            mode: 'custom',
                                            args: {
                                              type: 'number',
                                              value: 0,
                                            },
                                          },
                                        ],
                                        multiple: true,
                                      },
                                    },
                                  },
                                },
                                '641a7054cf44f6204642c2ef': {
                                  id: '',
                                  type: 'data',
                                  modeId: '64098232237f2a94b9bd7695',
                                  mode: 'add',
                                  args: {
                                    '641a7054cf44f6204642c2cc': {
                                      type: 'data',
                                      mode: 'custom',
                                      args: {
                                        type: 'number',
                                        value: [
                                          {
                                            type: 'data',
                                            mode: 'custom',
                                            args: {
                                              type: 'number',
                                              value: 1,
                                            },
                                          },
                                          {
                                            id: '',
                                            type: 'data',
                                            modeId: '',
                                            mode: 'getVar',
                                            args: {
                                              id: '646c0efef19561c2def2fa20',
                                              path: [],
                                            },
                                          },
                                        ],
                                        multiple: true,
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'J673#641a95e6cd3c6b0921a79f2a',
          parentId: 'J673',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'X005',
          parentId: 'J673#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'H360',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f27',
                dynamic: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646c0efef19561c2def2fa20',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '646c0efef19561c2def2fa20',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'H360',
          parentId: 'J673#641a95e6cd3c6b0921a79f2a',
          tag: 'icon',
          type: 'element',
          depth: 8,
          preId: 'X005',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642bbd9',
                value: {
                  lib: 'iconpark',
                  name: 'right-c',
                  colors: ['#525252'],
                  size: '42px',
                  strokeWidth: 3,
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
      ],
      decl: [
        {
          name: '当前图片',
          types: [
            {
              type: 'number',
              default: {
                type: 'data',
                mode: 'custom',
                args: {
                  type: 'number',
                  value: 0,
                },
              },
            },
          ],
          id: '646c0efef19561c2def2fa20',
          key: 'dangqiantupian',
        },
      ],
      events: [],
      spec: {
        props: [
          {
            name: '轮播图集',
            types: [
              {
                type: 'text',
                multiple: true,
              },
            ],
            id: '646b227ee4e8b5cbf63a5ccc',
            extendPlatform: true,
            key: 'lunbotuji',
          },
        ],
      },
      key: 'lunbo',
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa72888eb',
      name: 'img 图像',
      type: 'element',
      tag: 'img',
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b615',
            key: 'src',
            types: [
              {
                type: 'text',
              },
            ],
            default: 'url',
            name: 'URL地址',
            desc: '规定显示图像的 URL',
          },
          {
            id: '641a7052cf44f6204642b616',
            key: 'alt',
            types: [
              {
                type: 'text',
              },
            ],
            name: '图片描述',
            desc: '图片加载不成功时显示的文字内容，有利于seo',
          },
        ],
      },
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa72888ed',
      name: 'button 按钮',
      type: 'element',
      tag: 'button',
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b617',
            key: 'type',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: 'button',
                      value: 'button',
                    },
                    {
                      label: 'reset',
                      value: 'reset',
                    },
                    {
                      label: 'submit',
                      value: 'submit',
                    },
                  ],
                },
              },
            ],
            default: 'button',
            name: '类型',
            desc: '规定按钮的类型',
          },
          {
            id: '641a7052cf44f6204642b618',
            key: 'name',
            types: [
              {
                type: 'text',
              },
            ],
            name: '按钮名称',
            desc: '规定按钮的名称',
          },
          {
            id: '641a7052cf44f6204642b619',
            key: 'value',
            types: [
              {
                type: 'text',
              },
            ],
            name: '初始值',
            desc: '规定按钮的初始值',
          },
          {
            id: '641a7052cf44f6204642b61a',
            key: 'disabled',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '禁用按钮',
            desc: '规定应该禁用该按钮',
          },
          {
            id: '641a7052cf44f6204642b61b',
            key: 'form',
            types: [
              {
                type: 'text',
              },
            ],
            name: '绑定表单',
            desc: '规定按钮属于一个或多个表单',
          },
          {
            id: '641a7052cf44f6204642b61c',
            key: 'formaction',
            types: [
              {
                type: 'text',
              },
            ],
            name: '执行操作',
            desc: '当按钮类型为submit时覆盖form元素的action属性',
          },
          {
            id: '641a7052cf44f6204642b61d',
            key: 'formmethod',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: 'post',
                      value: 'post',
                    },
                    {
                      label: 'get',
                      value: 'get',
                    },
                  ],
                },
              },
            ],
            name: '请求方法',
            desc: '当按钮类型为submit时覆盖form元素的method属性',
          },
          {
            id: '641a7052cf44f6204642b61e',
            key: 'formtarget',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '当前页面',
                      value: 'self',
                    },
                    {
                      label: '新开页签',
                      value: 'blank',
                    },
                    {
                      label: '父级窗口',
                      value: 'parent',
                    },
                    {
                      label: '定位位置',
                      value: 'top',
                    },
                  ],
                },
              },
            ],
            name: '打开方式',
            desc: '当按钮类型为submit时覆盖form元素的target属性',
          },
        ],
      },
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3d7',
      name: 'Tabs 标签页',
      type: 'element',
      tag: 'a-tabs',
      nodes: [],
      spec: {
        props: [
          {
            name: '当前激活页',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7053cf44f6204642baaa',
            key: 'activeKey',
            desc: '当前激活tab面板的key',
          },
          {
            name: '切换动画',
            types: [
              {
                type: 'whether',
                default: true,
              },
            ],
            id: '641a7053cf44f6204642baab',
            key: 'animated',
            default: 'true',
            desc: '是否使用动画切换Tabs，在 tabPosition=top|bottom 时有效',
          },
          {
            name: '隐藏加号',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642baac',
            key: 'hideAdd',
            default: 'FALSE',
            desc: '是否隐藏加号图标，在 type="editable-card" 时有效',
          },
          {
            name: '大小',
            types: [
              {
                type: 'option',
                multiple: false,
                default: 'default',
                rules: {
                  items: [
                    {
                      label: '大',
                      value: 'large',
                    },
                    {
                      label: '中',
                      value: 'default',
                    },
                    {
                      label: '小',
                      value: 'small',
                    },
                  ],
                },
              },
            ],
            id: '641a7053cf44f6204642baad',
            key: 'size',
            default: 'default',
            desc: '大小，提供 large default 和 small 三种大小',
          },
          {
            name: '标签样式',
            types: [
              {
                type: 'module',
              },
            ],
            id: '641a7053cf44f6204642baae',
            key: 'tabBarStyle',
            desc: 'tabbar的样式对象',
          },
          {
            name: '标签位置',
            types: [
              {
                type: 'option',
                multiple: false,
                rules: {
                  items: [
                    {
                      label: '顶部',
                      value: 'top',
                    },
                    {
                      label: '右边',
                      value: 'right',
                    },
                    {
                      label: '底部',
                      value: 'bottom',
                    },
                    {
                      label: '左边',
                      value: 'left',
                    },
                  ],
                },
              },
            ],
            id: '641a7053cf44f6204642baaf',
            key: 'tabPosition',
            default: 'top',
            desc: '页签显示的位置',
          },
          {
            name: '标签类型',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '线条',
                      value: 'line',
                    },
                    {
                      label: '卡片',
                      value: 'card',
                    },
                    {
                      label: '可编辑卡片',
                      value: 'editable-card',
                    },
                  ],
                },
              },
            ],
            id: '641a7053cf44f6204642bab0',
            key: 'type',
            default: 'line',
            desc: '页签的基本样式',
          },
          {
            name: '标签间距',
            types: [
              {
                type: 'number',
              },
            ],
            id: 'tabBarGutter',
            key: 'tabBarGutter',
            desc: 'tabs之间的间隙',
          },
          {
            name: '标签居中',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642bab1',
            key: 'centered',
            desc: '标签居中展示',
          },
          {
            name: '销毁 DOM 结构',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642bab2',
            key: 'destroyInactiveTabPane',
            desc: '被隐藏时是否销毁 DOM 结构',
          },
        ],
        events: [
          {
            key: 'change',
            name: '切换面板',
            parameters: [
              {
                name: '新建属性',
                types: [
                  {
                    type: 'text',
                    multiple: false,
                  },
                ],
                id: '6433c91d142f1aa760d86c00',
                key: 'activeKey',
              },
            ],
            id: '641a7053cf44f6204642bab3',
          },
          {
            key: 'edit',
            name: '新增和删除页签',
            parameters: [
              {
                name: '当前激活 tab 面板',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '6433c944142f1aa760d86c01',
                key: 'activeKey',
              },
              {
                name: '行为',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '6433c944142f1aa760d86c02',
                key: 'action',
              },
            ],
            id: '641a7053cf44f6204642bab5',
            desc: '新增和删除页签的回调，在 type="editable-card" 时有效',
          },
          {
            key: 'tabClick',
            name: 'tab被点击',
            id: '641a7053cf44f6204642bab4',
          },
          {
            key: 'tabScroll',
            name: '滚动 TabBar ',
            parameters: [
              {
                name: '方向',
                types: [
                  {
                    type: 'option',
                    multiple: false,
                    rules: {
                      items: [
                        {
                          label: '左',
                          value: 'left',
                        },
                        {
                          label: '右',
                          value: 'right',
                        },
                        {
                          label: '上',
                          value: 'top',
                        },
                        {
                          label: '下',
                          value: 'bottom',
                        },
                      ],
                    },
                  },
                ],
                id: '6433c9a7142f1aa760d86c03',
                key: 'direction',
              },
            ],
            id: '641a7053cf44f6204642bab6',
            desc: '滚动 TabBar 时触发',
          },
        ],
        slots: [
          {
            id: '641a7053cf44f6204642bab7',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: '641a7053cf44f6204642bab8',
            key: 'addIcon',
            parameters: [],
            name: '添加按钮',
            desc: '\t自定义添加按钮',
          },
          {
            id: '641a7053cf44f6204642bab9',
            key: 'leftExtra',
            parameters: [],
            name: '左侧额外元素',
            desc: '\ttab bar 上左侧额外的元素',
          },
          {
            id: '641a7053cf44f6204642baba',
            key: 'moreIcon',
            parameters: [],
            name: '折叠 icon',
            desc: '自定义折叠 icon',
          },
          {
            id: 'renderTabBar',
            key: 'renderTabBar',
            parameters: [],
            name: '替换 TabBar',
            desc: '替换 TabBar，用于二次封装标签头',
          },
          {
            id: '641a7053cf44f6204642babb',
            key: 'rightExtra',
            parameters: [],
            name: '右侧额外元素',
            desc: 'tab bar 上右侧额外的元素',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3d8',
      name: 'TabPane 选项卡面板',
      type: 'element',
      tag: 'a-tab-pane',
      nodes: [],
      spec: {
        props: [
          {
            id: '641a7053cf44f6204642babc',
            key: 'forceRender',
            types: [
              {
                type: 'whether',
              },
            ],
            default: 'FALSE',
            name: '强制渲染',
            desc: '被隐藏时是否渲染DOM结构',
          },
          {
            id: '641a7053cf44f6204642babd',
            key: 'key',
            types: [
              {
                type: 'text',
              },
            ],
            name: '当前标签页',
            desc: '对应activeKey',
          },
          {
            id: '641a7053cf44f6204642babe',
            key: 'tab',
            types: [
              {
                type: 'text',
              },
            ],
            name: '选项卡文字',
            desc: '选项卡头显示文字',
          },
        ],
        slots: [
          {
            id: '641a7053cf44f6204642babf',
            key: 'tab',
            parameters: [],
            name: '选项卡文字',
          },
          {
            id: '641a7053cf44f6204642bac0',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: '641a7053cf44f6204642bac1',
            key: 'closeIcon',
            parameters: [],
            name: '自定义关闭图标',
            desc: '自定义关闭图标，在 type="editable-card"时有效',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa728890b',
      name: 'p 段落',
      type: 'element',
      tag: 'p',
      spec: {
        slots: [
          {
            id: '641a7052cf44f6204642b627',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
        ],
      },
    },
    {
      projectId: '646872354f9dc2ce4a7824ed',
      name: '新闻列表项',
      tag: 'f-ec605e18',
      id: '646ac870c8becd52db147a55',
      nodes: [
        {
          id: 'Z360',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex w-full transition-all hover:shadow-xl ease-in-out duration-150 relative',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Z360#641a95e6cd3c6b0921a79f2a',
          parentId: 'Z360',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S549',
          parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: 'Z846',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'hover:overflow-hidden',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'S549#641a95e6cd3c6b0921a79f2a',
          parentId: 'S549',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'T633',
          parentId: 'S549#641a95e6cd3c6b0921a79f2a',
          tag: 'img',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-[384px] hover:-translate-y-1 hover:scale-110 transform',
              },
              {
                propId: '641a7052cf44f6204642b615',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646ad69dad5484c5ef631bb3',
                  },
                },
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Z846',
          parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: 'S549',
          nextId: 'Q288',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'ml-4 flex flex-col justify-between pb-4',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Z846#641a95e6cd3c6b0921a79f2a',
          parentId: 'Z846',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'E961',
          parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: 'Y615',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'E961#641a95e6cd3c6b0921a79f2a',
          parentId: 'E961',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'N549',
          parentId: 'E961#641a95e6cd3c6b0921a79f2a',
          tag: 'h3',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'M560',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-4xl font-bold mb-4',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N549#641a95e6cd3c6b0921a79f2a',
          parentId: 'N549',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'R550',
          parentId: 'N549#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646ad69dad5484c5ef631bb4',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'M560',
          parentId: 'E961#641a95e6cd3c6b0921a79f2a',
          tag: 'p',
          type: 'element',
          depth: 6,
          preId: 'N549',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-sm',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'M560#641a95e6cd3c6b0921a79f2a',
          parentId: 'M560',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'F524',
          parentId: 'M560#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646ad69dad5484c5ef631bb5',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Y615',
          parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 4,
          preId: 'E961',
          nextId: 'N645',
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Y615#641a7052cf44f6204642b607',
          parentId: 'Y615',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'H755',
          parentId: 'Y615#641a7052cf44f6204642b607',
          tag: 'span',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-12 bg-primary-100 text-primary-500 flex flex-row justify-center items-center rounded-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'H755#641a95e6cd3c6b0921a79f2a',
          parentId: 'H755',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'P205',
          parentId: 'H755#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646b1c9485d85588860507aa',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'N645',
          parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: 'Y615',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N645#641a95e6cd3c6b0921a79f2a',
          parentId: 'N645',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Z806',
          parentId: 'N645#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'E197',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: ' flex items-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Z806#641a95e6cd3c6b0921a79f2a',
          parentId: 'Z806',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'I351',
          parentId: 'Z806#641a95e6cd3c6b0921a79f2a',
          tag: 'icon',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'D822',
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642bbd9',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'icon',
                    value: {
                      lib: 'iconremix',
                      name: 'user-6-fill',
                      colors: ['#a3a3a3'],
                      size: '16px',
                    },
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'D822',
          parentId: 'Z806#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 8,
          preId: 'I351',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-neutral-400 align-medium ml-2',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'D822#641a95e6cd3c6b0921a79f2a',
          parentId: 'D822',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'G164',
          parentId: 'D822#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646ad69dad5484c5ef631bb6',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'E197',
          parentId: 'N645#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'Z806',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mt-2 flex items-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'E197#641a95e6cd3c6b0921a79f2a',
          parentId: 'E197',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'D916',
          parentId: 'E197#641a95e6cd3c6b0921a79f2a',
          tag: 'icon',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'W603',
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642bbd9',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'icon',
                    value: {
                      lib: 'iconremix',
                      name: 'time-fill',
                      colors: ['#a3a3a3'],
                      size: '16px',
                    },
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'W603',
          parentId: 'E197#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 8,
          preId: 'D916',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'text-neutral-400 align-medium ml-2',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W603#641a95e6cd3c6b0921a79f2a',
          parentId: 'W603',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'H570',
          parentId: 'W603#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getCmptPropData',
                  args: {
                    id: '646ad69ead5484c5ef631bb7',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Q288',
          parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: 'Z846',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'absolute right-4 bottom-4',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Q288#641a95e6cd3c6b0921a79f2a',
          parentId: 'Q288',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'D425',
          parentId: 'Q288#641a95e6cd3c6b0921a79f2a',
          tag: 'a-button',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: 'O108',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b65a',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'text',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b65b',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'large',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b65c',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'default',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b664',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: '_blank',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b661',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'submit',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mr-2',
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b665',
                actions: [
                  {
                    id: '646b2c7b85d85588860507af',
                    modeId: '6401884818eda303abe11c42',
                    mode: 'emit',
                    name: '抛事件',
                    type: 'action',
                    args: {
                      eventId: '646b2c2d85d85588860507ab',
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'D425#641a7052cf44f6204642b668',
          parentId: 'D425',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: 'D425#641a7052cf44f6204642b667',
          nextId: null,
          slotId: '641a7052cf44f6204642b668',
        },
        {
          id: 'K594',
          parentId: 'D425#641a7052cf44f6204642b668',
          tag: 'icon',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642bbd9',
                value: {
                  lib: 'iconpark',
                  name: 'delete',
                  colors: ['#000'],
                  size: '16px',
                  strokeWidth: 3,
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'O108',
          parentId: 'Q288#641a95e6cd3c6b0921a79f2a',
          tag: 'a-button',
          type: 'element',
          depth: 4,
          preId: 'D425',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b65a',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'text',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b65b',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'large',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b65c',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'default',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b664',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: '_blank',
                  },
                },
              },
              {
                propId: '641a7052cf44f6204642b661',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'submit',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: '',
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b665',
                actions: [
                  {
                    id: '646b2c8b85d85588860507b1',
                    modeId: '6401884818eda303abe11c42',
                    mode: 'emit',
                    name: '抛事件',
                    type: 'action',
                    args: {
                      eventId: '646b2c2d85d85588860507ac',
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'O108#641a7052cf44f6204642b668',
          parentId: 'O108',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: 'O108#641a7052cf44f6204642b667',
          nextId: null,
          slotId: '641a7052cf44f6204642b668',
        },
        {
          id: 'W828',
          parentId: 'O108#641a7052cf44f6204642b668',
          tag: 'icon',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642bbd9',
                value: {
                  lib: 'iconpark',
                  name: 'edit',
                  colors: ['#000'],
                  size: '16px',
                  strokeWidth: 3,
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
      ],
      decl: [],
      events: [],
      spec: {
        props: [
          {
            name: '新闻图片',
            types: [
              {
                type: 'text',
              },
            ],
            id: '646ad69dad5484c5ef631bb3',
            extendPlatform: true,
            key: 'xinwentupian',
          },
          {
            name: '新闻标题',
            types: [
              {
                type: 'text',
              },
            ],
            id: '646ad69dad5484c5ef631bb4',
            extendPlatform: true,
            key: 'xinwenbiaoti',
          },
          {
            name: '新闻描述',
            types: [
              {
                type: 'text',
              },
            ],
            id: '646ad69dad5484c5ef631bb5',
            extendPlatform: true,
            key: 'xinwenmiaoshu',
          },
          {
            name: '作者',
            types: [
              {
                type: 'text',
              },
            ],
            id: '646ad69dad5484c5ef631bb6',
            extendPlatform: true,
            key: 'zuozhe',
          },
          {
            name: '创建时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '646ad69ead5484c5ef631bb7',
            extendPlatform: true,
            key: 'chuangjianshijian',
          },
          {
            name: '标签',
            types: [
              {
                type: 'text',
                multiple: true,
              },
            ],
            id: '646b1c9485d85588860507aa',
            extendPlatform: true,
            key: 'biaoqian',
          },
        ],
        events: [
          {
            extendPlatform: true,
            id: '646b2c2d85d85588860507ab',
            name: '删除卡片',
            key: 'shanchukapian',
          },
          {
            extendPlatform: true,
            id: '646b2c2d85d85588860507ac',
            name: '修改卡片',
            key: 'xiugaikapian',
          },
        ],
      },
      key: 'xinwenliebiaoxiang',
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa7288903',
      name: 'h3 三级标题',
      type: 'element',
      tag: 'h3',
      spec: {
        slots: [
          {
            id: '641a7052cf44f6204642b623',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
        ],
      },
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc387',
      name: 'Button 按钮',
      type: 'element',
      tag: 'a-button',
      nodes: [],
      spec: {
        props: [
          {
            name: '按钮类型',
            types: [
              {
                type: 'option',
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'primary',
                  },
                },
                rules: {
                  items: [
                    {
                      label: '主按钮',
                      value: 'primary',
                    },
                    {
                      label: '幽灵按钮',
                      value: 'ghost',
                    },
                    {
                      label: '虚线按钮',
                      value: 'dashed',
                    },
                    {
                      label: '链接按钮',
                      value: 'link',
                    },
                    {
                      label: '文本按钮',
                      value: 'text',
                    },
                    {
                      label: '默认按钮',
                      value: 'default',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b65a',
            key: 'type',
            default: 'default',
            desc: '设置按钮类型',
          },
          {
            name: '按钮大小',
            types: [
              {
                type: 'option',
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'middle',
                  },
                },
                rules: {
                  items: [
                    {
                      label: '大',
                      value: 'large',
                    },
                    {
                      label: '中',
                      value: 'middle',
                    },
                    {
                      label: '小',
                      value: 'small',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b65b',
            key: 'size',
            default: 'middle',
            desc: '设置按钮的大小',
          },
          {
            name: '按钮形状',
            types: [
              {
                type: 'option',
                multiple: false,
                default: 'round',
                rules: {
                  items: [
                    {
                      label: '默认',
                      value: 'default',
                    },
                    {
                      label: '圆形',
                      value: 'circle',
                    },
                    {
                      label: '圆角',
                      value: 'round',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b65c',
            key: 'shape',
            desc: '设置按钮类型',
          },
          {
            name: '适应父级宽度',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b660',
            key: 'block',
            desc: '将按钮宽度调整为其父宽度的选项',
          },
          {
            name: '幽灵按钮',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b65d',
            key: 'ghost',
            desc: '幽灵属性，使按钮背景透明',
          },
          {
            name: '危险按钮',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b662',
            key: 'danger',
          },
          {
            name: '加载状态',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b65f',
            key: 'loading',
          },
          {
            name: '禁用',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b65e',
            key: 'disabled',
          },
          {
            name: '按钮跳转地址',
            types: [
              {
                type: 'url',
                rules: {
                  items: [],
                },
              },
            ],
            id: '641a7052cf44f6204642b663',
            key: 'href',
          },
          {
            name: '打开方式',
            types: [
              {
                type: 'option',
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: '_blank',
                  },
                },
                rules: {
                  items: [
                    {
                      label: '新窗口',
                      value: '_blank',
                    },
                    {
                      label: '当前窗口',
                      value: '_self',
                    },
                    {
                      label: '载入父窗口',
                      value: '_parent',
                    },
                    {
                      label: '超链接窗口',
                      value: '_top',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b664',
            key: 'target',
          },
          {
            name: '按钮原生类型',
            types: [
              {
                type: 'option',
                multiple: false,
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'submit',
                  },
                },
                rules: {
                  items: [
                    {
                      label: '提交',
                      value: 'submit',
                    },
                    {
                      label: '按钮',
                      value: 'button',
                    },
                    {
                      label: '清除',
                      value: 'reset',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b661',
            key: 'htmlType',
          },
        ],
        events: [
          {
            key: 'click',
            parameters: [
              {
                name: '事件数据',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '目标',
                          types: [
                            {
                              type: 'module',
                              rules: {
                                properties: [
                                  {
                                    name: '值',
                                    types: [
                                      {
                                        type: 'text',
                                      },
                                    ],
                                    id: '643377e8142f1aa760d86bd8',
                                    key: 'value',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '64337737142f1aa760d86bd7',
                          key: 'target',
                        },
                      ],
                    },
                  },
                ],
                key: 'event',
                id: '641a7052cf44f6204642b666',
              },
            ],
            name: '点击按钮',
            id: '641a7052cf44f6204642b665',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b667',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: '641a7052cf44f6204642b668',
            key: 'icon',
            parameters: [],
            name: '图标',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3a3',
      name: 'Pagination 分页',
      type: 'element',
      tag: 'a-pagination',
      nodes: [],
      spec: {
        props: [
          {
            name: '分页尺寸',
            types: [
              {
                type: 'option',
                multiple: false,
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'default',
                  },
                },
                rules: {
                  items: [
                    {
                      label: '默认',
                      value: 'default',
                    },
                    {
                      label: '较小',
                      value: 'small',
                    },
                    {
                      label: '较大',
                      value: 'large',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b748',
            key: 'size',
            desc: '当为「small」时，是小尺寸分页',
          },
          {
            name: '简单分页',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b747',
            key: 'simple',
            desc: '当添加该属性时，显示为简单分页',
          },
          {
            name: '当前页数',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7052cf44f6204642b73d',
            key: 'current',
            desc: '当前页数',
          },
          {
            name: '默认每页条数',
            types: [
              {
                type: 'number',
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 10,
                  },
                },
              },
            ],
            id: '641a7052cf44f6204642b73f',
            key: 'defaultPageSize',
            default: '10',
            desc: '默认的每页条数',
          },
          {
            name: '数据总数',
            types: [
              {
                type: 'number',
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 0,
                  },
                },
              },
            ],
            id: '641a7052cf44f6204642b749',
            key: 'total',
            default: '0',
            desc: '数据总数',
          },
          {
            name: '禁用',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b740',
            key: 'disabled',
            desc: '禁用分页',
          },
          {
            name: '单页时隐藏',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b741',
            key: 'hideOnSinglePage',
            default: 'false',
            desc: '只有一页时是否隐藏分页器',
          },
          {
            name: '每页条数',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7052cf44f6204642b73e',
            key: 'pageSize',
            desc: '每页条数',
          },
          {
            name: '指定每页条数',
            types: [
              {
                type: 'text',
                multiple: true,
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: [
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'text',
                          value: '10',
                        },
                      },
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'text',
                          value: '20',
                        },
                      },
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'text',
                          value: '30',
                        },
                      },
                      {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'text',
                          value: '40',
                        },
                      },
                    ],
                    multiple: true,
                  },
                },
              },
            ],
            id: '641a7052cf44f6204642b742',
            key: 'pageSizeOptions',
            desc: '指定每页可以显示多少条',
          },
          {
            name: '自动调整宽度',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b74b',
            key: 'responsive',
            desc: '当 size 未指定时，根据屏幕宽度自动调整尺寸',
          },
          {
            name: '实现较少内容',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b743',
            key: 'showLessItems',
            default: 'false',
            desc: '是否显示较少页面内容',
          },
          {
            name: '快速跳转',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b744',
            key: 'showQuickJumper',
            default: 'false',
            desc: '是否可以快速跳转至某页',
          },
          {
            name: '显示页数切换',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b745',
            key: 'showSizeChanger',
            default: 'false',
            desc: '是否展示 pageSize 切换器',
          },
          {
            name: '自定义页码（不支持）',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b74a',
            key: 'itemRender',
            desc: '用于自定义页码的结构，可用于优化 SEO',
          },
          {
            name: '自定义总数（不支持）',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b746',
            key: 'showTotal',
            desc: '用于显示数据总量和当前数据顺序',
          },
        ],
        events: [
          {
            key: 'change',
            name: '页码或每页条数改变时',
            parameters: [
              {
                name: '页面',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '64337f57142f1aa760d86be8',
                key: 'page',
              },
              {
                name: '每页条数',
                types: [
                  {
                    type: 'number',
                  },
                ],
                id: '64337f57142f1aa760d86be9',
                key: 'pagesize',
              },
            ],
            id: '641a7052cf44f6204642b74c',
            desc: '页码或 pageSize 改变的回调，参数是改变后的页码及每页条数',
          },
          {
            key: 'showSizeChange',
            name: '每页条数变化时',
            parameters: [
              {
                name: '当前页数',
                types: [
                  {
                    type: 'number',
                  },
                ],
                id: '643380b7142f1aa760d86bea',
                key: 'current',
                desc: '',
              },
              {
                name: '数量',
                types: [
                  {
                    type: 'number',
                  },
                ],
                id: '643380b7142f1aa760d86beb',
                key: 'size',
              },
            ],
            id: '641a7052cf44f6204642b74d',
            desc: 'pageSize 变化的回调',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b74e',
            key: 'itemRender',
            name: '自定页码结构',
          },
          {
            id: '641a7052cf44f6204642b74f',
            key: 'default',
            isHide: true,
            name: '默认',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3af',
      name: 'Form 表单',
      type: 'element',
      tag: 'a-form',
      nodes: [],
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b841',
            key: 'model',
            types: [
              {
                type: 'module',
              },
            ],
            name: '模块',
          },
          {
            id: '641a7052cf44f6204642b842',
            key: 'rules',
            types: [
              {
                type: 'module',
              },
            ],
            name: '规则',
          },
          {
            id: '641a7052cf44f6204642b843',
            key: 'hideRequiredMark',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '隐藏必选',
          },
          {
            id: '641a7052cf44f6204642b844',
            key: 'labelAlign',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '左对齐',
                      value: 'left',
                    },
                    {
                      label: '右对齐',
                      value: 'right',
                    },
                  ],
                },
              },
            ],
            name: '文本对齐',
          },
          {
            id: '641a7052cf44f6204642b845',
            key: 'layout',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '水平',
                      value: 'horizontal',
                    },
                    {
                      label: '垂直',
                      value: 'vertical',
                    },
                    {
                      label: '内嵌',
                      value: 'inline',
                    },
                  ],
                },
              },
            ],
            name: '表单布局',
          },
          {
            id: '641a7052cf44f6204642b846',
            key: 'labelCol',
            types: [
              {
                type: 'module',
              },
            ],
            name: '标签宽度',
          },
          {
            id: '641a7052cf44f6204642b847',
            key: 'wrapperCol',
            types: [
              {
                type: 'module',
              },
            ],
            name: '排版样式',
          },
          {
            id: '641a7052cf44f6204642b848',
            key: 'colon',
            types: [
              {
                type: 'whether',
              },
            ],
            default: true,
            name: '冒号',
          },
          {
            id: '641a7052cf44f6204642b849',
            key: 'validateOnRuleChange',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '触发验证',
          },
          {
            id: '641a7052cf44f6204642b84a',
            key: 'scrollToFirstError',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '滚动到错误',
          },
          {
            id: '641a7052cf44f6204642b84b',
            key: 'name',
            types: [
              {
                type: 'text',
              },
            ],
            name: '名称',
          },
          {
            id: '641a7052cf44f6204642b84c',
            key: 'validateTrigger',
            types: [
              {
                type: 'text',
              },
            ],
            name: '校验规则',
          },
          {
            id: '641a7052cf44f6204642b84d',
            key: 'labelWrap',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '标签换行方式',
            desc: 'label 标签的文本换行方式',
          },
          {
            id: '641a7052cf44f6204642b84e',
            key: 'noStyle',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '样式',
            desc: '为 true 时不带样式，作为纯字段控件使用',
          },
        ],
        events: [
          {
            key: 'finish',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                    multiple: true,
                  },
                ],
                key: 'value',
                id: '641a7052cf44f6204642b852',
              },
            ],
            name: '提交表单且数据验证成功',
            id: '641a7052cf44f6204642b851',
          },
          {
            key: 'FinishFailed',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'unknown',
                  },
                ],
                key: 'values',
                id: '641a7052cf44f6204642b854',
              },
              {
                name: '错误字段',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642f8c0afa0f4c663f442c90',
                key: 'errorFields',
              },
              {
                name: '过期',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642f8c0afa0f4c663f442c91',
                key: 'outOfDate ',
              },
            ],
            name: '提交表单且数据验证失败',
            id: '641a7052cf44f6204642b853',
          },
          {
            extendPlatform: true,
            key: 'submit',
            name: '数据验证成功',
            parameters: [
              {
                name: '事件数据',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '目标',
                          types: [
                            {
                              type: 'module',
                              rules: {
                                properties: [
                                  {
                                    name: '值',
                                    types: [
                                      {
                                        type: 'text',
                                      },
                                    ],
                                    id: '642f8ba3fa0f4c663f442c8c',
                                    key: 'value',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '642f8b93fa0f4c663f442c8b',
                          key: 'target',
                        },
                      ],
                    },
                  },
                ],
                id: '642f8b7efa0f4c663f442c8a',
                key: 'event',
              },
            ],
            id: '642b956c9d9bbcb336f978dd',
            desc: '数据验证成功后回调事件',
          },
          {
            extendPlatform: true,
            key: 'validate',
            name: '任一表单项被校验',
            parameters: [
              {
                name: '名称',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642f8bb5fa0f4c663f442c8d',
                key: 'name',
              },
              {
                name: '地位',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642f8bb5fa0f4c663f442c8e',
                key: 'status',
                desc: '',
              },
              {
                name: '错误信息',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642f8bb6fa0f4c663f442c8f',
                key: 'errorMsgs',
              },
            ],
            id: '642b95829d9bbcb336f978de',
            desc: '任一表单项被校验后触发',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b856',
            key: 'default',
            isHide: true,
            name: '默认',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3b0',
      name: 'FormItem 表单项',
      type: 'element',
      tag: 'a-form-item',
      nodes: [],
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b857',
            key: 'name',
            types: [
              {
                type: 'text',
              },
            ],
            name: '表单模块名称',
          },
          {
            id: '641a7052cf44f6204642b858',
            key: 'rules',
            types: [
              {
                type: 'unknown',
                multiple: true,
              },
            ],
            name: '校验规则',
          },
          {
            id: '641a7052cf44f6204642b859',
            key: 'autoLink',
            types: [
              {
                type: 'whether',
              },
            ],
            default: true,
            name: '自动关联',
          },
          {
            id: '641a7052cf44f6204642b85a',
            key: 'colon',
            types: [
              {
                type: 'whether',
              },
            ],
            default: true,
            name: '冒号',
          },
          {
            id: '641a7052cf44f6204642b85b',
            key: 'hasFeedback',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '校验状态图标',
          },
          {
            id: '641a7052cf44f6204642b85c',
            key: 'help',
            types: [
              {
                type: 'text',
              },
            ],
            name: '提示信息',
          },
          {
            id: '641a7052cf44f6204642b85d',
            key: 'htmlFor',
            types: [
              {
                type: 'text',
              },
            ],
            name: '标签属性',
          },
          {
            id: '641a7052cf44f6204642b85e',
            key: 'label',
            types: [
              {
                type: 'text',
              },
            ],
            name: '标签文本',
          },
          {
            id: '641a7052cf44f6204642b85f',
            key: 'labelCol',
            types: [
              {
                type: 'module',
              },
            ],
            name: '标签布局',
          },
          {
            id: '641a7052cf44f6204642b860',
            key: 'labelAlign',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '左对齐',
                      value: 'left',
                    },
                    {
                      label: '右对齐',
                      value: 'right',
                    },
                  ],
                },
              },
            ],
            name: '标签文本对齐',
          },
          {
            id: '641a7052cf44f6204642b861',
            key: 'required',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '是否必填',
            desc: '是否必填，如不设置，则会根据校验规则自动生成',
          },
          {
            id: '641a7052cf44f6204642b862',
            key: 'validateStatus',
            types: [
              {
                type: 'text',
              },
            ],
            name: '校验状态',
            desc: "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'",
          },
          {
            id: '641a7052cf44f6204642b863',
            key: 'wrapperCol',
            types: [
              {
                type: 'module',
              },
            ],
            name: '输入框排版',
          },
          {
            id: '641a7052cf44f6204642b864',
            key: 'validateFirst',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '跳过校验',
          },
          {
            id: '641a7052cf44f6204642b865',
            key: 'validateTrigger',
            types: [
              {
                type: 'text',
              },
            ],
            name: '字段校验规则',
          },
          {
            id: '641a7052cf44f6204642b866',
            key: 'extra',
            types: [
              {
                type: 'text',
              },
            ],
            name: '额外提示信息',
            desc: '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个',
          },
        ],
        events: [
          {
            key: 'finish',
            name: '提交表单成功回调',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                    multiple: true,
                  },
                ],
                id: '642f8d41fa0f4c663f442c93',
                key: 'value',
              },
            ],
            id: '641a7052cf44f6204642b867',
            desc: '提交表单且数据验证成功后回调事件',
          },
          {
            key: 'finishFailed',
            name: '提交表单失败回调',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                    multiple: true,
                  },
                ],
                id: '642f8d8afa0f4c663f442c94',
                key: 'value',
              },
              {
                name: '报错信息',
                types: [
                  {
                    type: 'text',
                    multiple: true,
                  },
                ],
                id: '642f8d8afa0f4c663f442c95',
                key: 'errorField',
              },
              {
                name: '废弃数据',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642f8d8bfa0f4c663f442c96',
                key: 'outOfDate ',
                desc: '',
              },
            ],
            id: 'finishFailed',
            desc: '提交表单且数据验证失败后回调事件',
          },
          {
            key: 'submit',
            name: '数据验证成功回调',
            parameters: [
              {
                name: '事件数据',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '目标',
                          types: [
                            {
                              type: 'module',
                              rules: {
                                properties: [
                                  {
                                    name: '值',
                                    types: [
                                      {
                                        type: 'text',
                                      },
                                    ],
                                    id: '642f8df0fa0f4c663f442c99',
                                    key: 'value',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '642f8de3fa0f4c663f442c98',
                          key: 'target',
                        },
                      ],
                    },
                  },
                ],
                id: '642f8dcafa0f4c663f442c97',
                key: 'event',
              },
            ],
            id: '641a7052cf44f6204642b868',
            desc: '数据验证成功后回调事件',
          },
          {
            key: 'validate',
            name: '任一表单项触发',
            parameters: [
              {
                name: '名称',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642f8e05fa0f4c663f442c9a',
                key: 'name',
              },
              {
                name: '身份',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642f8e05fa0f4c663f442c9b',
                key: 'status',
              },
              {
                name: '错误信息',
                types: [
                  {
                    type: 'text',
                    multiple: true,
                  },
                ],
                id: '642f8e05fa0f4c663f442c9c',
                key: 'errorMsg',
              },
            ],
            id: '641a7052cf44f6204642b869',
            desc: '任一表单项被校验后触发',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b86a',
            key: 'extra',
            name: '附加信息',
          },
          {
            id: '641a7052cf44f6204642b86b',
            key: 'help',
            name: '提示信息',
          },
          {
            id: '641a7052cf44f6204642b86c',
            key: 'default',
            isHide: true,
            name: '默认',
          },
          {
            id: '641a7052cf44f6204642b86d',
            key: 'label',
            name: '标签文本',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3b1',
      name: 'Input 输入框',
      type: 'element',
      tag: 'a-input',
      nodes: [],
      spec: {
        props: [
          {
            name: '默认内容',
            types: [
              {
                type: 'text',
              },
            ],
            id: 'defaultValue',
            key: 'defaultValue',
            desc: '输入框默认内容',
          },
          {
            name: '禁用状态',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b86e',
            key: 'disabled',
            default: 'false',
          },
          {
            name: '唯一标识',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b86f',
            key: 'id',
          },
          {
            name: '最大长度',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7052cf44f6204642b870',
            key: 'maxlength',
          },
          {
            name: '前缀图标',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b871',
            key: 'prefix',
          },
          {
            name: '尺寸',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '大',
                      value: 'large',
                    },
                    {
                      label: '中',
                      value: 'default',
                    },
                    {
                      label: '小',
                      value: 'small',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b872',
            key: 'size',
            default: 'default',
          },
          {
            name: '后缀图标',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b873',
            key: 'suffix',
          },
          {
            name: '输入框类型',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '文本',
                      value: 'text',
                    },
                    {
                      label: '密码',
                      value: 'password',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b874',
            key: 'type',
            default: 'text',
          },
          {
            name: '输入框内容',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b875',
            key: 'value',
          },
          {
            name: '显示清除',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b876',
            key: 'allowClear',
          },
          {
            name: '边框',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b877',
            key: 'bordered',
            default: true,
            desc: '是否有边框',
          },
          {
            name: '展示字数',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b878',
            key: 'showCount',
            desc: '是否展示字数',
          },
          {
            name: '后置标签',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b879',
            key: 'addonAfter',
            desc: '带标签的 input，设置后置标签',
          },
          {
            name: '前置标签',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b87a',
            key: 'addonBefore',
            desc: '带标签的 input，设置前置标签',
          },
          {
            name: '默认提示',
            types: [
              {
                type: 'text',
              },
            ],
            id: '646b06ea0cba6dfc9f64b088',
            extendPlatform: true,
            key: 'placeholder',
          },
        ],
        events: [
          {
            key: 'change',
            name: '值改变',
            parameters: [
              {
                name: '事件数据',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '目标',
                          types: [
                            {
                              type: 'module',
                              rules: {
                                properties: [
                                  {
                                    name: '值',
                                    types: [
                                      {
                                        type: 'text',
                                      },
                                    ],
                                    id: '642be22b451c381a2ec381f7',
                                    key: 'value',
                                  },
                                  {
                                    name: 'focus',
                                    types: [
                                      {
                                        type: 'action',
                                      },
                                    ],
                                    id: '642be234451c381a2ec381f8',
                                    key: 'focus',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '642b8a909a04dc6fabaa5d56',
                          key: 'target',
                        },
                      ],
                    },
                  },
                ],
                id: '642b8a819a04dc6fabaa5d55',
                key: 'event',
              },
            ],
            id: '641a7052cf44f6204642b87b',
          },
          {
            key: 'pressEnter',
            name: '按下回车',
            parameters: [
              {
                name: '事件数据',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '目标',
                          types: [
                            {
                              type: 'module',
                              rules: {
                                properties: [
                                  {
                                    name: '值',
                                    types: [
                                      {
                                        type: 'text',
                                      },
                                    ],
                                    id: '642f7fb56c9551f4750537bf',
                                    key: 'value',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '642f7fac6c9551f4750537be',
                          key: 'target',
                        },
                      ],
                    },
                  },
                ],
                id: '642f7f986c9551f4750537bd',
                key: 'event',
              },
            ],
            id: '641a7052cf44f6204642b87c',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b87d',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: '641a7052cf44f6204642b87e',
            key: 'addonAfter',
            parameters: [],
            name: '后置标签',
          },
          {
            id: '641a7052cf44f6204642b87f',
            key: 'addonBefore',
            parameters: [],
            name: '前置标签',
          },
          {
            id: '641a7052cf44f6204642b880',
            key: 'prefix',
            parameters: [],
            name: '前缀图标',
            desc: '带有前缀图标的 input',
          },
          {
            id: '641a7052cf44f6204642b881',
            key: 'suffix',
            parameters: [],
            name: '后缀图标',
            desc: '带有后缀图标的 input',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3bb',
      name: 'Select 选择器',
      type: 'element',
      tag: 'a-select',
      nodes: [],
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b8d3',
            key: 'allowClear',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '清除',
            desc: '支持清除',
          },
          {
            id: '641a7052cf44f6204642b8d4',
            key: 'autoClearSearchValue',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '选中清除',
            desc: '是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。',
          },
          {
            id: '641a7052cf44f6204642b8d5',
            key: 'autofocus',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '获取焦点',
            desc: '默认获取焦点',
          },
          {
            id: '641a7052cf44f6204642b8d6',
            key: 'bordered',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '边框',
            desc: '是否有边框',
          },
          {
            id: '641a7052cf44f6204642b8d7',
            key: 'defaultActiveFirstOption',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '默认高亮',
            desc: '默认高亮',
          },
          {
            id: '641a7052cf44f6204642b8d8',
            key: 'disabled',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '禁用',
            desc: '是否禁用',
          },
          {
            id: '641a7052cf44f6204642b8d9',
            key: 'dropdownClassName',
            types: [
              {
                type: 'text',
              },
            ],
            name: '下拉菜单名',
            desc: '下拉菜单的 className 属性',
          },
          {
            id: '641a7052cf44f6204642b8da',
            key: 'dropdownMatchSelectWidth',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '同宽',
            desc: '下拉菜单和选择器同宽',
          },
          {
            id: '641a7052cf44f6204642b8db',
            key: 'dropdownRender',
            types: [
              {
                type: 'unknown',
              },
            ],
            name: '下拉菜单内容',
            desc: '自定义下拉框内容',
          },
          {
            id: '641a7052cf44f6204642b8dc',
            key: 'dropdownStyle',
            types: [
              {
                type: 'module',
              },
            ],
            name: '下拉菜单样式',
            desc: '下拉菜单的 style 属性',
          },
          {
            id: '641a7052cf44f6204642b8dd',
            key: 'dropdownMenuStyle',
            types: [
              {
                type: 'module',
              },
            ],
            name: '自定义样式',
            desc: 'dropdown 菜单自定义样式',
          },
          {
            id: 'filterOption',
            key: 'filterOption',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '筛选',
            desc: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',
          },
          {
            id: '641a7052cf44f6204642b8de',
            key: 'firstActiveValue',
            types: [
              {
                type: 'text',
              },
            ],
            name: '高亮选项',
            desc: '默认高亮的选项',
          },
          {
            id: '641a7052cf44f6204642b8df',
            key: 'getPopupContainer',
            types: [
              {
                type: 'unknown',
              },
            ],
            name: '弹出容器',
            desc: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
          },
          {
            id: 'labelInValue',
            key: 'labelInValue',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '选中文本节点',
            desc: '是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式',
          },
          {
            id: '641a7052cf44f6204642b8e0',
            key: 'maxTagCount',
            types: [
              {
                type: 'number',
              },
            ],
            name: '最大标签数',
            desc: '最多显示多少个 tag',
          },
          {
            id: '641a7052cf44f6204642b8e1',
            key: 'maxTagPlaceholder',
            types: [
              {
                type: 'unknown',
              },
            ],
            name: '标签数提示',
            desc: '隐藏 tag 时显示的内容',
          },
          {
            id: '641a7052cf44f6204642b8e2',
            key: 'maxTagTextLength',
            types: [
              {
                type: 'number',
              },
            ],
            name: '文本长度',
            desc: '最大显示的 tag 文本长度',
          },
          {
            id: '641a7052cf44f6204642b8e3',
            key: 'mode',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '多选',
                      value: 'multiple',
                    },
                    {
                      label: '标签',
                      value: 'tags',
                    },
                    {
                      label: '下拉框',
                      value: 'combobox',
                    },
                  ],
                },
              },
            ],
            name: '模式',
            desc: '设置 Select 的模式为多选或标签',
          },
          {
            id: '641a7052cf44f6204642b8e4',
            key: 'notFoundContent',
            types: [
              {
                type: 'text',
              },
            ],
            name: '空内容',
            desc: '当下拉列表为空时显示的内容',
          },
          {
            id: '641a7052cf44f6204642b8e5',
            key: 'optionFilterProp',
            types: [
              {
                type: 'text',
              },
            ],
            name: '过滤选项',
            desc: '搜索时过滤对应的 option 属性，不支持 children',
          },
          {
            id: '641a7052cf44f6204642b8e6',
            key: 'optionLabelProp',
            types: [
              {
                type: 'text',
              },
            ],
            name: '填入选项',
            desc: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。',
          },
          {
            id: '641a7052cf44f6204642b8e7',
            key: 'showSearch',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '单选可搜索',
            desc: '单选可搜索',
          },
          {
            id: '641a7052cf44f6204642b8e8',
            key: 'showArrow',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '显示箭头',
            desc: '是否显示下拉小箭头',
          },
          {
            id: '641a7052cf44f6204642b8e9',
            key: 'size',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '大',
                      value: 'large',
                    },
                    {
                      label: '小',
                      value: 'small',
                    },
                  ],
                },
              },
            ],
            name: '选择框大小',
            desc: '选择框大小，可选 large small',
          },
          {
            id: '641a7052cf44f6204642b8ea',
            key: 'tokenSeparators',
            types: [
              {
                type: 'text',
              },
            ],
            name: '分隔符',
            desc: '在 tags 和 multiple 模式下自动分词的分隔符',
          },
          {
            id: '641a7052cf44f6204642b8eb',
            key: 'value',
            types: [
              {
                type: 'text',
              },
            ],
            name: '选中条目',
            desc: '指定当前选中的条目',
          },
          {
            id: '641a7052cf44f6204642b8ec',
            key: 'options',
            types: [
              {
                type: 'unknown',
                multiple: true,
              },
            ],
            name: '数据选项',
            desc: 'options 数据，如果设置则不需要手动构造 selectOption 节点',
          },
          {
            id: '641a7052cf44f6204642b8ed',
            key: 'defaultOpen',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '展开下拉菜单',
            desc: '是否默认展开下拉菜单',
          },
          {
            id: '641a7052cf44f6204642b8ee',
            key: 'open',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '展开菜单',
            desc: '是否展开下拉菜单',
          },
          {
            id: '641a7052cf44f6204642b8ef',
            key: 'placeholder',
            types: [
              {
                type: 'text',
              },
            ],
            default: '请选择...',
            name: '默认文本',
            desc: '选择框默认文字',
          },
          {
            id: '641a7052cf44f6204642b8f0',
            key: 'clearIcon',
            types: [
              {
                type: 'text',
              },
            ],
            name: '清空图标',
            desc: '自定义的多选框清空图标',
          },
          {
            id: '641a7052cf44f6204642b8f1',
            key: 'fieldNames',
            types: [
              {
                type: 'text',
              },
            ],
            name: '节点字段',
            desc: '自定义节点 label、value、options 的字段',
          },
          {
            id: '641a7052cf44f6204642b8f2',
            key: 'filterSort',
            types: [
              {
                type: 'text',
              },
            ],
            name: '筛选排序',
            desc: '搜索时对筛选结果项的排序函数, 类似Array.sort里的 ',
          },
          {
            id: '641a7052cf44f6204642b8f3',
            key: 'listHeight',
            types: [
              {
                type: 'number',
              },
            ],
            default: 256,
            name: '弹窗滚动高度',
            desc: '设置弹窗滚动高度',
          },
          {
            id: '641a7052cf44f6204642b8f4',
            key: 'menuItemSelectedIcon',
            types: [
              {
                type: 'text',
              },
            ],
            name: '条目图标',
            desc: '自定义当前选中的条目图标',
          },
          {
            id: '641a7052cf44f6204642b8f5',
            key: 'option',
            types: [
              {
                type: 'text',
              },
            ],
            name: '自定义节点',
            desc: '通过 option 插槽，自定义节点',
          },
          {
            id: '641a7052cf44f6204642b8f6',
            key: 'removeIcon',
            types: [
              {
                type: 'text',
              },
            ],
            name: '清除图标',
            desc: '自定义的多选框清除图标',
          },
          {
            id: '641a7052cf44f6204642b8f7',
            key: 'suffixIcon',
            types: [
              {
                type: 'text',
              },
            ],
            name: '后缀图标',
            desc: '自定义的选择框后缀图标',
          },
          {
            id: '641a7052cf44f6204642b8f8',
            key: 'tagRender',
            types: [
              {
                type: 'text',
              },
            ],
            name: '自定义 tag 内容 render，仅在 mode 为 multiple 或 tags 时生效',
            desc: '自定义 tag 内容',
          },
          {
            id: '641a7052cf44f6204642b8f9',
            key: 'virtual',
            types: [
              {
                type: 'whether',
              },
            ],
            default: true,
            name: '虚拟滚动',
            desc: '设置 false 时关闭虚拟滚动',
          },
          {
            id: '641a7052cf44f6204642b8fa',
            key: 'searchValue',
            types: [
              {
                type: 'text',
              },
            ],
            name: '搜索文本',
            desc: '控制搜索文本',
          },
        ],
        events: [
          {
            key: 'change',
            name: '选中选项/输入值改变',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fb3abfa0f4c663f442cd3',
                key: 'value',
              },
              {
                name: '选项',
                types: [
                  {
                    type: 'module',
                    multiple: true,
                    rules: {
                      properties: [
                        {
                          name: '值',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb3d8fa0f4c663f442cd5',
                          key: 'value',
                        },
                        {
                          name: '标签',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb3d9fa0f4c663f442cd6',
                          key: 'label',
                        },
                        {
                          name: '禁用',
                          types: [
                            {
                              type: 'whether',
                            },
                          ],
                          id: '642fb3d9fa0f4c663f442cd7',
                          key: 'disabled',
                        },
                        {
                          name: '标识',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb3d9fa0f4c663f442cd8',
                          key: 'key',
                        },
                        {
                          name: '标题',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb3d9fa0f4c663f442cd9',
                          key: 'title',
                        },
                      ],
                    },
                  },
                ],
                id: '642fb3b5fa0f4c663f442cd4',
                key: 'option',
              },
            ],
            id: '641a7052cf44f6204642b8fb',
            desc: '选中 option，或 input 的 value 变化时，调用此函数',
          },
          {
            key: 'select',
            name: '被选中',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fb4d5fa0f4c663f442ce2',
                key: 'value',
              },
              {
                name: '选项值',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '值',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb4f5fa0f4c663f442ce5',
                          key: 'value',
                        },
                        {
                          name: '标签',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb4f5fa0f4c663f442ce6',
                          key: 'label',
                        },
                        {
                          name: '禁用',
                          types: [
                            {
                              type: 'whether',
                            },
                          ],
                          id: '642fb4f5fa0f4c663f442ce7',
                          key: 'disabled',
                        },
                        {
                          name: '标识',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb4f6fa0f4c663f442ce8',
                          key: 'key',
                        },
                        {
                          name: '标题',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb4f6fa0f4c663f442ce9',
                          key: 'title',
                        },
                      ],
                    },
                  },
                ],
                id: '642fb4d5fa0f4c663f442ce3',
                key: 'option',
              },
            ],
            id: '641a7052cf44f6204642b8fc',
            desc: '被选中时调用，参数为选中项的 value (或 key) 值',
          },
          {
            key: 'blur',
            name: '失去焦点',
            id: '641a7052cf44f6204642b8fd',
            desc: '失去焦点的时回调',
          },
          {
            key: 'deselect',
            name: '取消选中',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fb430fa0f4c663f442cdb',
                key: 'value',
              },
              {
                name: '选项',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '值',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb448fa0f4c663f442cdd',
                          key: 'value',
                        },
                        {
                          name: '标签',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb448fa0f4c663f442cde',
                          key: 'label',
                        },
                        {
                          name: '禁用',
                          types: [
                            {
                              type: 'whether',
                            },
                          ],
                          id: '642fb448fa0f4c663f442cdf',
                          key: 'disabled',
                        },
                        {
                          name: '标识',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb448fa0f4c663f442ce0',
                          key: 'key',
                        },
                        {
                          name: '标题',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fb47ffa0f4c663f442ce1',
                          key: 'title',
                        },
                      ],
                    },
                  },
                ],
                id: '642fb430fa0f4c663f442cdc',
                key: 'option',
              },
            ],
            id: '641a7052cf44f6204642b8fe',
            desc: '取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效',
          },
          {
            key: 'dropdownVisibleChange',
            name: '展开下拉菜单',
            parameters: [
              {
                name: '是否展开下拉菜单',
                types: [
                  {
                    type: 'whether',
                  },
                ],
                id: '642fb024fa0f4c663f442cd2',
                key: 'open',
              },
            ],
            id: '641a7052cf44f6204642b8ff',
            desc: '展开下拉菜单的回调',
          },
          {
            key: 'focus',
            name: '获得焦点',
            id: '641a7052cf44f6204642b900',
            desc: '获得焦点时回调',
          },
          {
            key: 'inputKeyDown',
            name: '键盘按下',
            id: 'inputKeyDown',
            desc: '键盘按下时回调',
          },
          {
            key: 'mouseenter',
            name: '鼠标移入',
            id: '641a7052cf44f6204642b901',
            desc: '鼠标移入时回调',
          },
          {
            key: 'mouseleave',
            name: '鼠标移出',
            id: '641a7052cf44f6204642b902',
            desc: '鼠标移出时回调',
          },
          {
            key: 'popupScroll',
            name: '下拉列表滚动',
            id: '641a7052cf44f6204642b903',
            desc: '下拉列表滚动时的回调',
          },
          {
            key: 'search',
            name: '值变化',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642faefafa0f4c663f442ccb',
                key: 'value',
              },
            ],
            id: '641a7052cf44f6204642b904',
            desc: '文本框值变化时回调',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b905',
            key: 'dropdownRender',
            parameters: [],
            name: '下拉框内容',
          },
          {
            id: '641a7052cf44f6204642b906',
            key: 'maxTagPlaceholder',
            parameters: [],
            name: '隐藏tag显示内容',
          },
          {
            id: '641a7052cf44f6204642b907',
            key: 'notFoundContent',
            parameters: [],
            name: '空值显示内容',
          },
          {
            id: '641a7052cf44f6204642b908',
            key: 'suffixIcon',
            parameters: [],
            name: '后缀图标',
          },
          {
            id: '641a7052cf44f6204642b909',
            key: 'removeIcon',
            parameters: [],
            name: '清除图标',
          },
          {
            id: '641a7052cf44f6204642b90a',
            key: 'menuItemSelectedIcon',
            parameters: [],
            name: '选中图标',
          },
          {
            id: '641a7052cf44f6204642b90b',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6358fb8554bb9b1c84ce47a2',
      id: '62c68d5d27d4bddfa728891f',
      name: '富文本编辑器',
      type: 'element',
      tag: 'md-editor',
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b637',
            key: 'value',
            types: [
              {
                type: 'text',
                ui: {
                  tag: 'string-md',
                },
              },
            ],
            name: '文本值',
          },
        ],
        events: [
          {
            id: '641a7052cf44f6204642b638',
            key: 'change',
            name: '输入值',
          },
        ],
      },
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3d9',
      name: 'Tag 标签',
      type: 'element',
      tag: 'a-tag',
      nodes: [],
      spec: {
        props: [
          {
            name: '可关闭',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642bac2',
            key: 'closable',
            default: 'FALSE',
            desc: '标签是否可以关闭',
          },
          {
            name: '关闭按钮',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642bac3',
            key: 'closeIcon',
            desc: '自定义关闭按钮',
          },
          {
            name: '标签色',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7053cf44f6204642bac4',
            key: 'color',
            desc: '标签色',
          },
          {
            name: '图标',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642bac5',
            key: 'icon',
            desc: '设置图标',
          },
          {
            name: '显示标签',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642bac6',
            key: 'visible',
            default: 'TRUE',
            desc: '是否显示标签',
          },
        ],
        events: [
          {
            key: 'close',
            parameters: [
              {
                name: '事件数据',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '目标',
                          types: [
                            {
                              type: 'module',
                              rules: {
                                properties: [
                                  {
                                    name: '值',
                                    types: [
                                      {
                                        type: 'text',
                                      },
                                    ],
                                    id: '6433ca07142f1aa760d86c05',
                                    key: 'value',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '6433c9f9142f1aa760d86c04',
                          key: 'target',
                        },
                      ],
                    },
                  },
                ],
                key: 'event',
                id: '641a7053cf44f6204642bac8',
              },
            ],
            name: '关闭标签',
            id: '641a7053cf44f6204642bac7',
          },
        ],
        slots: [
          {
            id: '641a7053cf44f6204642bac9',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: '641a7053cf44f6204642baca',
            key: 'closeIcon',
            parameters: [],
            name: '\t自定义关闭按钮',
            desc: '\t自定义关闭按钮',
          },
          {
            id: '641a7053cf44f6204642bacb',
            key: 'icon',
            parameters: [],
            name: '\t设置图标',
            desc: '\t设置图标',
          },
        ],
      },
      classes: [],
    },
    {
      projectId: '646872354f9dc2ce4a7824ed',
      name: '页脚',
      tag: 'f-d62a8c30',
      id: '6468bfc74f9dc2ce4a782668',
      nodes: [
        {
          id: 'D600',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex justify-center w-screen align-middle content-center bg-gray-800',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'D600#641a95e6cd3c6b0921a79f2a',
          parentId: 'D600',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Z579',
          parentId: 'D600#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex m-auto bg-gray-800 pt-12 flex-wrap text-white text-opacity-50 w-[1400px]',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Z579#641a95e6cd3c6b0921a79f2a',
          parentId: 'Z579',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'H413',
          parentId: 'Z579#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: 'Z812',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex justify-between w-full',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'H413#641a95e6cd3c6b0921a79f2a',
          parentId: 'H413',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Q226',
          parentId: 'H413#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'N835',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-3/5',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Q226#641a95e6cd3c6b0921a79f2a',
          parentId: 'Q226',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'E146',
          parentId: 'Q226#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'L934',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex justify-between mb-12 w-3/5',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'E146#641a95e6cd3c6b0921a79f2a',
          parentId: 'E146',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'M822',
          parentId: 'E146#641a95e6cd3c6b0921a79f2a',
          tag: 'ul',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: 'C902',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'M822#641a95e6cd3c6b0921a79f2a',
          parentId: 'M822',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'N007',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: 'N831',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N007#641a95e6cd3c6b0921a79f2a',
          parentId: 'N007',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'U225',
          parentId: 'N007#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '品牌资源',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'N831',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'N007',
          nextId: 'C192',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N831#641a95e6cd3c6b0921a79f2a',
          parentId: 'N831',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'O017',
          parentId: 'N831#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'O017#641a95e6cd3c6b0921a79f2a',
          parentId: 'O017',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'D053',
          parentId: 'O017#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Steelcase',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'C192',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'N831',
          nextId: 'W335',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C192#641a95e6cd3c6b0921a79f2a',
          parentId: 'C192',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'K105',
          parentId: 'C192#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'K105#641a95e6cd3c6b0921a79f2a',
          parentId: 'K105',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'O505',
          parentId: 'K105#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'EGGER',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'W335',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'C192',
          nextId: 'N222',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W335#641a95e6cd3c6b0921a79f2a',
          parentId: 'W335',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W255',
          parentId: 'W335#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W255#641a95e6cd3c6b0921a79f2a',
          parentId: 'W255',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'I515',
          parentId: 'W255#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'CLEAF',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'N222',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'W335',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N222#641a95e6cd3c6b0921a79f2a',
          parentId: 'N222',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'J555',
          parentId: 'N222#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'J555#641a95e6cd3c6b0921a79f2a',
          parentId: 'J555',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Y449',
          parentId: 'J555#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Waldmann\n',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'C902',
          parentId: 'E146#641a95e6cd3c6b0921a79f2a',
          tag: 'ul',
          type: 'element',
          depth: 10,
          preId: 'M822',
          nextId: 'U684',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C902#641a95e6cd3c6b0921a79f2a',
          parentId: 'C902',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'X821',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: 'W231',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'X821#641a95e6cd3c6b0921a79f2a',
          parentId: 'X821',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'L889',
          parentId: 'X821#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '品牌资源',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'W231',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'X821',
          nextId: 'Y064',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W231#641a95e6cd3c6b0921a79f2a',
          parentId: 'W231',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'C771',
          parentId: 'W231#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C771#641a95e6cd3c6b0921a79f2a',
          parentId: 'C771',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'R433',
          parentId: 'C771#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Steelcase',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Y064',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'W231',
          nextId: 'D622',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Y064#641a95e6cd3c6b0921a79f2a',
          parentId: 'Y064',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'C857',
          parentId: 'Y064#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C857#641a95e6cd3c6b0921a79f2a',
          parentId: 'C857',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'V023',
          parentId: 'C857#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'EGGER',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'D622',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'Y064',
          nextId: 'I997',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'D622#641a95e6cd3c6b0921a79f2a',
          parentId: 'D622',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'R919',
          parentId: 'D622#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'R919#641a95e6cd3c6b0921a79f2a',
          parentId: 'R919',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'G794',
          parentId: 'R919#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'CLEAF',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'I997',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'D622',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'I997#641a95e6cd3c6b0921a79f2a',
          parentId: 'I997',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'C331',
          parentId: 'I997#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C331#641a95e6cd3c6b0921a79f2a',
          parentId: 'C331',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'V709',
          parentId: 'C331#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Waldmann\n',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'U684',
          parentId: 'E146#641a95e6cd3c6b0921a79f2a',
          tag: 'ul',
          type: 'element',
          depth: 10,
          preId: 'C902',
          nextId: 'Q173',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'U684#641a95e6cd3c6b0921a79f2a',
          parentId: 'U684',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'C748',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: 'C355',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C748#641a95e6cd3c6b0921a79f2a',
          parentId: 'C748',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'G608',
          parentId: 'C748#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '品牌资源',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'C355',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'C748',
          nextId: 'M424',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C355#641a95e6cd3c6b0921a79f2a',
          parentId: 'C355',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'C536',
          parentId: 'C355#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'C536#641a95e6cd3c6b0921a79f2a',
          parentId: 'C536',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'A661',
          parentId: 'C536#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Steelcase',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'M424',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'C355',
          nextId: 'W792',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'M424#641a95e6cd3c6b0921a79f2a',
          parentId: 'M424',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'N421',
          parentId: 'M424#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N421#641a95e6cd3c6b0921a79f2a',
          parentId: 'N421',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'N187',
          parentId: 'N421#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'EGGER',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'W792',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'M424',
          nextId: 'J878',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W792#641a95e6cd3c6b0921a79f2a',
          parentId: 'W792',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'J824',
          parentId: 'W792#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'J824#641a95e6cd3c6b0921a79f2a',
          parentId: 'J824',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Y022',
          parentId: 'J824#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'CLEAF',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'J878',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'W792',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'J878#641a95e6cd3c6b0921a79f2a',
          parentId: 'J878',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'V396',
          parentId: 'J878#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'V396#641a95e6cd3c6b0921a79f2a',
          parentId: 'V396',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'J915',
          parentId: 'V396#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Waldmann\n',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Q173',
          parentId: 'E146#641a95e6cd3c6b0921a79f2a',
          tag: 'ul',
          type: 'element',
          depth: 10,
          preId: 'U684',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Q173#641a95e6cd3c6b0921a79f2a',
          parentId: 'Q173',
          tag: 'tpl',
          type: 'element',
          depth: 11,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'B506',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: null,
          nextId: 'F505',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'B506#641a95e6cd3c6b0921a79f2a',
          parentId: 'B506',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'W897',
          parentId: 'B506#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '品牌资源',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'F505',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'B506',
          nextId: 'Y555',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'F505#641a95e6cd3c6b0921a79f2a',
          parentId: 'F505',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'H853',
          parentId: 'F505#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'H853#641a95e6cd3c6b0921a79f2a',
          parentId: 'H853',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'M805',
          parentId: 'H853#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Steelcase',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Y555',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'F505',
          nextId: 'O813',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Y555#641a95e6cd3c6b0921a79f2a',
          parentId: 'Y555',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'H139',
          parentId: 'Y555#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'H139#641a95e6cd3c6b0921a79f2a',
          parentId: 'H139',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'J872',
          parentId: 'H139#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'EGGER',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'O813',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'Y555',
          nextId: 'E565',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'O813#641a95e6cd3c6b0921a79f2a',
          parentId: 'O813',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'X195',
          parentId: 'O813#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'X195#641a95e6cd3c6b0921a79f2a',
          parentId: 'X195',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'K216',
          parentId: 'X195#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'CLEAF',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'E565',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tag: 'li',
          type: 'element',
          depth: 12,
          preId: 'O813',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'E565#641a95e6cd3c6b0921a79f2a',
          parentId: 'E565',
          tag: 'tpl',
          type: 'element',
          depth: 13,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'D257',
          parentId: 'E565#641a95e6cd3c6b0921a79f2a',
          tag: 'a',
          type: 'element',
          depth: 14,
          preId: null,
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'D257#641a95e6cd3c6b0921a79f2a',
          parentId: 'D257',
          tag: 'tpl',
          type: 'element',
          depth: 15,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Z446',
          parentId: 'D257#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 16,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Waldmann\n',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'L934',
          parentId: 'Q226#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: 'E146',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex text-sm text-opacity-60 items-center',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'L934#641a95e6cd3c6b0921a79f2a',
          parentId: 'L934',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'S006',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: 'E524',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '友情链接：',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'E524',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tag: 'img',
          type: 'element',
          depth: 10,
          preId: 'S006',
          nextId: 'Y788',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b615',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'https://image.dreawer.com/pinhui/images/steelcase.png',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'ml-5',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Y788',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tag: 'img',
          type: 'element',
          depth: 10,
          preId: 'E524',
          nextId: 'W219',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b615',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '\thttps://image.dreawer.com/pinhui/images/egger.png',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'ml-5',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'W219',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tag: 'img',
          type: 'element',
          depth: 10,
          preId: 'Y788',
          nextId: 'O417',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b615',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'https://image.dreawer.com/pinhui/images/cleaf.png',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'ml-5',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'O417',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tag: 'img',
          type: 'element',
          depth: 10,
          preId: 'W219',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b615',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '\thttps://image.dreawer.com/pinhui/images/waldmann.png',
                  },
                },
              },
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'ml-5',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N835',
          parentId: 'H413#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 6,
          preId: 'Q226',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'w-2/5 text-opacity-50',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N835#641a95e6cd3c6b0921a79f2a',
          parentId: 'N835',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'N803',
          parentId: 'N835#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'F125',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mb-2',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N803#641a95e6cd3c6b0921a79f2a',
          parentId: 'N803',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'C783',
          parentId: 'N803#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '坪彗（武汉）空间应用设计有限公司',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'F125',
          parentId: 'N835#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: 'N803',
          nextId: 'N715',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mb-2',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'F125#641a95e6cd3c6b0921a79f2a',
          parentId: 'F125',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'J021',
          parentId: 'F125#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '地址：武汉市野芷湖西路16号创意天地10号工坊2层',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'N715',
          parentId: 'N835#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: 'F125',
          nextId: 'R200',
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mb-2',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'N715#641a95e6cd3c6b0921a79f2a',
          parentId: 'N715',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Y216',
          parentId: 'N715#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '邮编：430070',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'R200',
          parentId: 'N835#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 8,
          preId: 'N715',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'mb-2',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'R200#641a95e6cd3c6b0921a79f2a',
          parentId: 'R200',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'G755',
          parentId: 'R200#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '邮箱：marketing@pinwell.net.cn',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Z812',
          parentId: 'Z579#641a95e6cd3c6b0921a79f2a',
          tag: 'div',
          type: 'element',
          depth: 4,
          preId: 'H413',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a95e6cd3c6b0921a79f28',
                value: 'flex justify-between w-full border-t border-gray-600 py-4 text-white text-opacity-60 text-xs',
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'Z812#641a95e6cd3c6b0921a79f2a',
          parentId: 'Z812',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'F954',
          parentId: 'Z812#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'D345',
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'F954#641a95e6cd3c6b0921a79f2a',
          parentId: 'F954',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'B526',
          parentId: 'F954#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '鄂ICP备18020133号',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'D345',
          parentId: 'Z812#641a95e6cd3c6b0921a79f2a',
          tag: 'span',
          type: 'element',
          depth: 6,
          preId: 'F954',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'D345#641a95e6cd3c6b0921a79f2a',
          parentId: 'D345',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'Y726',
          parentId: 'D345#641a95e6cd3c6b0921a79f2a',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: 'Copyright© 2018 - 2024坪彗(武汉)空间应用设计有限公司 | RobotDev提供技术服务',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
      ],
      decl: [],
      events: [],
      key: 'yejiao',
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa72888ff',
      name: 'h1 一级标题',
      type: 'element',
      tag: 'h1',
      spec: {
        slots: [
          {
            id: '641a7052cf44f6204642b621',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
        ],
      },
    },
    {
      productId: '6358fb8554bb9b1c84ce47a2',
      id: '62c68d5d27d4bddfa72888fd',
      name: '富文本',
      type: 'element',
      tag: 'rtf',
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b620',
            key: 'text',
            types: [
              {
                type: 'text',
                ui: {
                  tag: 'string-md',
                },
              },
            ],
            name: '文本',
          },
        ],
      },
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '64449e64ad342e0014ed328a',
      name: '成功消息提示',
      type: 'action',
      tag: 'message.success',
      func: {
        parameters: [
          {
            name: '内容',
            types: [
              {
                type: 'text',
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '操作成功',
                  },
                },
              },
            ],
            id: '64449e7dc6443a3ec17428da',
            key: 'content',
            desc: '',
            extendPlatform: true,
          },
          {
            name: '持续事件',
            types: [
              {
                type: 'number',
                default: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'number',
                    value: 1.5,
                  },
                },
                rules: {
                  maxPrecision: 2,
                },
              },
            ],
            id: '64449ea0c6443a3ec17428db',
            key: 'duration',
            desc: '',
            extendPlatform: true,
          },
          {
            name: '关闭回调',
            types: [
              {
                type: 'action',
                rules: {
                  parameters: [],
                },
              },
            ],
            id: '64449ec2c6443a3ec17428dc',
            key: 'onClose',
            desc: '提示框关闭时的回调',
            extendPlatform: true,
          },
        ],
        output: {
          types: [
            {
              type: 'text',
            },
          ],
        },
      },
      key: 'message.success',
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '644789a3ad342e0014ed5a83',
      name: '飒飒大',
      type: 'function',
      tag: 'yuy',
      key: 'sasada',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64093e12583491a5ebecd88f',
      name: '是否为整数',
      type: 'function',
      tag: 'isInteger',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2bb',
            key: 'value',
            desc: '要判断的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '是整数会返回true，否则返回false',
        },
      },
      key: 'isInteger',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409465a583491a5ebecd89e',
      name: '是否为小数',
      type: 'function',
      tag: 'isFloat',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2bc',
            key: 'value',
            desc: '要判断的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '是返回 true， 否返回 false ',
        },
      },
      key: 'isFloat',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64094db1e00c640dbd2f8fff',
      name: '是否为正整数',
      type: 'function',
      tag: 'isPositiveInteger',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2bd',
            key: 'value',
            desc: '要判断的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '被检测的值是正整数，则返回 true， 否则返回 false ',
        },
      },
      key: 'isPositiveInteger',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64094fd2e00c640dbd2f9070',
      name: '是否为负整数',
      type: 'function',
      tag: 'isNegativeInteger',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2be',
            key: 'value',
            desc: '要判断的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '是返回 true，否则返回 false ',
        },
      },
      key: 'isNegativeInteger',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64095095e00c640dbd2f90a1',
      name: '是否为正的小数',
      type: 'function',
      tag: 'isPositiveFloat',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2bf',
            key: 'value',
            desc: '要判断的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '被检测的值是正小数，则返回 true， 否则返回 false 。',
        },
      },
      key: 'isPositiveFloat',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64095154e00c640dbd2f90c8',
      name: '是否为负的小数',
      type: 'function',
      tag: 'isNegativeFloat',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2c0',
            key: 'value',
            desc: '要判断的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '被检测的值是负小数，则返回 true， 否则返回 false 。',
        },
      },
      key: 'isNegativeFloat',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64095657e00c640dbd2f9107',
      name: '是否为零',
      type: 'function',
      tag: 'isZero',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2c1',
            key: 'value',
            desc: '要判断的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '被检测的值是零，则返回 true， 否则返回 false ',
        },
      },
      key: 'isZero',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409762ae00c640dbd2f9431',
      name: '获取秒数',
      type: 'function',
      tag: 'getSeconds',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2c3',
            key: 'date',
            desc: '要从中获取秒数的时间值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回指定日期时间对象的秒数，为0-59的整数',
        },
      },
      key: 'getSeconds',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64097f51237f2a94b9bd760a',
      name: '获取分钟数',
      type: 'function',
      tag: 'getMinutes',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2c5',
            key: 'date',
            desc: '要从中获取分钟数的时间值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回区间为 0-59 的整数',
        },
      },
      key: 'getMinutes',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640980e9237f2a94b9bd7657',
      name: '获取小时数',
      type: 'function',
      tag: 'getHours',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2c8',
            key: 'date',
            desc: '要从中获取小时数的时间值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '0-23整数',
        },
      },
      key: 'getHours',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098128237f2a94b9bd7673',
      name: '获取月份',
      type: 'function',
      tag: 'getMonth',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2c9',
            key: 'date',
            desc: '要从中获取月份的日期值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '1-12正整数',
        },
      },
      key: 'getMonth',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409813d237f2a94b9bd767d',
      name: '获取年份',
      type: 'function',
      tag: 'getYear',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2ca',
            key: 'date',
            desc: '要从中获取年份的日期值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '正整数',
        },
      },
      key: 'getYear',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640981a5237f2a94b9bd7687',
      name: '获取指定日期为该月第几天',
      type: 'function',
      tag: 'getDay',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2cb',
            key: 'date',
            desc: '要从中获取指定信息的日期值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '1-31正整数',
        },
      },
      key: 'getDay',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098232237f2a94b9bd7695',
      name: '加',
      type: 'function',
      tag: 'add',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c2cc',
            key: 'num1',
            desc: '要相加的数字值（可以为多个）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回上列数值相加的结果',
        },
      },
      key: 'add',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640982ac237f2a94b9bd76ac',
      name: '获取指定日期为星期几',
      type: 'function',
      tag: 'getWeekday',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2cd',
            key: 'date',
            desc: '要从中获取指定信息的日期值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回1-7正整数',
        },
      },
      key: 'getWeekday',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098321237f2a94b9bd76be',
      name: '在输入值上加1',
      type: 'function',
      tag: 'inc',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2ce',
            key: 'num',
            desc: '要+1的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '结果值',
        },
      },
      key: 'inc',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098332237f2a94b9bd76cc',
      name: '获取指定日期为该年份的第几周',
      type: 'function',
      tag: 'getWeek',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2cf',
            key: 'date',
            desc: '要从中获取指定信息的日期值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
        },
      },
      key: 'getWeek',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098340237f2a94b9bd76d5',
      name: '获取今天的日期',
      type: 'function',
      tag: 'getToday',
      func: {
        parameters: [],
        output: {
          name: '',
          types: [
            {
              type: 'datetime',
            },
          ],
          desc: '返回1-31的正整数',
        },
      },
      key: 'getToday',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640983cb237f2a94b9bd76e4',
      name: '数字减1',
      type: 'function',
      tag: 'dec',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2d0',
            key: 'num',
            desc: '要-1的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '结果值',
        },
      },
      key: 'dec',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098425237f2a94b9bd7727',
      name: '获取两个日期的相隔天数',
      type: 'function',
      tag: 'getDays',
      func: {
        parameters: [
          {
            name: '日期时间1',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2d1',
            key: 'date1',
            desc: '要计算相隔天数的日期时间1',
            extendPlatform: true,
          },
          {
            name: '日期时间2',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2d2',
            key: 'date2',
            desc: '要计算相隔天数的日期时间2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '非负整数',
        },
      },
      key: 'getDays',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098427237f2a94b9bd7730',
      name: '减',
      type: 'function',
      tag: 'subtract',
      func: {
        parameters: [
          {
            name: '减数',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2d3',
            key: 'num1',
            desc: '减号后面的数字',
            extendPlatform: true,
          },
          {
            name: '被减数',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2d4',
            key: 'num2',
            desc: '减号前面的数字',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '结果值',
        },
      },
      key: 'subtract',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409843b237f2a94b9bd7755',
      name: '获取指定日期到今天的相隔天数',
      type: 'function',
      tag: 'getDaysFromNow',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2d5',
            key: 'date',
            desc: '要计算到今天的相隔天数的指定日期',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '非负整数',
        },
      },
      key: 'getDaysFromNow',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409845b237f2a94b9bd775f',
      name: '对比日期1是否早于日期2',
      type: 'function',
      tag: 'isBefore',
      func: {
        parameters: [
          {
            name: '日期时间1',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2d6',
            key: 'date1',
            desc: '要对比的日期1',
            extendPlatform: true,
          },
          {
            name: '日期时间2',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2d7',
            key: 'date2',
            desc: '要对比的日期2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'isBefore',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409846e237f2a94b9bd7769',
      name: '对比日期1是否晚于日期2',
      type: 'function',
      tag: 'isAfter',
      func: {
        parameters: [
          {
            name: '日期时间1',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2d8',
            key: 'date1',
            desc: '要对比的日期1',
            extendPlatform: true,
          },
          {
            name: '日期时间2',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2d9',
            key: 'date2',
            desc: '要对比的日期2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'isAfter',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640984b2237f2a94b9bd7773',
      name: '对比日期1是否等于日期2',
      type: 'function',
      tag: 'isSameDateTime',
      func: {
        parameters: [
          {
            name: '日期时间1',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2da',
            key: 'date1',
            desc: '要对比的日期1',
            extendPlatform: true,
          },
          {
            name: '日期时间2',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2db',
            key: 'date2',
            desc: '要对比的日期2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'isSameDateTime',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098540237f2a94b9bd7781',
      name: '乘',
      type: 'function',
      tag: 'multiply',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c2dc',
            key: 'num1',
            desc: '可以为多个值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '结果值',
        },
      },
      key: 'multiply',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640985ef237f2a94b9bd77b1',
      name: '除',
      type: 'function',
      tag: 'divide',
      func: {
        parameters: [
          {
            name: '除数',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2dd',
            key: 'num1',
            desc: '除号后面的数字',
            extendPlatform: true,
          },
          {
            name: '被除数',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2de',
            key: 'num2',
            desc: '除号前面的数字（禁止传入0）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '结果值',
        },
      },
      key: 'divide',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098724237f2a94b9bd77f4',
      name: '获取余数',
      type: 'function',
      tag: 'mod',
      func: {
        parameters: [
          {
            name: '余数',
            types: [
              {
                type: 'number',
                rules: {
                  maxPrecision: 0,
                },
              },
            ],
            id: '641a7054cf44f6204642c2e0',
            key: 'num1',
            desc: '除法中未被整除的部分',
            extendPlatform: true,
          },
          {
            name: '被余数',
            types: [
              {
                type: 'number',
                rules: {
                  minLength: null,
                  maxPrecision: 0,
                },
              },
            ],
            id: '641a7054cf44f6204642c2e1',
            key: 'num2',
            desc: '除数除以除数所得到的整数部分（禁止传入0）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
        },
      },
      key: 'mod',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640987d0237f2a94b9bd7808',
      name: '获取相反数',
      type: 'function',
      tag: 'negate',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2e2',
            key: 'num',
            desc: '要取反的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
        },
      },
      key: 'negate',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409880f237f2a94b9bd7813',
      name: '对比指定日期是否早于今天',
      type: 'function',
      tag: 'isBefforNow',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2e3',
            key: 'date',
            desc: '要对比的指定日期',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'isBefforNow',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409881b237f2a94b9bd781d',
      name: '对比指定日期是否晚于今天',
      type: 'function',
      tag: 'isAfterNow',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2e4',
            key: 'date',
            desc: '要对比的指定日期',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'isAfterNow',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098825237f2a94b9bd7826',
      name: '对比指定日期是否为现在',
      type: 'function',
      tag: 'isNow',
      func: {
        parameters: [
          {
            name: '日期时间',
            types: [
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2e5',
            key: 'date',
            desc: '要对比的指定日期',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'isNow',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098ae7237f2a94b9bd784b',
      name: '幂运算',
      type: 'function',
      tag: 'power',
      func: {
        parameters: [
          {
            name: '基数',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2e6',
            key: 'base',
            desc: '幂运算中要进行乘法的数，也称为底数',
            extendPlatform: true,
          },
          {
            name: '指数',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2e7',
            key: 'exponent',
            desc: '幂运算中基数要被乘以自身的次数，也称为幂',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
        },
      },
      key: 'power',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098b84237f2a94b9bd7872',
      name: '获取指定位数小数',
      type: 'function',
      tag: 'toFixed',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2e8',
            key: 'num',
            desc: '要获取位数的数字值',
            extendPlatform: true,
          },
          {
            name: '小数位精度',
            types: [
              {
                type: 'number',
                rules: {
                  maxPrecision: 0,
                  minLength: 0,
                },
              },
            ],
            id: '641a7054cf44f6204642c2e9',
            key: 'precision',
            desc: '指定的小数位数 {非必填，不填则默认不处理（非负数整数）}',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
        },
      },
      key: 'toFixed',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64098ef8237f2a94b9bd788e',
      name: '保留小数位（向下舍入）',
      type: 'function',
      tag: 'floor',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2eb',
            key: 'num',
            desc: '要向上舍入的数值',
            extendPlatform: true,
          },
          {
            name: '精度',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2ec',
            key: 'precision',
            desc: '根据精度保留几位小数向下舍入（非必填，非负整数）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
        },
      },
      key: 'floor',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64099416237f2a94b9bd7911',
      name: '条件判断',
      type: 'function',
      tag: 'If',
      func: {
        parameters: [
          {
            name: '条件',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7054cf44f6204642c2ed',
            key: 'conditions',
            desc: '要判断的条件',
            extendPlatform: true,
          },
          {
            name: '条件成立时返回结果',
            types: [
              {
                type: 'text',
              },
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'datetime',
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'number',
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'whether',
              },
              {
                type: 'module',
              },
              {
                type: 'module',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c2ee',
            key: 'value1',
            desc: '当条件为true时，执行的结果',
            extendPlatform: true,
          },
          {
            name: '条件不成立时返回结果',
            types: [
              {
                type: 'text',
              },
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'datetime',
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'number',
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'whether',
              },
              {
                type: 'module',
              },
              {
                type: 'module',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c2ef',
            key: 'value2',
            desc: '当条件为false时，执行的结果',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
            {
              type: 'text',
              multiple: true,
            },
            {
              type: 'number',
            },
            {
              type: 'number',
              multiple: true,
            },
            {
              type: 'datetime',
            },
            {
              type: 'datetime',
              multiple: true,
            },
            {
              type: 'whether',
              multiple: false,
            },
            {
              type: 'whether',
              multiple: true,
            },
            {
              type: 'module',
            },
            {
              type: 'module',
              multiple: true,
            },
          ],
        },
      },
      key: 'If',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640994b3237f2a94b9bd791e',
      name: '四舍五入',
      type: 'function',
      tag: 'round',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2f0',
            key: 'num',
            desc: '要四舍五入的数值',
            extendPlatform: true,
          },
          {
            name: '精度',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2f1',
            key: 'precision',
            desc: '根据精度保留几位小数进行四舍五入（非必填，非负整数）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '会返回一个数字四舍五入后最接近的值',
        },
      },
      key: 'round',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409970b237f2a94b9bd797c',
      name: '为空',
      type: 'function',
      tag: 'isEmpty',
      func: {
        parameters: [
          {
            name: '判断的内容',
            types: [
              {
                type: 'text',
              },
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'datetime',
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'number',
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
              {
                type: 'module',
              },
              {
                type: 'module',
                multiple: true,
              },
              {
                type: 'whether',
              },
            ],
            id: '641a7054cf44f6204642c2f2',
            key: 'value',
            desc: '要判断是否为空的内容',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '是则返回 true ，否则返回 false ',
        },
      },
      key: 'isEmpty',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64099739237f2a94b9bd798b',
      name: '不为空',
      type: 'function',
      tag: 'isNotEmpty',
      func: {
        parameters: [
          {
            name: '内容',
            types: [
              {
                type: 'text',
              },
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'datetime',
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'number',
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'whether',
              },
              {
                type: 'module',
              },
              {
                type: 'module',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c2f3',
            key: 'value',
            desc: '要判断是否不为空的内容',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '若是则返回 true，否则返回 false',
        },
      },
      key: 'isNotEmpty',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64099793237f2a94b9bd7996',
      name: '等于',
      type: 'function',
      tag: 'eq',
      func: {
        parameters: [
          {
            name: '要判断的值1',
            types: [
              {
                type: 'text',
                multiple: false,
              },
              {
                type: 'number',
              },
              {
                type: 'whether',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2f4',
            key: 'value1',
            desc: '判断等于的值1',
            extendPlatform: true,
          },
          {
            name: '要判断的值2',
            types: [
              {
                type: 'text',
              },
              {
                type: 'datetime',
              },
              {
                type: 'number',
              },
              {
                type: 'whether',
              },
            ],
            id: '641a7054cf44f6204642c2f5',
            key: 'value2',
            desc: '判断等于的值2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'eq',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640997f9237f2a94b9bd79ab',
      name: '不等于',
      type: 'function',
      tag: 'neq',
      func: {
        parameters: [
          {
            name: '值1',
            types: [
              {
                type: 'text',
              },
              {
                type: 'datetime',
              },
              {
                type: 'number',
              },
              {
                type: 'whether',
              },
            ],
            id: '641a7054cf44f6204642c2f6',
            key: 'value1',
            desc: '判断不等于的值1',
            extendPlatform: true,
          },
          {
            name: '值2',
            types: [
              {
                type: 'text',
              },
              {
                type: 'datetime',
              },
              {
                type: 'number',
              },
              {
                type: 'whether',
              },
            ],
            id: '641a7054cf44f6204642c2f7',
            key: 'value2',
            desc: '判断不等于的值2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'neq',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64099833237f2a94b9bd79ba',
      name: '大于',
      type: 'function',
      tag: 'gt',
      func: {
        parameters: [
          {
            name: '值1',
            types: [
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2f8',
            key: 'left',
            desc: '判断大于的值1',
            extendPlatform: true,
          },
          {
            name: '值2',
            types: [
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2f9',
            key: 'right',
            desc: '判断大于的值2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'gt',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409988d237f2a94b9bd79dd',
      name: '大于等于',
      type: 'function',
      tag: 'gte',
      func: {
        parameters: [
          {
            name: '值1',
            types: [
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2fa',
            key: 'left',
            desc: '判断大于等于的值1',
            extendPlatform: true,
          },
          {
            name: '值2',
            types: [
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c2fb',
            key: 'right',
            desc: '判断大于等于的值2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'gte',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640998cf237f2a94b9bd79fe',
      name: '小于',
      type: 'function',
      tag: 'lt',
      func: {
        parameters: [
          {
            name: '值1',
            types: [
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a95b29f9c8e74332f9993',
            key: 'left',
            desc: '判断小于的值1',
            extendPlatform: true,
          },
          {
            name: '值2',
            types: [
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a95b29f9c8e74332f9994',
            key: 'right',
            desc: '判断小于的值2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'lt',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640998f2237f2a94b9bd7a08',
      name: '保留小数位（向上舍入）',
      type: 'function',
      tag: 'ceil',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2fe',
            key: 'num',
            desc: '要向上舍入的数值',
            extendPlatform: true,
          },
          {
            name: '精度',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c2ff',
            key: 'precision',
            desc: '根据精度保留几位小数向上舍入（非必填，非负整数）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '',
        },
      },
      key: 'ceil',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640998fe237f2a94b9bd7a17',
      name: '小于等于',
      type: 'function',
      tag: 'lte',
      func: {
        parameters: [
          {
            name: '值1',
            types: [
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c300',
            key: 'left',
            desc: '判断小于等于的值1',
            extendPlatform: true,
          },
          {
            name: '值2',
            types: [
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c301',
            key: 'right',
            desc: '判断小于等于的值2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'lte',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640999fe237f2a94b9bd7c77',
      name: '获取绝对值',
      type: 'function',
      tag: 'abs',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c302',
            key: 'num',
            desc: '要获取绝对值的数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回为正数的结果值',
        },
      },
      key: 'abs',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64099ad3237f2a94b9bd7cdd',
      name: '或',
      type: 'function',
      tag: 'or',
      func: {
        parameters: [
          {
            name: '条件',
            types: [
              {
                type: 'whether',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c303',
            key: 'conditions',
            desc: '参与判断的条件（可以为多个）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'or',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64099caf237f2a94b9bd7cf8',
      name: '获取平均值',
      type: 'function',
      tag: 'average',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c304',
            key: 'nums',
            desc: '要获取平均值的数字（可以为多个）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回录入数字的平均数值',
        },
      },
      key: 'average',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409a18d237f2a94b9bd7d1e',
      name: '获取中位数',
      type: 'function',
      tag: 'median',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c305',
            key: 'nums',
            desc: '需要获取中位数数字（可以为多个）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
        },
      },
      key: 'median',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409a845237f2a94b9bd7d4d',
      name: '且',
      type: 'function',
      tag: 'and',
      func: {
        parameters: [
          {
            name: '值',
            types: [
              {
                type: 'whether',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c307',
            key: 'conditions',
            desc: '参与判断的条件（可以为多个）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'and',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409a94e237f2a94b9bd7d76',
      name: '获取最大值',
      type: 'function',
      tag: 'max',
      func: {
        parameters: [
          {
            name: '数字值',
            types: [
              {
                type: 'number',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c30a',
            key: 'conditions',
            desc: '要从中获取最大值的数字值（需要为多个）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
        },
      },
      key: 'max',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409a990237f2a94b9bd7d8a',
      name: '是否为数字文本',
      type: 'function',
      tag: 'isNumberString',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c30b',
            key: 'value',
            desc: '要判断的文本值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '如果是，则返回 ture ，否则返回 false\n\n',
        },
      },
      key: 'isNumberString',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409a9b9237f2a94b9bd7d94',
      name: '获取最小值',
      type: 'function',
      tag: 'min',
      func: {
        parameters: [
          {
            name: '参数值',
            types: [
              {
                type: 'number',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c30c',
            key: 'conditions',
            desc: '要从中获取最小值的数字值（需要为多个）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回最小的值',
        },
      },
      key: 'min',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409a9ea237f2a94b9bd7da5',
      name: '去除开头空白符',
      type: 'function',
      tag: 'trimStart',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c30d',
            key: 'text',
            desc: '要去除空白符的文本',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '去除开头空白符后的文本',
        },
      },
      key: 'trimStart',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409aa95237f2a94b9bd7db4',
      name: '去除结尾空白符',
      type: 'function',
      tag: 'trimEnd',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c30e',
            key: 'text',
            desc: '要去除结尾空白符的文本',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '去除结尾空白符后的文本',
        },
      },
      key: 'trimEnd',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409ab3a237f2a94b9bd7dca',
      name: '去除头尾空白符',
      type: 'function',
      tag: 'trim',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c30f',
            key: 'text',
            desc: '要去除头尾空白符的文本',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '去除结尾空白符后的文本',
        },
      },
      key: 'trim',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409af5a237f2a94b9bd7e0e',
      name: '去除所有空白符',
      type: 'function',
      tag: 'trimAll',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c310',
            key: 'text',
            desc: '要去除所有空白符的文本',
            extendPlatform: true,
          },
        ],
        output: {
          types: [
            {
              type: 'text',
            },
          ],
        },
      },
      key: 'trimAll',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b011237f2a94b9bd7e37',
      name: '首字母转大写',
      type: 'function',
      tag: 'toUpperFirst',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c311',
            key: 'text',
            desc: '要将首字母转为大写的数值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '首字母转为大写后的值',
        },
      },
      key: 'toUpperFirst',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b0c9237f2a94b9bd7e46',
      name: '所有字母转大写',
      type: 'function',
      tag: 'toUpperAllFirst',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c312',
            key: 'text',
            desc: '要将所有首字母转为大写的数值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '所有首字母转为大写后的值',
        },
      },
      key: 'toUpperAllFirst',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b18b237f2a94b9bd7ebd',
      name: '首字母转小写',
      type: 'function',
      tag: 'toLowerFirst',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c314',
            key: 'text',
            desc: '要将首字母转为小写的数值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '首字母转为小写后的值',
        },
      },
      key: 'toLowerFirst',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b1d7237f2a94b9bd7eec',
      name: '所有首字母转小写',
      type: 'function',
      tag: 'toLowerAllFirst',
      func: {
        parameters: [
          {
            name: '文本',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c315',
            key: 'text',
            desc: '要将所有首字母转为小写的数值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '所有首字母转为小写后的值',
        },
      },
      key: 'toLowerAllFirst',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b2a3237f2a94b9bd7efb',
      name: '合并列表',
      type: 'function',
      tag: 'concat',
      func: {
        parameters: [
          {
            name: '列表1',
            types: [
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'module',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c316',
            key: 'arr1',
            desc: '要合并的列表1',
            extendPlatform: true,
          },
          {
            name: '列表2',
            types: [
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
              {
                type: 'module',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c317',
            key: 'arr2',
            desc: '要合并的列表2',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
              multiple: true,
            },
            {
              type: 'number',
              multiple: true,
            },
            {
              type: 'datetime',
              multiple: true,
            },
            {
              type: 'whether',
              multiple: true,
            },
            {
              type: 'module',
              multiple: true,
            },
          ],
        },
      },
      key: 'concat',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b377237f2a94b9bd7f24',
      name: '所有字母转小写',
      type: 'function',
      tag: 'toLower',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c318',
            key: 'text',
            desc: '要将所有字母转为小写的数值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '所有字母转为小写后的值',
        },
      },
      key: 'toLower',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b3cc237f2a94b9bd7f43',
      name: '获取指定文本第一次出现的位置',
      type: 'function',
      tag: 'indexOfString',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c319',
            key: 'text',
            desc: '要检索的文本值',
            extendPlatform: true,
          },
          {
            name: '搜索内容',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c31a',
            key: 'match',
            desc: '要搜索的关键词（必填）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回出现位置对应的数字。如果未获取到，则返回 0',
        },
      },
      key: 'indexOfString',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b456237f2a94b9bd7f5c',
      name: '获取指定文本最后一次出现的位置',
      type: 'function',
      tag: 'lastIndexOfString',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c31b',
            key: 'text',
            desc: '要检索的文本值',
            extendPlatform: true,
          },
          {
            name: '搜索内容',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c31c',
            key: 'match',
            desc: '要搜索的关键词（必填）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '返回出现位置对应的数字。如果未获取到，则返回 0',
        },
      },
      key: 'lastIndexOfString',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b7db237f2a94b9bd7fd2',
      name: '按指定分隔符拆分文本',
      type: 'function',
      tag: 'split',
      func: {
        parameters: [
          {
            name: '文本',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c320',
            key: 'text',
            desc: '要处理的文本值',
            extendPlatform: true,
          },
          {
            name: '分隔符',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c321',
            key: 'separator',
            desc: '指定的分隔符',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
              multiple: true,
            },
          ],
          desc: '指定分隔符拆分后获取到的值',
        },
      },
      key: 'split',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6409b87a237f2a94b9bd7fe1',
      name: '替换文本',
      type: 'function',
      tag: 'replace',
      func: {
        parameters: [
          {
            name: '待处理的文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c322',
            key: 'text',
            desc: '要查找处理的文本值',
            extendPlatform: true,
          },
          {
            name: '搜索值（旧值）',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c323',
            key: 'search',
            desc: '要替换的旧值（必填）',
            extendPlatform: true,
          },
          {
            name: '替换值（新值）',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c324',
            key: 'replace',
            desc: '要换为的新值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '返回替换后的新文本',
        },
      },
      key: 'replace',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640aa8ec237f2a94b9bd85ab',
      name: '拼接文本',
      type: 'function',
      tag: 'concatString',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
            ],
            id: '641a7054cf44f6204642c32b',
            key: 'text',
            desc: '要合并的文本/数字值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '返回合并后的文本 / 数字值',
        },
      },
      key: 'concatString',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640aa9b1237f2a94b9bd85bf',
      name: '从文本指定位置截取指定个数字符',
      type: 'function',
      tag: 'slice',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c32d',
            key: 'text',
            desc: '要处理的文本值',
            extendPlatform: true,
          },
          {
            name: '序号',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c32e',
            key: 'start',
            desc: '从第几个字符开始',
            extendPlatform: true,
          },
          {
            name: '长度',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c32f',
            key: 'length',
            desc: '可选，正整数，缺省则截取到末尾\n',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '返回一个截取后的新文本',
        },
      },
      key: 'slice',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640ad69c237f2a94b9bd89ce',
      name: '获取文本第一个字',
      type: 'function',
      tag: 'getFirstWord',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c332',
            key: 'text',
            desc: '要获取第一个字的文本值（必填）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '结果',
        },
      },
      key: 'getFirstWord',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640ad6a8237f2a94b9bd89d8',
      name: '获取文本最后一个字',
      type: 'function',
      tag: 'getLastWord',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c333',
            key: 'text',
            desc: '要获取最后一个字的文本值（必填）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '结果',
        },
      },
      key: 'getLastWord',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640ad77d237f2a94b9bd89ef',
      name: 'md5消息摘要算法',
      type: 'function',
      tag: 'MD5',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c334',
            key: 'value',
            desc: '要加密的文本值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '结果',
        },
      },
      key: 'MD5',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '640ec9766e6008edcb452e50',
      name: '从开头位置截取文本',
      type: 'function',
      tag: 'subString',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7054cf44f6204642c335',
            key: 'text',
            desc: '要截取的文本值',
            extendPlatform: true,
          },
          {
            name: '截取长度',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7054cf44f6204642c336',
            key: 'length',
            desc: '要截取的文字长度（正整数）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
            },
          ],
          desc: '截取后的结果',
        },
      },
      key: 'subString',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '64196935438489df6840b221',
      name: '如果所有条件成立（待定）',
      type: 'function',
      tag: 'Ifs',
      func: {
        parameters: [
          {
            name: '条件',
            types: [
              {
                type: 'whether',
                default: false,
              },
            ],
            id: '641a7054cf44f6204642c337',
            key: 'conditions',
            desc: '',
            extendPlatform: true,
          },
          {
            name: '值',
            types: [
              {
                type: 'text',
              },
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'module',
              },
              {
                type: 'module',
                multiple: true,
              },
              {
                type: 'whether',
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'datetime',
              },
            ],
            id: '641a7054cf44f6204642c338',
            key: 'value1',
            desc: '',
            extendPlatform: true,
          },
          {
            name: '值',
            types: [
              {
                type: 'text',
              },
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'module',
              },
              {
                type: 'module',
                multiple: true,
              },
              {
                type: 'datetime',
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'whether',
              },
            ],
            id: '641a7054cf44f6204642c339',
            key: 'value2',
            desc: '',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
              multiple: false,
            },
            {
              type: 'whether',
              multiple: true,
            },
            {
              type: 'text',
            },
            {
              type: 'text',
              multiple: true,
            },
            {
              type: 'number',
            },
            {
              type: 'number',
              multiple: true,
            },
            {
              type: 'datetime',
            },
            {
              type: 'datetime',
              multiple: true,
            },
            {
              type: 'module',
            },
            {
              type: 'module',
              multiple: true,
            },
          ],
        },
      },
      key: 'Ifs',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641a7a44438489df6840bb90',
      name: '包含',
      type: 'function',
      tag: 'include',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7b8c9673d52e9c145f96',
            key: 'text',
            desc: '被查询的文本值',
            extendPlatform: true,
          },
          {
            name: '搜索值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7b8c9673d52e9c145f97',
            key: 'search',
            desc: '要搜索的值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'include',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641a7a88438489df6840bbb5',
      name: '不包含',
      type: 'function',
      tag: 'notInclude',
      func: {
        parameters: [
          {
            name: '文本值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7bae9673d52e9c145f98',
            key: 'text',
            desc: '被查询的文本值',
            extendPlatform: true,
          },
          {
            name: '搜索值',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7baf9673d52e9c145f99',
            key: 'search',
            desc: '要搜索的值',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
        },
      },
      key: 'notInclude',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641a7e66438489df6840bc89',
      name: '获取列表中的第一个值',
      type: 'function',
      tag: 'first',
      func: {
        parameters: [
          {
            name: '列表',
            types: [
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
              {
                type: 'module',
                multiple: true,
              },
            ],
            id: '641a7f3d9673d52e9c145f9b',
            key: 'arr',
            desc: '要获取的列表',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
              multiple: true,
            },
            {
              type: 'number',
              multiple: true,
            },
            {
              type: 'whether',
              multiple: true,
            },
            {
              type: 'datetime',
              multiple: true,
            },
            {
              type: 'module',
              multiple: true,
            },
          ],
          desc: '返回获取到的第一个元素',
        },
      },
      key: 'first',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641a7e6f438489df6840bc93',
      name: '获取列表中的最后一个值',
      type: 'function',
      tag: 'last',
      func: {
        parameters: [
          {
            name: '列表',
            types: [
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
              {
                type: 'module',
                multiple: true,
              },
              {
                type: 'datetime',
                multiple: true,
              },
            ],
            id: '641a7e799673d52e9c145f9a',
            key: 'arr',
            desc: '要获取的列表',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
              multiple: true,
            },
            {
              type: 'number',
              multiple: true,
            },
            {
              type: 'datetime',
              multiple: true,
            },
            {
              type: 'whether',
              multiple: true,
            },
            {
              type: 'module',
              multiple: true,
            },
          ],
          desc: '返回获取到的最后一个元素',
        },
      },
      key: 'last',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641aa8e3438489df6840bf85',
      name: '判断第一个值是否为指定的值',
      type: 'function',
      tag: 'startsWith',
      func: {
        parameters: [
          {
            name: '列表',
            types: [
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
              {
                type: 'module',
                multiple: true,
              },
            ],
            id: '641aa9369673d52e9c145f9d',
            key: 'arr',
            desc: '要检查的列表（禁止传入字符串，禁止空数组）',
            extendPlatform: true,
          },
          {
            name: '比对项',
            types: [
              {
                type: 'text',
              },
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
              {
                type: 'whether',
              },
              {
                type: 'module',
              },
            ],
            id: '641aa9379673d52e9c145f9e',
            key: 'match',
            desc: '禁止传入对象与数组',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '是则返回true，否则返回false',
        },
      },
      key: 'startsWith',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641aa8f3438489df6840bf9b',
      name: '判断最后一个值是否为指定值',
      type: 'function',
      tag: 'endsWith',
      func: {
        parameters: [
          {
            name: '列表',
            types: [
              {
                type: 'text',
              },
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
                ui: {
                  tag: 'textarea',
                },
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'module',
                multiple: true,
              },
            ],
            id: '641aa9a59673d52e9c145f9f',
            key: 'arr',
            desc: '要检查的列表（禁止传入字符串，禁止空数组）',
            extendPlatform: true,
          },
          {
            name: '比对项',
            types: [
              {
                type: 'text',
              },
              {
                type: 'number',
              },
              {
                type: 'whether',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641aa9a59673d52e9c145fa0',
            key: 'match',
            desc: '要对比的值（禁止传入对象与数组）',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'whether',
            },
          ],
          desc: '是则返回true，否则返回false',
        },
      },
      key: 'endsWith',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641aa901438489df6840bfa5',
      name: '获取指定值第一次出现的位置',
      type: 'function',
      tag: 'indexOfArray',
      func: {
        parameters: [
          {
            name: '列表\t',
            types: [
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
              {
                type: 'module',
                multiple: true,
              },
              {
                type: 'datetime',
                multiple: true,
              },
            ],
            id: '641aaca89673d52e9c145fa1',
            key: 'arr',
            desc: '要搜索的列表（禁止传入字符串，禁止空数组）',
            extendPlatform: true,
          },
          {
            name: '搜索项',
            types: [
              {
                type: 'text',
              },
              {
                type: 'number',
              },
              {
                type: 'datetime',
              },
              {
                type: 'whether',
              },
            ],
            id: '641aaca89673d52e9c145fa2',
            key: 'match',
            desc: '搜索值（禁止传入对象与数组）\n',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '第一次出现位置的索引 number 值',
        },
      },
      key: 'indexOfArray',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641aa913438489df6840bfaf',
      name: '获取指定值最后一次出现的位置',
      type: 'function',
      tag: 'lastIndexOfArray',
      func: {
        parameters: [
          {
            name: '列表',
            types: [
              {
                type: 'text',
                multiple: true,
              },
              {
                type: 'number',
                multiple: true,
              },
              {
                type: 'datetime',
                multiple: true,
              },
              {
                type: 'module',
                multiple: true,
              },
              {
                type: 'whether',
                multiple: true,
              },
            ],
            id: '641aadb39673d52e9c145fa4',
            key: 'arr',
            desc: '要搜索的列表（禁止传入字符串，禁止空数组）',
            extendPlatform: true,
          },
          {
            name: '搜索项',
            types: [
              {
                type: 'text',
              },
              {
                type: 'number',
              },
              {
                type: 'whether',
              },
              {
                type: 'module',
              },
              {
                type: 'datetime',
              },
            ],
            id: '641aadb39673d52e9c145fa5',
            key: 'match',
            desc: '搜索值（禁止传入对象与数组）\n',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '最后一次出现位置的索引 number 值',
        },
      },
      key: 'lastIndexOfArray',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641d0b780af5c68b9e18bf16',
      name: '获取当前时间',
      type: 'function',
      tag: 'getNow',
      func: {
        parameters: [],
        output: {
          name: '',
          types: [
            {
              type: 'datetime',
            },
          ],
        },
      },
      key: 'getNow',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641d0b8c0af5c68b9e18bf23',
      name: '获取当前年份',
      type: 'function',
      tag: 'getCurrentYear',
      func: {
        parameters: [],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '四位数年份',
        },
      },
      key: 'getCurrentYear',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '641d0b970af5c68b9e18bf2d',
      name: '获取当前月份',
      type: 'function',
      tag: 'getCurrentMonth',
      func: {
        parameters: [],
        output: {
          name: '',
          types: [
            {
              type: 'number',
            },
          ],
          desc: '1-12整数',
        },
      },
      key: 'getCurrentMonth',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '647020f367c147480397f984',
      name: '在最前面添加文本',
      type: 'function',
      tag: 'insertToStart',
      func: {
        parameters: [
          {
            name: '原数据',
            types: [
              {
                type: 'text',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'text',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'number',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'module',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
            ],
            id: '64702137c291839adb14f5a5',
            key: 'data',
            desc: '',
            extendPlatform: true,
          },
          {
            name: '添加的元素',
            types: [
              {
                type: 'text',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'number',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'module',
                ui: {
                  tag: '',
                },
              },
            ],
            id: '64702137c291839adb14f5a6',
            key: 'item',
            desc: 'data如果为文本，则添加元素只能是文本或附属文本的类型\ndata如果为数组，则添加元素只能是数组中的元素类型或其附属类型',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
              ui: {
                tag: '',
              },
            },
            {
              type: 'text',
              multiple: true,
              ui: {
                tag: '',
              },
            },
            {
              type: 'number',
              multiple: true,
              ui: {
                tag: '',
              },
            },
            {
              type: 'module',
              multiple: true,
              ui: {
                tag: '',
              },
            },
          ],
          desc: '第1个参数是文本，则返回文本，是数组则返回数组',
        },
      },
      key: 'insertToStart',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '647021e967c147480397f9a3',
      name: '在最后面添加文本',
      type: 'function',
      tag: 'insertToEnd',
      func: {
        parameters: [
          {
            name: '原数据',
            types: [
              {
                type: 'text',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'text',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'module',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'number',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
            ],
            id: '64702205c291839adb14f5a7',
            key: 'data',
            desc: '',
            extendPlatform: true,
          },
          {
            name: '添加的元素',
            types: [
              {
                type: 'text',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'number',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'module',
                ui: {
                  tag: '',
                },
              },
            ],
            id: '64702205c291839adb14f5a8',
            key: 'item',
            desc: '',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
              ui: {
                tag: '',
              },
            },
            {
              type: 'text',
              multiple: true,
              ui: {
                tag: '',
              },
            },
            {
              type: 'number',
              multiple: true,
              ui: {
                tag: '',
              },
            },
            {
              type: 'module',
              multiple: true,
              ui: {
                tag: '',
              },
            },
          ],
          desc: '第1个参数是文本，则返回文本，是数组则返回数组',
        },
      },
      key: 'insertToEnd',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6470241467c147480397faef',
      name: '在指定位置添加文本',
      type: 'function',
      tag: 'insert',
      func: {
        parameters: [
          {
            name: '原数据',
            types: [
              {
                type: 'text',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'text',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'number',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'module',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
            ],
            id: '64702487c291839adb14f5aa',
            key: 'data',
            desc: '',
            extendPlatform: true,
          },
          {
            name: '添加的位置',
            types: [
              {
                type: 'number',
                ui: {
                  tag: '',
                },
              },
            ],
            id: '6470248ac291839adb14f5ab',
            key: 'index',
            desc: '',
            extendPlatform: true,
          },
          {
            name: '添加的元素',
            types: [
              {
                type: 'text',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'number',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'module',
                ui: {
                  tag: '',
                },
              },
            ],
            id: '6470248ac291839adb14f5ac',
            key: 'item',
            desc: 'data如果为文本，则添加元素只能是文本或附属文本的类型\ndata如果为数组，则添加元素只能是数组中的元素类型或其附属类型',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'text',
              ui: {
                tag: '',
              },
            },
            {
              type: 'module',
              multiple: true,
              ui: {
                tag: '',
              },
            },
            {
              type: 'text',
              multiple: true,
              ui: {
                tag: '',
              },
            },
            {
              type: 'number',
              multiple: true,
              ui: {
                tag: '',
              },
            },
          ],
        },
      },
      key: 'insert',
    },
    {
      productId: '6470259667c147480397fc9b',
      id: '6470253467c147480397fbed',
      name: '获取文本/列表长度',
      type: 'function',
      tag: 'getLength',
      func: {
        parameters: [
          {
            name: '数据',
            types: [
              {
                type: 'text',
                ui: {
                  tag: '',
                },
              },
              {
                type: 'text',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'number',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'module',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
              {
                type: 'whether',
                multiple: true,
                ui: {
                  tag: '',
                },
              },
            ],
            id: '64702554c291839adb14f5ad',
            key: 'data',
            desc: '',
            extendPlatform: true,
          },
        ],
        output: {
          name: '',
          types: [
            {
              type: 'number',
              multiple: false,
              ui: {
                tag: '',
              },
            },
          ],
        },
      },
      key: 'getLength',
    },
  ],
  apis: [
    {
      id: '64699d18c8becd52db147422',
      name: '新建用户',
      request: [
        {
          name: '用户名',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6469adaa4a1c9e864ecef985',
          required: true,
          key: 'yonghuming',
        },
        {
          name: '密码',
          types: [
            {
              type: 'password',
            },
          ],
          id: '6469ae134a1c9e864ecef986',
          required: true,
          key: 'mima',
        },
        {
          name: '电话号码',
          types: [
            {
              type: 'mobilePhone',
            },
          ],
          id: '6469ae3e4a1c9e864ecef987',
          key: 'dianhuahaoma',
        },
        {
          name: '电子邮件',
          types: [
            {
              type: 'email',
            },
          ],
          id: '6469ae4a4a1c9e864ecef988',
          key: 'dianziyoujian',
        },
      ],
      response: [
        {
          name: '新建变量',
          types: [
            {
              type: 'text',
            },
          ],
          id: '646d6b61b8f23135dcaddf49',
          key: 'xinjianbianliang',
        },
      ],
      project: '64698d103e9e4defa29f5476',
      key: 'xinjianyonghu',
    },
    {
      id: '6469af09c8becd52db14745d',
      name: '新增新闻',
      request: [
        {
          name: '标题',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6469ceb8a1070c3ff8fd7859',
          key: 'biaoti',
        },
        {
          name: '内容',
          types: [
            {
              type: 'richText',
            },
          ],
          id: '6469d07ea1070c3ff8fd785a',
          key: 'neirong',
        },
        {
          name: '作者',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6469d07fa1070c3ff8fd785b',
          key: 'zuozhe',
        },
        {
          name: '来源',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6469d07fa1070c3ff8fd785c',
          key: 'laiyuan',
        },
        {
          name: '分类',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6469d080a1070c3ff8fd785d',
          key: 'fenlei',
        },
        {
          name: '标签',
          types: [
            {
              type: 'text',
              multiple: true,
            },
          ],
          id: '6469d081a1070c3ff8fd785e',
          key: 'biaoqian',
        },
      ],
      response: [
        {
          name: '新闻ID',
          types: [
            {
              type: 'text',
              ui: {
                tag: '',
              },
            },
          ],
          id: '646b3e476e10705f2ff67a82',
          key: 'xinwenID',
        },
      ],
      project: '64698d103e9e4defa29f5476',
      key: 'xinzengxinwen',
    },
    {
      id: '6469b00ac8becd52db147479',
      name: '查询分类列表',
      request: [
        {
          name: '父级分类ID',
          types: [
            {
              type: 'text',
            },
          ],
          id: '646b2b1bbd904b1164cab6e5',
          key: 'fujifenleiID',
        },
      ],
      response: [
        {
          name: '分类列表',
          types: [
            {
              type: 'module',
              multiple: true,
            },
          ],
          id: '646c60cc53a2810ca3a810ae',
          key: 'fenleiliebiao',
        },
      ],
      project: '64698d103e9e4defa29f5476',
      key: 'chaxunfenleiliebiao',
    },
    {
      id: '6469b037c8becd52db1474b9',
      name: '查询指定新闻',
      request: [
        {
          name: 'ID',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6469b0514a1c9e864ecef994',
          required: true,
          key: 'ID',
        },
      ],
      response: [
        {
          name: '新闻数据',
          types: [
            {
              type: 'module',
              rules: {
                properties: [
                  {
                    name: '标题',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '646ae7bfec1677171046294d',
                    key: 'biaoti',
                  },
                  {
                    name: '内容',
                    types: [
                      {
                        type: 'richText',
                      },
                    ],
                    id: '646ae813ec1677171046294f',
                    desc: '',
                    key: 'neirong',
                  },
                  {
                    name: '作者',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '646ae823ec16771710462950',
                    key: 'zuozhe',
                  },
                  {
                    name: '创建时间',
                    types: [
                      {
                        type: 'datetime',
                      },
                    ],
                    id: '646ae835ec16771710462951',
                    key: 'chuangjianshijian',
                  },
                  {
                    name: '更新时间',
                    types: [
                      {
                        type: 'datetime',
                      },
                    ],
                    id: '646ae839ec16771710462952',
                    key: 'gengxinshijian',
                  },
                  {
                    name: '分类',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '646ae8a4ec16771710462954',
                    key: 'fenlei',
                  },
                  {
                    name: '标签',
                    types: [
                      {
                        type: 'text',
                        multiple: true,
                      },
                    ],
                    id: '646b01e0ec16771710462955',
                    key: 'biaoqian',
                  },
                ],
              },
            },
          ],
          id: '646ae7a1ec1677171046294c',
          key: 'xinwenshuju',
        },
        {
          name: '新闻',
          types: [
            {
              type: 'module',
            },
          ],
          id: '646b3b066e10705f2ff67a7b',
          key: 'xinwen',
        },
      ],
      project: '64698d103e9e4defa29f5476',
      key: 'chaxunzhidingxinwen',
    },
    {
      id: '6469b037c8becd52db1474c1',
      name: '查询新闻列表',
      request: [
        {
          name: '作者',
          types: [
            {
              type: 'text',
              ui: {
                tag: '',
              },
            },
          ],
          id: '646b334380d5e94669603312',
          key: 'zuozhe',
        },
        {
          name: '分类',
          types: [
            {
              type: 'text',
            },
          ],
          id: '646b339480d5e94669603314',
          key: 'fenlei',
        },
        {
          name: '标签',
          types: [
            {
              type: 'text',
              multiple: true,
            },
          ],
          id: '646b339f80d5e94669603315',
          key: 'biaoqian',
        },
        {
          name: '页数',
          types: [
            {
              type: 'number',
            },
          ],
          id: '646b37bb80d5e9466960331c',
          required: true,
          key: 'yeshu',
        },
        {
          name: '页码',
          types: [
            {
              type: 'number',
            },
          ],
          id: '646b37c980d5e9466960331d',
          required: true,
          key: 'yema',
        },
      ],
      response: [
        {
          name: '新闻列表',
          types: [
            {
              type: 'module',
              multiple: true,
            },
          ],
          id: '646b3a046e10705f2ff67a7a',
          key: 'xinwenliebiao',
        },
      ],
      project: '64698d103e9e4defa29f5476',
      key: 'chaxunxinwenliebiao',
    },
  ],
  projectIndex: {
    page: [
      {
        id: '646872534f9dc2ce4a782504',
        type: 'page',
        name: '首页',
        depth: 1,
        parentId: null,
        preId: null,
        cover: '62df689a9124c5a1826f5614/projects/646872534f9dc2ce4a7824fc/page/646872534f9dc2ce4a782504.png',
        namespace: 'page',
        key: 'shouye',
      },
      {
        id: '646872794f9dc2ce4a782546',
        type: 'page',
        name: '详情页',
        depth: 1,
        parentId: null,
        preId: '646872534f9dc2ce4a782504',
        cover: '62df689a9124c5a1826f5614/projects/646872534f9dc2ce4a7824fc/page/646872794f9dc2ce4a782546.png',
        tag: 'page',
        namespace: 'page',
        key: 'xiangqingye',
      },
      {
        id: '646872534f9dc2ce4a782505',
        type: 'page',
        name: '404',
        depth: 1,
        parentId: null,
        preId: '646872794f9dc2ce4a782546',
        cover: 'https://images.robodev.cn/static/page_default.png',
        namespace: 'page',
        key: '404',
      },
      {
        id: '646872534f9dc2ce4a782506',
        type: 'page',
        name: '502',
        depth: 1,
        parentId: null,
        preId: '646872534f9dc2ce4a782505',
        cover: 'https://images.robodev.cn/static/page_default.png',
        namespace: 'page',
        key: '502',
      },
    ],
  },
  id: '6470751f30c4dd4c7f3cf994',
  dependenciesPackages: [
    {
      productId: '6352061254bb9b1c84ce3570',
      projectId: '000000000000000000000010',
      name: 'Ant Design',
      subType: 'element',
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      projectId: '000000000000000000000000',
      name: 'HTML',
      subType: 'element',
    },
    {
      productId: '6358fb8554bb9b1c84ce47a2',
      projectId: '000000000000000000000001',
      name: '程序元件',
      subType: 'element',
    },
    {
      productId: '6470259667c147480397fc9b',
      projectId: '6405a27e2d9335b17497fd8f',
      name: '系统函数',
      subType: 'element',
    },
    {
      projectId: '646872354f9dc2ce4a7824ed',
      name: '测试组件',
      subType: 'component',
    },
  ],
  key: 'PCqiantaiceshi',
} as DBWSchema.Project;

export default webJson;
