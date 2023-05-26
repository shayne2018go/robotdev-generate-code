const codeSchema = {
  id: '6470751f30c4dd4c7f3cf994',
  key: 'PCqiantaiceshi',
  meta: {
    title: 'PC前台测试',
    describe: '项目提交到资源中心描述...',
    keyword: '',
  },
  dependencies: [
    {
      id: '6352061254bb9b1c84ce3570',
      projectId: '000000000000000000000010',
      name: 'Ant Design',
      key: 'antd',
      version: 'latest',
      subType: 'element',
      components: [],
      elements: [
        {
          id: '613ecb25af722dc29c7fc3d7',
          name: 'Tabs 标签页',
          key: 'a-tabs',
          props: [
            {
              id: '641a7053cf44f6204642baaa',
              name: '当前激活页',
              key: 'activeKey',
              desc: '当前激活tab面板的key',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642baab',
              name: '切换动画',
              key: 'animated',
              desc: '是否使用动画切换Tabs，在 tabPosition=top|bottom 时有效',
              types: [
                {
                  type: 'whether',
                  default: true,
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642baac',
              name: '隐藏加号',
              key: 'hideAdd',
              desc: '是否隐藏加号图标，在 type="editable-card" 时有效',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642baad',
              name: '大小',
              key: 'size',
              desc: '大小，提供 large default 和 small 三种大小',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642baae',
              name: '标签样式',
              key: 'tabBarStyle',
              desc: 'tabbar的样式对象',
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642baaf',
              name: '标签位置',
              key: 'tabPosition',
              desc: '页签显示的位置',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642bab0',
              name: '标签类型',
              key: 'type',
              desc: '页签的基本样式',
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
              extendPlatform: undefined,
            },
            {
              id: 'tabBarGutter',
              name: '标签间距',
              key: 'tabBarGutter',
              desc: 'tabs之间的间隙',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642bab1',
              name: '标签居中',
              key: 'centered',
              desc: '标签居中展示',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642bab2',
              name: '销毁 DOM 结构',
              key: 'destroyInactiveTabPane',
              desc: '被隐藏时是否销毁 DOM 结构',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7053cf44f6204642bab3',
              key: 'change',
              name: '切换面板',
              desc: undefined,
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
            },
            {
              id: '641a7053cf44f6204642bab5',
              key: 'edit',
              name: '新增和删除页签',
              desc: '新增和删除页签的回调，在 type="editable-card" 时有效',
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
            },
            {
              id: '641a7053cf44f6204642bab4',
              key: 'tabClick',
              name: 'tab被点击',
              desc: undefined,
              parameters: [],
            },
            {
              id: '641a7053cf44f6204642bab6',
              key: 'tabScroll',
              name: '滚动 TabBar ',
              desc: '滚动 TabBar 时触发',
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
            },
          ],
          slots: [
            {
              id: '641a7053cf44f6204642bab7',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642bab8',
              key: 'addIcon',
              name: '添加按钮',
              desc: '\t自定义添加按钮',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642bab9',
              key: 'leftExtra',
              name: '左侧额外元素',
              desc: '\ttab bar 上左侧额外的元素',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642baba',
              key: 'moreIcon',
              name: '折叠 icon',
              desc: '自定义折叠 icon',
              properties: [],
            },
            {
              id: 'renderTabBar',
              key: 'renderTabBar',
              name: '替换 TabBar',
              desc: '替换 TabBar，用于二次封装标签头',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642babb',
              key: 'rightExtra',
              name: '右侧额外元素',
              desc: 'tab bar 上右侧额外的元素',
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc3d8',
          name: 'TabPane 选项卡面板',
          key: 'a-tab-pane',
          props: [
            {
              id: '641a7053cf44f6204642babc',
              name: '强制渲染',
              key: 'forceRender',
              desc: '被隐藏时是否渲染DOM结构',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642babd',
              name: '当前标签页',
              key: 'key',
              desc: '对应activeKey',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642babe',
              name: '选项卡文字',
              key: 'tab',
              desc: '选项卡头显示文字',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [
            {
              id: '641a7053cf44f6204642babf',
              key: 'tab',
              name: '选项卡文字',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642bac0',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642bac1',
              key: 'closeIcon',
              name: '自定义关闭图标',
              desc: '自定义关闭图标，在 type="editable-card"时有效',
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc387',
          name: 'Button 按钮',
          key: 'a-button',
          props: [
            {
              id: '641a7052cf44f6204642b65a',
              name: '按钮类型',
              key: 'type',
              desc: '设置按钮类型',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b65b',
              name: '按钮大小',
              key: 'size',
              desc: '设置按钮的大小',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b65c',
              name: '按钮形状',
              key: 'shape',
              desc: '设置按钮类型',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b660',
              name: '适应父级宽度',
              key: 'block',
              desc: '将按钮宽度调整为其父宽度的选项',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b65d',
              name: '幽灵按钮',
              key: 'ghost',
              desc: '幽灵属性，使按钮背景透明',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b662',
              name: '危险按钮',
              key: 'danger',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b65f',
              name: '加载状态',
              key: 'loading',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b65e',
              name: '禁用',
              key: 'disabled',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b663',
              name: '按钮跳转地址',
              key: 'href',
              desc: undefined,
              types: [
                {
                  type: 'url',
                  rules: {
                    items: [],
                  },
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b664',
              name: '打开方式',
              key: 'target',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b661',
              name: '按钮原生类型',
              key: 'htmlType',
              desc: undefined,
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
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7052cf44f6204642b665',
              key: 'click',
              name: '点击按钮',
              desc: undefined,
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
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b667',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b668',
              key: 'icon',
              name: '图标',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc3a3',
          name: 'Pagination 分页',
          key: 'a-pagination',
          props: [
            {
              id: '641a7052cf44f6204642b748',
              name: '分页尺寸',
              key: 'size',
              desc: '当为「small」时，是小尺寸分页',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b747',
              name: '简单分页',
              key: 'simple',
              desc: '当添加该属性时，显示为简单分页',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b73d',
              name: '当前页数',
              key: 'current',
              desc: '当前页数',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b73f',
              name: '默认每页条数',
              key: 'defaultPageSize',
              desc: '默认的每页条数',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b749',
              name: '数据总数',
              key: 'total',
              desc: '数据总数',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b740',
              name: '禁用',
              key: 'disabled',
              desc: '禁用分页',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b741',
              name: '单页时隐藏',
              key: 'hideOnSinglePage',
              desc: '只有一页时是否隐藏分页器',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b73e',
              name: '每页条数',
              key: 'pageSize',
              desc: '每页条数',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b742',
              name: '指定每页条数',
              key: 'pageSizeOptions',
              desc: '指定每页可以显示多少条',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b74b',
              name: '自动调整宽度',
              key: 'responsive',
              desc: '当 size 未指定时，根据屏幕宽度自动调整尺寸',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b743',
              name: '实现较少内容',
              key: 'showLessItems',
              desc: '是否显示较少页面内容',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b744',
              name: '快速跳转',
              key: 'showQuickJumper',
              desc: '是否可以快速跳转至某页',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b745',
              name: '显示页数切换',
              key: 'showSizeChanger',
              desc: '是否展示 pageSize 切换器',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b74a',
              name: '自定义页码（不支持）',
              key: 'itemRender',
              desc: '用于自定义页码的结构，可用于优化 SEO',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b746',
              name: '自定义总数（不支持）',
              key: 'showTotal',
              desc: '用于显示数据总量和当前数据顺序',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7052cf44f6204642b74c',
              key: 'change',
              name: '页码或每页条数改变时',
              desc: '页码或 pageSize 改变的回调，参数是改变后的页码及每页条数',
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
            },
            {
              id: '641a7052cf44f6204642b74d',
              key: 'showSizeChange',
              name: '每页条数变化时',
              desc: 'pageSize 变化的回调',
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
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b74e',
              key: 'itemRender',
              name: '自定页码结构',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b74f',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc3af',
          name: 'Form 表单',
          key: 'a-form',
          props: [
            {
              id: '641a7052cf44f6204642b841',
              name: '模块',
              key: 'model',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b842',
              name: '规则',
              key: 'rules',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b843',
              name: '隐藏必选',
              key: 'hideRequiredMark',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b844',
              name: '文本对齐',
              key: 'labelAlign',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b845',
              name: '表单布局',
              key: 'layout',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b846',
              name: '标签宽度',
              key: 'labelCol',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b847',
              name: '排版样式',
              key: 'wrapperCol',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b848',
              name: '冒号',
              key: 'colon',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b849',
              name: '触发验证',
              key: 'validateOnRuleChange',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b84a',
              name: '滚动到错误',
              key: 'scrollToFirstError',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b84b',
              name: '名称',
              key: 'name',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b84c',
              name: '校验规则',
              key: 'validateTrigger',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b84d',
              name: '标签换行方式',
              key: 'labelWrap',
              desc: 'label 标签的文本换行方式',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b84e',
              name: '样式',
              key: 'noStyle',
              desc: '为 true 时不带样式，作为纯字段控件使用',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7052cf44f6204642b851',
              key: 'finish',
              name: '提交表单且数据验证成功',
              desc: undefined,
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
            },
            {
              id: '641a7052cf44f6204642b853',
              key: 'FinishFailed',
              name: '提交表单且数据验证失败',
              desc: undefined,
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
            },
            {
              id: '642b956c9d9bbcb336f978dd',
              key: 'submit',
              name: '数据验证成功',
              desc: '数据验证成功后回调事件',
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
            },
            {
              id: '642b95829d9bbcb336f978de',
              key: 'validate',
              name: '任一表单项被校验',
              desc: '任一表单项被校验后触发',
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
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b856',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc3b0',
          name: 'FormItem 表单项',
          key: 'a-form-item',
          props: [
            {
              id: '641a7052cf44f6204642b857',
              name: '表单模块名称',
              key: 'name',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b858',
              name: '校验规则',
              key: 'rules',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b859',
              name: '自动关联',
              key: 'autoLink',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b85a',
              name: '冒号',
              key: 'colon',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b85b',
              name: '校验状态图标',
              key: 'hasFeedback',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b85c',
              name: '提示信息',
              key: 'help',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b85d',
              name: '标签属性',
              key: 'htmlFor',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b85e',
              name: '标签文本',
              key: 'label',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b85f',
              name: '标签布局',
              key: 'labelCol',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b860',
              name: '标签文本对齐',
              key: 'labelAlign',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b861',
              name: '是否必填',
              key: 'required',
              desc: '是否必填，如不设置，则会根据校验规则自动生成',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b862',
              name: '校验状态',
              key: 'validateStatus',
              desc: "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'",
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b863',
              name: '输入框排版',
              key: 'wrapperCol',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b864',
              name: '跳过校验',
              key: 'validateFirst',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b865',
              name: '字段校验规则',
              key: 'validateTrigger',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b866',
              name: '额外提示信息',
              key: 'extra',
              desc: '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7052cf44f6204642b867',
              key: 'finish',
              name: '提交表单成功回调',
              desc: '提交表单且数据验证成功后回调事件',
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
            },
            {
              id: 'finishFailed',
              key: 'finishFailed',
              name: '提交表单失败回调',
              desc: '提交表单且数据验证失败后回调事件',
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
            },
            {
              id: '641a7052cf44f6204642b868',
              key: 'submit',
              name: '数据验证成功回调',
              desc: '数据验证成功后回调事件',
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
            },
            {
              id: '641a7052cf44f6204642b869',
              key: 'validate',
              name: '任一表单项触发',
              desc: '任一表单项被校验后触发',
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
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b86a',
              key: 'extra',
              name: '附加信息',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b86b',
              key: 'help',
              name: '提示信息',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b86c',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b86d',
              key: 'label',
              name: '标签文本',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc3b1',
          name: 'Input 输入框',
          key: 'a-input',
          props: [
            {
              id: 'defaultValue',
              name: '默认内容',
              key: 'defaultValue',
              desc: '输入框默认内容',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b86e',
              name: '禁用状态',
              key: 'disabled',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b86f',
              name: '唯一标识',
              key: 'id',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b870',
              name: '最大长度',
              key: 'maxlength',
              desc: undefined,
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b871',
              name: '前缀图标',
              key: 'prefix',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b872',
              name: '尺寸',
              key: 'size',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b873',
              name: '后缀图标',
              key: 'suffix',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b874',
              name: '输入框类型',
              key: 'type',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b875',
              name: '输入框内容',
              key: 'value',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b876',
              name: '显示清除',
              key: 'allowClear',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b877',
              name: '边框',
              key: 'bordered',
              desc: '是否有边框',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b878',
              name: '展示字数',
              key: 'showCount',
              desc: '是否展示字数',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b879',
              name: '后置标签',
              key: 'addonAfter',
              desc: '带标签的 input，设置后置标签',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b87a',
              name: '前置标签',
              key: 'addonBefore',
              desc: '带标签的 input，设置前置标签',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '646b06ea0cba6dfc9f64b088',
              name: '默认提示',
              key: 'placeholder',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          emits: [
            {
              id: '641a7052cf44f6204642b87b',
              key: 'change',
              name: '值改变',
              desc: undefined,
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
            },
            {
              id: '641a7052cf44f6204642b87c',
              key: 'pressEnter',
              name: '按下回车',
              desc: undefined,
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
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b87d',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b87e',
              key: 'addonAfter',
              name: '后置标签',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b87f',
              key: 'addonBefore',
              name: '前置标签',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b880',
              key: 'prefix',
              name: '前缀图标',
              desc: '带有前缀图标的 input',
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b881',
              key: 'suffix',
              name: '后缀图标',
              desc: '带有后缀图标的 input',
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc3bb',
          name: 'Select 选择器',
          key: 'a-select',
          props: [
            {
              id: '641a7052cf44f6204642b8d3',
              name: '清除',
              key: 'allowClear',
              desc: '支持清除',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8d4',
              name: '选中清除',
              key: 'autoClearSearchValue',
              desc: '是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8d5',
              name: '获取焦点',
              key: 'autofocus',
              desc: '默认获取焦点',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8d6',
              name: '边框',
              key: 'bordered',
              desc: '是否有边框',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8d7',
              name: '默认高亮',
              key: 'defaultActiveFirstOption',
              desc: '默认高亮',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8d8',
              name: '禁用',
              key: 'disabled',
              desc: '是否禁用',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8d9',
              name: '下拉菜单名',
              key: 'dropdownClassName',
              desc: '下拉菜单的 className 属性',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8da',
              name: '同宽',
              key: 'dropdownMatchSelectWidth',
              desc: '下拉菜单和选择器同宽',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8db',
              name: '下拉菜单内容',
              key: 'dropdownRender',
              desc: '自定义下拉框内容',
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8dc',
              name: '下拉菜单样式',
              key: 'dropdownStyle',
              desc: '下拉菜单的 style 属性',
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8dd',
              name: '自定义样式',
              key: 'dropdownMenuStyle',
              desc: 'dropdown 菜单自定义样式',
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'filterOption',
              name: '筛选',
              key: 'filterOption',
              desc: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8de',
              name: '高亮选项',
              key: 'firstActiveValue',
              desc: '默认高亮的选项',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8df',
              name: '弹出容器',
              key: 'getPopupContainer',
              desc: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'labelInValue',
              name: '选中文本节点',
              key: 'labelInValue',
              desc: '是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e0',
              name: '最大标签数',
              key: 'maxTagCount',
              desc: '最多显示多少个 tag',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e1',
              name: '标签数提示',
              key: 'maxTagPlaceholder',
              desc: '隐藏 tag 时显示的内容',
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e2',
              name: '文本长度',
              key: 'maxTagTextLength',
              desc: '最大显示的 tag 文本长度',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e3',
              name: '模式',
              key: 'mode',
              desc: '设置 Select 的模式为多选或标签',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e4',
              name: '空内容',
              key: 'notFoundContent',
              desc: '当下拉列表为空时显示的内容',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e5',
              name: '过滤选项',
              key: 'optionFilterProp',
              desc: '搜索时过滤对应的 option 属性，不支持 children',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e6',
              name: '填入选项',
              key: 'optionLabelProp',
              desc: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e7',
              name: '单选可搜索',
              key: 'showSearch',
              desc: '单选可搜索',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e8',
              name: '显示箭头',
              key: 'showArrow',
              desc: '是否显示下拉小箭头',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8e9',
              name: '选择框大小',
              key: 'size',
              desc: '选择框大小，可选 large small',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8ea',
              name: '分隔符',
              key: 'tokenSeparators',
              desc: '在 tags 和 multiple 模式下自动分词的分隔符',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8eb',
              name: '选中条目',
              key: 'value',
              desc: '指定当前选中的条目',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8ec',
              name: '数据选项',
              key: 'options',
              desc: 'options 数据，如果设置则不需要手动构造 selectOption 节点',
              types: [
                {
                  type: 'unknown',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8ed',
              name: '展开下拉菜单',
              key: 'defaultOpen',
              desc: '是否默认展开下拉菜单',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8ee',
              name: '展开菜单',
              key: 'open',
              desc: '是否展开下拉菜单',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8ef',
              name: '默认文本',
              key: 'placeholder',
              desc: '选择框默认文字',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f0',
              name: '清空图标',
              key: 'clearIcon',
              desc: '自定义的多选框清空图标',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f1',
              name: '节点字段',
              key: 'fieldNames',
              desc: '自定义节点 label、value、options 的字段',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f2',
              name: '筛选排序',
              key: 'filterSort',
              desc: '搜索时对筛选结果项的排序函数, 类似Array.sort里的 ',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f3',
              name: '弹窗滚动高度',
              key: 'listHeight',
              desc: '设置弹窗滚动高度',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f4',
              name: '条目图标',
              key: 'menuItemSelectedIcon',
              desc: '自定义当前选中的条目图标',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f5',
              name: '自定义节点',
              key: 'option',
              desc: '通过 option 插槽，自定义节点',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f6',
              name: '清除图标',
              key: 'removeIcon',
              desc: '自定义的多选框清除图标',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f7',
              name: '后缀图标',
              key: 'suffixIcon',
              desc: '自定义的选择框后缀图标',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f8',
              name: '自定义 tag 内容 render，仅在 mode 为 multiple 或 tags 时生效',
              key: 'tagRender',
              desc: '自定义 tag 内容',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8f9',
              name: '虚拟滚动',
              key: 'virtual',
              desc: '设置 false 时关闭虚拟滚动',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8fa',
              name: '搜索文本',
              key: 'searchValue',
              desc: '控制搜索文本',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7052cf44f6204642b8fb',
              key: 'change',
              name: '选中选项/输入值改变',
              desc: '选中 option，或 input 的 value 变化时，调用此函数',
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
            },
            {
              id: '641a7052cf44f6204642b8fc',
              key: 'select',
              name: '被选中',
              desc: '被选中时调用，参数为选中项的 value (或 key) 值',
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
            },
            {
              id: '641a7052cf44f6204642b8fd',
              key: 'blur',
              name: '失去焦点',
              desc: '失去焦点的时回调',
              parameters: [],
            },
            {
              id: '641a7052cf44f6204642b8fe',
              key: 'deselect',
              name: '取消选中',
              desc: '取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效',
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
            },
            {
              id: '641a7052cf44f6204642b8ff',
              key: 'dropdownVisibleChange',
              name: '展开下拉菜单',
              desc: '展开下拉菜单的回调',
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
            },
            {
              id: '641a7052cf44f6204642b900',
              key: 'focus',
              name: '获得焦点',
              desc: '获得焦点时回调',
              parameters: [],
            },
            {
              id: 'inputKeyDown',
              key: 'inputKeyDown',
              name: '键盘按下',
              desc: '键盘按下时回调',
              parameters: [],
            },
            {
              id: '641a7052cf44f6204642b901',
              key: 'mouseenter',
              name: '鼠标移入',
              desc: '鼠标移入时回调',
              parameters: [],
            },
            {
              id: '641a7052cf44f6204642b902',
              key: 'mouseleave',
              name: '鼠标移出',
              desc: '鼠标移出时回调',
              parameters: [],
            },
            {
              id: '641a7052cf44f6204642b903',
              key: 'popupScroll',
              name: '下拉列表滚动',
              desc: '下拉列表滚动时的回调',
              parameters: [],
            },
            {
              id: '641a7052cf44f6204642b904',
              key: 'search',
              name: '值变化',
              desc: '文本框值变化时回调',
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
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b905',
              key: 'dropdownRender',
              name: '下拉框内容',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b906',
              key: 'maxTagPlaceholder',
              name: '隐藏tag显示内容',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b907',
              key: 'notFoundContent',
              name: '空值显示内容',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b908',
              key: 'suffixIcon',
              name: '后缀图标',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b909',
              key: 'removeIcon',
              name: '清除图标',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b90a',
              key: 'menuItemSelectedIcon',
              name: '选中图标',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b90b',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc3d9',
          name: 'Tag 标签',
          key: 'a-tag',
          props: [
            {
              id: '641a7053cf44f6204642bac2',
              name: '可关闭',
              key: 'closable',
              desc: '标签是否可以关闭',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642bac3',
              name: '关闭按钮',
              key: 'closeIcon',
              desc: '自定义关闭按钮',
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642bac4',
              name: '标签色',
              key: 'color',
              desc: '标签色',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642bac5',
              name: '图标',
              key: 'icon',
              desc: '设置图标',
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642bac6',
              name: '显示标签',
              key: 'visible',
              desc: '是否显示标签',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7053cf44f6204642bac7',
              key: 'close',
              name: '关闭标签',
              desc: undefined,
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
            },
          ],
          slots: [
            {
              id: '641a7053cf44f6204642bac9',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642baca',
              key: 'closeIcon',
              name: '\t自定义关闭按钮',
              desc: '\t自定义关闭按钮',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642bacb',
              key: 'icon',
              name: '\t设置图标',
              desc: '\t设置图标',
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
      ],
      functions: [
        {
          id: '644789a3ad342e0014ed5a83',
          name: '飒飒大',
          key: 'sasada',
          parameters: [],
          outTypes: [],
        },
      ],
      actions: [
        {
          id: '64449e64ad342e0014ed328a',
          name: '成功消息提示',
          key: 'message.success',
          parameters: [
            {
              id: '64449e7dc6443a3ec17428da',
              name: '内容',
              key: 'content',
              desc: '',
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
              extendPlatform: true,
            },
            {
              id: '64449ea0c6443a3ec17428db',
              name: '持续事件',
              key: 'duration',
              desc: '',
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
              extendPlatform: true,
            },
            {
              id: '64449ec2c6443a3ec17428dc',
              name: '关闭回调',
              key: 'onClose',
              desc: '提示框关闭时的回调',
              types: [
                {
                  type: 'action',
                  rules: {
                    parameters: [],
                  },
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
      ],
      events: [],
      slots: [],
      props: [],
      apis: [],
    },
    {
      id: '6352061a54bb9b1c84ce357d',
      projectId: '000000000000000000000000',
      name: 'HTML',
      key: undefined,
      version: 'latest',
      subType: 'element',
      components: [],
      elements: [
        {
          id: '62c68d5d27d4bddfa72888e1',
          name: 'div 块元素',
          key: 'div',
          props: [],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa728890d',
          name: 'span 行内段落',
          key: 'span',
          props: [],
          emits: [],
          slots: [
            {
              id: '641a7052cf44f6204642b628',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa72888ef',
          name: 'ul 无序列表',
          key: 'ul',
          props: [],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa72888e7',
          name: 'a 超链接',
          key: 'a',
          props: [
            {
              id: '641a7052cf44f6204642b610',
              name: '超链接',
              key: 'href',
              desc: '超链接地址',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b611',
              name: '打开方式',
              key: 'target',
              desc: '打开方式',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b612',
              name: '目标说明',
              key: 'rel',
              desc: '对目标地址的描述说明',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b613',
              name: '锚点名',
              key: 'name',
              desc: '定义锚点的目标位置',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b614',
              name: '下载地址',
              key: 'download',
              desc: '浏览器下载',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa72888f3',
          name: 'li 列表项',
          key: 'li',
          props: [],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa72888eb',
          name: 'img 图像',
          key: 'img',
          props: [
            {
              id: '641a7052cf44f6204642b615',
              name: 'URL地址',
              key: 'src',
              desc: '规定显示图像的 URL',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b616',
              name: '图片描述',
              key: 'alt',
              desc: '图片加载不成功时显示的文字内容，有利于seo',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa72888ed',
          name: 'button 按钮',
          key: 'button',
          props: [
            {
              id: '641a7052cf44f6204642b617',
              name: '类型',
              key: 'type',
              desc: '规定按钮的类型',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b618',
              name: '按钮名称',
              key: 'name',
              desc: '规定按钮的名称',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b619',
              name: '初始值',
              key: 'value',
              desc: '规定按钮的初始值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b61a',
              name: '禁用按钮',
              key: 'disabled',
              desc: '规定应该禁用该按钮',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b61b',
              name: '绑定表单',
              key: 'form',
              desc: '规定按钮属于一个或多个表单',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b61c',
              name: '执行操作',
              key: 'formaction',
              desc: '当按钮类型为submit时覆盖form元素的action属性',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b61d',
              name: '请求方法',
              key: 'formmethod',
              desc: '当按钮类型为submit时覆盖form元素的method属性',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b61e',
              name: '打开方式',
              key: 'formtarget',
              desc: '当按钮类型为submit时覆盖form元素的target属性',
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
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa728890b',
          name: 'p 段落',
          key: 'p',
          props: [],
          emits: [],
          slots: [
            {
              id: '641a7052cf44f6204642b627',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa7288903',
          name: 'h3 三级标题',
          key: 'h3',
          props: [],
          emits: [],
          slots: [
            {
              id: '641a7052cf44f6204642b623',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa72888ff',
          name: 'h1 一级标题',
          key: 'h1',
          props: [],
          emits: [],
          slots: [
            {
              id: '641a7052cf44f6204642b621',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
      ],
      functions: [],
      actions: [],
      events: [],
      slots: [],
      props: [],
      apis: [],
    },
    {
      id: '6358fb8554bb9b1c84ce47a2',
      projectId: '000000000000000000000001',
      name: '程序元件',
      key: undefined,
      version: 'latest',
      subType: 'element',
      components: [],
      elements: [
        {
          id: '62fcba919b358224524e3737',
          name: '图标',
          key: 'icon',
          props: [
            {
              id: '641a7053cf44f6204642bbd9',
              name: '配置',
              key: 'config',
              desc: undefined,
              types: [
                {
                  type: 'icon',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa72888fb',
          name: '文本',
          key: 'text',
          props: [
            {
              id: '641a7052cf44f6204642b61f',
              name: '文本内容',
              key: 'text',
              desc: undefined,
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
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa728891f',
          name: '富文本编辑器',
          key: 'md-editor',
          props: [
            {
              id: '641a7052cf44f6204642b637',
              name: '文本值',
              key: 'value',
              desc: undefined,
              types: [
                {
                  type: 'text',
                  ui: {
                    tag: 'string-md',
                  },
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7052cf44f6204642b638',
              key: 'change',
              name: '输入值',
              desc: undefined,
              parameters: [],
            },
          ],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62c68d5d27d4bddfa72888fd',
          name: '富文本',
          key: 'rtf',
          props: [
            {
              id: '641a7052cf44f6204642b620',
              name: '文本',
              key: 'text',
              desc: undefined,
              types: [
                {
                  type: 'text',
                  ui: {
                    tag: 'string-md',
                  },
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
      ],
      functions: [],
      actions: [],
      events: [],
      slots: [],
      props: [],
      apis: [],
    },
    {
      id: '6470259667c147480397fc9b',
      projectId: '6405a27e2d9335b17497fd8f',
      name: '系统函数',
      key: 'system-function',
      version: 'latest',
      subType: 'element',
      components: [],
      elements: [],
      functions: [
        {
          id: '64093e12583491a5ebecd88f',
          name: '是否为整数',
          key: 'isInteger',
          parameters: [
            {
              id: '641a7054cf44f6204642c2bb',
              name: '数字值',
              key: 'value',
              desc: '要判断的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '6409465a583491a5ebecd89e',
          name: '是否为小数',
          key: 'isFloat',
          parameters: [
            {
              id: '641a7054cf44f6204642c2bc',
              name: '数字值',
              key: 'value',
              desc: '要判断的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64094db1e00c640dbd2f8fff',
          name: '是否为正整数',
          key: 'isPositiveInteger',
          parameters: [
            {
              id: '641a7054cf44f6204642c2bd',
              name: '数字值',
              key: 'value',
              desc: '要判断的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64094fd2e00c640dbd2f9070',
          name: '是否为负整数',
          key: 'isNegativeInteger',
          parameters: [
            {
              id: '641a7054cf44f6204642c2be',
              name: '数字值',
              key: 'value',
              desc: '要判断的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64095095e00c640dbd2f90a1',
          name: '是否为正的小数',
          key: 'isPositiveFloat',
          parameters: [
            {
              id: '641a7054cf44f6204642c2bf',
              name: '数字值',
              key: 'value',
              desc: '要判断的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64095154e00c640dbd2f90c8',
          name: '是否为负的小数',
          key: 'isNegativeFloat',
          parameters: [
            {
              id: '641a7054cf44f6204642c2c0',
              name: '数字值',
              key: 'value',
              desc: '要判断的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64095657e00c640dbd2f9107',
          name: '是否为零',
          key: 'isZero',
          parameters: [
            {
              id: '641a7054cf44f6204642c2c1',
              name: '数字值',
              key: 'value',
              desc: '要判断的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '6409762ae00c640dbd2f9431',
          name: '获取秒数',
          key: 'getSeconds',
          parameters: [
            {
              id: '641a7054cf44f6204642c2c3',
              name: '日期时间',
              key: 'date',
              desc: '要从中获取秒数的时间值',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64097f51237f2a94b9bd760a',
          name: '获取分钟数',
          key: 'getMinutes',
          parameters: [
            {
              id: '641a7054cf44f6204642c2c5',
              name: '日期时间',
              key: 'date',
              desc: '要从中获取分钟数的时间值',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '640980e9237f2a94b9bd7657',
          name: '获取小时数',
          key: 'getHours',
          parameters: [
            {
              id: '641a7054cf44f6204642c2c8',
              name: '日期时间',
              key: 'date',
              desc: '要从中获取小时数的时间值',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098128237f2a94b9bd7673',
          name: '获取月份',
          key: 'getMonth',
          parameters: [
            {
              id: '641a7054cf44f6204642c2c9',
              name: '日期时间',
              key: 'date',
              desc: '要从中获取月份的日期值',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409813d237f2a94b9bd767d',
          name: '获取年份',
          key: 'getYear',
          parameters: [
            {
              id: '641a7054cf44f6204642c2ca',
              name: '日期时间',
              key: 'date',
              desc: '要从中获取年份的日期值',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '640981a5237f2a94b9bd7687',
          name: '获取指定日期为该月第几天',
          key: 'getDay',
          parameters: [
            {
              id: '641a7054cf44f6204642c2cb',
              name: '日期时间',
              key: 'date',
              desc: '要从中获取指定信息的日期值',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098232237f2a94b9bd7695',
          name: '加',
          key: 'add',
          parameters: [
            {
              id: '641a7054cf44f6204642c2cc',
              name: '数字值',
              key: 'num1',
              desc: '要相加的数字值（可以为多个）',
              types: [
                {
                  type: 'number',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '640982ac237f2a94b9bd76ac',
          name: '获取指定日期为星期几',
          key: 'getWeekday',
          parameters: [
            {
              id: '641a7054cf44f6204642c2cd',
              name: '日期时间',
              key: 'date',
              desc: '要从中获取指定信息的日期值',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098321237f2a94b9bd76be',
          name: '在输入值上加1',
          key: 'inc',
          parameters: [
            {
              id: '641a7054cf44f6204642c2ce',
              name: '数字值',
              key: 'num',
              desc: '要+1的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098332237f2a94b9bd76cc',
          name: '获取指定日期为该年份的第几周',
          key: 'getWeek',
          parameters: [
            {
              id: '641a7054cf44f6204642c2cf',
              name: '日期时间',
              key: 'date',
              desc: '要从中获取指定信息的日期值',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098340237f2a94b9bd76d5',
          name: '获取今天的日期',
          key: 'getToday',
          parameters: [],
          outTypes: [
            {
              type: 'datetime',
            },
          ],
        },
        {
          id: '640983cb237f2a94b9bd76e4',
          name: '数字减1',
          key: 'dec',
          parameters: [
            {
              id: '641a7054cf44f6204642c2d0',
              name: '数字值',
              key: 'num',
              desc: '要-1的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098425237f2a94b9bd7727',
          name: '获取两个日期的相隔天数',
          key: 'getDays',
          parameters: [
            {
              id: '641a7054cf44f6204642c2d1',
              name: '日期时间1',
              key: 'date1',
              desc: '要计算相隔天数的日期时间1',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2d2',
              name: '日期时间2',
              key: 'date2',
              desc: '要计算相隔天数的日期时间2',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098427237f2a94b9bd7730',
          name: '减',
          key: 'subtract',
          parameters: [
            {
              id: '641a7054cf44f6204642c2d3',
              name: '减数',
              key: 'num1',
              desc: '减号后面的数字',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2d4',
              name: '被减数',
              key: 'num2',
              desc: '减号前面的数字',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409843b237f2a94b9bd7755',
          name: '获取指定日期到今天的相隔天数',
          key: 'getDaysFromNow',
          parameters: [
            {
              id: '641a7054cf44f6204642c2d5',
              name: '日期时间',
              key: 'date',
              desc: '要计算到今天的相隔天数的指定日期',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409845b237f2a94b9bd775f',
          name: '对比日期1是否早于日期2',
          key: 'isBefore',
          parameters: [
            {
              id: '641a7054cf44f6204642c2d6',
              name: '日期时间1',
              key: 'date1',
              desc: '要对比的日期1',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2d7',
              name: '日期时间2',
              key: 'date2',
              desc: '要对比的日期2',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '6409846e237f2a94b9bd7769',
          name: '对比日期1是否晚于日期2',
          key: 'isAfter',
          parameters: [
            {
              id: '641a7054cf44f6204642c2d8',
              name: '日期时间1',
              key: 'date1',
              desc: '要对比的日期1',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2d9',
              name: '日期时间2',
              key: 'date2',
              desc: '要对比的日期2',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '640984b2237f2a94b9bd7773',
          name: '对比日期1是否等于日期2',
          key: 'isSameDateTime',
          parameters: [
            {
              id: '641a7054cf44f6204642c2da',
              name: '日期时间1',
              key: 'date1',
              desc: '要对比的日期1',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2db',
              name: '日期时间2',
              key: 'date2',
              desc: '要对比的日期2',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64098540237f2a94b9bd7781',
          name: '乘',
          key: 'multiply',
          parameters: [
            {
              id: '641a7054cf44f6204642c2dc',
              name: '数字值',
              key: 'num1',
              desc: '可以为多个值',
              types: [
                {
                  type: 'number',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '640985ef237f2a94b9bd77b1',
          name: '除',
          key: 'divide',
          parameters: [
            {
              id: '641a7054cf44f6204642c2dd',
              name: '除数',
              key: 'num1',
              desc: '除号后面的数字',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2de',
              name: '被除数',
              key: 'num2',
              desc: '除号前面的数字（禁止传入0）',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098724237f2a94b9bd77f4',
          name: '获取余数',
          key: 'mod',
          parameters: [
            {
              id: '641a7054cf44f6204642c2e0',
              name: '余数',
              key: 'num1',
              desc: '除法中未被整除的部分',
              types: [
                {
                  type: 'number',
                  rules: {
                    maxPrecision: 0,
                  },
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2e1',
              name: '被余数',
              key: 'num2',
              desc: '除数除以除数所得到的整数部分（禁止传入0）',
              types: [
                {
                  type: 'number',
                  rules: {
                    minLength: null,
                    maxPrecision: 0,
                  },
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '640987d0237f2a94b9bd7808',
          name: '获取相反数',
          key: 'negate',
          parameters: [
            {
              id: '641a7054cf44f6204642c2e2',
              name: '数字值',
              key: 'num',
              desc: '要取反的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409880f237f2a94b9bd7813',
          name: '对比指定日期是否早于今天',
          key: 'isBefforNow',
          parameters: [
            {
              id: '641a7054cf44f6204642c2e3',
              name: '日期时间',
              key: 'date',
              desc: '要对比的指定日期',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '6409881b237f2a94b9bd781d',
          name: '对比指定日期是否晚于今天',
          key: 'isAfterNow',
          parameters: [
            {
              id: '641a7054cf44f6204642c2e4',
              name: '日期时间',
              key: 'date',
              desc: '要对比的指定日期',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64098825237f2a94b9bd7826',
          name: '对比指定日期是否为现在',
          key: 'isNow',
          parameters: [
            {
              id: '641a7054cf44f6204642c2e5',
              name: '日期时间',
              key: 'date',
              desc: '要对比的指定日期',
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64098ae7237f2a94b9bd784b',
          name: '幂运算',
          key: 'power',
          parameters: [
            {
              id: '641a7054cf44f6204642c2e6',
              name: '基数',
              key: 'base',
              desc: '幂运算中要进行乘法的数，也称为底数',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2e7',
              name: '指数',
              key: 'exponent',
              desc: '幂运算中基数要被乘以自身的次数，也称为幂',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098b84237f2a94b9bd7872',
          name: '获取指定位数小数',
          key: 'toFixed',
          parameters: [
            {
              id: '641a7054cf44f6204642c2e8',
              name: '数字值',
              key: 'num',
              desc: '要获取位数的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2e9',
              name: '小数位精度',
              key: 'precision',
              desc: '指定的小数位数 {非必填，不填则默认不处理（非负数整数）}',
              types: [
                {
                  type: 'number',
                  rules: {
                    maxPrecision: 0,
                    minLength: 0,
                  },
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64098ef8237f2a94b9bd788e',
          name: '保留小数位（向下舍入）',
          key: 'floor',
          parameters: [
            {
              id: '641a7054cf44f6204642c2eb',
              name: '数字值',
              key: 'num',
              desc: '要向上舍入的数值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2ec',
              name: '精度',
              key: 'precision',
              desc: '根据精度保留几位小数向下舍入（非必填，非负整数）',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64099416237f2a94b9bd7911',
          name: '条件判断',
          key: 'If',
          parameters: [
            {
              id: '641a7054cf44f6204642c2ed',
              name: '条件',
              key: 'conditions',
              desc: '要判断的条件',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2ee',
              name: '条件成立时返回结果',
              key: 'value1',
              desc: '当条件为true时，执行的结果',
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
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2ef',
              name: '条件不成立时返回结果',
              key: 'value2',
              desc: '当条件为false时，执行的结果',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
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
        {
          id: '640994b3237f2a94b9bd791e',
          name: '四舍五入',
          key: 'round',
          parameters: [
            {
              id: '641a7054cf44f6204642c2f0',
              name: '数字值',
              key: 'num',
              desc: '要四舍五入的数值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2f1',
              name: '精度',
              key: 'precision',
              desc: '根据精度保留几位小数进行四舍五入（非必填，非负整数）',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409970b237f2a94b9bd797c',
          name: '为空',
          key: 'isEmpty',
          parameters: [
            {
              id: '641a7054cf44f6204642c2f2',
              name: '判断的内容',
              key: 'value',
              desc: '要判断是否为空的内容',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64099739237f2a94b9bd798b',
          name: '不为空',
          key: 'isNotEmpty',
          parameters: [
            {
              id: '641a7054cf44f6204642c2f3',
              name: '内容',
              key: 'value',
              desc: '要判断是否不为空的内容',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64099793237f2a94b9bd7996',
          name: '等于',
          key: 'eq',
          parameters: [
            {
              id: '641a7054cf44f6204642c2f4',
              name: '要判断的值1',
              key: 'value1',
              desc: '判断等于的值1',
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
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2f5',
              name: '要判断的值2',
              key: 'value2',
              desc: '判断等于的值2',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '640997f9237f2a94b9bd79ab',
          name: '不等于',
          key: 'neq',
          parameters: [
            {
              id: '641a7054cf44f6204642c2f6',
              name: '值1',
              key: 'value1',
              desc: '判断不等于的值1',
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
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2f7',
              name: '值2',
              key: 'value2',
              desc: '判断不等于的值2',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64099833237f2a94b9bd79ba',
          name: '大于',
          key: 'gt',
          parameters: [
            {
              id: '641a7054cf44f6204642c2f8',
              name: '值1',
              key: 'left',
              desc: '判断大于的值1',
              types: [
                {
                  type: 'number',
                },
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2f9',
              name: '值2',
              key: 'right',
              desc: '判断大于的值2',
              types: [
                {
                  type: 'number',
                },
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '6409988d237f2a94b9bd79dd',
          name: '大于等于',
          key: 'gte',
          parameters: [
            {
              id: '641a7054cf44f6204642c2fa',
              name: '值1',
              key: 'left',
              desc: '判断大于等于的值1',
              types: [
                {
                  type: 'number',
                },
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2fb',
              name: '值2',
              key: 'right',
              desc: '判断大于等于的值2',
              types: [
                {
                  type: 'number',
                },
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '640998cf237f2a94b9bd79fe',
          name: '小于',
          key: 'lt',
          parameters: [
            {
              id: '641a95b29f9c8e74332f9993',
              name: '值1',
              key: 'left',
              desc: '判断小于的值1',
              types: [
                {
                  type: 'number',
                },
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a95b29f9c8e74332f9994',
              name: '值2',
              key: 'right',
              desc: '判断小于的值2',
              types: [
                {
                  type: 'number',
                },
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '640998f2237f2a94b9bd7a08',
          name: '保留小数位（向上舍入）',
          key: 'ceil',
          parameters: [
            {
              id: '641a7054cf44f6204642c2fe',
              name: '数字值',
              key: 'num',
              desc: '要向上舍入的数值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c2ff',
              name: '精度',
              key: 'precision',
              desc: '根据精度保留几位小数向上舍入（非必填，非负整数）',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '640998fe237f2a94b9bd7a17',
          name: '小于等于',
          key: 'lte',
          parameters: [
            {
              id: '641a7054cf44f6204642c300',
              name: '值1',
              key: 'left',
              desc: '判断小于等于的值1',
              types: [
                {
                  type: 'number',
                },
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c301',
              name: '值2',
              key: 'right',
              desc: '判断小于等于的值2',
              types: [
                {
                  type: 'number',
                },
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '640999fe237f2a94b9bd7c77',
          name: '获取绝对值',
          key: 'abs',
          parameters: [
            {
              id: '641a7054cf44f6204642c302',
              name: '数字值',
              key: 'num',
              desc: '要获取绝对值的数字值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '64099ad3237f2a94b9bd7cdd',
          name: '或',
          key: 'or',
          parameters: [
            {
              id: '641a7054cf44f6204642c303',
              name: '条件',
              key: 'conditions',
              desc: '参与判断的条件（可以为多个）',
              types: [
                {
                  type: 'whether',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '64099caf237f2a94b9bd7cf8',
          name: '获取平均值',
          key: 'average',
          parameters: [
            {
              id: '641a7054cf44f6204642c304',
              name: '数字值',
              key: 'nums',
              desc: '要获取平均值的数字（可以为多个）',
              types: [
                {
                  type: 'number',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409a18d237f2a94b9bd7d1e',
          name: '获取中位数',
          key: 'median',
          parameters: [
            {
              id: '641a7054cf44f6204642c305',
              name: '数字值',
              key: 'nums',
              desc: '需要获取中位数数字（可以为多个）',
              types: [
                {
                  type: 'number',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409a845237f2a94b9bd7d4d',
          name: '且',
          key: 'and',
          parameters: [
            {
              id: '641a7054cf44f6204642c307',
              name: '值',
              key: 'conditions',
              desc: '参与判断的条件（可以为多个）',
              types: [
                {
                  type: 'whether',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '6409a94e237f2a94b9bd7d76',
          name: '获取最大值',
          key: 'max',
          parameters: [
            {
              id: '641a7054cf44f6204642c30a',
              name: '数字值',
              key: 'conditions',
              desc: '要从中获取最大值的数字值（需要为多个）',
              types: [
                {
                  type: 'number',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409a990237f2a94b9bd7d8a',
          name: '是否为数字文本',
          key: 'isNumberString',
          parameters: [
            {
              id: '641a7054cf44f6204642c30b',
              name: '文本值',
              key: 'value',
              desc: '要判断的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '6409a9b9237f2a94b9bd7d94',
          name: '获取最小值',
          key: 'min',
          parameters: [
            {
              id: '641a7054cf44f6204642c30c',
              name: '参数值',
              key: 'conditions',
              desc: '要从中获取最小值的数字值（需要为多个）',
              types: [
                {
                  type: 'number',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409a9ea237f2a94b9bd7da5',
          name: '去除开头空白符',
          key: 'trimStart',
          parameters: [
            {
              id: '641a7054cf44f6204642c30d',
              name: '文本值',
              key: 'text',
              desc: '要去除空白符的文本',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409aa95237f2a94b9bd7db4',
          name: '去除结尾空白符',
          key: 'trimEnd',
          parameters: [
            {
              id: '641a7054cf44f6204642c30e',
              name: '文本值',
              key: 'text',
              desc: '要去除结尾空白符的文本',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409ab3a237f2a94b9bd7dca',
          name: '去除头尾空白符',
          key: 'trim',
          parameters: [
            {
              id: '641a7054cf44f6204642c30f',
              name: '文本值',
              key: 'text',
              desc: '要去除头尾空白符的文本',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409af5a237f2a94b9bd7e0e',
          name: '去除所有空白符',
          key: 'trimAll',
          parameters: [
            {
              id: '641a7054cf44f6204642c310',
              name: '文本值',
              key: 'text',
              desc: '要去除所有空白符的文本',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409b011237f2a94b9bd7e37',
          name: '首字母转大写',
          key: 'toUpperFirst',
          parameters: [
            {
              id: '641a7054cf44f6204642c311',
              name: '文本值',
              key: 'text',
              desc: '要将首字母转为大写的数值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409b0c9237f2a94b9bd7e46',
          name: '所有字母转大写',
          key: 'toUpperAllFirst',
          parameters: [
            {
              id: '641a7054cf44f6204642c312',
              name: '文本值',
              key: 'text',
              desc: '要将所有首字母转为大写的数值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409b18b237f2a94b9bd7ebd',
          name: '首字母转小写',
          key: 'toLowerFirst',
          parameters: [
            {
              id: '641a7054cf44f6204642c314',
              name: '文本值',
              key: 'text',
              desc: '要将首字母转为小写的数值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409b1d7237f2a94b9bd7eec',
          name: '所有首字母转小写',
          key: 'toLowerAllFirst',
          parameters: [
            {
              id: '641a7054cf44f6204642c315',
              name: '文本',
              key: 'text',
              desc: '要将所有首字母转为小写的数值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409b2a3237f2a94b9bd7efb',
          name: '合并列表',
          key: 'concat',
          parameters: [
            {
              id: '641a7054cf44f6204642c316',
              name: '列表1',
              key: 'arr1',
              desc: '要合并的列表1',
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
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c317',
              name: '列表2',
              key: 'arr2',
              desc: '要合并的列表2',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
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
        {
          id: '6409b377237f2a94b9bd7f24',
          name: '所有字母转小写',
          key: 'toLower',
          parameters: [
            {
              id: '641a7054cf44f6204642c318',
              name: '文本值',
              key: 'text',
              desc: '要将所有字母转为小写的数值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '6409b3cc237f2a94b9bd7f43',
          name: '获取指定文本第一次出现的位置',
          key: 'indexOfString',
          parameters: [
            {
              id: '641a7054cf44f6204642c319',
              name: '文本值',
              key: 'text',
              desc: '要检索的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c31a',
              name: '搜索内容',
              key: 'match',
              desc: '要搜索的关键词（必填）',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409b456237f2a94b9bd7f5c',
          name: '获取指定文本最后一次出现的位置',
          key: 'lastIndexOfString',
          parameters: [
            {
              id: '641a7054cf44f6204642c31b',
              name: '文本值',
              key: 'text',
              desc: '要检索的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c31c',
              name: '搜索内容',
              key: 'match',
              desc: '要搜索的关键词（必填）',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '6409b7db237f2a94b9bd7fd2',
          name: '按指定分隔符拆分文本',
          key: 'split',
          parameters: [
            {
              id: '641a7054cf44f6204642c320',
              name: '文本',
              key: 'text',
              desc: '要处理的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c321',
              name: '分隔符',
              key: 'separator',
              desc: '指定的分隔符',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
              multiple: true,
            },
          ],
        },
        {
          id: '6409b87a237f2a94b9bd7fe1',
          name: '替换文本',
          key: 'replace',
          parameters: [
            {
              id: '641a7054cf44f6204642c322',
              name: '待处理的文本值',
              key: 'text',
              desc: '要查找处理的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c323',
              name: '搜索值（旧值）',
              key: 'search',
              desc: '要替换的旧值（必填）',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c324',
              name: '替换值（新值）',
              key: 'replace',
              desc: '要换为的新值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '640aa8ec237f2a94b9bd85ab',
          name: '拼接文本',
          key: 'concatString',
          parameters: [
            {
              id: '641a7054cf44f6204642c32b',
              name: '文本值',
              key: 'text',
              desc: '要合并的文本/数字值',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '640aa9b1237f2a94b9bd85bf',
          name: '从文本指定位置截取指定个数字符',
          key: 'slice',
          parameters: [
            {
              id: '641a7054cf44f6204642c32d',
              name: '文本值',
              key: 'text',
              desc: '要处理的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c32e',
              name: '序号',
              key: 'start',
              desc: '从第几个字符开始',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c32f',
              name: '长度',
              key: 'length',
              desc: '可选，正整数，缺省则截取到末尾\n',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '640ad69c237f2a94b9bd89ce',
          name: '获取文本第一个字',
          key: 'getFirstWord',
          parameters: [
            {
              id: '641a7054cf44f6204642c332',
              name: '文本值',
              key: 'text',
              desc: '要获取第一个字的文本值（必填）',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '640ad6a8237f2a94b9bd89d8',
          name: '获取文本最后一个字',
          key: 'getLastWord',
          parameters: [
            {
              id: '641a7054cf44f6204642c333',
              name: '文本值',
              key: 'text',
              desc: '要获取最后一个字的文本值（必填）',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '640ad77d237f2a94b9bd89ef',
          name: 'md5消息摘要算法',
          key: 'MD5',
          parameters: [
            {
              id: '641a7054cf44f6204642c334',
              name: '文本值',
              key: 'value',
              desc: '要加密的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '640ec9766e6008edcb452e50',
          name: '从开头位置截取文本',
          key: 'subString',
          parameters: [
            {
              id: '641a7054cf44f6204642c335',
              name: '文本值',
              key: 'text',
              desc: '要截取的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c336',
              name: '截取长度',
              key: 'length',
              desc: '要截取的文字长度（正整数）',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '64196935438489df6840b221',
          name: '如果所有条件成立（待定）',
          key: 'Ifs',
          parameters: [
            {
              id: '641a7054cf44f6204642c337',
              name: '条件',
              key: 'conditions',
              desc: '',
              types: [
                {
                  type: 'whether',
                  default: false,
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c338',
              name: '值',
              key: 'value1',
              desc: '',
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
              extendPlatform: true,
            },
            {
              id: '641a7054cf44f6204642c339',
              name: '值',
              key: 'value2',
              desc: '',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
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
        {
          id: '641a7a44438489df6840bb90',
          name: '包含',
          key: 'include',
          parameters: [
            {
              id: '641a7b8c9673d52e9c145f96',
              name: '文本值',
              key: 'text',
              desc: '被查询的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7b8c9673d52e9c145f97',
              name: '搜索值',
              key: 'search',
              desc: '要搜索的值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '641a7a88438489df6840bbb5',
          name: '不包含',
          key: 'notInclude',
          parameters: [
            {
              id: '641a7bae9673d52e9c145f98',
              name: '文本值',
              key: 'text',
              desc: '被查询的文本值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '641a7baf9673d52e9c145f99',
              name: '搜索值',
              key: 'search',
              desc: '要搜索的值',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '641a7e66438489df6840bc89',
          name: '获取列表中的第一个值',
          key: 'first',
          parameters: [
            {
              id: '641a7f3d9673d52e9c145f9b',
              name: '列表',
              key: 'arr',
              desc: '要获取的列表',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
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
        },
        {
          id: '641a7e6f438489df6840bc93',
          name: '获取列表中的最后一个值',
          key: 'last',
          parameters: [
            {
              id: '641a7e799673d52e9c145f9a',
              name: '列表',
              key: 'arr',
              desc: '要获取的列表',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
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
        {
          id: '641aa8e3438489df6840bf85',
          name: '判断第一个值是否为指定的值',
          key: 'startsWith',
          parameters: [
            {
              id: '641aa9369673d52e9c145f9d',
              name: '列表',
              key: 'arr',
              desc: '要检查的列表（禁止传入字符串，禁止空数组）',
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
              extendPlatform: true,
            },
            {
              id: '641aa9379673d52e9c145f9e',
              name: '比对项',
              key: 'match',
              desc: '禁止传入对象与数组',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '641aa8f3438489df6840bf9b',
          name: '判断最后一个值是否为指定值',
          key: 'endsWith',
          parameters: [
            {
              id: '641aa9a59673d52e9c145f9f',
              name: '列表',
              key: 'arr',
              desc: '要检查的列表（禁止传入字符串，禁止空数组）',
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
              extendPlatform: true,
            },
            {
              id: '641aa9a59673d52e9c145fa0',
              name: '比对项',
              key: 'match',
              desc: '要对比的值（禁止传入对象与数组）',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'whether',
            },
          ],
        },
        {
          id: '641aa901438489df6840bfa5',
          name: '获取指定值第一次出现的位置',
          key: 'indexOfArray',
          parameters: [
            {
              id: '641aaca89673d52e9c145fa1',
              name: '列表\t',
              key: 'arr',
              desc: '要搜索的列表（禁止传入字符串，禁止空数组）',
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
              extendPlatform: true,
            },
            {
              id: '641aaca89673d52e9c145fa2',
              name: '搜索项',
              key: 'match',
              desc: '搜索值（禁止传入对象与数组）\n',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '641aa913438489df6840bfaf',
          name: '获取指定值最后一次出现的位置',
          key: 'lastIndexOfArray',
          parameters: [
            {
              id: '641aadb39673d52e9c145fa4',
              name: '列表',
              key: 'arr',
              desc: '要搜索的列表（禁止传入字符串，禁止空数组）',
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
              extendPlatform: true,
            },
            {
              id: '641aadb39673d52e9c145fa5',
              name: '搜索项',
              key: 'match',
              desc: '搜索值（禁止传入对象与数组）\n',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '641d0b780af5c68b9e18bf16',
          name: '获取当前时间',
          key: 'getNow',
          parameters: [],
          outTypes: [
            {
              type: 'datetime',
            },
          ],
        },
        {
          id: '641d0b8c0af5c68b9e18bf23',
          name: '获取当前年份',
          key: 'getCurrentYear',
          parameters: [],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '641d0b970af5c68b9e18bf2d',
          name: '获取当前月份',
          key: 'getCurrentMonth',
          parameters: [],
          outTypes: [
            {
              type: 'number',
            },
          ],
        },
        {
          id: '647020f367c147480397f984',
          name: '在最前面添加文本',
          key: 'insertToStart',
          parameters: [
            {
              id: '64702137c291839adb14f5a5',
              name: '原数据',
              key: 'data',
              desc: '',
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
              extendPlatform: true,
            },
            {
              id: '64702137c291839adb14f5a6',
              name: '添加的元素',
              key: 'item',
              desc: 'data如果为文本，则添加元素只能是文本或附属文本的类型\ndata如果为数组，则添加元素只能是数组中的元素类型或其附属类型',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
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
        },
        {
          id: '647021e967c147480397f9a3',
          name: '在最后面添加文本',
          key: 'insertToEnd',
          parameters: [
            {
              id: '64702205c291839adb14f5a7',
              name: '原数据',
              key: 'data',
              desc: '',
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
              extendPlatform: true,
            },
            {
              id: '64702205c291839adb14f5a8',
              name: '添加的元素',
              key: 'item',
              desc: '',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
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
        },
        {
          id: '6470241467c147480397faef',
          name: '在指定位置添加文本',
          key: 'insert',
          parameters: [
            {
              id: '64702487c291839adb14f5aa',
              name: '原数据',
              key: 'data',
              desc: '',
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
              extendPlatform: true,
            },
            {
              id: '6470248ac291839adb14f5ab',
              name: '添加的位置',
              key: 'index',
              desc: '',
              types: [
                {
                  type: 'number',
                  ui: {
                    tag: '',
                  },
                },
              ],
              extendPlatform: true,
            },
            {
              id: '6470248ac291839adb14f5ac',
              name: '添加的元素',
              key: 'item',
              desc: 'data如果为文本，则添加元素只能是文本或附属文本的类型\ndata如果为数组，则添加元素只能是数组中的元素类型或其附属类型',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
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
        {
          id: '6470253467c147480397fbed',
          name: '获取文本/列表长度',
          key: 'getLength',
          parameters: [
            {
              id: '64702554c291839adb14f5ad',
              name: '数据',
              key: 'data',
              desc: '',
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
              extendPlatform: true,
            },
          ],
          outTypes: [
            {
              type: 'number',
              multiple: false,
              ui: {
                tag: '',
              },
            },
          ],
        },
      ],
      actions: [],
      events: [],
      slots: [],
      props: [],
      apis: [],
    },
    {
      id: '646872354f9dc2ce4a7824ed',
      projectId: '646872354f9dc2ce4a7824ed',
      name: '测试组件',
      key: undefined,
      version: 'latest',
      subType: 'component',
      components: [
        {
          id: '6468bfbb4f9dc2ce4a78263d',
          name: '页眉',
          key: 'f-b193776e',
          props: [
            {
              id: '646acf7bf48a343baedb6cf4',
              name: 'logo',
              key: 'logo',
              desc: undefined,
              types: [
                {
                  type: 'icon',
                  multiple: false,
                },
              ],
              extendPlatform: true,
            },
            {
              id: '646acf8af48a343baedb6cf5',
              name: '网站标题',
              key: 'wangzhanbiaoti',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '646acf9af48a343baedb6cf6',
              name: '联系电话',
              key: 'lianxidianhua',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '646ad066f48a343baedb6cf7',
              name: '菜单',
              key: 'caidan',
              desc: undefined,
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
              extendPlatform: true,
            },
          ],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [
            {
              id: '646b0b61a92c5de701e5a37f',
              name: '显示二级菜单',
              key: 'xianshierjicaidan',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          nodes: [
            {
              id: 'U793',
              preId: null,
              nextId: null,
              parentId: null,
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'w-full pl-2 pr-2 flex flex-nowrap items-center',
                },
              ],
              events: undefined,
            },
            {
              id: 'U793#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'U793',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'V891',
              preId: null,
              nextId: 'F303',
              parentId: 'U793#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex justify-start items-center w-[300px]',
                },
              ],
              events: undefined,
            },
            {
              id: 'V891#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'V891',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Y694',
              preId: null,
              nextId: 'T536',
              parentId: 'V891#641a95e6cd3c6b0921a79f2a',
              tagId: '62fcba919b358224524e3737',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'T536',
              preId: 'Y694',
              nextId: null,
              parentId: 'V891#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa728890d',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'text-4xl',
                },
              ],
              events: undefined,
            },
            {
              id: 'T536#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'T536',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'F384',
              preId: null,
              nextId: null,
              parentId: 'T536#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'F303',
              preId: 'V891',
              nextId: 'O312',
              parentId: 'U793#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: ' w-[1400px] mt-1 mb-1',
                },
              ],
              events: undefined,
            },
            {
              id: 'F303#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'F303',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'R781',
              preId: null,
              nextId: null,
              parentId: 'F303#641a95e6cd3c6b0921a79f2a',
              tagId: '62d65a88e7021e08c65c462e',
              packageId: '6455c49bc56f0402c3fd3436',
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
              events: undefined,
            },
            {
              id: 'R781#641a7052cf44f6204642b607',
              preId: null,
              nextId: null,
              parentId: 'R781',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'G079',
              preId: null,
              nextId: null,
              parentId: 'R781#641a7052cf44f6204642b607',
              tagId: '62c68d5d27d4bddfa72888ef',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'relative',
                },
              ],
              events: undefined,
            },
            {
              id: 'G079#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'G079',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'W980',
              preId: null,
              nextId: 'R494',
              parentId: 'G079#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'W980#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'W980',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'O397',
              preId: null,
              nextId: null,
              parentId: 'W980#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'O397#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'O397',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'I270',
              preId: null,
              nextId: null,
              parentId: 'O397#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'R494',
              preId: 'W980',
              nextId: null,
              parentId: 'G079#641a95e6cd3c6b0921a79f2a',
              tagId: '62d65a88e7021e08c65c4630',
              packageId: '6455c49bc56f0402c3fd3436',
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
              events: undefined,
            },
            {
              id: 'R494#641a7052cf44f6204642b609',
              preId: null,
              nextId: 'R494#641a7052cf44f6204642b60a',
              parentId: 'R494',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J494',
              preId: null,
              nextId: null,
              parentId: 'R494#641a7052cf44f6204642b609',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'absolute z-40 top-14',
                },
              ],
              events: undefined,
            },
            {
              id: 'J494#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'J494',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Z089',
              preId: null,
              nextId: null,
              parentId: 'J494#641a95e6cd3c6b0921a79f2a',
              tagId: '62d65a88e7021e08c65c462e',
              packageId: '6455c49bc56f0402c3fd3436',
              props: [
                {
                  propId: '641a7052cf44f6204642b606',
                  value: {
                    type: 'data',
                    mode: 'getCmptPropData',
                  },
                },
              ],
              events: undefined,
            },
            {
              id: 'Z089#641a7052cf44f6204642b607',
              preId: null,
              nextId: null,
              parentId: 'Z089',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'L234',
              preId: null,
              nextId: null,
              parentId: 'Z089#641a7052cf44f6204642b607',
              tagId: '62c68d5d27d4bddfa72888ef',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'relative',
                },
              ],
              events: undefined,
            },
            {
              id: 'L234#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'L234',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'H799',
              preId: null,
              nextId: null,
              parentId: 'L234#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'H799#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'H799',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'U672',
              preId: null,
              nextId: null,
              parentId: 'H799#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'U672#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'U672',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'A694',
              preId: null,
              nextId: null,
              parentId: 'U672#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'R494#641a7052cf44f6204642b60a',
              preId: 'R494#641a7052cf44f6204642b609',
              nextId: null,
              parentId: 'R494',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'O312',
              preId: 'F303',
              nextId: null,
              parentId: 'U793#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex justify-end items-center flex-row text-2xl pl-3 pr-2',
                },
              ],
              events: undefined,
            },
            {
              id: 'O312#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'O312',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'G909',
              preId: null,
              nextId: null,
              parentId: 'O312#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
          ],
        },
        {
          id: '6468bfde4f9dc2ce4a782688',
          name: '轮播',
          key: 'f-375df87a',
          props: [
            {
              id: '646b227ee4e8b5cbf63a5ccc',
              name: '轮播图集',
              key: 'lunbotuji',
              desc: undefined,
              types: [
                {
                  type: 'text',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [
            {
              id: '646c0efef19561c2def2fa20',
              name: '当前图片',
              key: 'dangqiantupian',
              desc: undefined,
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
              extendPlatform: undefined,
            },
          ],
          nodes: [
            {
              id: 'O816',
              preId: null,
              nextId: null,
              parentId: null,
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'relative m-0 p-0 overflow-hidden w-full h-[640px]',
                },
              ],
              events: undefined,
            },
            {
              id: 'O816#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'O816',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'A281',
              preId: null,
              nextId: null,
              parentId: 'O816#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'overflow-hidden w-full h-full relative',
                },
              ],
              events: undefined,
            },
            {
              id: 'A281#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'A281',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'V217',
              preId: null,
              nextId: 'T360',
              parentId: 'A281#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'V217#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'V217',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'K195',
              preId: null,
              nextId: null,
              parentId: 'V217#641a95e6cd3c6b0921a79f2a',
              tagId: '62d65a88e7021e08c65c462e',
              packageId: '6455c49bc56f0402c3fd3436',
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
              events: undefined,
            },
            {
              id: 'K195#641a7052cf44f6204642b607',
              preId: null,
              nextId: null,
              parentId: 'K195',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'R950',
              preId: null,
              nextId: null,
              parentId: 'K195#641a7052cf44f6204642b607',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'w-full h-full',
                },
              ],
              events: undefined,
            },
            {
              id: 'R950#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'R950',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J705',
              preId: null,
              nextId: null,
              parentId: 'R950#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888eb',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'T360',
              preId: 'V217',
              nextId: 'K634',
              parentId: 'A281#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'absolute bottom-8 w-full flex justify-center items-center',
                },
              ],
              events: undefined,
            },
            {
              id: 'T360#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'T360',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'P537',
              preId: null,
              nextId: null,
              parentId: 'T360#641a95e6cd3c6b0921a79f2a',
              tagId: '62d65a88e7021e08c65c462e',
              packageId: '6455c49bc56f0402c3fd3436',
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
              events: undefined,
            },
            {
              id: 'P537#641a7052cf44f6204642b607',
              preId: null,
              nextId: null,
              parentId: 'P537',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'G627',
              preId: null,
              nextId: null,
              parentId: 'P537#641a7052cf44f6204642b607',
              tagId: '62c68d5d27d4bddfa72888ed',
              packageId: '6352061a54bb9b1c84ce357d',
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
            {
              id: 'K634',
              preId: 'T360',
              nextId: null,
              parentId: 'A281#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex flex-row justify-between w-full absolute h-full top-0 bottom-0',
                },
              ],
              events: undefined,
            },
            {
              id: 'K634#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'K634',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'T171',
              preId: null,
              nextId: 'J673',
              parentId: 'K634#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
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
            {
              id: 'T171#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'T171',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'I283',
              preId: null,
              nextId: null,
              parentId: 'T171#641a95e6cd3c6b0921a79f2a',
              tagId: '62fcba919b358224524e3737',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'J673',
              preId: 'T171',
              nextId: null,
              parentId: 'K634#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
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
            {
              id: 'J673#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'J673',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'X005',
              preId: null,
              nextId: 'H360',
              parentId: 'J673#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'H360',
              preId: 'X005',
              nextId: null,
              parentId: 'J673#641a95e6cd3c6b0921a79f2a',
              tagId: '62fcba919b358224524e3737',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
          ],
        },
        {
          id: '646ac870c8becd52db147a55',
          name: '新闻列表项',
          key: 'f-ec605e18',
          props: [
            {
              id: '646ad69dad5484c5ef631bb3',
              name: '新闻图片',
              key: 'xinwentupian',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '646ad69dad5484c5ef631bb4',
              name: '新闻标题',
              key: 'xinwenbiaoti',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '646ad69dad5484c5ef631bb5',
              name: '新闻描述',
              key: 'xinwenmiaoshu',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '646ad69dad5484c5ef631bb6',
              name: '作者',
              key: 'zuozhe',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '646ad69ead5484c5ef631bb7',
              name: '创建时间',
              key: 'chuangjianshijian',
              desc: undefined,
              types: [
                {
                  type: 'datetime',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '646b1c9485d85588860507aa',
              name: '标签',
              key: 'biaoqian',
              desc: undefined,
              types: [
                {
                  type: 'text',
                  multiple: true,
                },
              ],
              extendPlatform: true,
            },
          ],
          emits: [
            {
              id: '646b2c2d85d85588860507ab',
              key: 'shanchukapian',
              name: '删除卡片',
              desc: undefined,
              parameters: [],
            },
            {
              id: '646b2c2d85d85588860507ac',
              key: 'xiugaikapian',
              name: '修改卡片',
              desc: undefined,
              parameters: [],
            },
          ],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [
            {
              id: 'Z360',
              preId: null,
              nextId: null,
              parentId: null,
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex w-full transition-all hover:shadow-xl ease-in-out duration-150 relative',
                },
              ],
              events: undefined,
            },
            {
              id: 'Z360#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Z360',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'S549',
              preId: null,
              nextId: 'Z846',
              parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'hover:overflow-hidden',
                },
              ],
              events: undefined,
            },
            {
              id: 'S549#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'S549',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'T633',
              preId: null,
              nextId: null,
              parentId: 'S549#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888eb',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'Z846',
              preId: 'S549',
              nextId: 'Q288',
              parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'ml-4 flex flex-col justify-between pb-4',
                },
              ],
              events: undefined,
            },
            {
              id: 'Z846#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Z846',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'E961',
              preId: null,
              nextId: 'Y615',
              parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'E961#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'E961',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N549',
              preId: null,
              nextId: 'M560',
              parentId: 'E961#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa7288903',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'text-4xl font-bold mb-4',
                },
              ],
              events: undefined,
            },
            {
              id: 'N549#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N549',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'R550',
              preId: null,
              nextId: null,
              parentId: 'N549#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'M560',
              preId: 'N549',
              nextId: null,
              parentId: 'E961#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa728890b',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'text-sm',
                },
              ],
              events: undefined,
            },
            {
              id: 'M560#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'M560',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'F524',
              preId: null,
              nextId: null,
              parentId: 'M560#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'Y615',
              preId: 'E961',
              nextId: 'N645',
              parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
              tagId: '62d65a88e7021e08c65c462e',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Y615#641a7052cf44f6204642b607',
              preId: null,
              nextId: null,
              parentId: 'Y615',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'H755',
              preId: null,
              nextId: null,
              parentId: 'Y615#641a7052cf44f6204642b607',
              tagId: '62c68d5d27d4bddfa728890d',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'w-12 bg-primary-100 text-primary-500 flex flex-row justify-center items-center rounded-full',
                },
              ],
              events: undefined,
            },
            {
              id: 'H755#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'H755',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'P205',
              preId: null,
              nextId: null,
              parentId: 'H755#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'N645',
              preId: 'Y615',
              nextId: null,
              parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N645#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N645',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Z806',
              preId: null,
              nextId: 'E197',
              parentId: 'N645#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: ' flex items-center',
                },
              ],
              events: undefined,
            },
            {
              id: 'Z806#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Z806',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'I351',
              preId: null,
              nextId: 'D822',
              parentId: 'Z806#641a95e6cd3c6b0921a79f2a',
              tagId: '62fcba919b358224524e3737',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'D822',
              preId: 'I351',
              nextId: null,
              parentId: 'Z806#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa728890d',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'text-neutral-400 align-medium ml-2',
                },
              ],
              events: undefined,
            },
            {
              id: 'D822#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'D822',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'G164',
              preId: null,
              nextId: null,
              parentId: 'D822#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'E197',
              preId: 'Z806',
              nextId: null,
              parentId: 'N645#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'mt-2 flex items-center',
                },
              ],
              events: undefined,
            },
            {
              id: 'E197#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'E197',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'D916',
              preId: null,
              nextId: 'W603',
              parentId: 'E197#641a95e6cd3c6b0921a79f2a',
              tagId: '62fcba919b358224524e3737',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'W603',
              preId: 'D916',
              nextId: null,
              parentId: 'E197#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa728890d',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'text-neutral-400 align-medium ml-2',
                },
              ],
              events: undefined,
            },
            {
              id: 'W603#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'W603',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'H570',
              preId: null,
              nextId: null,
              parentId: 'W603#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'Q288',
              preId: 'Z846',
              nextId: null,
              parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'absolute right-4 bottom-4',
                },
              ],
              events: undefined,
            },
            {
              id: 'Q288#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Q288',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'D425',
              preId: null,
              nextId: 'O108',
              parentId: 'Q288#641a95e6cd3c6b0921a79f2a',
              tagId: '613ecb25af722dc29c7fc387',
              packageId: '6352061254bb9b1c84ce3570',
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
            {
              id: 'D425#641a7052cf44f6204642b668',
              preId: 'D425#641a7052cf44f6204642b667',
              nextId: null,
              parentId: 'D425',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'K594',
              preId: null,
              nextId: null,
              parentId: 'D425#641a7052cf44f6204642b668',
              tagId: '62fcba919b358224524e3737',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'O108',
              preId: 'D425',
              nextId: null,
              parentId: 'Q288#641a95e6cd3c6b0921a79f2a',
              tagId: '613ecb25af722dc29c7fc387',
              packageId: '6352061254bb9b1c84ce3570',
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
            {
              id: 'O108#641a7052cf44f6204642b668',
              preId: 'O108#641a7052cf44f6204642b667',
              nextId: null,
              parentId: 'O108',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'W828',
              preId: null,
              nextId: null,
              parentId: 'O108#641a7052cf44f6204642b668',
              tagId: '62fcba919b358224524e3737',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
          ],
        },
        {
          id: '6468bfc74f9dc2ce4a782668',
          name: '页脚',
          key: 'f-d62a8c30',
          props: [],
          emits: [],
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [
            {
              id: 'D600',
              preId: null,
              nextId: null,
              parentId: null,
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex justify-center w-screen align-middle content-center bg-gray-800',
                },
              ],
              events: undefined,
            },
            {
              id: 'D600#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'D600',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Z579',
              preId: null,
              nextId: null,
              parentId: 'D600#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex m-auto bg-gray-800 pt-12 flex-wrap text-white text-opacity-50 w-[1400px]',
                },
              ],
              events: undefined,
            },
            {
              id: 'Z579#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Z579',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'H413',
              preId: null,
              nextId: 'Z812',
              parentId: 'Z579#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex justify-between w-full',
                },
              ],
              events: undefined,
            },
            {
              id: 'H413#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'H413',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Q226',
              preId: null,
              nextId: 'N835',
              parentId: 'H413#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'w-3/5',
                },
              ],
              events: undefined,
            },
            {
              id: 'Q226#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Q226',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'E146',
              preId: null,
              nextId: 'L934',
              parentId: 'Q226#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex justify-between mb-12 w-3/5',
                },
              ],
              events: undefined,
            },
            {
              id: 'E146#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'E146',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'M822',
              preId: null,
              nextId: 'C902',
              parentId: 'E146#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888ef',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'M822#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'M822',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N007',
              preId: null,
              nextId: 'N831',
              parentId: 'M822#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N007#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N007',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'U225',
              preId: null,
              nextId: null,
              parentId: 'N007#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'N831',
              preId: 'N007',
              nextId: 'C192',
              parentId: 'M822#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N831#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N831',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'O017',
              preId: null,
              nextId: null,
              parentId: 'N831#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'O017#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'O017',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'D053',
              preId: null,
              nextId: null,
              parentId: 'O017#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'C192',
              preId: 'N831',
              nextId: 'W335',
              parentId: 'M822#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C192#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'C192',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'K105',
              preId: null,
              nextId: null,
              parentId: 'C192#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'K105#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'K105',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'O505',
              preId: null,
              nextId: null,
              parentId: 'K105#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'W335',
              preId: 'C192',
              nextId: 'N222',
              parentId: 'M822#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'W335#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'W335',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'W255',
              preId: null,
              nextId: null,
              parentId: 'W335#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'W255#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'W255',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'I515',
              preId: null,
              nextId: null,
              parentId: 'W255#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'N222',
              preId: 'W335',
              nextId: null,
              parentId: 'M822#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N222#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N222',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J555',
              preId: null,
              nextId: null,
              parentId: 'N222#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J555#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'J555',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Y449',
              preId: null,
              nextId: null,
              parentId: 'J555#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'C902',
              preId: 'M822',
              nextId: 'U684',
              parentId: 'E146#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888ef',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C902#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'C902',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'X821',
              preId: null,
              nextId: 'W231',
              parentId: 'C902#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'X821#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'X821',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'L889',
              preId: null,
              nextId: null,
              parentId: 'X821#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'W231',
              preId: 'X821',
              nextId: 'Y064',
              parentId: 'C902#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'W231#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'W231',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C771',
              preId: null,
              nextId: null,
              parentId: 'W231#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C771#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'C771',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'R433',
              preId: null,
              nextId: null,
              parentId: 'C771#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'Y064',
              preId: 'W231',
              nextId: 'D622',
              parentId: 'C902#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Y064#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Y064',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C857',
              preId: null,
              nextId: null,
              parentId: 'Y064#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C857#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'C857',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'V023',
              preId: null,
              nextId: null,
              parentId: 'C857#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'D622',
              preId: 'Y064',
              nextId: 'I997',
              parentId: 'C902#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'D622#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'D622',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'R919',
              preId: null,
              nextId: null,
              parentId: 'D622#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'R919#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'R919',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'G794',
              preId: null,
              nextId: null,
              parentId: 'R919#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'I997',
              preId: 'D622',
              nextId: null,
              parentId: 'C902#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'I997#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'I997',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C331',
              preId: null,
              nextId: null,
              parentId: 'I997#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C331#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'C331',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'V709',
              preId: null,
              nextId: null,
              parentId: 'C331#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'U684',
              preId: 'C902',
              nextId: 'Q173',
              parentId: 'E146#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888ef',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'U684#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'U684',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C748',
              preId: null,
              nextId: 'C355',
              parentId: 'U684#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C748#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'C748',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'G608',
              preId: null,
              nextId: null,
              parentId: 'C748#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'C355',
              preId: 'C748',
              nextId: 'M424',
              parentId: 'U684#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C355#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'C355',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C536',
              preId: null,
              nextId: null,
              parentId: 'C355#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C536#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'C536',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'A661',
              preId: null,
              nextId: null,
              parentId: 'C536#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'M424',
              preId: 'C355',
              nextId: 'W792',
              parentId: 'U684#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'M424#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'M424',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N421',
              preId: null,
              nextId: null,
              parentId: 'M424#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N421#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N421',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N187',
              preId: null,
              nextId: null,
              parentId: 'N421#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'W792',
              preId: 'M424',
              nextId: 'J878',
              parentId: 'U684#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'W792#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'W792',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J824',
              preId: null,
              nextId: null,
              parentId: 'W792#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J824#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'J824',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Y022',
              preId: null,
              nextId: null,
              parentId: 'J824#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'J878',
              preId: 'W792',
              nextId: null,
              parentId: 'U684#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J878#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'J878',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'V396',
              preId: null,
              nextId: null,
              parentId: 'J878#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'V396#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'V396',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J915',
              preId: null,
              nextId: null,
              parentId: 'V396#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'Q173',
              preId: 'U684',
              nextId: null,
              parentId: 'E146#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888ef',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Q173#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Q173',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'B506',
              preId: null,
              nextId: 'F505',
              parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'B506#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'B506',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'W897',
              preId: null,
              nextId: null,
              parentId: 'B506#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'F505',
              preId: 'B506',
              nextId: 'Y555',
              parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'F505#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'F505',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'H853',
              preId: null,
              nextId: null,
              parentId: 'F505#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'H853#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'H853',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'M805',
              preId: null,
              nextId: null,
              parentId: 'H853#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'Y555',
              preId: 'F505',
              nextId: 'O813',
              parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Y555#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Y555',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'H139',
              preId: null,
              nextId: null,
              parentId: 'Y555#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'H139#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'H139',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J872',
              preId: null,
              nextId: null,
              parentId: 'H139#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'O813',
              preId: 'Y555',
              nextId: 'E565',
              parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'O813#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'O813',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'X195',
              preId: null,
              nextId: null,
              parentId: 'O813#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'X195#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'X195',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'K216',
              preId: null,
              nextId: null,
              parentId: 'X195#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'E565',
              preId: 'O813',
              nextId: null,
              parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888f3',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'E565#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'E565',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'D257',
              preId: null,
              nextId: null,
              parentId: 'E565#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e7',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'D257#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'D257',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Z446',
              preId: null,
              nextId: null,
              parentId: 'D257#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'L934',
              preId: 'E146',
              nextId: null,
              parentId: 'Q226#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex text-sm text-opacity-60 items-center',
                },
              ],
              events: undefined,
            },
            {
              id: 'L934#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'L934',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'S006',
              preId: null,
              nextId: 'E524',
              parentId: 'L934#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'E524',
              preId: 'S006',
              nextId: 'Y788',
              parentId: 'L934#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888eb',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'Y788',
              preId: 'E524',
              nextId: 'W219',
              parentId: 'L934#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888eb',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'W219',
              preId: 'Y788',
              nextId: 'O417',
              parentId: 'L934#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888eb',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'O417',
              preId: 'W219',
              nextId: null,
              parentId: 'L934#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888eb',
              packageId: '6352061a54bb9b1c84ce357d',
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
              events: undefined,
            },
            {
              id: 'N835',
              preId: 'Q226',
              nextId: null,
              parentId: 'H413#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'w-2/5 text-opacity-50',
                },
              ],
              events: undefined,
            },
            {
              id: 'N835#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N835',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'N803',
              preId: null,
              nextId: 'F125',
              parentId: 'N835#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'mb-2',
                },
              ],
              events: undefined,
            },
            {
              id: 'N803#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N803',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'C783',
              preId: null,
              nextId: null,
              parentId: 'N803#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'F125',
              preId: 'N803',
              nextId: 'N715',
              parentId: 'N835#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'mb-2',
                },
              ],
              events: undefined,
            },
            {
              id: 'F125#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'F125',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J021',
              preId: null,
              nextId: null,
              parentId: 'F125#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'N715',
              preId: 'F125',
              nextId: 'R200',
              parentId: 'N835#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'mb-2',
                },
              ],
              events: undefined,
            },
            {
              id: 'N715#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'N715',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Y216',
              preId: null,
              nextId: null,
              parentId: 'N715#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'R200',
              preId: 'N715',
              nextId: null,
              parentId: 'N835#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'mb-2',
                },
              ],
              events: undefined,
            },
            {
              id: 'R200#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'R200',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'G755',
              preId: null,
              nextId: null,
              parentId: 'R200#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'Z812',
              preId: 'H413',
              nextId: null,
              parentId: 'Z579#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888e1',
              packageId: '6352061a54bb9b1c84ce357d',
              props: [
                {
                  propId: '641a95e6cd3c6b0921a79f28',
                  value: 'flex justify-between w-full border-t border-gray-600 py-4 text-white text-opacity-60 text-xs',
                },
              ],
              events: undefined,
            },
            {
              id: 'Z812#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'Z812',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'F954',
              preId: null,
              nextId: 'D345',
              parentId: 'Z812#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa728890d',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'F954#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'F954',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'B526',
              preId: null,
              nextId: null,
              parentId: 'F954#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
            {
              id: 'D345',
              preId: 'F954',
              nextId: null,
              parentId: 'Z812#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa728890d',
              packageId: '6352061a54bb9b1c84ce357d',
              props: undefined,
              events: undefined,
            },
            {
              id: 'D345#641a95e6cd3c6b0921a79f2a',
              preId: null,
              nextId: null,
              parentId: 'D345',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Y726',
              preId: null,
              nextId: null,
              parentId: 'D345#641a95e6cd3c6b0921a79f2a',
              tagId: '62c68d5d27d4bddfa72888fb',
              packageId: '6358fb8554bb9b1c84ce47a2',
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
              events: undefined,
            },
          ],
        },
      ],
      elements: [],
      functions: [],
      actions: [],
      events: [],
      slots: [],
      props: [],
      apis: [],
    },
    {
      id: '6455c49bc56f0402c3fd3436',
      projectId: '6455c49bc56f0402c3fd3436',
      name: '系统(pc)',
      key: undefined,
      version: 'latest',
      subType: undefined,
      components: [],
      elements: [
        {
          id: '62d65a88e7021e08c65c462e',
          name: '循环',
          key: 'each',
          props: [
            {
              id: '641a7052cf44f6204642b605',
              name: '预览次数',
              key: 'times',
              desc: '预览次数',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b606',
              name: '数据',
              key: 'data',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [
            {
              id: '641a7052cf44f6204642b607',
              key: 'default',
              name: '默认插槽',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62d65a88e7021e08c65c4630',
          name: '条件',
          key: 'cond',
          props: [
            {
              id: '641a7052cf44f6204642b608',
              name: '条件配置',
              key: 'value',
              desc: '条件表达式配置',
              types: [
                {
                  type: 'whether',
                  default: true,
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [
            {
              id: '641a7052cf44f6204642b609',
              key: 'true',
              name: '真',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b60a',
              key: 'false',
              name: '假',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62d65a88e7021e08c65c4632',
          name: '插槽定义',
          key: 'slot',
          props: [
            {
              id: '641a7052cf44f6204642b60b',
              name: '动态插槽名配置',
              key: 'dynamicName',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          emits: [],
          slots: [
            {
              id: '641a7052cf44f6204642b60c',
              key: 'default',
              name: '默认插槽',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '62d65a88e7021e08c65c4634',
          name: '插槽',
          key: 'tpl',
          props: [],
          emits: [],
          slots: [
            {
              id: '641a7052cf44f6204642b60d',
              key: 'default',
              name: '默认插槽',
              desc: undefined,
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
      ],
      functions: [],
      actions: [
        {
          id: '6401884318eda303abe11c40',
          name: '执行业务',
          key: 'api',
          parameters: [
            {
              id: 'id',
              name: undefined,
              key: 'id',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'params',
              name: '业务参数',
              key: 'params',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'success',
              name: '请求成功时执行',
              key: 'success',
              desc: undefined,
              types: [
                {
                  type: 'functionVoid',
                  rules: {
                    parameters: [
                      {
                        id: 'res',
                        key: 'res',
                        name: '成功数据',
                        types: [
                          {
                            type: 'module',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'fail',
              name: '请求失败时执行',
              key: 'fail',
              desc: undefined,
              types: [
                {
                  type: 'functionVoid',
                  rules: {
                    parameters: [
                      {
                        id: 'error',
                        key: 'error',
                        name: '失败数据',
                        types: [
                          {
                            type: 'module',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              extendPlatform: undefined,
            },
          ],
          outTypes: [
            {
              type: 'void',
            },
          ],
        },
        {
          id: '6401884418eda303abe11c41',
          name: '数据赋值',
          key: 'set',
          parameters: [
            {
              id: 'actions',
              name: '赋值配置',
              key: 'actions',
              desc: undefined,
              types: [
                {
                  type: 'module',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
          ],
          outTypes: [
            {
              type: 'void',
            },
          ],
        },
        {
          id: '6401884818eda303abe11c42',
          name: '抛事件',
          key: 'emit',
          parameters: [
            {
              id: 'name',
              name: '事件名',
              key: 'name',
              desc: undefined,
              types: [
                {
                  type: 'text',
                  ui: {
                    tag: 'eventSelect',
                  },
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'args',
              name: '事件数据',
              key: 'args',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
          ],
          outTypes: [
            {
              type: 'void',
            },
          ],
        },
        {
          id: '641a95e6cd3c6b0921a79f29',
          name: '页面跳转',
          key: 'open',
          parameters: [
            {
              id: 'mode',
              name: '打开类型',
              key: 'mode',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'target',
              name: '打开方式',
              key: 'target',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: undefined,
              name: undefined,
              key: 'url',
              desc: undefined,
              types: [
                {
                  type: 'url',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: undefined,
              name: undefined,
              key: 'page',
              desc: undefined,
              types: [
                {
                  type: 'url',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: undefined,
              name: undefined,
              key: 'query',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: undefined,
              name: undefined,
              key: 'target',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          outTypes: [
            {
              type: 'void',
            },
          ],
        },
        {
          id: '6401884818eda303abe11c43',
          name: '变量赋值',
          key: 'setVar',
          parameters: [
            {
              id: 'id',
              name: '被赋值变量',
              key: 'id',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'path',
              name: '取值路径',
              key: 'path',
              desc: undefined,
              types: [
                {
                  type: 'text',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'value',
              name: '要赋的值',
              key: 'value',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          outTypes: [
            {
              type: 'void',
            },
          ],
        },
        {
          id: '6401884818eda303abe11c43',
          name: '业务数据赋值',
          key: 'setApiData',
          parameters: [
            {
              id: 'id',
              name: '被赋值业务',
              key: 'id',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'path',
              name: '取值路径',
              key: 'path',
              desc: undefined,
              types: [
                {
                  type: 'text',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'value',
              name: '要赋的值',
              key: 'value',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
          ],
          outTypes: [
            {
              type: 'void',
            },
          ],
        },
      ],
      events: [
        {
          id: '641a95cecd3c6b0921a79efa',
          name: '单击',
          key: 'click',
          parameters: [
            {
              id: '641a95e0cd3c6b0921a79f0b',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95d1cd3c6b0921a79efb',
          name: '双击',
          key: 'dblclick',
          parameters: [
            {
              id: '641a95e0cd3c6b0921a79f0c',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95d2cd3c6b0921a79efc',
          name: '鼠标按下',
          key: 'mousedown',
          parameters: [
            {
              id: '641a95e0cd3c6b0921a79f0d',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95d3cd3c6b0921a79efd',
          name: '鼠标松开',
          key: 'mouseup',
          parameters: [
            {
              id: '641a95e0cd3c6b0921a79f0e',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95ddcd3c6b0921a79efe',
          name: '鼠标在里面',
          key: 'mouseenter',
          parameters: [
            {
              id: '641a95e1cd3c6b0921a79f0f',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95ddcd3c6b0921a79eff',
          name: '鼠标不在里面',
          key: 'mouseleave',
          parameters: [
            {
              id: '641a95e1cd3c6b0921a79f10',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95decd3c6b0921a79f00',
          name: '鼠标移入瞬间',
          key: 'mouseover',
          parameters: [
            {
              id: '641a95e1cd3c6b0921a79f11',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95decd3c6b0921a79f01',
          name: '鼠标移出瞬间',
          key: 'mouseout',
          parameters: [
            {
              id: '641a95e1cd3c6b0921a79f12',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95decd3c6b0921a79f02',
          name: '鼠标在里面移动',
          key: 'mousemove',
          parameters: [
            {
              id: '641a95e1cd3c6b0921a79f13',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95decd3c6b0921a79f03',
          name: '输入值',
          key: 'input',
          parameters: [
            {
              id: '641a95e2cd3c6b0921a79f14',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95decd3c6b0921a79f04',
          name: '值改变',
          key: 'change',
          parameters: [
            {
              id: '641a95e2cd3c6b0921a79f15',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95dfcd3c6b0921a79f05',
          name: '获取光标',
          key: 'focus',
          parameters: [
            {
              id: '641a95e2cd3c6b0921a79f16',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95dfcd3c6b0921a79f06',
          name: '移除光标',
          key: 'blur',
          parameters: [
            {
              id: '641a95e2cd3c6b0921a79f17',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95dfcd3c6b0921a79f07',
          name: '键盘按键按下',
          key: 'keydown',
          parameters: [
            {
              id: '641a95e3cd3c6b0921a79f18',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95dfcd3c6b0921a79f08',
          name: '键盘按键弹起',
          key: 'keyup',
          parameters: [
            {
              id: '641a95e3cd3c6b0921a79f19',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95dfcd3c6b0921a79f09',
          name: '选择',
          key: 'select',
          parameters: [
            {
              id: '641a95e3cd3c6b0921a79f1a',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95e0cd3c6b0921a79f0a',
          name: '提交表单',
          key: 'submit',
          parameters: [
            {
              id: '641a95e3cd3c6b0921a79f1b',
              name: '事件数据',
              key: 'event',
              types: [
                {
                  type: 'module',
                },
              ],
            },
          ],
        },
        {
          id: '641a95e7cd3c6b0921a79f2b',
          name: '加载时',
          key: 'loading',
          parameters: [],
        },
      ],
      slots: [
        {
          id: '641a95e6cd3c6b0921a79f2a',
          name: '默认插槽',
          key: 'default',
          isHide: true,
          properties: [],
        },
      ],
      props: [
        {
          id: '641a95e6cd3c6b0921a79f27',
          key: 'style',
          name: 'Style样式',
          types: [
            {
              type: 'text',
            },
          ],
        },
        {
          id: '641a95e6cd3c6b0921a79f28',
          key: 'class',
          name: 'Class样式名',
          types: [
            {
              type: 'text',
            },
          ],
        },
      ],
      apis: [],
    },
  ],
  components: [
    {
      id: '6468bfbb4f9dc2ce4a78263d',
      name: '页眉',
      key: 'f-b193776e',
      props: [
        {
          id: '646acf7bf48a343baedb6cf4',
          name: 'logo',
          key: 'logo',
          desc: undefined,
          types: [
            {
              type: 'icon',
              multiple: false,
            },
          ],
          extendPlatform: true,
        },
        {
          id: '646acf8af48a343baedb6cf5',
          name: '网站标题',
          key: 'wangzhanbiaoti',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: true,
        },
        {
          id: '646acf9af48a343baedb6cf6',
          name: '联系电话',
          key: 'lianxidianhua',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: true,
        },
        {
          id: '646ad066f48a343baedb6cf7',
          name: '菜单',
          key: 'caidan',
          desc: undefined,
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
          extendPlatform: true,
        },
      ],
      emits: [],
      slots: [],
      lifeCycle: [],
      functions: [],
      variables: [
        {
          id: '646b0b61a92c5de701e5a37f',
          name: '显示二级菜单',
          key: 'xianshierjicaidan',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: undefined,
        },
      ],
      nodes: [
        {
          id: 'U793',
          preId: null,
          nextId: null,
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full pl-2 pr-2 flex flex-nowrap items-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'U793#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'U793',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'V891',
          preId: null,
          nextId: 'F303',
          parentId: 'U793#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex justify-start items-center w-[300px]',
            },
          ],
          events: undefined,
        },
        {
          id: 'V891#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'V891',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y694',
          preId: null,
          nextId: 'T536',
          parentId: 'V891#641a95e6cd3c6b0921a79f2a',
          tagId: '62fcba919b358224524e3737',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'T536',
          preId: 'Y694',
          nextId: null,
          parentId: 'V891#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-4xl',
            },
          ],
          events: undefined,
        },
        {
          id: 'T536#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'T536',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'F384',
          preId: null,
          nextId: null,
          parentId: 'T536#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'F303',
          preId: 'V891',
          nextId: 'O312',
          parentId: 'U793#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: ' w-[1400px] mt-1 mb-1',
            },
          ],
          events: undefined,
        },
        {
          id: 'F303#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'F303',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R781',
          preId: null,
          nextId: null,
          parentId: 'F303#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'R781#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'R781',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G079',
          preId: null,
          nextId: null,
          parentId: 'R781#641a7052cf44f6204642b607',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'relative',
            },
          ],
          events: undefined,
        },
        {
          id: 'G079#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'G079',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W980',
          preId: null,
          nextId: 'R494',
          parentId: 'G079#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'W980#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'W980',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O397',
          preId: null,
          nextId: null,
          parentId: 'W980#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O397#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'O397',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I270',
          preId: null,
          nextId: null,
          parentId: 'O397#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'R494',
          preId: 'W980',
          nextId: null,
          parentId: 'G079#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c4630',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'R494#641a7052cf44f6204642b609',
          preId: null,
          nextId: 'R494#641a7052cf44f6204642b60a',
          parentId: 'R494',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J494',
          preId: null,
          nextId: null,
          parentId: 'R494#641a7052cf44f6204642b609',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'absolute z-40 top-14',
            },
          ],
          events: undefined,
        },
        {
          id: 'J494#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'J494',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Z089',
          preId: null,
          nextId: null,
          parentId: 'J494#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
          props: [
            {
              propId: '641a7052cf44f6204642b606',
              value: {
                type: 'data',
                mode: 'getCmptPropData',
              },
            },
          ],
          events: undefined,
        },
        {
          id: 'Z089#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'Z089',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L234',
          preId: null,
          nextId: null,
          parentId: 'Z089#641a7052cf44f6204642b607',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'relative',
            },
          ],
          events: undefined,
        },
        {
          id: 'L234#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'L234',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H799',
          preId: null,
          nextId: null,
          parentId: 'L234#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'H799#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'H799',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'U672',
          preId: null,
          nextId: null,
          parentId: 'H799#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'U672#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'U672',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'A694',
          preId: null,
          nextId: null,
          parentId: 'U672#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'R494#641a7052cf44f6204642b60a',
          preId: 'R494#641a7052cf44f6204642b609',
          nextId: null,
          parentId: 'R494',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O312',
          preId: 'F303',
          nextId: null,
          parentId: 'U793#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex justify-end items-center flex-row text-2xl pl-3 pr-2',
            },
          ],
          events: undefined,
        },
        {
          id: 'O312#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'O312',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G909',
          preId: null,
          nextId: null,
          parentId: 'O312#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
      ],
    },
    {
      id: '6468bfde4f9dc2ce4a782688',
      name: '轮播',
      key: 'f-375df87a',
      props: [
        {
          id: '646b227ee4e8b5cbf63a5ccc',
          name: '轮播图集',
          key: 'lunbotuji',
          desc: undefined,
          types: [
            {
              type: 'text',
              multiple: true,
            },
          ],
          extendPlatform: true,
        },
      ],
      emits: [],
      slots: [],
      lifeCycle: [],
      functions: [],
      variables: [
        {
          id: '646c0efef19561c2def2fa20',
          name: '当前图片',
          key: 'dangqiantupian',
          desc: undefined,
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
          extendPlatform: undefined,
        },
      ],
      nodes: [
        {
          id: 'O816',
          preId: null,
          nextId: null,
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'relative m-0 p-0 overflow-hidden w-full h-[640px]',
            },
          ],
          events: undefined,
        },
        {
          id: 'O816#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'O816',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'A281',
          preId: null,
          nextId: null,
          parentId: 'O816#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'overflow-hidden w-full h-full relative',
            },
          ],
          events: undefined,
        },
        {
          id: 'A281#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'A281',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'V217',
          preId: null,
          nextId: 'T360',
          parentId: 'A281#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'V217#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'V217',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K195',
          preId: null,
          nextId: null,
          parentId: 'V217#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'K195#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'K195',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R950',
          preId: null,
          nextId: null,
          parentId: 'K195#641a7052cf44f6204642b607',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full h-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'R950#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'R950',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J705',
          preId: null,
          nextId: null,
          parentId: 'R950#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888eb',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'T360',
          preId: 'V217',
          nextId: 'K634',
          parentId: 'A281#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'absolute bottom-8 w-full flex justify-center items-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'T360#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'T360',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'P537',
          preId: null,
          nextId: null,
          parentId: 'T360#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'P537#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'P537',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G627',
          preId: null,
          nextId: null,
          parentId: 'P537#641a7052cf44f6204642b607',
          tagId: '62c68d5d27d4bddfa72888ed',
          packageId: '6352061a54bb9b1c84ce357d',
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
        {
          id: 'K634',
          preId: 'T360',
          nextId: null,
          parentId: 'A281#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex flex-row justify-between w-full absolute h-full top-0 bottom-0',
            },
          ],
          events: undefined,
        },
        {
          id: 'K634#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'K634',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'T171',
          preId: null,
          nextId: 'J673',
          parentId: 'K634#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
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
        {
          id: 'T171#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'T171',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I283',
          preId: null,
          nextId: null,
          parentId: 'T171#641a95e6cd3c6b0921a79f2a',
          tagId: '62fcba919b358224524e3737',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'J673',
          preId: 'T171',
          nextId: null,
          parentId: 'K634#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
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
        {
          id: 'J673#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'J673',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X005',
          preId: null,
          nextId: 'H360',
          parentId: 'J673#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'H360',
          preId: 'X005',
          nextId: null,
          parentId: 'J673#641a95e6cd3c6b0921a79f2a',
          tagId: '62fcba919b358224524e3737',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
      ],
    },
    {
      id: '646ac870c8becd52db147a55',
      name: '新闻列表项',
      key: 'f-ec605e18',
      props: [
        {
          id: '646ad69dad5484c5ef631bb3',
          name: '新闻图片',
          key: 'xinwentupian',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: true,
        },
        {
          id: '646ad69dad5484c5ef631bb4',
          name: '新闻标题',
          key: 'xinwenbiaoti',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: true,
        },
        {
          id: '646ad69dad5484c5ef631bb5',
          name: '新闻描述',
          key: 'xinwenmiaoshu',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: true,
        },
        {
          id: '646ad69dad5484c5ef631bb6',
          name: '作者',
          key: 'zuozhe',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: true,
        },
        {
          id: '646ad69ead5484c5ef631bb7',
          name: '创建时间',
          key: 'chuangjianshijian',
          desc: undefined,
          types: [
            {
              type: 'datetime',
            },
          ],
          extendPlatform: true,
        },
        {
          id: '646b1c9485d85588860507aa',
          name: '标签',
          key: 'biaoqian',
          desc: undefined,
          types: [
            {
              type: 'text',
              multiple: true,
            },
          ],
          extendPlatform: true,
        },
      ],
      emits: [
        {
          id: '646b2c2d85d85588860507ab',
          key: 'shanchukapian',
          name: '删除卡片',
          desc: undefined,
          parameters: [],
        },
        {
          id: '646b2c2d85d85588860507ac',
          key: 'xiugaikapian',
          name: '修改卡片',
          desc: undefined,
          parameters: [],
        },
      ],
      slots: [],
      lifeCycle: [],
      functions: [],
      variables: [],
      nodes: [
        {
          id: 'Z360',
          preId: null,
          nextId: null,
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex w-full transition-all hover:shadow-xl ease-in-out duration-150 relative',
            },
          ],
          events: undefined,
        },
        {
          id: 'Z360#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Z360',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S549',
          preId: null,
          nextId: 'Z846',
          parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'hover:overflow-hidden',
            },
          ],
          events: undefined,
        },
        {
          id: 'S549#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'S549',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'T633',
          preId: null,
          nextId: null,
          parentId: 'S549#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888eb',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'Z846',
          preId: 'S549',
          nextId: 'Q288',
          parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'ml-4 flex flex-col justify-between pb-4',
            },
          ],
          events: undefined,
        },
        {
          id: 'Z846#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Z846',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E961',
          preId: null,
          nextId: 'Y615',
          parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E961#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'E961',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N549',
          preId: null,
          nextId: 'M560',
          parentId: 'E961#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa7288903',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-4xl font-bold mb-4',
            },
          ],
          events: undefined,
        },
        {
          id: 'N549#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N549',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R550',
          preId: null,
          nextId: null,
          parentId: 'N549#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'M560',
          preId: 'N549',
          nextId: null,
          parentId: 'E961#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890b',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-sm',
            },
          ],
          events: undefined,
        },
        {
          id: 'M560#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'M560',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'F524',
          preId: null,
          nextId: null,
          parentId: 'M560#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Y615',
          preId: 'E961',
          nextId: 'N645',
          parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y615#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'Y615',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H755',
          preId: null,
          nextId: null,
          parentId: 'Y615#641a7052cf44f6204642b607',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-12 bg-primary-100 text-primary-500 flex flex-row justify-center items-center rounded-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'H755#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'H755',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'P205',
          preId: null,
          nextId: null,
          parentId: 'H755#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'N645',
          preId: 'Y615',
          nextId: null,
          parentId: 'Z846#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N645#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N645',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Z806',
          preId: null,
          nextId: 'E197',
          parentId: 'N645#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: ' flex items-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'Z806#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Z806',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I351',
          preId: null,
          nextId: 'D822',
          parentId: 'Z806#641a95e6cd3c6b0921a79f2a',
          tagId: '62fcba919b358224524e3737',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'D822',
          preId: 'I351',
          nextId: null,
          parentId: 'Z806#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-neutral-400 align-medium ml-2',
            },
          ],
          events: undefined,
        },
        {
          id: 'D822#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'D822',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G164',
          preId: null,
          nextId: null,
          parentId: 'D822#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'E197',
          preId: 'Z806',
          nextId: null,
          parentId: 'N645#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'mt-2 flex items-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'E197#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'E197',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D916',
          preId: null,
          nextId: 'W603',
          parentId: 'E197#641a95e6cd3c6b0921a79f2a',
          tagId: '62fcba919b358224524e3737',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'W603',
          preId: 'D916',
          nextId: null,
          parentId: 'E197#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-neutral-400 align-medium ml-2',
            },
          ],
          events: undefined,
        },
        {
          id: 'W603#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'W603',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H570',
          preId: null,
          nextId: null,
          parentId: 'W603#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Q288',
          preId: 'Z846',
          nextId: null,
          parentId: 'Z360#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'absolute right-4 bottom-4',
            },
          ],
          events: undefined,
        },
        {
          id: 'Q288#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Q288',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D425',
          preId: null,
          nextId: 'O108',
          parentId: 'Q288#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc387',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'D425#641a7052cf44f6204642b668',
          preId: 'D425#641a7052cf44f6204642b667',
          nextId: null,
          parentId: 'D425',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K594',
          preId: null,
          nextId: null,
          parentId: 'D425#641a7052cf44f6204642b668',
          tagId: '62fcba919b358224524e3737',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'O108',
          preId: 'D425',
          nextId: null,
          parentId: 'Q288#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc387',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'O108#641a7052cf44f6204642b668',
          preId: 'O108#641a7052cf44f6204642b667',
          nextId: null,
          parentId: 'O108',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W828',
          preId: null,
          nextId: null,
          parentId: 'O108#641a7052cf44f6204642b668',
          tagId: '62fcba919b358224524e3737',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
      ],
    },
    {
      id: '6468bfc74f9dc2ce4a782668',
      name: '页脚',
      key: 'f-d62a8c30',
      props: [],
      emits: [],
      slots: [],
      lifeCycle: [],
      functions: [],
      variables: [],
      nodes: [
        {
          id: 'D600',
          preId: null,
          nextId: null,
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex justify-center w-screen align-middle content-center bg-gray-800',
            },
          ],
          events: undefined,
        },
        {
          id: 'D600#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'D600',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Z579',
          preId: null,
          nextId: null,
          parentId: 'D600#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex m-auto bg-gray-800 pt-12 flex-wrap text-white text-opacity-50 w-[1400px]',
            },
          ],
          events: undefined,
        },
        {
          id: 'Z579#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Z579',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H413',
          preId: null,
          nextId: 'Z812',
          parentId: 'Z579#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex justify-between w-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'H413#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'H413',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Q226',
          preId: null,
          nextId: 'N835',
          parentId: 'H413#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-3/5',
            },
          ],
          events: undefined,
        },
        {
          id: 'Q226#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Q226',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E146',
          preId: null,
          nextId: 'L934',
          parentId: 'Q226#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex justify-between mb-12 w-3/5',
            },
          ],
          events: undefined,
        },
        {
          id: 'E146#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'E146',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'M822',
          preId: null,
          nextId: 'C902',
          parentId: 'E146#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'M822#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'M822',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N007',
          preId: null,
          nextId: 'N831',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N007#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N007',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'U225',
          preId: null,
          nextId: null,
          parentId: 'N007#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'N831',
          preId: 'N007',
          nextId: 'C192',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N831#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N831',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O017',
          preId: null,
          nextId: null,
          parentId: 'N831#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O017#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'O017',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D053',
          preId: null,
          nextId: null,
          parentId: 'O017#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'C192',
          preId: 'N831',
          nextId: 'W335',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C192#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C192',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K105',
          preId: null,
          nextId: null,
          parentId: 'C192#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K105#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'K105',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O505',
          preId: null,
          nextId: null,
          parentId: 'K105#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'W335',
          preId: 'C192',
          nextId: 'N222',
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W335#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'W335',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W255',
          preId: null,
          nextId: null,
          parentId: 'W335#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W255#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'W255',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I515',
          preId: null,
          nextId: null,
          parentId: 'W255#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'N222',
          preId: 'W335',
          nextId: null,
          parentId: 'M822#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N222#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N222',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J555',
          preId: null,
          nextId: null,
          parentId: 'N222#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J555#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'J555',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y449',
          preId: null,
          nextId: null,
          parentId: 'J555#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'C902',
          preId: 'M822',
          nextId: 'U684',
          parentId: 'E146#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C902#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C902',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X821',
          preId: null,
          nextId: 'W231',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X821#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'X821',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L889',
          preId: null,
          nextId: null,
          parentId: 'X821#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'W231',
          preId: 'X821',
          nextId: 'Y064',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W231#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'W231',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C771',
          preId: null,
          nextId: null,
          parentId: 'W231#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C771#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C771',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R433',
          preId: null,
          nextId: null,
          parentId: 'C771#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Y064',
          preId: 'W231',
          nextId: 'D622',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y064#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Y064',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C857',
          preId: null,
          nextId: null,
          parentId: 'Y064#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C857#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C857',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'V023',
          preId: null,
          nextId: null,
          parentId: 'C857#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'D622',
          preId: 'Y064',
          nextId: 'I997',
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D622#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'D622',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R919',
          preId: null,
          nextId: null,
          parentId: 'D622#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R919#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'R919',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G794',
          preId: null,
          nextId: null,
          parentId: 'R919#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'I997',
          preId: 'D622',
          nextId: null,
          parentId: 'C902#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I997#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'I997',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C331',
          preId: null,
          nextId: null,
          parentId: 'I997#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C331#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C331',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'V709',
          preId: null,
          nextId: null,
          parentId: 'C331#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'U684',
          preId: 'C902',
          nextId: 'Q173',
          parentId: 'E146#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'U684#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'U684',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C748',
          preId: null,
          nextId: 'C355',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C748#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C748',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G608',
          preId: null,
          nextId: null,
          parentId: 'C748#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'C355',
          preId: 'C748',
          nextId: 'M424',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C355#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C355',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C536',
          preId: null,
          nextId: null,
          parentId: 'C355#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C536#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C536',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'A661',
          preId: null,
          nextId: null,
          parentId: 'C536#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'M424',
          preId: 'C355',
          nextId: 'W792',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'M424#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'M424',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N421',
          preId: null,
          nextId: null,
          parentId: 'M424#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N421#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N421',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N187',
          preId: null,
          nextId: null,
          parentId: 'N421#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'W792',
          preId: 'M424',
          nextId: 'J878',
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W792#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'W792',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J824',
          preId: null,
          nextId: null,
          parentId: 'W792#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J824#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'J824',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y022',
          preId: null,
          nextId: null,
          parentId: 'J824#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'J878',
          preId: 'W792',
          nextId: null,
          parentId: 'U684#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J878#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'J878',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'V396',
          preId: null,
          nextId: null,
          parentId: 'J878#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'V396#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'V396',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J915',
          preId: null,
          nextId: null,
          parentId: 'V396#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Q173',
          preId: 'U684',
          nextId: null,
          parentId: 'E146#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Q173#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Q173',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'B506',
          preId: null,
          nextId: 'F505',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'B506#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'B506',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W897',
          preId: null,
          nextId: null,
          parentId: 'B506#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'F505',
          preId: 'B506',
          nextId: 'Y555',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'F505#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'F505',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H853',
          preId: null,
          nextId: null,
          parentId: 'F505#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H853#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'H853',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'M805',
          preId: null,
          nextId: null,
          parentId: 'H853#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Y555',
          preId: 'F505',
          nextId: 'O813',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y555#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Y555',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H139',
          preId: null,
          nextId: null,
          parentId: 'Y555#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H139#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'H139',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J872',
          preId: null,
          nextId: null,
          parentId: 'H139#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'O813',
          preId: 'Y555',
          nextId: 'E565',
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O813#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'O813',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X195',
          preId: null,
          nextId: null,
          parentId: 'O813#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X195#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'X195',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K216',
          preId: null,
          nextId: null,
          parentId: 'X195#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'E565',
          preId: 'O813',
          nextId: null,
          parentId: 'Q173#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E565#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'E565',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D257',
          preId: null,
          nextId: null,
          parentId: 'E565#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D257#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'D257',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Z446',
          preId: null,
          nextId: null,
          parentId: 'D257#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'L934',
          preId: 'E146',
          nextId: null,
          parentId: 'Q226#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex text-sm text-opacity-60 items-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'L934#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'L934',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S006',
          preId: null,
          nextId: 'E524',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'E524',
          preId: 'S006',
          nextId: 'Y788',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888eb',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'Y788',
          preId: 'E524',
          nextId: 'W219',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888eb',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'W219',
          preId: 'Y788',
          nextId: 'O417',
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888eb',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'O417',
          preId: 'W219',
          nextId: null,
          parentId: 'L934#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888eb',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'N835',
          preId: 'Q226',
          nextId: null,
          parentId: 'H413#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-2/5 text-opacity-50',
            },
          ],
          events: undefined,
        },
        {
          id: 'N835#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N835',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N803',
          preId: null,
          nextId: 'F125',
          parentId: 'N835#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'mb-2',
            },
          ],
          events: undefined,
        },
        {
          id: 'N803#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N803',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C783',
          preId: null,
          nextId: null,
          parentId: 'N803#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'F125',
          preId: 'N803',
          nextId: 'N715',
          parentId: 'N835#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'mb-2',
            },
          ],
          events: undefined,
        },
        {
          id: 'F125#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'F125',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J021',
          preId: null,
          nextId: null,
          parentId: 'F125#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'N715',
          preId: 'F125',
          nextId: 'R200',
          parentId: 'N835#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'mb-2',
            },
          ],
          events: undefined,
        },
        {
          id: 'N715#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N715',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y216',
          preId: null,
          nextId: null,
          parentId: 'N715#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'R200',
          preId: 'N715',
          nextId: null,
          parentId: 'N835#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'mb-2',
            },
          ],
          events: undefined,
        },
        {
          id: 'R200#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'R200',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G755',
          preId: null,
          nextId: null,
          parentId: 'R200#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Z812',
          preId: 'H413',
          nextId: null,
          parentId: 'Z579#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex justify-between w-full border-t border-gray-600 py-4 text-white text-opacity-60 text-xs',
            },
          ],
          events: undefined,
        },
        {
          id: 'Z812#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Z812',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'F954',
          preId: null,
          nextId: 'D345',
          parentId: 'Z812#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'F954#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'F954',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'B526',
          preId: null,
          nextId: null,
          parentId: 'F954#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'D345',
          preId: 'F954',
          nextId: null,
          parentId: 'Z812#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D345#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'D345',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y726',
          preId: null,
          nextId: null,
          parentId: 'D345#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
      ],
    },
  ],
  pages: [
    {
      id: '646872534f9dc2ce4a782504',
      mate: {
        title: {
          type: 'data',
          mode: 'custom',
          args: {
            value: '首页',
          },
        },
      },
      route: {
        query: [],
      },
      nodes: [
        {
          id: 'O151',
          preId: null,
          nextId: 'E467',
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'h-20 flex items-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'O151#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'O151',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S463',
          preId: null,
          nextId: null,
          parentId: 'O151#641a95e6cd3c6b0921a79f2a',
          tagId: '6468bfbb4f9dc2ce4a78263d',
          packageId: '646872354f9dc2ce4a7824ed',
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
          events: undefined,
        },
        {
          id: 'E467',
          preId: 'O151',
          nextId: 'B572',
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'E467#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'E467',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W034',
          preId: null,
          nextId: null,
          parentId: 'E467#641a95e6cd3c6b0921a79f2a',
          tagId: '6468bfde4f9dc2ce4a782688',
          packageId: '646872354f9dc2ce4a7824ed',
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
          events: undefined,
        },
        {
          id: 'B572',
          preId: 'E467',
          nextId: 'D822',
          parentId: null,
          tagId: '613ecb25af722dc29c7fc3d7',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'B572#641a7053cf44f6204642bab7',
          preId: null,
          nextId: 'B572#641a7053cf44f6204642bab8',
          parentId: 'B572',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O129',
          preId: null,
          nextId: 'N147',
          parentId: 'B572#641a7053cf44f6204642bab7',
          tagId: '613ecb25af722dc29c7fc3d8',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'O129#641a7053cf44f6204642bac0',
          preId: null,
          nextId: 'O129#641a7053cf44f6204642babf',
          parentId: 'O129',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I212',
          preId: null,
          nextId: null,
          parentId: 'O129#641a7053cf44f6204642bac0',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-[1200px] flex-row flex m-auto flex-wrap items-start justify-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'I212#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'I212',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W209',
          preId: null,
          nextId: 'S053',
          parentId: 'I212#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890b',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-neutral-500 text-2xl mb-6 font-bold',
            },
          ],
          events: undefined,
        },
        {
          id: 'W209#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'W209',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N095',
          preId: null,
          nextId: null,
          parentId: 'W209#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'S053',
          preId: 'W209',
          nextId: 'Q209',
          parentId: 'I212#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex w-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'S053#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'S053',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S048',
          preId: null,
          nextId: null,
          parentId: 'S053#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'S048#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'S048',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K912',
          preId: null,
          nextId: null,
          parentId: 'S048#641a7052cf44f6204642b607',
          tagId: '646ac870c8becd52db147a55',
          packageId: '646872354f9dc2ce4a7824ed',
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
          events: undefined,
        },
        {
          id: 'Q209',
          preId: 'S053',
          nextId: null,
          parentId: 'I212#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: '',
            },
          ],
          events: undefined,
        },
        {
          id: 'Q209#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Q209',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X881',
          preId: null,
          nextId: null,
          parentId: 'Q209#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc3a3',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'N147',
          preId: 'O129',
          nextId: 'Z687',
          parentId: 'B572#641a7053cf44f6204642bab7',
          tagId: '613ecb25af722dc29c7fc3d8',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'N147#641a7053cf44f6204642bac0',
          preId: null,
          nextId: 'N147#641a7053cf44f6204642babf',
          parentId: 'N147',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'T946',
          preId: null,
          nextId: null,
          parentId: 'N147#641a7053cf44f6204642bac0',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-[1200px] flex-row flex m-auto flex-wrap items-start justify-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'T946#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'T946',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X675',
          preId: null,
          nextId: 'R634',
          parentId: 'T946#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890b',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-neutral-500 text-2xl mb-6 font-bold',
            },
          ],
          events: undefined,
        },
        {
          id: 'X675#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'X675',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I170',
          preId: null,
          nextId: null,
          parentId: 'X675#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'R634',
          preId: 'X675',
          nextId: 'X211',
          parentId: 'T946#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex w-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'R634#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'R634',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'A155',
          preId: null,
          nextId: null,
          parentId: 'R634#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'A155#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'A155',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R653',
          preId: null,
          nextId: null,
          parentId: 'A155#641a7052cf44f6204642b607',
          tagId: '646ac870c8becd52db147a55',
          packageId: '646872354f9dc2ce4a7824ed',
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
          events: undefined,
        },
        {
          id: 'X211',
          preId: 'R634',
          nextId: null,
          parentId: 'T946#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: '',
            },
          ],
          events: undefined,
        },
        {
          id: 'X211#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'X211',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K877',
          preId: null,
          nextId: null,
          parentId: 'X211#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc3a3',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'Z687',
          preId: 'N147',
          nextId: null,
          parentId: 'B572#641a7053cf44f6204642bab7',
          tagId: '613ecb25af722dc29c7fc3d8',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'Z687#641a7053cf44f6204642bac0',
          preId: null,
          nextId: 'Z687#641a7053cf44f6204642babf',
          parentId: 'Z687',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C145',
          preId: null,
          nextId: null,
          parentId: 'Z687#641a7053cf44f6204642bac0',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-[1200px] flex-row flex m-auto flex-wrap items-start justify-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'C145#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C145',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R505',
          preId: null,
          nextId: 'T749',
          parentId: 'C145#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890b',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-neutral-500 text-2xl mb-6 font-bold',
            },
          ],
          events: undefined,
        },
        {
          id: 'R505#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'R505',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W969',
          preId: null,
          nextId: null,
          parentId: 'R505#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'T749',
          preId: 'R505',
          nextId: 'J81',
          parentId: 'C145#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex w-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'T749#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'T749',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'T099',
          preId: null,
          nextId: null,
          parentId: 'T749#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'T099#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'T099',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'U695',
          preId: null,
          nextId: null,
          parentId: 'T099#641a7052cf44f6204642b607',
          tagId: '646ac870c8becd52db147a55',
          packageId: '646872354f9dc2ce4a7824ed',
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
          events: undefined,
        },
        {
          id: 'J81',
          preId: 'T749',
          nextId: null,
          parentId: 'C145#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: '',
            },
          ],
          events: undefined,
        },
        {
          id: 'J81#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'J81',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S821',
          preId: null,
          nextId: null,
          parentId: 'J81#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc3a3',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'D822',
          preId: 'B572',
          nextId: null,
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'h-screen',
            },
          ],
          events: undefined,
        },
        {
          id: 'D822#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'D822',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H002',
          preId: null,
          nextId: 'D549',
          parentId: 'D822#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value:
                'w-[1200px] flex-row flex m-auto justify-center flex-wrap items-start bg-neutral-50 p-8 px-16 mt-8',
            },
          ],
          events: undefined,
        },
        {
          id: 'H002#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'H002',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L745',
          preId: null,
          nextId: 'V193',
          parentId: 'H002#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890b',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-neutral-500 text-2xl mb-6 font-bold',
            },
          ],
          events: undefined,
        },
        {
          id: 'L745#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'L745',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R549',
          preId: null,
          nextId: null,
          parentId: 'L745#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'V193',
          preId: 'L745',
          nextId: null,
          parentId: 'H002#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc3af',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'V193#641a7052cf44f6204642b856',
          preId: null,
          nextId: null,
          parentId: 'V193',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E239',
          preId: null,
          nextId: 'U675',
          parentId: 'V193#641a7052cf44f6204642b856',
          tagId: '613ecb25af722dc29c7fc3b0',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'E239#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'E239#641a7052cf44f6204642b86a',
          parentId: 'E239',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J164',
          preId: null,
          nextId: 'B750',
          parentId: 'E239#641a7052cf44f6204642b86c',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'B750',
          preId: 'J164',
          nextId: 'O082',
          parentId: 'E239#641a7052cf44f6204642b86c',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'O082',
          preId: 'B750',
          nextId: null,
          parentId: 'E239#641a7052cf44f6204642b86c',
          tagId: '613ecb25af722dc29c7fc3b1',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'E239#641a7052cf44f6204642b86d',
          preId: 'E239#641a7052cf44f6204642b86b',
          nextId: null,
          parentId: 'E239',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L232',
          preId: null,
          nextId: null,
          parentId: 'E239#641a7052cf44f6204642b86d',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'U675',
          preId: 'E239',
          nextId: 'E232',
          parentId: 'V193#641a7052cf44f6204642b856',
          tagId: '613ecb25af722dc29c7fc3b0',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'U675#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'U675#641a7052cf44f6204642b86a',
          parentId: 'U675',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X804',
          preId: null,
          nextId: null,
          parentId: 'U675#641a7052cf44f6204642b86c',
          tagId: '613ecb25af722dc29c7fc3b1',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'E232',
          preId: 'U675',
          nextId: 'Q450',
          parentId: 'V193#641a7052cf44f6204642b856',
          tagId: '613ecb25af722dc29c7fc3b0',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'E232#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'E232#641a7052cf44f6204642b86a',
          parentId: 'E232',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'T541',
          preId: null,
          nextId: null,
          parentId: 'E232#641a7052cf44f6204642b86c',
          tagId: '613ecb25af722dc29c7fc3b1',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'Q450',
          preId: 'E232',
          nextId: 'K430',
          parentId: 'V193#641a7052cf44f6204642b856',
          tagId: '613ecb25af722dc29c7fc3b0',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'Q450#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'Q450#641a7052cf44f6204642b86a',
          parentId: 'Q450',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E238',
          preId: null,
          nextId: null,
          parentId: 'Q450#641a7052cf44f6204642b86c',
          tagId: '613ecb25af722dc29c7fc3bb',
          packageId: '6352061254bb9b1c84ce3570',
          props: undefined,
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
        {
          id: 'E238#641a7052cf44f6204642b905',
          preId: null,
          nextId: 'E238#641a7052cf44f6204642b906',
          parentId: 'E238',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'M685',
          preId: null,
          nextId: null,
          parentId: 'E238#641a7052cf44f6204642b905',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'M685#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'M685',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R954',
          preId: null,
          nextId: null,
          parentId: 'M685#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'R954#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'R954',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O333',
          preId: null,
          nextId: null,
          parentId: 'R954#641a7052cf44f6204642b607',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O333#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'O333',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S733',
          preId: null,
          nextId: null,
          parentId: 'O333#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'K430',
          preId: 'Q450',
          nextId: 'Z950',
          parentId: 'V193#641a7052cf44f6204642b856',
          tagId: '613ecb25af722dc29c7fc3b0',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'K430#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'K430#641a7052cf44f6204642b86a',
          parentId: 'K430',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O659',
          preId: null,
          nextId: null,
          parentId: 'K430#641a7052cf44f6204642b86c',
          tagId: '62c68d5d27d4bddfa728891f',
          packageId: '6358fb8554bb9b1c84ce47a2',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'border w-full h-[500px]',
            },
          ],
          events: undefined,
        },
        {
          id: 'Z950',
          preId: 'K430',
          nextId: 'U648',
          parentId: 'V193#641a7052cf44f6204642b856',
          tagId: '613ecb25af722dc29c7fc3b0',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'Z950#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'Z950#641a7052cf44f6204642b86a',
          parentId: 'Z950',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K901',
          preId: null,
          nextId: null,
          parentId: 'Z950#641a7052cf44f6204642b86c',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex space-x-2',
            },
          ],
          events: undefined,
        },
        {
          id: 'K901#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'K901',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Q782',
          preId: null,
          nextId: 'W821',
          parentId: 'K901#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc3b1',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'W821',
          preId: 'Q782',
          nextId: null,
          parentId: 'K901#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'W821#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'W821',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J096',
          preId: null,
          nextId: null,
          parentId: 'W821#641a7052cf44f6204642b607',
          tagId: '613ecb25af722dc29c7fc3d9',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'J096#641a7053cf44f6204642bac9',
          preId: null,
          nextId: 'J096#641a7053cf44f6204642baca',
          parentId: 'J096',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I496',
          preId: null,
          nextId: null,
          parentId: 'J096#641a7053cf44f6204642bac9',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'U648',
          preId: 'Z950',
          nextId: null,
          parentId: 'V193#641a7052cf44f6204642b856',
          tagId: '613ecb25af722dc29c7fc3b0',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'U648#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'U648#641a7052cf44f6204642b86a',
          parentId: 'U648',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I779',
          preId: null,
          nextId: null,
          parentId: 'U648#641a7052cf44f6204642b86c',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex justify-center',
            },
          ],
          events: undefined,
        },
        {
          id: 'I779#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'I779',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E355',
          preId: null,
          nextId: 'P336',
          parentId: 'I779#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc387',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'E355#641a7052cf44f6204642b667',
          preId: null,
          nextId: 'E355#641a7052cf44f6204642b668',
          parentId: 'E355',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'V183',
          preId: null,
          nextId: null,
          parentId: 'E355#641a7052cf44f6204642b667',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'P336',
          preId: 'E355',
          nextId: null,
          parentId: 'I779#641a95e6cd3c6b0921a79f2a',
          tagId: '613ecb25af722dc29c7fc387',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'P336#641a7052cf44f6204642b667',
          preId: null,
          nextId: 'P336#641a7052cf44f6204642b668',
          parentId: 'P336',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D383',
          preId: null,
          nextId: null,
          parentId: 'P336#641a7052cf44f6204642b667',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'D549',
          preId: 'H002',
          nextId: null,
          parentId: 'D822#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'h-[180px]',
            },
          ],
          events: undefined,
        },
        {
          id: 'D549#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'D549',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O859',
          preId: null,
          nextId: null,
          parentId: 'D549#641a95e6cd3c6b0921a79f2a',
          tagId: '6468bfc74f9dc2ce4a782668',
          packageId: '646872354f9dc2ce4a7824ed',
          props: undefined,
          events: undefined,
        },
      ],
      variables: [
        {
          id: '646adb3282a790c589a4b186',
          name: '新闻卡片',
          key: 'xinwenkapian',
          desc: '',
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
          extendPlatform: undefined,
        },
        {
          id: '646b0ca700e0732fc04dccb8',
          name: '选项卡切换',
          key: 'xuanxiangkaqiehuan',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: undefined,
        },
        {
          id: '646b23ed1f1d13bbabb95bd6',
          name: '轮播图片集',
          key: 'lunbotupianji',
          desc: undefined,
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
          extendPlatform: undefined,
        },
        {
          id: '646b3627f6ca4b0dda7d4d19',
          name: '新增新闻',
          key: 'xinzengxinwen',
          desc: undefined,
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
          extendPlatform: undefined,
        },
        {
          id: '646b4aee0449fa688ec623e9',
          name: '标签组',
          key: 'biaoqianzu',
          desc: undefined,
          types: [
            {
              type: 'text',
              multiple: true,
            },
          ],
          extendPlatform: undefined,
        },
      ],
      lifeCycle: [],
      functions: [],
    },
    {
      id: '646872534f9dc2ce4a782505',
      mate: {
        title: {
          type: 'data',
          mode: 'custom',
          args: {
            value: '404',
          },
        },
      },
      route: {
        query: [],
      },
      nodes: [],
      variables: [],
      lifeCycle: [],
      functions: [],
    },
    {
      id: '646872534f9dc2ce4a782506',
      mate: {
        title: {
          type: 'data',
          mode: 'custom',
          args: {
            value: '502',
          },
        },
      },
      route: {
        query: [],
      },
      nodes: [],
      variables: [],
      lifeCycle: [],
      functions: [],
    },
    {
      id: '646872794f9dc2ce4a782546',
      mate: {
        title: {
          type: 'data',
          mode: 'custom',
          args: {
            value: '详情页',
          },
        },
      },
      route: {
        query: [
          {
            id: '646ac4953fb607d13fd7fba6',
            name: 'ID',
            key: 'ID',
            desc: undefined,
            types: [
              {
                type: 'text',
              },
            ],
            extendPlatform: undefined,
          },
        ],
      },
      nodes: [
        {
          id: 'N025',
          preId: null,
          nextId: null,
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'h-screen',
            },
          ],
          events: undefined,
        },
        {
          id: 'N025#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N025',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'B434',
          preId: null,
          nextId: 'Q612',
          parentId: 'N025#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'h-20 flex w-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'B434#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'B434',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D595',
          preId: null,
          nextId: null,
          parentId: 'B434#641a95e6cd3c6b0921a79f2a',
          tagId: '6468bfbb4f9dc2ce4a78263d',
          packageId: '646872354f9dc2ce4a7824ed',
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
          events: undefined,
        },
        {
          id: 'Q612',
          preId: 'B434',
          nextId: 'E442',
          parentId: 'N025#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'h-full w-[1200px] justify-center flex-row flex m-auto flex-wrap items-start',
            },
          ],
          events: undefined,
        },
        {
          id: 'Q612#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Q612',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E149',
          preId: null,
          nextId: 'N712',
          parentId: 'Q612#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full flex items-start flex-wrap',
            },
          ],
          events: undefined,
        },
        {
          id: 'E149#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'E149',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L093',
          preId: null,
          nextId: null,
          parentId: 'E149#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full flex',
            },
          ],
          events: undefined,
        },
        {
          id: 'L093#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'L093',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X319',
          preId: null,
          nextId: 'A786',
          parentId: 'L093#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'X319#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'X319',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S291',
          preId: null,
          nextId: null,
          parentId: 'X319#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S291#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'S291',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L156',
          preId: null,
          nextId: null,
          parentId: 'S291#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'A786',
          preId: 'X319',
          nextId: 'R408',
          parentId: 'L093#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'ml-1 mr-1',
            },
          ],
          events: undefined,
        },
        {
          id: 'A786#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'A786',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S438',
          preId: null,
          nextId: null,
          parentId: 'A786#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'R408',
          preId: 'A786',
          nextId: null,
          parentId: 'L093#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R408#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'R408',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O929',
          preId: null,
          nextId: null,
          parentId: 'R408#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'N712',
          preId: 'E149',
          nextId: null,
          parentId: 'Q612#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full flex h-full flex-row flex-wrap',
            },
          ],
          events: undefined,
        },
        {
          id: 'N712#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'N712',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W858',
          preId: null,
          nextId: 'S779',
          parentId: 'N712#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'h-full w-full',
            },
          ],
          events: undefined,
        },
        {
          id: 'W858#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'W858',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H352',
          preId: null,
          nextId: 'D637',
          parentId: 'W858#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888ff',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'text-h1',
            },
          ],
          events: undefined,
        },
        {
          id: 'H352#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'H352',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y009',
          preId: null,
          nextId: null,
          parentId: 'H352#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'D637',
          preId: 'H352',
          nextId: 'T007',
          parentId: 'W858#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full h-8 flex',
            },
          ],
          events: undefined,
        },
        {
          id: 'D637#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'D637',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W146',
          preId: null,
          nextId: 'H936',
          parentId: 'D637#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'W146#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'W146',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G461',
          preId: null,
          nextId: null,
          parentId: 'W146#641a7052cf44f6204642b607',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'G461#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'G461',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G038',
          preId: null,
          nextId: null,
          parentId: 'G461#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G038#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'G038',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Q025',
          preId: null,
          nextId: null,
          parentId: 'G038#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'H936',
          preId: 'W146',
          nextId: null,
          parentId: 'D637#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890b',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H936#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'H936',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X257',
          preId: null,
          nextId: 'Z305',
          parentId: 'H936#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X257#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'X257',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'B415',
          preId: null,
          nextId: null,
          parentId: 'X257#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Z305',
          preId: 'X257',
          nextId: 'V691',
          parentId: 'H936#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Z305#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'Z305',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J229',
          preId: null,
          nextId: null,
          parentId: 'Z305#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'V691',
          preId: 'Z305',
          nextId: null,
          parentId: 'H936#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa728890d',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'V691#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'V691',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'W945',
          preId: null,
          nextId: null,
          parentId: 'V691#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'T007',
          preId: 'D637',
          nextId: 'I070',
          parentId: 'W858#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full h-px mt-2 mb-2 bg-neutral-100',
            },
          ],
          events: undefined,
        },
        {
          id: 'I070',
          preId: 'T007',
          nextId: null,
          parentId: 'W858#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I070#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'I070',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X495',
          preId: null,
          nextId: null,
          parentId: 'I070#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fd',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'S779',
          preId: 'W858',
          nextId: null,
          parentId: 'N712#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'flex justify-between items-center flex-nowrap w-full h-14',
            },
          ],
          events: undefined,
        },
        {
          id: 'S779#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'S779',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'C537',
          preId: null,
          nextId: null,
          parentId: 'S779#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888ef',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'w-full flex justify-between flex-nowrap pl-1 pr-1',
            },
          ],
          events: undefined,
        },
        {
          id: 'C537#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'C537',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'U003',
          preId: null,
          nextId: 'O399',
          parentId: 'C537#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'U003#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'U003',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S266',
          preId: null,
          nextId: null,
          parentId: 'U003#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S266#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'S266',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'P316',
          preId: null,
          nextId: null,
          parentId: 'S266#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'O399',
          preId: 'U003',
          nextId: null,
          parentId: 'C537#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e7',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'O399#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'O399',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I508',
          preId: null,
          nextId: null,
          parentId: 'O399#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888f3',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I508#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'I508',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N888',
          preId: null,
          nextId: null,
          parentId: 'I508#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'E442',
          preId: 'Q612',
          nextId: null,
          parentId: 'N025#641a95e6cd3c6b0921a79f2a',
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: [
            {
              propId: '641a95e6cd3c6b0921a79f28',
              value: 'h-[180px]',
            },
          ],
          events: undefined,
        },
        {
          id: 'E442#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'E442',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L680',
          preId: null,
          nextId: null,
          parentId: 'E442#641a95e6cd3c6b0921a79f2a',
          tagId: '6468bfc74f9dc2ce4a782668',
          packageId: '646872354f9dc2ce4a7824ed',
          props: undefined,
          events: undefined,
        },
      ],
      variables: [],
      lifeCycle: [
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
      functions: [],
    },
  ],
  functions: [],
  apis: [
    {
      id: '64699d18c8becd52db147422',
      key: 'xinjianyonghu',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
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
      },
      response: {
        body: [
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
      },
    },
    {
      id: '6469af09c8becd52db14745d',
      key: 'xinzengxinwen',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
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
      },
      response: {
        body: [
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
      },
    },
    {
      id: '6469b00ac8becd52db147479',
      key: 'chaxunfenleiliebiao',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
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
      },
      response: {
        body: [
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
      },
    },
    {
      id: '6469b037c8becd52db1474b9',
      key: 'chaxunzhidingxinwen',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
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
      },
      response: {
        body: [
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
      },
    },
    {
      id: '6469b037c8becd52db1474c1',
      key: 'chaxunxinwenliebiao',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
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
      },
      response: {
        body: [
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
      },
    },
  ],
  directories: [
    {
      id: '646872534f9dc2ce4a782504',
      key: 'shouye',
      name: '首页',
      parentId: null,
      isDirectory: false,
      resourceType: 'page',
    },
    {
      id: '646872794f9dc2ce4a782546',
      key: 'xiangqingye',
      name: '详情页',
      parentId: null,
      isDirectory: false,
      resourceType: 'page',
    },
    {
      id: '646872534f9dc2ce4a782505',
      key: '404',
      name: '404',
      parentId: null,
      isDirectory: false,
      resourceType: 'page',
    },
    {
      id: '646872534f9dc2ce4a782506',
      key: '502',
      name: '502',
      parentId: null,
      isDirectory: false,
      resourceType: 'page',
    },
  ],
} as CodeSchema.Project;

export default codeSchema;
