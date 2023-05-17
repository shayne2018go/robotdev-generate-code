import { DBSchema } from '@/types';

const webJson = {
  project: '64464a419c229310c169d47e',
  name: 'ethan前端',
  desc: '项目提交到应用中心描述...',
  type: 'application',
  subType: 'client',
  terminal: 'pc',
  platforms: [],
  data: [
    {
      originId: '64464a419c229310c169d486',
      project: '64464a419c229310c169d47e',
      name: '首页',
      type: 'page',
      cover: '62df689a9124c5a1826f5614/projects/64464a419c229310c169d47e/page/64464a419c229310c169d486.png',
      nodes: [
        {
          id: 'D767',
          parentId: null,
          tag: 'each',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: 'K654',
          name: '循环文本数组',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '645dea4c76948742ae1664cd',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'D767#641a7052cf44f6204642b607',
          parentId: 'D767',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'Y576',
          parentId: 'D767#641a7052cf44f6204642b607',
          tag: 'each',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: 'Q091',
          name: '循环数据',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '645d99c25b102b96f9fbb4f1',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Y576#641a7052cf44f6204642b607',
          parentId: 'Y576',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'F104',
          parentId: 'Y576#641a7052cf44f6204642b607',
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
                  mode: 'getApiData',
                  args: {
                    id: '644731b09c229310c169e3fb',
                    path: ['data', '64473279425c9a11a9a475af'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'F104#641a7052cf44f6204642b607',
          parentId: 'F104',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'A908',
          parentId: 'F104#641a7052cf44f6204642b607',
          tag: 'cond',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b608',
                value: {
                  id: '',
                  type: 'data',
                  modeId: '64099833237f2a94b9bd79ba',
                  mode: 'gt',
                  args: {
                    '641a7054cf44f6204642c2f8': {
                      id: '',
                      type: 'data',
                      modeId: '',
                      mode: 'getEachData',
                      args: {
                        id: 'F104',
                        path: ['item', '64473291425c9a11a9a475b2'],
                      },
                    },
                    '641a7054cf44f6204642c2f9': {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'number',
                        value: 10,
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
          id: 'A908#641a7052cf44f6204642b609',
          parentId: 'A908',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'A908#641a7052cf44f6204642b60a',
          slotId: '641a7052cf44f6204642b609',
        },
        {
          id: 'X741',
          parentId: 'A908#641a7052cf44f6204642b609',
          tag: 'a-card',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642b9c7',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'F104',
                    path: ['item', '64473284425c9a11a9a475b0'],
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'X741#641a7053cf44f6204642b9cd',
          parentId: 'X741',
          tag: 'tpl',
          type: 'element',
          depth: 9,
          preId: null,
          nextId: 'X741#641a7053cf44f6204642b9c9',
          slotId: '641a7053cf44f6204642b9cd',
        },
        {
          id: 'Y459',
          parentId: 'X741#641a7053cf44f6204642b9cd',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: null,
          nextId: 'Q246',
          name: '用户名文本',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'F104',
                    path: ['item', '6447328c425c9a11a9a475b1'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Q246',
          parentId: 'X741#641a7053cf44f6204642b9cd',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: 'Y459',
          nextId: 'V643',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
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
                              value: '年龄大于十------',
                            },
                          },
                          {
                            id: '',
                            type: 'data',
                            modeId: '',
                            mode: 'getEachData',
                            args: {
                              id: 'D767',
                              path: ['index'],
                            },
                          },
                          {
                            id: '',
                            type: 'data',
                            modeId: '',
                            mode: 'getEachData',
                            args: {
                              id: 'Y576',
                              path: ['item', '645d99f15b102b96f9fbb4f3'],
                            },
                          },
                          {
                            id: '',
                            type: 'data',
                            modeId: '',
                            mode: 'getEachData',
                            args: {
                              id: 'F104',
                              path: ['item', '64473284425c9a11a9a475b0'],
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
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'V643',
          parentId: 'X741#641a7053cf44f6204642b9cd',
          tag: 'text',
          type: 'element',
          depth: 10,
          preId: 'Q246',
          nextId: null,
          name: '用户年龄文本',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'F104',
                    path: ['item', '64473291425c9a11a9a475b2'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'A908#641a7052cf44f6204642b60a',
          parentId: 'A908',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: 'A908#641a7052cf44f6204642b609',
          nextId: null,
          slotId: '641a7052cf44f6204642b60a',
        },
        {
          id: 'Y355',
          parentId: 'A908#641a7052cf44f6204642b60a',
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
                    value: '年龄小于10----------',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Q091',
          parentId: 'D767#641a7052cf44f6204642b607',
          tag: 'each',
          type: 'element',
          depth: 2,
          preId: 'Y576',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b606',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'D767',
                    path: ['item'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Q091#641a7052cf44f6204642b607',
          parentId: 'Q091',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'E645',
          parentId: 'Q091#641a7052cf44f6204642b607',
          tag: 'input',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: 'type',
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
                propId: 'placeholder',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'Q091',
                    path: ['item'],
                  },
                },
              },
            ],
          },
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'K654',
          parentId: null,
          tag: 'f-43272b44',
          type: 'component',
          depth: 0,
          preId: 'D767',
          nextId: null,
          data: {
            props: [
              {
                propId: '6448cb82319af5b84c5249f6',
                value: {
                  type: 'data',
                  mode: 'getVar',
                  args: {
                    id: '6464820f98e92c32432c8e7c',
                  },
                },
              },
            ],
          },
          projectId: '6448caed58252f48a6d485e5',
        },
        {
          id: 'K654#64647e5e52af8e55ee6c57d1',
          parentId: 'K654',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '64647e5e52af8e55ee6c57d1',
        },
        {
          id: 'D991',
          parentId: 'K654#64647e5e52af8e55ee6c57d1',
          tag: 'text',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: null,
          productId: '6358fb8554bb9b1c84ce47a2',
        },
      ],
      decl: [
        {
          name: '学生名称',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6447262e0b661be9e0b91ac1',
        },
        {
          name: '学生年龄',
          types: [
            {
              type: 'number',
            },
          ],
          id: '644726370b661be9e0b91ac2',
        },
        {
          name: '循环cols',
          types: [
            {
              type: 'module',
              multiple: true,
              default: {
                type: 'data',
                mode: 'custom',
                args: {
                  type: 'text',
                  value: [
                    {
                      id: '',
                      type: 'data',
                      modeId: '',
                      mode: 'custom',
                      args: {
                        type: 'text',
                        value: '',
                      },
                    },
                  ],
                  multiple: true,
                },
              },
              rules: {
                properties: [
                  {
                    name: 'name',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '645d99f15b102b96f9fbb4f3',
                  },
                  {
                    name: 'game',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '645d99f55b102b96f9fbb4f4',
                  },
                ],
              },
            },
          ],
          id: '645d99c25b102b96f9fbb4f1',
        },
        {
          name: '循环文本数据',
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
                        value: 'aaaaa',
                      },
                    },
                    {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'text',
                        value: 'bbbbb',
                      },
                    },
                    {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'text',
                        value: 'ccccc',
                      },
                    },
                    {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'text',
                        value: 'dddd',
                      },
                    },
                  ],
                  multiple: true,
                },
              },
            },
          ],
          id: '645dea4c76948742ae1664cd',
        },
        {
          name: 'menu数组',
          types: [
            {
              type: 'module',
              multiple: true,
              rules: {
                properties: [
                  {
                    name: 'value',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '6464822898e92c32432c8e7d',
                  },
                  {
                    name: 'label',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '6464822898e92c32432c8e7e',
                  },
                ],
              },
            },
          ],
          id: '6464820f98e92c32432c8e7c',
          desc: 'menuOptions',
        },
      ],
      events: [
        {
          eventId: '641a95e7cd3c6b0921a79f2b',
          actions: [
            {
              id: '645c3e718ffd89314abfd10e',
              modeId: '6401884318eda303abe11c40',
              mode: 'api',
              name: '执行业务',
              type: 'action',
              args: {
                id: '644731b09c229310c169e3fb',
              },
            },
          ],
        },
      ],
      classes: [],
      flowcharts: ['644731b09c229310c169e3fb', '64464f4e9c229310c169d7da', '64464dfe9c229310c169d72b'],
      extendPlatform: true,
      platforms: [],
      params: [
        {
          name: 'id',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6448e22cc48ddbf7e5f02da6',
        },
      ],
    },
    {
      originId: '64464a419c229310c169d487',
      project: '64464a419c229310c169d47e',
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
      originId: '64464a419c229310c169d488',
      project: '64464a419c229310c169d47e',
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
      originId: '644653eb9c229310c169da00',
      project: '64464a419c229310c169d47e',
      name: '人员录入页',
      type: 'page',
      cover: '62df689a9124c5a1826f5614/projects/64464a419c229310c169d47e/page/644653eb9c229310c169da00.png',
      nodes: [
        {
          id: 'X995',
          parentId: null,
          tag: 'a-card',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: null,
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'X995#641a7053cf44f6204642b9cd',
          parentId: 'X995',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: 'X995#641a7053cf44f6204642b9c9',
          slotId: '641a7053cf44f6204642b9cd',
        },
        {
          id: 'G173',
          parentId: 'X995#641a7053cf44f6204642b9cd',
          tag: 'a-form',
          type: 'element',
          depth: 2,
          preId: null,
          nextId: null,
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'G173#641a7052cf44f6204642b856',
          parentId: 'G173',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b856',
        },
        {
          id: 'K495',
          parentId: 'G173#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: 'W588',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '学生名称',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'K495#641a7052cf44f6204642b86c',
          parentId: 'K495',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: 'K495#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'N735',
          parentId: 'K495#641a7052cf44f6204642b86c',
          tag: 'a-input',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b875',
                value: {
                  id: '',
                  type: 'data',
                  modeId: '',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '',
                  },
                },
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b87b',
                actions: [
                  {
                    id: '64472977fafa3e71eb83f6c2',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '64472977fafa3e71eb83f6c2',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '6454c8d32f633c035f506d50',
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
          id: 'W588',
          parentId: 'G173#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 4,
          preId: 'K495',
          nextId: 'E399',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85e',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '学生年龄',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'W588#641a7052cf44f6204642b86c',
          parentId: 'W588',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: 'W588#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'R618',
          parentId: 'W588#641a7052cf44f6204642b86c',
          tag: 'a-input-number',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            events: [
              {
                eventId: '641a7052cf44f6204642b8a1',
                actions: [
                  {
                    id: '645cae275ab8a42ff0a6b9d7',
                    modeId: '6401884418eda303abe11c41',
                    mode: 'set',
                    name: '数据赋值',
                    type: 'action',
                    args: {
                      actions: [
                        {
                          id: '645cae275ab8a42ff0a6b9d7',
                          type: 'action',
                          modeId: '6401884418eda303abe11c41',
                          mode: 'setVar',
                          args: {
                            id: '645ca561aea28d56b0bdb3f8',
                            value: {
                              type: 'data',
                              mode: 'custom',
                              args: {
                                type: 'number',
                                value: 121,
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
          id: 'E399',
          parentId: 'G173#641a7052cf44f6204642b856',
          tag: 'a-form-item',
          type: 'element',
          depth: 4,
          preId: 'W588',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b85e',
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
          id: 'E399#641a7052cf44f6204642b86c',
          parentId: 'E399',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: 'E399#641a7052cf44f6204642b86a',
          slotId: '641a7052cf44f6204642b86c',
        },
        {
          id: 'E423',
          parentId: 'E399#641a7052cf44f6204642b86c',
          tag: 'a-button',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: 'V966',
          data: {
            props: [
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
                propId: '641a7052cf44f6204642b65c',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'option',
                    value: 'round',
                  },
                },
              },
            ],
            events: [
              {
                eventId: '641a95cecd3c6b0921a79efa',
                actions: [
                  {
                    id: '64472f27fafa3e71eb83f6c7',
                    modeId: '6401884318eda303abe11c40',
                    mode: 'api',
                    name: '执行业务',
                    type: 'action',
                    args: {
                      id: '64464dfe9c229310c169d72b',
                      params: {
                        type: 'data',
                        mode: 'custom',
                        args: {
                          type: 'module',
                          value: [
                            {
                              propId: '64464e03442d4717949ba939',
                              value: {
                                type: 'data',
                                mode: 'getVar',
                                args: {
                                  id: '6447262e0b661be9e0b91ac1',
                                },
                              },
                            },
                            {
                              propId: '64464e29442d4717949ba93b',
                              value: {
                                type: 'data',
                                mode: 'getVar',
                                args: {
                                  id: '644726370b661be9e0b91ac2',
                                },
                              },
                            },
                          ],
                        },
                      },
                      success: [
                        {
                          id: '645b2f08f191472727337c3c',
                          modeId: '641a95e6cd3c6b0921a79f29',
                          mode: 'open',
                          name: '页面跳转',
                          type: 'action',
                          args: {
                            mode: 'in',
                            page: '6447315b9c229310c169e36c',
                            target: 'blank',
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
          id: 'E423#641a7052cf44f6204642b667',
          parentId: 'E423',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'E423#641a7052cf44f6204642b668',
          slotId: '641a7052cf44f6204642b667',
        },
        {
          id: 'G606',
          parentId: 'E423#641a7052cf44f6204642b667',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: null,
          name: '提交按钮',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'custom',
                  args: {
                    type: 'text',
                    value: '提交表单',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'V966',
          parentId: 'E399#641a7052cf44f6204642b86c',
          tag: 'a-button',
          type: 'element',
          depth: 6,
          preId: 'E423',
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b65c',
                value: 'round',
              },
            ],
            events: [
              {
                eventId: '641a7052cf44f6204642b665',
                actions: [
                  {
                    type: 'action',
                    mode: 'when',
                    args: {
                      rd_if: [
                        {
                          condition: {
                            mode: 'expression',
                            args: {
                              expression: [
                                {
                                  mode: '',
                                  args: {
                                    left: {
                                      type: 'data',
                                      mode: 'getVar',
                                      args: {
                                        id: '6454c8d32f633c035f506d50',
                                      },
                                    },
                                    right: {
                                      type: 'data',
                                      mode: 'getEventData',
                                      args: {
                                        id: '641a7052cf44f6204642b666',
                                        path: ['64337737142f1aa760d86bd7', '643377e8142f1aa760d86bd8'],
                                      },
                                    },
                                  },
                                },
                                {
                                  mode: 'neq',
                                  args: {
                                    left: {
                                      type: 'data',
                                      mode: 'getVar',
                                      args: {
                                        id: '6454c8d32f633c035f506d50',
                                      },
                                    },
                                    right: {
                                      type: 'data',
                                      mode: 'getEventData',
                                      args: {
                                        id: '641a7052cf44f6204642b666',
                                        path: ['64337737142f1aa760d86bd7', '643377e8142f1aa760d86bd8'],
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                          },
                          actions: [],
                        },
                      ],
                      rd_else: {
                        actions: [],
                      },
                    },
                  },
                ],
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'V966#641a7052cf44f6204642b667',
          parentId: 'V966',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'V966#641a7052cf44f6204642b668',
          slotId: '641a7052cf44f6204642b667',
        },
        {
          id: 'H105',
          parentId: 'V966#641a7052cf44f6204642b667',
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
                    value: '保存',
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
          name: '学生名称',
          types: [
            {
              type: 'text',
            },
          ],
          id: '6454c8d32f633c035f506d50',
        },
        {
          name: '学生年龄',
          types: [
            {
              type: 'number',
            },
          ],
          id: '645ca561aea28d56b0bdb3f8',
        },
      ],
      events: [],
      classes: [],
      flowcharts: [
        '64464dfe9c229310c169d72b',
        '644731b09c229310c169e3fb',
        '64464e939c229310c169d784',
        '64464ed79c229310c169d7c6',
        '64464f4e9c229310c169d7da',
      ],
      extendPlatform: true,
      platforms: [],
      params: [],
    },
    {
      originId: '6447315b9c229310c169e36c',
      project: '64464a419c229310c169d47e',
      name: '人员列表',
      type: 'page',
      cover: '62df689a9124c5a1826f5614/projects/64464a419c229310c169d47e/page/6447315b9c229310c169e36c.png',
      nodes: [
        {
          id: 'D157',
          parentId: null,
          tag: 'a-table',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: 'M687',
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642ba34',
                value: {
                  id: '',
                  type: 'data',
                  modeId: '',
                  mode: 'tableData',
                  args: {
                    data: {
                      type: 'data',
                      mode: 'getApiData',
                      args: {
                        id: '644731b09c229310c169e3fb',
                        path: ['data', '64473279425c9a11a9a475af'],
                      },
                    },
                    showColumns: ['64473284425c9a11a9a475b0', '6447328c425c9a11a9a475b1', '64473291425c9a11a9a475b2'],
                    columns: [
                      {
                        dataIndex: '64473284425c9a11a9a475b0',
                        title: 'ID',
                      },
                      {
                        dataIndex: '6447328c425c9a11a9a475b1',
                        title: '用户名',
                      },
                      {
                        dataIndex: '64473291425c9a11a9a475b2',
                        title: '用户年龄',
                      },
                    ],
                    tableDataKey: 'dataSource',
                    keyFieldName: 'dataIndex',
                    titleFieldName: 'title',
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'M687',
          parentId: null,
          tag: 'text',
          type: 'element',
          depth: 0,
          preId: 'D157',
          nextId: 'L885',
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'L885',
          parentId: null,
          tag: 'text',
          type: 'element',
          depth: 0,
          preId: 'M687',
          nextId: 'L123',
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'L123',
          parentId: null,
          tag: 'a-button',
          type: 'element',
          depth: 0,
          preId: 'L885',
          nextId: null,
          productId: '6352061254bb9b1c84ce3570',
        },
      ],
      decl: [],
      events: [
        {
          eventId: '641a95e7cd3c6b0921a79f2b',
          actions: [
            {
              id: '64473c5323bb5dfddd8bdd31',
              modeId: '6401884318eda303abe11c40',
              mode: 'api',
              name: '执行业务',
              type: 'action',
              args: {
                id: '644731b09c229310c169e3fb',
              },
            },
          ],
        },
      ],
      classes: [],
      flowcharts: ['644731b09c229310c169e3fb'],
      extendPlatform: true,
      platforms: [],
      params: [],
    },
    {
      originId: '645c3f07e94e7d605e79d523',
      project: '64464a419c229310c169d47e',
      name: '人员详情页',
      type: 'page',
      cover: '62df689a9124c5a1826f5614/projects/64464a419c229310c169d47e/page/645c3f07e94e7d605e79d523.png',
      nodes: [
        {
          id: 'R109',
          parentId: null,
          tag: 'a-typography-title',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: 'F643',
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'R109#641a7052cf44f6204642b68a',
          parentId: 'R109',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: 'R109#editableIcon',
          slotId: '641a7052cf44f6204642b68a',
        },
        {
          id: 'G296',
          parentId: 'R109#641a7052cf44f6204642b68a',
          tag: 'text',
          type: 'element',
          depth: 2,
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
                    id: '645c463fe94e7d605e79d693',
                    path: ['data', '645c4691a257c532a6541865', '645c46aba257c532a6541867'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'F643',
          parentId: null,
          tag: 'div',
          type: 'element',
          depth: 0,
          preId: 'R109',
          nextId: null,
          productId: '6352061a54bb9b1c84ce357d',
        },
        {
          id: 'F643#641a95e6cd3c6b0921a79f2a',
          parentId: 'F643',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: null,
          slotId: '641a95e6cd3c6b0921a79f2a',
        },
        {
          id: 'N730',
          parentId: 'F643#641a95e6cd3c6b0921a79f2a',
          tag: 'each',
          type: 'element',
          depth: 2,
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
                    id: '644731b09c229310c169e3fb',
                    path: ['data', '64473279425c9a11a9a475af'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'N730#641a7052cf44f6204642b607',
          parentId: 'N730',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'F221',
          parentId: 'N730#641a7052cf44f6204642b607',
          tag: 'cond',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b608',
                value: {
                  id: '',
                  type: 'data',
                  modeId: '640998cf237f2a94b9bd79fe',
                  mode: 'lt',
                  args: {
                    '641a95b29f9c8e74332f9993': {
                      id: '',
                      type: 'data',
                      modeId: '',
                      mode: 'getEachData',
                      args: {
                        id: 'N730',
                        path: ['item', '64473291425c9a11a9a475b2'],
                      },
                    },
                    '641a95b29f9c8e74332f9994': {
                      type: 'data',
                      mode: 'custom',
                      args: {
                        type: 'number',
                        value: 6,
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
          id: 'F221#641a7052cf44f6204642b609',
          parentId: 'F221',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: null,
          nextId: 'F221#641a7052cf44f6204642b60a',
          slotId: '641a7052cf44f6204642b609',
        },
        {
          id: 'I275',
          parentId: 'F221#641a7052cf44f6204642b609',
          tag: 'a-card',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642b9c7',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'N730',
                    path: ['item', '6447328c425c9a11a9a475b1'],
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'I275#641a7053cf44f6204642b9cd',
          parentId: 'I275',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'I275#641a7053cf44f6204642b9c9',
          slotId: '641a7053cf44f6204642b9cd',
        },
        {
          id: 'R299',
          parentId: 'I275#641a7053cf44f6204642b9cd',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'H287',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'N730',
                    path: ['item', '64473284425c9a11a9a475b0'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'H287',
          parentId: 'I275#641a7053cf44f6204642b9cd',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: 'R299',
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
                    value: '小于6',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'F221#641a7052cf44f6204642b60a',
          parentId: 'F221',
          tag: 'tpl',
          type: 'element',
          depth: 5,
          preId: 'F221#641a7052cf44f6204642b609',
          nextId: null,
          slotId: '641a7052cf44f6204642b60a',
        },
        {
          id: 'U172',
          parentId: 'F221#641a7052cf44f6204642b60a',
          tag: 'a-card',
          type: 'element',
          depth: 6,
          preId: null,
          nextId: null,
          data: {
            props: [
              {
                propId: '641a7053cf44f6204642b9c7',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'N730',
                    path: ['item', '6447328c425c9a11a9a475b1'],
                  },
                },
              },
            ],
          },
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'U172#641a7053cf44f6204642b9cd',
          parentId: 'U172',
          tag: 'tpl',
          type: 'element',
          depth: 7,
          preId: null,
          nextId: 'U172#641a7053cf44f6204642b9c9',
          slotId: '641a7053cf44f6204642b9cd',
        },
        {
          id: 'R154',
          parentId: 'U172#641a7053cf44f6204642b9cd',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: null,
          nextId: 'Z865',
          data: {
            props: [
              {
                propId: '641a7052cf44f6204642b61f',
                value: {
                  type: 'data',
                  mode: 'getEachData',
                  args: {
                    id: 'N730',
                    path: ['item', '64473284425c9a11a9a475b0'],
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Z865',
          parentId: 'U172#641a7053cf44f6204642b9cd',
          tag: 'text',
          type: 'element',
          depth: 8,
          preId: 'R154',
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
                    value: '大于等于6',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
      ],
      decl: [],
      events: [
        {
          eventId: '641a95e7cd3c6b0921a79f2b',
          actions: [
            {
              id: '645c47a262f62e7825159a63',
              modeId: '6401884318eda303abe11c40',
              mode: 'api',
              name: '执行业务',
              type: 'action',
              args: {
                id: '645c463fe94e7d605e79d693',
              },
            },
            {
              id: '645caf2ff7612041cb29cb60',
              modeId: '6401884318eda303abe11c40',
              mode: 'api',
              name: '执行业务',
              type: 'action',
              args: {
                id: '644731b09c229310c169e3fb',
              },
            },
          ],
        },
      ],
      classes: [],
      flowcharts: ['644731b09c229310c169e3fb', '64464f4e9c229310c169d7da', '645c463fe94e7d605e79d693'],
      extendPlatform: true,
      platforms: [],
      params: [
        {
          name: '人员id',
          types: [
            {
              type: 'text',
            },
          ],
          id: '645c3f3f62f62e7825159a5e',
          required: true,
        },
      ],
    },
  ],
  themes: [
    {
      originId: '64464a419c229310c169d481',
      name: '默认主题',
      project: '64464a419c229310c169d47e',
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
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc3c5',
      name: 'Card 卡片',
      type: 'element',
      tag: 'a-card',
      nodes: [],
      spec: {
        props: [
          {
            id: 'activeTabKey',
            key: 'activeTabKey',
            types: [
              {
                type: 'text',
              },
            ],
            name: '当前标签值',
            desc: '当前激活页签的key',
          },
          {
            id: '641a7053cf44f6204642b9bd',
            key: 'headStyle',
            types: [
              {
                type: 'module',
              },
            ],
            name: '标题样式',
            desc: '自定义标题区域样式',
          },
          {
            id: '641a7053cf44f6204642b9be',
            key: 'bodyStyle',
            types: [
              {
                type: 'module',
              },
            ],
            name: '内容样式',
            desc: '内容区域自定义样式',
          },
          {
            id: '641a7053cf44f6204642b9bf',
            key: 'bordered',
            types: [
              {
                type: 'whether',
              },
            ],
            default: 'TRUE',
            name: '边框',
            desc: '是否有边框',
          },
          {
            id: '641a7053cf44f6204642b9c0',
            key: 'defaultActiveTabKey',
            types: [
              {
                type: 'text',
              },
            ],
            name: '默认标签值',
            desc: '初始化选中页签的key，如果没有设置activeTabKey',
          },
          {
            id: '641a7053cf44f6204642b9c1',
            key: 'extra',
            types: [
              {
                type: 'text',
              },
            ],
            name: '操作区域',
            desc: '卡片右上角的操作区域',
          },
          {
            id: '641a7053cf44f6204642b9c2',
            key: 'hoverable',
            types: [
              {
                type: 'whether',
              },
            ],
            default: 'FALSE',
            name: '悬浮状态',
            desc: '鼠标移过时可浮起',
          },
          {
            id: '641a7053cf44f6204642b9c3',
            key: 'loading',
            types: [
              {
                type: 'whether',
              },
            ],
            default: 'FALSE',
            name: '加载状态',
            desc: '当卡片内容还在加载中时，可以用loading展示一个占位',
          },
          {
            id: '641a7053cf44f6204642b9c4',
            key: 'tabList',
            types: [
              {
                type: 'unknown',
                multiple: true,
              },
            ],
            name: '标签页列表',
            desc: '页签标题列表,可以通过slots属性自定义tab',
          },
          {
            id: '641a7053cf44f6204642b9c5',
            key: 'size',
            types: [
              {
                type: 'text',
              },
            ],
            default: 'default',
            name: '卡片尺寸',
            desc: 'card的尺寸',
          },
          {
            id: '641a7053cf44f6204642b9c6',
            key: 'type',
            types: [
              {
                type: 'text',
              },
            ],
            name: '卡片类型',
            desc: '卡片类型，可设置为 inner 或不设置',
          },
          {
            id: '641a7053cf44f6204642b9c7',
            key: 'title',
            types: [
              {
                type: 'text',
              },
            ],
            name: '卡片标题',
            desc: '卡片标题',
          },
        ],
        events: [
          {
            key: 'tabChange',
            name: '页签切换',
            parameters: [
              {
                name: '标识',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '6433bda0142f1aa760d86bf2',
                key: 'key',
              },
            ],
            id: '641a7053cf44f6204642b9c8',
            desc: '页签切换的回调',
          },
        ],
        slots: [
          {
            id: '641a7053cf44f6204642b9c9',
            key: 'actions',
            parameters: [],
            name: '卡片操作组',
          },
          {
            id: '641a7053cf44f6204642b9ca',
            key: 'cover',
            parameters: [],
            name: '卡片封面',
          },
          {
            id: '641a7053cf44f6204642b9cb',
            key: 'tabBarExtraContent',
            parameters: [],
            name: '选项卡内容',
          },
          {
            id: '641a7053cf44f6204642b9cc',
            key: 'title',
            parameters: [],
            name: '卡片标题',
          },
          {
            id: '641a7053cf44f6204642b9cd',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: '641a7053cf44f6204642b9ce',
            key: 'customTab',
            parameters: [],
            name: '自定义标签',
            desc: '自定义 tabList tab 标签',
          },
          {
            id: '641a7053cf44f6204642b9cf',
            key: 'extra',
            parameters: [],
            name: '卡片右上角操作区域',
            desc: '卡片右上角的操作区域',
          },
        ],
      },
      classes: [],
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
      id: '62c68d5d27d4bddfa728891b',
      name: 'input 输入框',
      type: 'element',
      tag: 'input',
      spec: {
        props: [
          {
            id: 'type',
            key: 'type',
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
                      label: '数字',
                      value: 'number',
                    },
                    {
                      label: '密码',
                      value: 'password',
                    },
                    {
                      label: '日期',
                      value: 'date',
                    },
                    {
                      label: '时间',
                      value: 'time',
                    },
                    {
                      label: '地址',
                      value: 'URL',
                    },
                    {
                      label: '电子邮箱',
                      value: 'email',
                    },
                    {
                      label: '单选框',
                      value: 'radio',
                    },
                    {
                      label: '多选框',
                      value: 'checkbox',
                    },
                    {
                      label: '搜索框',
                      value: 'searc',
                    },
                  ],
                },
              },
            ],
            ui: {
              title: '类型',
              desc: '输入框类型',
            },
            default: 'text',
          },
          {
            id: 'name',
            key: 'name',
            types: [
              {
                type: 'text',
              },
            ],
            ui: {
              title: '名称',
              desc: '表单控件名称',
            },
          },
          {
            id: 'value',
            key: 'value',
            types: [
              {
                type: 'text',
              },
            ],
            ui: {
              title: '值',
              desc: '输入框的值',
            },
          },
          {
            id: 'placeholder',
            key: 'placeholder',
            types: [
              {
                type: 'text',
              },
            ],
            ui: {
              title: '占位符',
              desc: '当输入框为空时，控件中显示的内容',
            },
          },
        ],
      },
    },
    {
      projectId: '6448caed58252f48a6d485e5',
      name: 'e-menu',
      tag: 'f-43272b44',
      id: '6448cb0258252f48a6d48610',
      nodes: [
        {
          id: 'J415',
          parentId: null,
          tag: 'a-menu',
          type: 'element',
          depth: 0,
          preId: null,
          nextId: null,
          productId: '6352061254bb9b1c84ce3570',
        },
        {
          id: 'J415#641a7052cf44f6204642b716',
          parentId: 'J415',
          tag: 'tpl',
          type: 'element',
          depth: 1,
          preId: null,
          nextId: 'J415#641a7052cf44f6204642b717',
          slotId: '641a7052cf44f6204642b716',
        },
        {
          id: 'Q544',
          parentId: 'J415#641a7052cf44f6204642b716',
          tag: 'each',
          type: 'element',
          depth: 2,
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
                    id: '6448cb82319af5b84c5249f6',
                  },
                },
              },
            ],
          },
          productId: '6358fb8554bb9b1c84ce47a2',
        },
        {
          id: 'Q544#641a7052cf44f6204642b607',
          parentId: 'Q544',
          tag: 'tpl',
          type: 'element',
          depth: 3,
          preId: null,
          nextId: null,
          slotId: '641a7052cf44f6204642b607',
        },
        {
          id: 'S946',
          parentId: 'Q544#641a7052cf44f6204642b607',
          tag: 'a-menu-item',
          type: 'element',
          depth: 4,
          preId: null,
          nextId: null,
          productId: '6352061254bb9b1c84ce3570',
        },
      ],
      decl: [],
      events: [],
      spec: {
        props: [
          {
            name: 'data',
            types: [
              {
                type: 'module',
                multiple: true,
                rules: {
                  properties: [
                    {
                      name: 'value',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '6448cb9c319af5b84c5249f7',
                      extendPlatform: true,
                      desc: 'value',
                    },
                    {
                      name: 'label',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '6448cba1319af5b84c5249f8',
                      extendPlatform: true,
                      desc: 'label',
                    },
                  ],
                },
              },
            ],
            id: '6448cb82319af5b84c5249f6',
            extendPlatform: true,
            desc: '菜单数据',
            required: true,
          },
        ],
        events: [
          {
            extendPlatform: true,
            parameters: [
              {
                name: 'data',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '当前项',
                          types: [
                            {
                              type: 'module',
                            },
                          ],
                          id: '6448ce2fff2be83d6464615b',
                        },
                        {
                          name: '当前标识',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '6448ce42ff2be83d6464615c',
                        },
                        {
                          name: '选中标识数组',
                          types: [
                            {
                              type: 'text',
                              multiple: true,
                            },
                          ],
                          id: '6448ce47ff2be83d6464615d',
                        },
                      ],
                    },
                  },
                ],
                id: '6448ce21ff2be83d6464615a',
              },
            ],
            id: '6448cdf4ff2be83d64646158',
            name: '选中事件',
            desc: '',
          },
        ],
        slots: [
          {
            id: '64647e5e52af8e55ee6c57d1',
            key: '64647e5e52af8e55ee6c57d1',
            name: 'MenuItem插槽',
            parameters: [
              {
                name: 'item',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '64647e7952af8e55ee6c57d2',
              },
            ],
          },
        ],
      },
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc39d',
      name: 'Menu 导航菜单',
      type: 'element',
      tag: 'a-menu',
      nodes: [],
      spec: {
        props: [
          {
            name: '加速渲染',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b708',
            key: 'forceSubMenuRender',
            default: 'false',
            desc: '在子菜单展示之前就渲染进 DOM',
          },
          {
            name: '收起状态',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b709',
            key: 'inlineCollapsed',
            desc: 'inline 时菜单是否收起状态',
          },
          {
            name: '缩进宽度',
            types: [
              {
                type: 'number',
              },
            ],
            id: 'inlineIndent',
            key: 'inlineIndent',
            default: '24',
            desc: 'inline 模式的菜单缩进宽度',
          },
          {
            name: '菜单类型',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '垂直',
                      value: 'vertical',
                    },
                    {
                      label: '水平',
                      value: 'horizontal',
                    },
                    {
                      label: '内嵌',
                      value: 'inline',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b70a',
            key: 'mode',
            default: 'vertical',
          },
          {
            name: '允许多选',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b70b',
            key: 'multiple',
            default: 'false',
          },
          {
            name: '展开菜单项Key',
            types: [
              {
                type: 'text',
                multiple: true,
              },
            ],
            id: '641a7052cf44f6204642b70c',
            key: 'openKeys',
            desc: '当前展开的 SubMenu 菜单项 key 数组',
          },
          {
            name: '允许选中',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b70d',
            key: 'selectable',
            default: 'true',
          },
          {
            name: '选中菜单项Key',
            types: [
              {
                type: 'text',
                multiple: true,
              },
            ],
            id: 'selectedKeys',
            key: 'selectedKeys',
          },
          {
            name: '子菜单移出延时',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7052cf44f6204642b70e',
            key: 'subMenuCloseDelay',
            default: '0.1',
          },
          {
            name: '子菜单移入延时',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7052cf44f6204642b70f',
            key: 'subMenuOpenDelay',
            default: '0',
          },
          {
            name: '主题颜色',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '白色',
                      value: 'light',
                    },
                    {
                      label: '暗黑',
                      value: 'dark',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b710',
            key: 'theme',
            default: 'light',
          },
          {
            name: '子菜单触发',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '点击',
                      value: 'click',
                    },
                    {
                      label: '悬停',
                      value: 'hover',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b711',
            key: 'triggerSubMenuAction',
            default: 'hover',
          },
        ],
        events: [
          {
            key: 'click',
            name: '点击菜单',
            parameters: [
              {
                name: '条目',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '是否禁用',
                          types: [
                            {
                              type: 'whether',
                            },
                          ],
                          id: '642fdeafce2cf586328bcc15',
                          key: 'disabled',
                        },
                        {
                          name: 'item标识',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fdeafce2cf586328bcc17',
                          key: 'key',
                          desc: 'item 的唯一标志',
                        },
                        {
                          name: '缩起时标题',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fdeb0ce2cf586328bcc18',
                          key: 'title',
                        },
                      ],
                    },
                  },
                ],
                id: '642fdd79ce2cf586328bcc12',
                key: 'item',
              },
              {
                name: '标识',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fdd79ce2cf586328bcc13',
                key: 'key',
              },
              {
                name: '标识路径',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fdd80ce2cf586328bcc14',
                key: 'keyPath',
              },
            ],
            id: '641a7052cf44f6204642b712',
            desc: '点击 MenuItem 调用此函数',
          },
          {
            key: 'deselect',
            name: '取消选中',
            parameters: [
              {
                name: '条目',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '是否禁用',
                          types: [
                            {
                              type: 'whether',
                            },
                          ],
                          id: '642fdf4fce2cf586328bcc1c',
                          key: 'disabled',
                        },
                        {
                          name: 'item标识',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fdf4fce2cf586328bcc1d',
                          key: 'key',
                        },
                        {
                          name: '缩起时标题',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '642fdf4fce2cf586328bcc1e',
                          key: 'title',
                        },
                      ],
                    },
                  },
                ],
                id: '642fdf0bce2cf586328bcc19',
                key: 'item',
              },
              {
                name: '标识',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fdf0cce2cf586328bcc1a',
                key: 'key',
              },
              {
                name: '选项标识',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fdf0cce2cf586328bcc1b',
                key: 'selectedKeys ',
              },
            ],
            id: '641a7052cf44f6204642b713',
            desc: '取消选中时调用，仅在 multiple 生效',
          },
          {
            key: 'openChange',
            name: '子菜单展开/关闭',
            parameters: [
              {
                name: '开启标识',
                types: [
                  {
                    type: 'text',
                    multiple: true,
                  },
                ],
                id: '642fdf7cce2cf586328bcc1f',
                key: 'openKeys',
              },
            ],
            id: '641a7052cf44f6204642b714',
            desc: 'SubMenu 展开/关闭的回调',
          },
          {
            key: 'select',
            name: '被选中',
            parameters: [
              {
                name: '条目',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '禁用',
                          types: [
                            {
                              type: 'whether',
                            },
                          ],
                          id: '64337db4142f1aa760d86bde',
                          key: 'disabled',
                        },
                        {
                          name: '标识',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '64337db4142f1aa760d86bdf',
                          key: 'key',
                        },
                        {
                          name: '收缩时标题',
                          types: [
                            {
                              type: 'text',
                            },
                          ],
                          id: '64337db5142f1aa760d86be0',
                          key: 'title',
                        },
                      ],
                    },
                  },
                ],
                id: '642fe0ecce2cf586328bcc20',
                key: 'item',
              },
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fe0edce2cf586328bcc21',
                key: 'key',
              },
              {
                name: '选中项标识',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '642fe0edce2cf586328bcc22',
                key: 'selectedKeys ',
              },
            ],
            id: '641a7052cf44f6204642b715',
            desc: '被选中时调用',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b716',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: '641a7052cf44f6204642b717',
            key: 'overflowedIndicator',
            parameters: [],
            name: 'menu收缩图标',
            desc: '用于自定义 Menu 水平空间不足时的省略收缩的图标',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc39e',
      name: 'MenuItem 菜单项',
      type: 'element',
      tag: 'a-menu-item',
      nodes: [],
      spec: {
        props: [
          {
            name: '禁用',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b718',
            key: 'disabled',
            default: 'false',
          },
          {
            name: 'key标识',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b719',
            key: 'key',
          },
          {
            name: '悬浮标题',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b71a',
            key: 'title',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b71b',
            key: 'default',
            isHide: true,
            name: '默认',
          },
          {
            id: '641a7052cf44f6204642b71c',
            key: 'icon',
            name: '菜单图标',
          },
          {
            id: '641a7052cf44f6204642b71d',
            key: 'title',
            name: '悬浮标题',
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
            id: 'defaultValue',
            key: 'defaultValue',
            types: [
              {
                type: 'text',
              },
            ],
            name: '默认内容',
            desc: '输入框默认内容',
          },
          {
            id: '641a7052cf44f6204642b86e',
            key: 'disabled',
            types: [
              {
                type: 'whether',
              },
            ],
            default: 'false',
            name: '禁用状态',
          },
          {
            id: '641a7052cf44f6204642b86f',
            key: 'id',
            types: [
              {
                type: 'text',
              },
            ],
            name: '唯一标识',
          },
          {
            id: '641a7052cf44f6204642b870',
            key: 'maxlength',
            types: [
              {
                type: 'number',
              },
            ],
            name: '最大长度',
          },
          {
            id: '641a7052cf44f6204642b871',
            key: 'prefix',
            types: [
              {
                type: 'text',
              },
            ],
            name: '前缀图标',
          },
          {
            id: '641a7052cf44f6204642b872',
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
            default: 'default',
            name: '尺寸',
          },
          {
            id: '641a7052cf44f6204642b873',
            key: 'suffix',
            types: [
              {
                type: 'text',
              },
            ],
            name: '后缀图标',
          },
          {
            id: '641a7052cf44f6204642b874',
            key: 'type',
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
            default: 'text',
            name: '输入框类型',
          },
          {
            id: '641a7052cf44f6204642b875',
            key: 'value',
            types: [
              {
                type: 'text',
              },
            ],
            name: '输入框内容',
          },
          {
            id: '641a7052cf44f6204642b876',
            key: 'allowClear',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '显示清除',
          },
          {
            id: '641a7052cf44f6204642b877',
            key: 'bordered',
            types: [
              {
                type: 'whether',
              },
            ],
            default: true,
            name: '边框',
            desc: '是否有边框',
          },
          {
            id: '641a7052cf44f6204642b878',
            key: 'showCount',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '展示字数',
            desc: '是否展示字数',
          },
          {
            id: '641a7052cf44f6204642b879',
            key: 'addonAfter',
            types: [
              {
                type: 'text',
              },
            ],
            name: '后置标签',
            desc: '带标签的 input，设置后置标签',
          },
          {
            id: '641a7052cf44f6204642b87a',
            key: 'addonBefore',
            types: [
              {
                type: 'text',
              },
            ],
            name: '前置标签',
            desc: '带标签的 input，设置前置标签',
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
      id: '613ecb25af722dc29c7fc3b6',
      name: 'InputNumber 数字输入框',
      type: 'element',
      tag: 'a-input-number',
      nodes: [],
      spec: {
        props: [
          {
            id: '641a7052cf44f6204642b892',
            key: 'autofocus',
            types: [
              {
                type: 'whether',
              },
            ],
            default: 'false',
            name: '自动获取焦点',
            desc: '自动获取焦点',
          },
          {
            id: 'defaultValue',
            key: 'defaultValue',
            types: [
              {
                type: 'number',
              },
            ],
            name: '初始值',
            desc: '初始值',
          },
          {
            id: '641a7052cf44f6204642b893',
            key: 'disabled',
            types: [
              {
                type: 'whether',
              },
            ],
            default: 'false',
            name: '禁止变更',
            desc: '禁用',
          },
          {
            id: '641a7052cf44f6204642b894',
            key: 'formatter',
            types: [
              {
                type: 'unknown',
              },
            ],
            name: '格式',
            desc: '展示值的格式',
          },
          {
            id: '641a7052cf44f6204642b895',
            key: 'max',
            types: [
              {
                type: 'number',
              },
            ],
            default: 'Infinity',
            name: '最大值',
            desc: '最大值',
          },
          {
            id: '641a7052cf44f6204642b896',
            key: 'min',
            types: [
              {
                type: 'number',
              },
            ],
            default: 'Infinity',
            name: '最小值',
            desc: '最小值',
          },
          {
            id: '641a7052cf44f6204642b897',
            key: 'parser',
            types: [
              {
                type: 'unknown',
              },
            ],
            name: '转换格式',
            desc: '从formatter里转换回数字的方式',
          },
          {
            id: '641a7052cf44f6204642b898',
            key: 'precision',
            types: [
              {
                type: 'number',
              },
            ],
            name: '数值精度',
            desc: '数值精度',
          },
          {
            id: '641a7052cf44f6204642b899',
            key: 'decimalSeparator',
            types: [
              {
                type: 'text',
              },
            ],
            name: '小数点',
            desc: '小数点',
          },
          {
            id: '641a7052cf44f6204642b89a',
            key: 'size',
            types: [
              {
                type: 'text',
              },
            ],
            name: '输入框大小',
            desc: '输入框大小',
          },
          {
            id: '641a7052cf44f6204642b89b',
            key: 'step',
            types: [
              {
                type: 'text',
              },
            ],
            default: '1',
            name: '步长',
            desc: '每次改变步数，可以为小数',
          },
          {
            id: '641a7052cf44f6204642b89c',
            key: 'value',
            types: [
              {
                type: 'number',
              },
            ],
            name: '当前值',
            desc: '当前值',
          },
          {
            id: '641a7052cf44f6204642b89d',
            key: 'bordered',
            types: [
              {
                type: 'whether',
              },
            ],
            default: true,
            name: '边框',
            desc: '是否有边框',
          },
          {
            id: '641a7052cf44f6204642b89e',
            key: 'controls',
            types: [
              {
                type: 'whether',
              },
            ],
            default: true,
            name: '显示增减按钮',
          },
          {
            id: '641a7052cf44f6204642b89f',
            key: 'stringMode',
            types: [
              {
                type: 'whether',
              },
            ],
            name: '字符值模式',
          },
          {
            id: '641a7052cf44f6204642b8a0',
            key: 'keyboard',
            types: [
              {
                type: 'whether',
              },
            ],
            default: true,
            name: '键盘快捷',
            desc: '是否启用键盘快捷行为',
          },
        ],
        events: [
          {
            key: 'change',
            name: '值改变',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'text',
                  },
                  {
                    type: 'number',
                    default: {
                      id: '',
                      type: 'data',
                      modeId: '',
                      mode: 'custom',
                      args: {
                        type: 'number',
                        value: 0,
                      },
                    },
                  },
                ],
                id: '642f80086c9551f4750537c0',
                key: 'value',
              },
            ],
            id: '641a7052cf44f6204642b8a1',
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
                                    id: '642f928afa0f4c663f442cb3',
                                    key: 'value',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '642f927efa0f4c663f442cb2',
                          key: 'target',
                        },
                      ],
                    },
                  },
                ],
                id: '642f9250fa0f4c663f442cb0',
                key: 'event',
              },
            ],
            id: '641a7052cf44f6204642b8a2',
          },
          {
            key: 'step',
            name: '点击上下箭头',
            parameters: [
              {
                name: '值',
                types: [
                  {
                    type: 'number',
                  },
                ],
                id: '642f929bfa0f4c663f442cb4',
                key: 'value',
              },
              {
                name: '信息',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '偏移',
                          types: [
                            {
                              type: 'number',
                            },
                          ],
                          id: '642f92c3fa0f4c663f442cb6',
                          key: 'offset',
                        },
                        {
                          name: '类型',
                          types: [
                            {
                              type: 'option',
                              multiple: false,
                              rules: {
                                items: [
                                  {
                                    label: '上',
                                    value: 'up',
                                  },
                                  {
                                    label: '下',
                                    value: 'down',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '642f92c3fa0f4c663f442cb7',
                          key: 'type',
                        },
                      ],
                    },
                  },
                ],
                id: '642f929dfa0f4c663f442cb5',
                key: 'info',
              },
            ],
            id: '641a7052cf44f6204642b8a3',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b8a4',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: '641a7052cf44f6204642b8a5',
            key: 'addonAfter',
            parameters: [],
            name: '后置标签',
          },
          {
            id: '641a7052cf44f6204642b8a6',
            key: 'addonBefore',
            parameters: [],
            name: '前置标签',
          },
          {
            id: '641a7052cf44f6204642b8a7',
            key: 'prefix',
            parameters: [],
            name: '带有前缀图标的 input',
          },
        ],
      },
      classes: [],
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
      id: '613ecb25af722dc29c7fc3d1',
      name: 'Table 表格',
      type: 'element',
      tag: 'a-table',
      nodes: [],
      spec: {
        props: [
          {
            name: '布局',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '默认',
                      value: 'auto',
                    },
                    {
                      label: '固定',
                      value: 'fixed',
                    },
                  ],
                },
              },
            ],
            id: '641a7053cf44f6204642ba31',
            key: 'tableLayout',
          },
          {
            name: '显示外边框',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba32',
            key: 'bordered',
            default: 'FALSE',
          },
          {
            name: '子列名',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7053cf44f6204642ba33',
            key: 'childrenColumnName',
            default: 'children',
          },
          {
            name: '列',
            types: [
              {
                type: 'table',
                multiple: false,
                rules: {
                  tableDataKey: 'dataSource',
                  tableConfig: [
                    {
                      name: '标题',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: 'title',
                      key: 'title',
                      required: true,
                    },
                    {
                      name: '路径',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: 'key',
                      key: 'dataIndex',
                      required: true,
                    },
                    {
                      name: '对齐方式',
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
                                label: '中',
                                value: 'center',
                              },
                              {
                                label: '右',
                                value: 'right',
                              },
                            ],
                          },
                        },
                      ],
                      id: 'pgcdnlguyacbglsofsluyg',
                      key: 'algin',
                    },
                    {
                      name: '宽度',
                      types: [
                        {
                          type: 'number',
                          rules: {
                            maxPrecision: '',
                          },
                        },
                      ],
                      id: 'pgehzourirsdykyfsjgejm',
                      key: 'width',
                    },
                  ],
                },
              },
            ],
            id: '641a7053cf44f6204642ba34',
            key: 'columns',
          },
          {
            name: '组成部分',
            types: [
              {
                type: 'module',
              },
            ],
            id: '641a7053cf44f6204642ba35',
            key: 'components',
          },
          {
            name: '默认展开',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba37',
            key: 'defaultExpandAllRows',
            default: 'FALSE',
          },
          {
            name: '默认行',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7053cf44f6204642ba38',
            key: 'defaultExpandedRowKeys',
          },
          {
            name: '展开行',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7053cf44f6204642ba39',
            key: 'expandedRowKeys',
          },
          {
            name: '展开行渲染',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642ba3a',
            key: 'expandedRowRender',
          },
          {
            name: '展开图标',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642ba3b',
            key: 'expandIcon',
          },
          {
            name: '点击展开行',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba3c',
            key: 'expandRowByClick',
            default: 'FALSE',
          },
          {
            name: '展开图标显示',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7053cf44f6204642ba3d',
            key: 'expandIconColumnIndex',
          },
          {
            name: '表格底部',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642ba3e',
            key: 'footer',
          },
          {
            name: '缩进大小',
            types: [
              {
                type: 'number',
              },
            ],
            id: '641a7053cf44f6204642ba3f',
            key: 'indentSize',
            default: '15',
          },
          {
            name: '加载',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7053cf44f6204642ba40',
            key: 'loading',
            default: 'FALSE',
          },
          {
            name: '默认文案设置',
            types: [
              {
                type: 'module',
              },
            ],
            id: '641a7053cf44f6204642ba41',
            key: 'locale',
          },
          {
            name: '页码位置',
            types: [
              {
                type: 'module',
              },
            ],
            id: '641a7053cf44f6204642ba42',
            key: 'pagination',
          },
          {
            name: '行类名',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: 'rowClassName',
            key: 'rowClassName',
          },
          {
            name: '行主键',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7053cf44f6204642ba43',
            key: 'rowKey',
            default: 'key',
          },
          {
            name: '列表项可选',
            types: [
              {
                type: 'module',
              },
            ],
            id: 'rowSelection',
            key: 'rowSelection',
            default: 'null',
          },
          {
            name: '指定滚动区域',
            types: [
              {
                type: 'module',
              },
            ],
            id: '641a7053cf44f6204642ba44',
            key: 'scroll',
          },
          {
            name: '表头',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba45',
            key: 'showHeader',
            default: 'TRUE',
          },
          {
            name: '大小',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '大',
                      value: 'default',
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
            id: '641a7053cf44f6204642ba46',
            key: 'size',
            default: 'default',
          },
          {
            name: '标题',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642ba47',
            key: 'title',
          },
          {
            name: '自定义标题',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642ba48',
            key: 'customHeaderRow',
          },
          {
            name: '自定义行',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642ba49',
            key: 'customRow',
          },
          {
            name: '筛选菜单',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7053cf44f6204642ba4a',
            key: 'getPopupContainer',
          },
          {
            name: '默认配置',
            types: [
              {
                type: 'unknown',
              },
            ],
            id: '641a7053cf44f6204642ba4b',
            key: 'transformCellText',
          },
          {
            name: '固定展开图标',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba4c',
            key: 'expandFixed',
            desc: '控制展开图标是否固定，可选 true left right',
          },
          {
            name: '允许行展开',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba4d',
            key: 'rowExpandable',
            desc: '设置是否允许行展开',
          },
          {
            name: '展示行展开列',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba4e',
            key: 'showExpandColumn',
            default: true,
            desc: '设置是否展示行展开列',
          },
          {
            name: '显示下一次排序',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba4f',
            key: 'showSorterTooltip',
            default: true,
            desc: '表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性',
          },
          {
            name: '排序方式',
            types: [
              {
                type: 'unknown',
                multiple: true,
              },
            ],
            id: '641a7053cf44f6204642ba50',
            key: 'sortDirections',
            desc: '支持的排序方式，取值为 ascend descend',
          },
          {
            name: '滚动条',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7053cf44f6204642ba51',
            key: 'sticky',
            desc: '设置粘性头部和滚动条',
          },
        ],
        events: [
          {
            key: 'expandedRowsChange',
            name: '展开的行变化',
            parameters: [
              {
                name: '展开行',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '6433c757142f1aa760d86bfd',
                key: 'expandedRows',
              },
            ],
            id: '641a7053cf44f6204642ba52',
          },
          {
            key: 'change',
            name: '分页、排序、筛选变化',
            parameters: [
              {
                name: '分页器配置',
                types: [
                  {
                    type: 'module',
                    rules: {
                      properties: [
                        {
                          name: '分页器位置',
                          types: [
                            {
                              type: 'option',
                              multiple: true,
                              rules: {
                                items: [
                                  {
                                    label: '左上',
                                    value: 'topLeft',
                                  },
                                  {
                                    label: '中上',
                                    value: 'topCenter',
                                  },
                                  {
                                    label: '右上',
                                    value: 'topRight',
                                  },
                                  {
                                    label: '左下',
                                    value: 'bottomLeft',
                                  },
                                  {
                                    label: '中下',
                                    value: 'bottomCenter',
                                  },
                                  {
                                    label: '右下',
                                    value: 'bottomRight',
                                  },
                                ],
                              },
                            },
                          ],
                          id: '6433c406142f1aa760d86bfa',
                          key: 'position',
                        },
                      ],
                    },
                  },
                ],
                id: '6433c38b142f1aa760d86bf7',
                key: 'pagination',
              },
              {
                name: '表头筛选菜单',
                types: [
                  {
                    type: 'module',
                    multiple: true,
                  },
                ],
                id: '6433c38c142f1aa760d86bf8',
                key: 'filters',
              },
              {
                name: '排序函数',
                types: [
                  {
                    type: 'action',
                  },
                  {
                    type: 'whether',
                  },
                ],
                id: '6433c38d142f1aa760d86bf9',
                key: 'sorter',
              },
            ],
            id: '641a7053cf44f6204642ba53',
            desc: '分页、排序、筛选变化时触发',
          },
          {
            key: 'expand',
            name: '展开图标',
            parameters: [
              {
                name: '展开',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '6433c654142f1aa760d86bfb',
                key: 'expanded',
              },
              {
                name: '记录',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '6433c654142f1aa760d86bfc',
                key: 'record',
              },
            ],
            id: '641a7053cf44f6204642ba54',
            desc: '点击展开图标时触发',
          },
          {
            key: 'resizeColumn',
            name: '拖动列',
            parameters: [
              {
                name: '列宽度',
                types: [
                  {
                    type: 'text',
                  },
                  {
                    type: 'number',
                  },
                ],
                id: '6433c77c142f1aa760d86bfe',
                key: 'width',
              },
              {
                name: '列',
                types: [
                  {
                    type: 'text',
                  },
                ],
                id: '6433c77c142f1aa760d86bff',
                key: 'column',
              },
            ],
            id: 'resizeColumn',
            desc: '拖动列时触发',
          },
        ],
        slots: [
          {
            id: '641a7053cf44f6204642ba55',
            key: 'bodyCell',
            parameters: [],
            name: '个性化单元格',
            desc: '个性化单元格',
          },
          {
            id: '641a7053cf44f6204642ba56',
            key: 'customFilterDropdown',
            parameters: [],
            name: '自定义筛选菜单',
            desc: '自定义筛选菜单，需要配合 column.customFilterDropdown 使用',
          },
          {
            id: '641a7053cf44f6204642ba57',
            key: 'customFilterIcon',
            parameters: [],
            name: '自定义筛选图标',
            desc: '自定义筛选图标',
          },
          {
            id: '641a7053cf44f6204642ba58',
            key: 'emptyText',
            parameters: [],
            name: '显示内容',
            desc: '自定义空数据时的显示内容',
          },
          {
            id: '641a7053cf44f6204642ba59',
            key: 'headerCell',
            parameters: [],
            name: '个性化头部单元格',
            desc: '个性化头部单元格',
          },
          {
            id: '641a7053cf44f6204642ba5a',
            key: 'summary',
            parameters: [],
            name: '总结栏',
            desc: '总结栏',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '613ecb25af722dc29c7fc38b',
      name: 'TypographyTitle 标题排版',
      type: 'element',
      tag: 'a-typography-title',
      nodes: [],
      spec: {
        props: [
          {
            name: '允许复制',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b680',
            key: 'copyable',
          },
          {
            name: '添加删除线样式',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b681',
            key: 'delete',
            default: 'false',
          },
          {
            name: '添加代码样式',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b67f',
            key: 'code',
            default: 'false',
            desc: '添加代码样式',
          },
          {
            name: '禁用文本',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b682',
            key: 'disabled',
            default: 'false',
          },
          {
            name: '可编辑',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b683',
            key: 'editable',
          },
          {
            name: '溢出省略',
            types: [
              {
                type: 'whether',
              },
              {
                type: 'module',
                rules: {
                  properties: [
                    {
                      name: '可展开',
                      types: [
                        {
                          type: 'whether',
                        },
                      ],
                      id: '645a0e58470c480de3bfb32d',
                      extendPlatform: true,
                      key: 'expandable',
                    },
                    {
                      name: '最大行数',
                      types: [
                        {
                          type: 'number',
                        },
                      ],
                      id: '645a0e59470c480de3bfb32e',
                      extendPlatform: true,
                      key: 'rows',
                    },
                    {
                      name: '自定义省略内容后缀',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '645a0e59470c480de3bfb32f',
                      extendPlatform: true,
                      key: 'suffix',
                    },
                    {
                      name: '自定义展开描述文案',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '645a0e59470c480de3bfb330',
                      extendPlatform: true,
                      key: 'symbol',
                    },
                    {
                      name: '省略时提示信息',
                      types: [
                        {
                          type: 'whether',
                        },
                        {
                          type: 'text',
                        },
                      ],
                      id: '645a0e59470c480de3bfb331',
                      extendPlatform: true,
                      desc: '省略时，展示提示信息',
                      key: 'tooltip',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b684',
            key: 'ellipsis',
            default: 'false',
            desc: '自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等',
          },
          {
            name: '标题大小',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: 'H1',
                      value: 1,
                    },
                    {
                      label: 'H2',
                      value: 2,
                    },
                    {
                      label: 'H3',
                      value: 3,
                    },
                    {
                      label: 'H4',
                      value: 4,
                    },
                    {
                      label: 'H5',
                      value: 5,
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b685',
            key: 'level',
            default: '1',
          },
          {
            name: '底色标记',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b686',
            key: 'mark',
            default: 'false',
          },
          {
            name: '文本类型',
            types: [
              {
                type: 'option',
                rules: {
                  items: [
                    {
                      label: '次要',
                      value: 'secondary',
                    },
                    {
                      label: '成功',
                      value: 'success',
                    },
                    {
                      label: '提示',
                      value: 'warning',
                    },
                    {
                      label: '警示',
                      value: 'danger',
                    },
                  ],
                },
              },
            ],
            id: '641a7052cf44f6204642b687',
            key: 'type',
          },
          {
            name: '下划线',
            types: [
              {
                type: 'whether',
              },
            ],
            id: '641a7052cf44f6204642b688',
            key: 'underline',
            default: 'false',
          },
          {
            name: '当前内容',
            types: [
              {
                type: 'text',
              },
            ],
            id: '641a7052cf44f6204642b689',
            key: 'content',
            default: '输入文本内容',
          },
        ],
        slots: [
          {
            id: '641a7052cf44f6204642b68a',
            key: 'default',
            isHide: true,
            parameters: [],
            name: '默认',
          },
          {
            id: 'editableIcon',
            key: 'editableIcon',
            parameters: [],
            name: '编辑图标',
          },
          {
            id: '641a7052cf44f6204642b68b',
            key: 'editableTooltip',
            parameters: [],
            name: '提示文本',
          },
          {
            id: 'copyableIcon',
            key: 'copyableIcon',
            parameters: [],
            name: '拷贝图标',
          },
          {
            id: '641a7052cf44f6204642b68c',
            key: 'copyableTooltip',
            parameters: [],
            name: '提示文案',
          },
          {
            id: '641a7052cf44f6204642b68d',
            key: 'ellipsisSymbol',
            parameters: [],
            name: '展开描述',
          },
          {
            id: '641a7052cf44f6204642b68e',
            key: 'ellipsisTooltip',
            parameters: [],
            name: '省略时展示提示',
          },
          {
            id: '641a7052cf44f6204642b68f',
            key: 'enterEnterIcon',
            parameters: [],
            name: '自定义“enter”图标',
          },
        ],
        events: [
          {
            extendPlatform: true,
            key: 'click',
            id: '642b88049d9bbcb336f978d8',
            name: '点击标题',
            desc: '',
          },
        ],
      },
      classes: [],
    },
    {
      productId: '6352061a54bb9b1c84ce357d',
      id: '62c68d5d27d4bddfa72888e1',
      name: 'div 块元素',
      type: 'element',
      tag: 'div',
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '64449e64ad342e0014ed328a',
      name: '成功消息提示',
      type: 'action',
      tag: 'message.success',
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '644789a3ad342e0014ed5a83',
      name: '飒飒大',
      type: 'function',
      tag: 'yuy',
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '646328fdcff50e223777b75f',
      name: '弹窗（信息）',
      type: 'action',
      tag: 'Modal.info',
      func: {
        parameters: [
          {
            name: 'data',
            types: [
              {
                type: 'module',
                rules: {
                  properties: [
                    {
                      name: 'title',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '64632a69899e94bfe954bf90',
                      extendPlatform: true,
                      key: 'title',
                    },
                    {
                      name: 'onOk',
                      types: [
                        {
                          type: 'action',
                          rules: {
                            parameters: [
                              {
                                name: 'onOkArgs',
                                types: [
                                  {
                                    type: 'module',
                                    rules: {
                                      properties: [
                                        {
                                          name: 'x',
                                          types: [
                                            {
                                              type: 'text',
                                            },
                                          ],
                                          id: '64632a7f899e94bfe954bf93',
                                          extendPlatform: true,
                                          key: 'x',
                                        },
                                        {
                                          name: 't',
                                          types: [
                                            {
                                              type: 'text',
                                            },
                                          ],
                                          id: '64632a82899e94bfe954bf94',
                                          extendPlatform: true,
                                          key: 't',
                                        },
                                      ],
                                    },
                                  },
                                ],
                                id: '64632a76899e94bfe954bf92',
                                extendPlatform: true,
                                key: 'onOkArgs',
                              },
                            ],
                          },
                        },
                      ],
                      id: '64632a6c899e94bfe954bf91',
                      extendPlatform: true,
                      key: 'onOk',
                    },
                  ],
                },
              },
            ],
            id: '64632a60899e94bfe954bf8f',
            key: 'data',
            desc: '',
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
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '64632a1bcff50e223777b790',
      name: 'aaa',
      type: 'action',
      tag: 'aaa',
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '64632b11cff50e223777b7c1',
      name: '信息（错误）',
      type: 'action',
      tag: 'message.error',
      func: {
        parameters: [
          {
            name: 'content',
            types: [
              {
                type: 'text',
              },
            ],
            id: '64632b1b30c50e816190ea3d',
            key: 'content',
            desc: '',
            extendPlatform: true,
          },
          {
            name: 'duration',
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
              },
            ],
            id: '64632b2330c50e816190ea3e',
            key: 'duration',
            desc: '',
            extendPlatform: true,
          },
          {
            name: 'onClose',
            types: [
              {
                type: 'action',
                rules: {
                  parameters: [
                    {
                      name: 'onCloseArg',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '64632bb830c50e816190ea40',
                      extendPlatform: true,
                      key: 'onCloseArgs',
                    },
                  ],
                },
              },
            ],
            id: '64632b3030c50e816190ea3f',
            key: 'onClose',
            desc: '',
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
    },
    {
      productId: '6352061254bb9b1c84ce3570',
      id: '6463331dcff50e223777b926',
      name: '消息弹窗',
      type: 'action',
      tag: 'Modal.success',
      func: {
        parameters: [
          {
            name: 'data',
            types: [
              {
                type: 'module',
                rules: {
                  properties: [
                    {
                      name: 'title',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '6463332ea9ed0cfd83c5ff1b',
                      extendPlatform: true,
                      key: 'title',
                    },
                    {
                      name: 'onOk',
                      types: [
                        {
                          type: 'action',
                          rules: {
                            parameters: [
                              {
                                name: '新建属性',
                                types: [
                                  {
                                    type: 'module',
                                    rules: {
                                      properties: [
                                        {
                                          name: 'x',
                                          types: [
                                            {
                                              type: 'text',
                                            },
                                          ],
                                          id: '64633345a9ed0cfd83c5ff1e',
                                          extendPlatform: true,
                                          key: 'x',
                                        },
                                        {
                                          name: 'y',
                                          types: [
                                            {
                                              type: 'module',
                                              rules: {
                                                properties: [
                                                  {
                                                    name: 'yy',
                                                    types: [
                                                      {
                                                        type: 'text',
                                                      },
                                                    ],
                                                    id: '64633351a9ed0cfd83c5ff20',
                                                    extendPlatform: true,
                                                    key: 'yy',
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          id: '64633347a9ed0cfd83c5ff1f',
                                          extendPlatform: true,
                                          key: 'y',
                                        },
                                      ],
                                    },
                                  },
                                ],
                                id: '6463333ca9ed0cfd83c5ff1d',
                                extendPlatform: true,
                                key: 'onOkArgs',
                              },
                            ],
                          },
                        },
                      ],
                      id: '64633330a9ed0cfd83c5ff1c',
                      extendPlatform: true,
                      key: 'onOk',
                    },
                  ],
                },
              },
            ],
            id: '64633322a9ed0cfd83c5ff1a',
            key: 'data',
            desc: '',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
    {
      productId: '645db2c06aa75524b6077dbf',
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
    },
  ],
  apis: [
    {
      id: '64464dfe9c229310c169d72b',
      name: '创建用户',
      request: [
        {
          name: '用户名',
          types: [
            {
              type: 'text',
              rules: {
                minLength: 6,
                maxLength: 20,
                required: true,
              },
            },
          ],
          id: '64464e03442d4717949ba939',
        },
        {
          name: '用户年龄',
          types: [
            {
              type: 'number',
              rules: {
                required: true,
              },
            },
          ],
          id: '64464e29442d4717949ba93b',
        },
        {
          name: '用户地址',
          types: [
            {
              type: 'module',
              rules: {
                properties: [
                  {
                    name: '国家',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '64464e52442d4717949ba93d',
                  },
                  {
                    name: '省份',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '64464e56442d4717949ba93e',
                  },
                  {
                    name: '市区',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '64464e5f442d4717949ba93f',
                  },
                ],
              },
            },
          ],
          id: '64464e44442d4717949ba93c',
        },
      ],
      response: [],
      project: '64464a659c229310c169d491',
    },
    {
      id: '64464e939c229310c169d784',
      name: '创建班级',
      request: [
        {
          name: '年级',
          types: [
            {
              type: 'text',
            },
          ],
          id: '64464e99442d4717949ba943',
        },
        {
          name: '班号',
          types: [
            {
              type: 'text',
            },
          ],
          id: '64464eb5442d4717949ba946',
        },
      ],
      response: [],
      project: '64464a659c229310c169d491',
    },
    {
      id: '64464ed79c229310c169d7c6',
      name: '录入学生班级',
      request: [
        {
          name: '学生id',
          types: [
            {
              type: 'text',
              rules: {
                required: true,
              },
            },
          ],
          id: '64464edd442d4717949ba949',
        },
        {
          name: '班级id',
          types: [
            {
              type: 'text',
              rules: {
                required: true,
              },
            },
          ],
          id: '64464eff442d4717949ba94b',
        },
      ],
      response: [],
      project: '64464a659c229310c169d491',
    },
    {
      id: '64464f4e9c229310c169d7da',
      name: '查询学生班级',
      request: [
        {
          name: '学生id',
          types: [
            {
              type: 'text',
              rules: {
                required: true,
              },
            },
          ],
          id: '64464f54442d4717949ba94f',
        },
      ],
      response: [
        {
          name: '班级信息',
          types: [
            {
              type: 'module',
              rules: {
                properties: [
                  {
                    name: '班级名称',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '64464f9d442d4717949ba955',
                  },
                ],
              },
            },
          ],
          id: '64464f8e442d4717949ba954',
        },
      ],
      project: '64464a659c229310c169d491',
    },
    {
      id: '644731b09c229310c169e3fb',
      name: '查询所有用户',
      request: [
        {
          id: '64473259425c9a11a9a475aa',
          name: '参数',
          types: [
            {
              type: 'text',
            },
          ],
        },
      ],
      response: [
        {
          name: '用户数组',
          types: [
            {
              type: 'module',
              multiple: true,
              rules: {
                properties: [
                  {
                    name: 'ID',
                    types: [
                      {
                        type: 'text',
                        rules: {
                          minLength: 24,
                          maxLength: 24,
                        },
                      },
                    ],
                    id: '64473284425c9a11a9a475b0',
                  },
                  {
                    name: '用户名',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '6447328c425c9a11a9a475b1',
                  },
                  {
                    name: '用户年龄',
                    types: [
                      {
                        type: 'number',
                      },
                    ],
                    id: '64473291425c9a11a9a475b2',
                  },
                ],
              },
            },
          ],
          id: '64473279425c9a11a9a475af',
        },
      ],
      project: '64464a659c229310c169d491',
    },
    {
      id: '645c463fe94e7d605e79d693',
      name: '查询用户',
      request: [
        {
          name: '用户id',
          types: [
            {
              type: 'text',
            },
          ],
          id: '645c4643a257c532a654185f',
          required: true,
        },
      ],
      response: [
        {
          name: '用户信息',
          types: [
            {
              type: 'module',
              rules: {
                properties: [
                  {
                    name: 'id',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '645c46a1a257c532a6541866',
                  },
                  {
                    name: '用户名',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '645c46aba257c532a6541867',
                  },
                  {
                    name: '用户年龄',
                    types: [
                      {
                        type: 'number',
                      },
                    ],
                    id: '645c46b4a257c532a6541868',
                  },
                  {
                    name: '地址',
                    types: [
                      {
                        type: 'module',
                        rules: {
                          properties: [
                            {
                              name: '国家',
                              types: [
                                {
                                  type: 'text',
                                },
                              ],
                              id: '645c46c7a257c532a654186a',
                            },
                            {
                              name: '省份',
                              types: [
                                {
                                  type: 'text',
                                },
                              ],
                              id: '645c46cda257c532a654186b',
                            },
                            {
                              name: '市区',
                              types: [
                                {
                                  type: 'text',
                                },
                              ],
                              id: '645c46d2a257c532a654186c',
                            },
                            {
                              name: '详细地址',
                              types: [
                                {
                                  type: 'text',
                                },
                              ],
                              id: '645c46d7a257c532a654186d',
                            },
                            {
                              name: 'id',
                              types: [
                                {
                                  type: 'text',
                                },
                              ],
                              id: '645c472ea257c532a654186f',
                            },
                          ],
                        },
                      },
                    ],
                    id: '645c46bea257c532a6541869',
                  },
                ],
              },
            },
          ],
          id: '645c4691a257c532a6541865',
        },
      ],
      project: '64464a659c229310c169d491',
    },
  ],
  projectIndex: {
    page: [
      {
        id: '64464a419c229310c169d486',
        type: 'page',
        name: '首页',
        depth: 1,
        parentId: null,
        preId: null,
        cover: '62df689a9124c5a1826f5614/projects/64464a419c229310c169d47e/page/64464a419c229310c169d486.png',
        namespace: 'page',
      },
      {
        id: '645c3f0ce94e7d605e79d538',
        type: 'directory',
        name: '人员',
        depth: 1,
        parentId: null,
        preId: '64464a419c229310c169d486',
        namespace: 'page',
      },
      {
        id: '6447315b9c229310c169e36c',
        type: 'page',
        name: '人员列表',
        depth: 2,
        parentId: '645c3f0ce94e7d605e79d538',
        preId: null,
        cover: '62df689a9124c5a1826f5614/projects/64464a419c229310c169d47e/page/6447315b9c229310c169e36c.png',
        tag: 'page',
        namespace: 'page',
      },
      {
        id: '645c3f07e94e7d605e79d523',
        type: 'page',
        name: '人员详情页',
        depth: 2,
        parentId: '645c3f0ce94e7d605e79d538',
        preId: '6447315b9c229310c169e36c',
        cover: '62df689a9124c5a1826f5614/projects/64464a419c229310c169d47e/page/645c3f07e94e7d605e79d523.png',
        tag: 'page',
        namespace: 'page',
      },
      {
        id: '644653eb9c229310c169da00',
        type: 'page',
        name: '人员录入页',
        depth: 2,
        parentId: '645c3f0ce94e7d605e79d538',
        preId: '645c3f07e94e7d605e79d523',
        cover: '62df689a9124c5a1826f5614/projects/64464a419c229310c169d47e/page/644653eb9c229310c169da00.png',
        tag: 'page',
        namespace: 'page',
      },
      {
        id: '64464a419c229310c169d487',
        type: 'page',
        name: '404',
        depth: 1,
        parentId: null,
        preId: '645c3f0ce94e7d605e79d538',
        cover: 'https://images.robodev.cn/static/page_default.png',
        namespace: 'page',
      },
      {
        id: '64464a419c229310c169d488',
        type: 'page',
        name: '502',
        depth: 1,
        parentId: null,
        preId: '64464a419c229310c169d487',
        cover: 'https://images.robodev.cn/static/page_default.png',
        namespace: 'page',
      },
    ],
  },
  id: '646482d2cff50e223777de0c',
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
      subType: 'component',
    },
    {
      productId: '6358fb8554bb9b1c84ce47a2',
      projectId: '000000000000000000000001',
      name: '程序元件',
      subType: 'element',
    },
    {
      productId: '645db2c06aa75524b6077dbf',
      projectId: '6405a27e2d9335b17497fd8f',
      name: '系统函数',
      subType: 'element',
    },
    {
      projectId: '6448caed58252f48a6d485e5',
      name: 'ethan组件包2',
      subType: 'component',
    },
  ],
} as DBSchema.Project;

export default webJson;
