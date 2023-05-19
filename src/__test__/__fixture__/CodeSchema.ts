const codeSchema = {
  id: '646482d2cff50e223777de0c',
  key: 'ethanqianduan',
  meta: {
    title: 'ethan前端',
    describe: '项目提交到应用中心描述...',
    keyword: '',
  },
  dependencies: [
    {
      id: '6352061254bb9b1c84ce3570',
      projectId: '000000000000000000000010',
      name: 'Ant Design',
      key: 'ant-design-vue',
      version: 'latest',
      subType: 'element',
      components: [],
      elements: [
        {
          id: '613ecb25af722dc29c7fc3c5',
          name: 'Card 卡片',
          key: 'a-card',
          props: [
            {
              id: 'activeTabKey',
              name: '当前标签值',
              key: 'activeTabKey',
              desc: '当前激活页签的key',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9bd',
              name: '标题样式',
              key: 'headStyle',
              desc: '自定义标题区域样式',
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9be',
              name: '内容样式',
              key: 'bodyStyle',
              desc: '内容区域自定义样式',
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9bf',
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
              id: '641a7053cf44f6204642b9c0',
              name: '默认标签值',
              key: 'defaultActiveTabKey',
              desc: '初始化选中页签的key，如果没有设置activeTabKey',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9c1',
              name: '操作区域',
              key: 'extra',
              desc: '卡片右上角的操作区域',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9c2',
              name: '悬浮状态',
              key: 'hoverable',
              desc: '鼠标移过时可浮起',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9c3',
              name: '加载状态',
              key: 'loading',
              desc: '当卡片内容还在加载中时，可以用loading展示一个占位',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9c4',
              name: '标签页列表',
              key: 'tabList',
              desc: '页签标题列表,可以通过slots属性自定义tab',
              types: [
                {
                  type: 'unknown',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9c5',
              name: '卡片尺寸',
              key: 'size',
              desc: 'card的尺寸',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9c6',
              name: '卡片类型',
              key: 'type',
              desc: '卡片类型，可设置为 inner 或不设置',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642b9c7',
              name: '卡片标题',
              key: 'title',
              desc: '卡片标题',
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
              id: '641a7053cf44f6204642b9c8',
              key: 'tabChange',
              name: '页签切换',
              desc: '页签切换的回调',
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
            },
          ],
          slots: [
            {
              id: '641a7053cf44f6204642b9c9',
              key: 'actions',
              name: '卡片操作组',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642b9ca',
              key: 'cover',
              name: '卡片封面',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642b9cb',
              key: 'tabBarExtraContent',
              name: '选项卡内容',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642b9cc',
              key: 'title',
              name: '卡片标题',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642b9cd',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7053cf44f6204642b9ce',
              key: 'customTab',
              name: '自定义标签',
              desc: '自定义 tabList tab 标签',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642b9cf',
              key: 'extra',
              name: '卡片右上角操作区域',
              desc: '卡片右上角的操作区域',
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc39d',
          name: 'Menu 导航菜单',
          key: 'a-menu',
          props: [
            {
              id: '641a7052cf44f6204642b708',
              name: '加速渲染',
              key: 'forceSubMenuRender',
              desc: '在子菜单展示之前就渲染进 DOM',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b709',
              name: '收起状态',
              key: 'inlineCollapsed',
              desc: 'inline 时菜单是否收起状态',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'inlineIndent',
              name: '缩进宽度',
              key: 'inlineIndent',
              desc: 'inline 模式的菜单缩进宽度',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b70a',
              name: '菜单类型',
              key: 'mode',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b70b',
              name: '允许多选',
              key: 'multiple',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b70c',
              name: '展开菜单项Key',
              key: 'openKeys',
              desc: '当前展开的 SubMenu 菜单项 key 数组',
              types: [
                {
                  type: 'text',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b70d',
              name: '允许选中',
              key: 'selectable',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'selectedKeys',
              name: '选中菜单项Key',
              key: 'selectedKeys',
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
              id: '641a7052cf44f6204642b70e',
              name: '子菜单移出延时',
              key: 'subMenuCloseDelay',
              desc: undefined,
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b70f',
              name: '子菜单移入延时',
              key: 'subMenuOpenDelay',
              desc: undefined,
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b710',
              name: '主题颜色',
              key: 'theme',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b711',
              name: '子菜单触发',
              key: 'triggerSubMenuAction',
              desc: undefined,
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
              extendPlatform: undefined,
            },
          ],
          emits: [
            {
              id: '641a7052cf44f6204642b712',
              key: 'click',
              name: '点击菜单',
              desc: '点击 MenuItem 调用此函数',
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
            },
            {
              id: '641a7052cf44f6204642b713',
              key: 'deselect',
              name: '取消选中',
              desc: '取消选中时调用，仅在 multiple 生效',
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
            },
            {
              id: '641a7052cf44f6204642b714',
              key: 'openChange',
              name: '子菜单展开/关闭',
              desc: 'SubMenu 展开/关闭的回调',
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
            },
            {
              id: '641a7052cf44f6204642b715',
              key: 'select',
              name: '被选中',
              desc: '被选中时调用',
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
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b716',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b717',
              key: 'overflowedIndicator',
              name: 'menu收缩图标',
              desc: '用于自定义 Menu 水平空间不足时的省略收缩的图标',
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc39e',
          name: 'MenuItem 菜单项',
          key: 'a-menu-item',
          props: [
            {
              id: '641a7052cf44f6204642b718',
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
              id: '641a7052cf44f6204642b719',
              name: 'key标识',
              key: 'key',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b71a',
              name: '悬浮标题',
              key: 'title',
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
              id: '641a7052cf44f6204642b71b',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b71c',
              key: 'icon',
              name: '菜单图标',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b71d',
              key: 'title',
              name: '悬浮标题',
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
          id: '613ecb25af722dc29c7fc3b6',
          name: 'InputNumber 数字输入框',
          key: 'a-input-number',
          props: [
            {
              id: '641a7052cf44f6204642b892',
              name: '自动获取焦点',
              key: 'autofocus',
              desc: '自动获取焦点',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'defaultValue',
              name: '初始值',
              key: 'defaultValue',
              desc: '初始值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b893',
              name: '禁止变更',
              key: 'disabled',
              desc: '禁用',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b894',
              name: '格式',
              key: 'formatter',
              desc: '展示值的格式',
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b895',
              name: '最大值',
              key: 'max',
              desc: '最大值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b896',
              name: '最小值',
              key: 'min',
              desc: '最小值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b897',
              name: '转换格式',
              key: 'parser',
              desc: '从formatter里转换回数字的方式',
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b898',
              name: '数值精度',
              key: 'precision',
              desc: '数值精度',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b899',
              name: '小数点',
              key: 'decimalSeparator',
              desc: '小数点',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b89a',
              name: '输入框大小',
              key: 'size',
              desc: '输入框大小',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b89b',
              name: '步长',
              key: 'step',
              desc: '每次改变步数，可以为小数',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b89c',
              name: '当前值',
              key: 'value',
              desc: '当前值',
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b89d',
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
              id: '641a7052cf44f6204642b89e',
              name: '显示增减按钮',
              key: 'controls',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b89f',
              name: '字符值模式',
              key: 'stringMode',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b8a0',
              name: '键盘快捷',
              key: 'keyboard',
              desc: '是否启用键盘快捷行为',
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
              id: '641a7052cf44f6204642b8a1',
              key: 'change',
              name: '值改变',
              desc: undefined,
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
            },
            {
              id: '641a7052cf44f6204642b8a2',
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
            },
            {
              id: '641a7052cf44f6204642b8a3',
              key: 'step',
              name: '点击上下箭头',
              desc: undefined,
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
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b8a4',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b8a5',
              key: 'addonAfter',
              name: '后置标签',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b8a6',
              key: 'addonBefore',
              name: '前置标签',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b8a7',
              key: 'prefix',
              name: '带有前缀图标的 input',
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
          id: '613ecb25af722dc29c7fc3d1',
          name: 'Table 表格',
          key: 'a-table',
          props: [
            {
              id: '641a7053cf44f6204642ba31',
              name: '布局',
              key: 'tableLayout',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba32',
              name: '显示外边框',
              key: 'bordered',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba33',
              name: '子列名',
              key: 'childrenColumnName',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba34',
              name: '列',
              key: 'columns',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba35',
              name: '组成部分',
              key: 'components',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba37',
              name: '默认展开',
              key: 'defaultExpandAllRows',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba38',
              name: '默认行',
              key: 'defaultExpandedRowKeys',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba39',
              name: '展开行',
              key: 'expandedRowKeys',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba3a',
              name: '展开行渲染',
              key: 'expandedRowRender',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba3b',
              name: '展开图标',
              key: 'expandIcon',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba3c',
              name: '点击展开行',
              key: 'expandRowByClick',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba3d',
              name: '展开图标显示',
              key: 'expandIconColumnIndex',
              desc: undefined,
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba3e',
              name: '表格底部',
              key: 'footer',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba3f',
              name: '缩进大小',
              key: 'indentSize',
              desc: undefined,
              types: [
                {
                  type: 'number',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba40',
              name: '加载',
              key: 'loading',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba41',
              name: '默认文案设置',
              key: 'locale',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba42',
              name: '页码位置',
              key: 'pagination',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'rowClassName',
              name: '行类名',
              key: 'rowClassName',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba43',
              name: '行主键',
              key: 'rowKey',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: 'rowSelection',
              name: '列表项可选',
              key: 'rowSelection',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba44',
              name: '指定滚动区域',
              key: 'scroll',
              desc: undefined,
              types: [
                {
                  type: 'module',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba45',
              name: '表头',
              key: 'showHeader',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba46',
              name: '大小',
              key: 'size',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba47',
              name: '标题',
              key: 'title',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba48',
              name: '自定义标题',
              key: 'customHeaderRow',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba49',
              name: '自定义行',
              key: 'customRow',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba4a',
              name: '筛选菜单',
              key: 'getPopupContainer',
              desc: undefined,
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba4b',
              name: '默认配置',
              key: 'transformCellText',
              desc: undefined,
              types: [
                {
                  type: 'unknown',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba4c',
              name: '固定展开图标',
              key: 'expandFixed',
              desc: '控制展开图标是否固定，可选 true left right',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba4d',
              name: '允许行展开',
              key: 'rowExpandable',
              desc: '设置是否允许行展开',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba4e',
              name: '展示行展开列',
              key: 'showExpandColumn',
              desc: '设置是否展示行展开列',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba4f',
              name: '显示下一次排序',
              key: 'showSorterTooltip',
              desc: '表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba50',
              name: '排序方式',
              key: 'sortDirections',
              desc: '支持的排序方式，取值为 ascend descend',
              types: [
                {
                  type: 'unknown',
                  multiple: true,
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7053cf44f6204642ba51',
              name: '滚动条',
              key: 'sticky',
              desc: '设置粘性头部和滚动条',
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
              id: '641a7053cf44f6204642ba52',
              key: 'expandedRowsChange',
              name: '展开的行变化',
              desc: undefined,
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
            },
            {
              id: '641a7053cf44f6204642ba53',
              key: 'change',
              name: '分页、排序、筛选变化',
              desc: '分页、排序、筛选变化时触发',
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
            },
            {
              id: '641a7053cf44f6204642ba54',
              key: 'expand',
              name: '展开图标',
              desc: '点击展开图标时触发',
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
            },
            {
              id: 'resizeColumn',
              key: 'resizeColumn',
              name: '拖动列',
              desc: '拖动列时触发',
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
            },
          ],
          slots: [
            {
              id: '641a7053cf44f6204642ba55',
              key: 'bodyCell',
              name: '个性化单元格',
              desc: '个性化单元格',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642ba56',
              key: 'customFilterDropdown',
              name: '自定义筛选菜单',
              desc: '自定义筛选菜单，需要配合 column.customFilterDropdown 使用',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642ba57',
              key: 'customFilterIcon',
              name: '自定义筛选图标',
              desc: '自定义筛选图标',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642ba58',
              key: 'emptyText',
              name: '显示内容',
              desc: '自定义空数据时的显示内容',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642ba59',
              key: 'headerCell',
              name: '个性化头部单元格',
              desc: '个性化头部单元格',
              properties: [],
            },
            {
              id: '641a7053cf44f6204642ba5a',
              key: 'summary',
              name: '总结栏',
              desc: '总结栏',
              properties: [],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
        {
          id: '613ecb25af722dc29c7fc38b',
          name: 'TypographyTitle 标题排版',
          key: 'a-typography-title',
          props: [
            {
              id: '641a7052cf44f6204642b680',
              name: '允许复制',
              key: 'copyable',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b681',
              name: '添加删除线样式',
              key: 'delete',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b67f',
              name: '添加代码样式',
              key: 'code',
              desc: '添加代码样式',
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b682',
              name: '禁用文本',
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
              id: '641a7052cf44f6204642b683',
              name: '可编辑',
              key: 'editable',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b684',
              name: '溢出省略',
              key: 'ellipsis',
              desc: '自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等',
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b685',
              name: '标题大小',
              key: 'level',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b686',
              name: '底色标记',
              key: 'mark',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b687',
              name: '文本类型',
              key: 'type',
              desc: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b688',
              name: '下划线',
              key: 'underline',
              desc: undefined,
              types: [
                {
                  type: 'whether',
                },
              ],
              extendPlatform: undefined,
            },
            {
              id: '641a7052cf44f6204642b689',
              name: '当前内容',
              key: 'content',
              desc: undefined,
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
              id: '642b88049d9bbcb336f978d8',
              key: 'click',
              name: '点击标题',
              desc: '',
              parameters: [],
            },
          ],
          slots: [
            {
              id: '641a7052cf44f6204642b68a',
              key: 'default',
              name: '默认',
              desc: undefined,
              properties: [],
            },
            {
              id: 'editableIcon',
              key: 'editableIcon',
              name: '编辑图标',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b68b',
              key: 'editableTooltip',
              name: '提示文本',
              desc: undefined,
              properties: [],
            },
            {
              id: 'copyableIcon',
              key: 'copyableIcon',
              name: '拷贝图标',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b68c',
              key: 'copyableTooltip',
              name: '提示文案',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b68d',
              key: 'ellipsisSymbol',
              name: '展开描述',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b68e',
              key: 'ellipsisTooltip',
              name: '省略时展示提示',
              desc: undefined,
              properties: [],
            },
            {
              id: '641a7052cf44f6204642b68f',
              key: 'enterEnterIcon',
              name: '自定义“enter”图标',
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
          key: 'chenggongxiaoxitishi',
          parameters: [],
          outTypes: [],
        },
        {
          id: '646328fdcff50e223777b75f',
          name: '弹窗（信息）',
          key: 'Modal.info',
          parameters: [
            {
              id: '64632a60899e94bfe954bf8f',
              name: 'data',
              key: 'data',
              desc: '',
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
          id: '64632a1bcff50e223777b790',
          name: 'aaa',
          key: 'aaa',
          parameters: [],
          outTypes: [],
        },
        {
          id: '64632b11cff50e223777b7c1',
          name: '信息（错误）',
          key: 'message.error',
          parameters: [
            {
              id: '64632b1b30c50e816190ea3d',
              name: 'content',
              key: 'content',
              desc: '',
              types: [
                {
                  type: 'text',
                },
              ],
              extendPlatform: true,
            },
            {
              id: '64632b2330c50e816190ea3e',
              name: 'duration',
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
                },
              ],
              extendPlatform: true,
            },
            {
              id: '64632b3030c50e816190ea3f',
              name: 'onClose',
              key: 'onClose',
              desc: '',
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
          id: '6463331dcff50e223777b926',
          name: '消息弹窗',
          key: 'Modal.success',
          parameters: [
            {
              id: '64633322a9ed0cfd83c5ff1a',
              name: 'data',
              key: 'data',
              desc: '',
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
      subType: 'component',
      components: [],
      elements: [
        {
          id: '62c68d5d27d4bddfa728891b',
          name: 'input 输入框',
          key: 'input',
          props: [
            {
              id: 'type',
              name: undefined,
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
              extendPlatform: undefined,
            },
            {
              id: 'name',
              name: undefined,
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
              id: 'value',
              name: undefined,
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
              id: 'placeholder',
              name: undefined,
              key: 'placeholder',
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
          slots: [],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [],
        },
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
      ],
      functions: [],
      actions: [],
      events: [],
      slots: [],
      props: [],
      apis: [],
    },
    {
      id: '645db2c06aa75524b6077dbf',
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
      ],
      actions: [],
      events: [],
      slots: [],
      props: [],
      apis: [],
    },
    {
      id: '6448caed58252f48a6d485e5',
      projectId: '6448caed58252f48a6d485e5',
      name: 'ethan组件包2',
      key: undefined,
      version: 'latest',
      subType: 'component',
      components: [
        {
          id: '6448cb0258252f48a6d48610',
          name: 'e-menu',
          key: 'f-43272b44',
          props: [
            {
              id: '6448cb82319af5b84c5249f6',
              name: 'data',
              key: 'data',
              desc: '菜单数据',
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
                        key: 'value',
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
                        key: 'label',
                      },
                    ],
                  },
                },
              ],
              extendPlatform: true,
            },
          ],
          emits: [
            {
              id: '6448cdf4ff2be83d64646158',
              key: 'xuanzhongshijian',
              name: '选中事件',
              desc: '',
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
                            key: 'dangqianxiang',
                          },
                          {
                            name: '当前标识',
                            types: [
                              {
                                type: 'text',
                              },
                            ],
                            id: '6448ce42ff2be83d6464615c',
                            key: 'dangqianbiaoshi',
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
                            key: 'xuanzhongbiaoshishuzu',
                          },
                        ],
                      },
                    },
                  ],
                  id: '6448ce21ff2be83d6464615a',
                  key: 'data',
                },
              ],
            },
          ],
          slots: [
            {
              id: '64647e5e52af8e55ee6c57d1',
              key: 'MenuItemchacao',
              name: 'MenuItem插槽',
              desc: undefined,
              properties: [
                {
                  name: 'item',
                  types: [
                    {
                      type: 'text',
                    },
                  ],
                  id: '64647e7952af8e55ee6c57d2',
                  key: 'item',
                },
              ],
            },
          ],
          lifeCycle: [],
          functions: [],
          variables: [],
          nodes: [
            {
              id: 'J415',
              preId: null,
              nextId: null,
              parentId: null,
              tagId: '613ecb25af722dc29c7fc39d',
              packageId: '6352061254bb9b1c84ce3570',
              props: undefined,
              events: undefined,
            },
            {
              id: 'J415#641a7052cf44f6204642b716',
              preId: null,
              nextId: 'J415#641a7052cf44f6204642b717',
              parentId: 'J415',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'Q544',
              preId: null,
              nextId: null,
              parentId: 'J415#641a7052cf44f6204642b716',
              tagId: '62d65a88e7021e08c65c462e',
              packageId: '6455c49bc56f0402c3fd3436',
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
              events: undefined,
            },
            {
              id: 'Q544#641a7052cf44f6204642b607',
              preId: null,
              nextId: null,
              parentId: 'Q544',
              tagId: '62d65a88e7021e08c65c4634',
              packageId: '6455c49bc56f0402c3fd3436',
              props: undefined,
              events: undefined,
            },
            {
              id: 'S946',
              preId: null,
              nextId: null,
              parentId: 'Q544#641a7052cf44f6204642b607',
              tagId: '613ecb25af722dc29c7fc39e',
              packageId: '6352061254bb9b1c84ce3570',
              props: undefined,
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
      id: '6448cb0258252f48a6d48610',
      name: 'e-menu',
      key: 'f-43272b44',
      props: [
        {
          id: '6448cb82319af5b84c5249f6',
          name: 'data',
          key: 'data',
          desc: '菜单数据',
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
                    key: 'value',
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
                    key: 'label',
                  },
                ],
              },
            },
          ],
          extendPlatform: true,
        },
      ],
      emits: [
        {
          id: '6448cdf4ff2be83d64646158',
          key: 'xuanzhongshijian',
          name: '选中事件',
          desc: '',
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
                        key: 'dangqianxiang',
                      },
                      {
                        name: '当前标识',
                        types: [
                          {
                            type: 'text',
                          },
                        ],
                        id: '6448ce42ff2be83d6464615c',
                        key: 'dangqianbiaoshi',
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
                        key: 'xuanzhongbiaoshishuzu',
                      },
                    ],
                  },
                },
              ],
              id: '6448ce21ff2be83d6464615a',
              key: 'data',
            },
          ],
        },
      ],
      slots: [
        {
          id: '64647e5e52af8e55ee6c57d1',
          key: 'MenuItemchacao',
          name: 'MenuItem插槽',
          desc: undefined,
          properties: [
            {
              name: 'item',
              types: [
                {
                  type: 'text',
                },
              ],
              id: '64647e7952af8e55ee6c57d2',
              key: 'item',
            },
          ],
        },
      ],
      lifeCycle: [],
      functions: [],
      variables: [],
      nodes: [
        {
          id: 'J415',
          preId: null,
          nextId: null,
          parentId: null,
          tagId: '613ecb25af722dc29c7fc39d',
          packageId: '6352061254bb9b1c84ce3570',
          props: undefined,
          events: undefined,
        },
        {
          id: 'J415#641a7052cf44f6204642b716',
          preId: null,
          nextId: 'J415#641a7052cf44f6204642b717',
          parentId: 'J415',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Q544',
          preId: null,
          nextId: null,
          parentId: 'J415#641a7052cf44f6204642b716',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'Q544#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'Q544',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'S946',
          preId: null,
          nextId: null,
          parentId: 'Q544#641a7052cf44f6204642b607',
          tagId: '613ecb25af722dc29c7fc39e',
          packageId: '6352061254bb9b1c84ce3570',
          props: undefined,
          events: undefined,
        },
      ],
    },
  ],
  pages: [
    {
      id: '64464a419c229310c169d486',
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
        query: [
          {
            id: '6448e22cc48ddbf7e5f02da6',
            name: 'id',
            key: 'id',
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
          id: 'D767',
          preId: null,
          nextId: 'K654',
          parentId: null,
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'D767#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'D767',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y576',
          preId: null,
          nextId: 'Q091',
          parentId: 'D767#641a7052cf44f6204642b607',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'Y576#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'Y576',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'F104',
          preId: null,
          nextId: null,
          parentId: 'Y576#641a7052cf44f6204642b607',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'F104#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'F104',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'A908',
          preId: null,
          nextId: null,
          parentId: 'F104#641a7052cf44f6204642b607',
          tagId: '62d65a88e7021e08c65c4630',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'A908#641a7052cf44f6204642b609',
          preId: null,
          nextId: 'A908#641a7052cf44f6204642b60a',
          parentId: 'A908',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X741',
          preId: null,
          nextId: null,
          parentId: 'A908#641a7052cf44f6204642b609',
          tagId: '613ecb25af722dc29c7fc3c5',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'X741#641a7053cf44f6204642b9cd',
          preId: null,
          nextId: 'X741#641a7053cf44f6204642b9c9',
          parentId: 'X741',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y459',
          preId: null,
          nextId: 'Q246',
          parentId: 'X741#641a7053cf44f6204642b9cd',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Q246',
          preId: 'Y459',
          nextId: 'V643',
          parentId: 'X741#641a7053cf44f6204642b9cd',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'V643',
          preId: 'Q246',
          nextId: null,
          parentId: 'X741#641a7053cf44f6204642b9cd',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'A908#641a7052cf44f6204642b60a',
          preId: 'A908#641a7052cf44f6204642b609',
          nextId: null,
          parentId: 'A908',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'Y355',
          preId: null,
          nextId: null,
          parentId: 'A908#641a7052cf44f6204642b60a',
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
                  value: '年龄小于10----------',
                },
              },
            },
          ],
          events: undefined,
        },
        {
          id: 'Q091',
          preId: 'Y576',
          nextId: null,
          parentId: 'D767#641a7052cf44f6204642b607',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'Q091#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'Q091',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E645',
          preId: null,
          nextId: null,
          parentId: 'Q091#641a7052cf44f6204642b607',
          tagId: '62c68d5d27d4bddfa728891b',
          packageId: '6352061a54bb9b1c84ce357d',
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
          events: undefined,
        },
        {
          id: 'K654',
          preId: 'D767',
          nextId: null,
          parentId: null,
          tagId: '6448cb0258252f48a6d48610',
          packageId: '6448caed58252f48a6d485e5',
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
          events: undefined,
        },
        {
          id: 'K654#64647e5e52af8e55ee6c57d1',
          preId: null,
          nextId: null,
          parentId: 'K654',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'D991',
          preId: null,
          nextId: null,
          parentId: 'K654#64647e5e52af8e55ee6c57d1',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
          props: undefined,
          events: undefined,
        },
      ],
      variables: [
        {
          id: '6447262e0b661be9e0b91ac1',
          name: '学生名称',
          key: 'xueshengmingcheng',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: undefined,
        },
        {
          id: '644726370b661be9e0b91ac2',
          name: '学生年龄',
          key: 'xueshengnianling',
          desc: undefined,
          types: [
            {
              type: 'number',
            },
          ],
          extendPlatform: undefined,
        },
        {
          id: '645d99c25b102b96f9fbb4f1',
          name: '循环cols',
          key: 'xunhuancols',
          desc: undefined,
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
                    key: 'name',
                  },
                  {
                    name: 'game',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '645d99f55b102b96f9fbb4f4',
                    key: 'game',
                  },
                ],
              },
            },
          ],
          extendPlatform: undefined,
        },
        {
          id: '645dea4c76948742ae1664cd',
          name: '循环文本数据',
          key: 'xunhuanwenbenshuju',
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
          extendPlatform: undefined,
        },
        {
          id: '6464820f98e92c32432c8e7c',
          name: 'menu数组',
          key: 'menushuzu',
          desc: 'menuOptions',
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
                    key: 'value',
                  },
                  {
                    name: 'label',
                    types: [
                      {
                        type: 'text',
                      },
                    ],
                    id: '6464822898e92c32432c8e7e',
                    key: 'label',
                  },
                ],
              },
            },
          ],
          extendPlatform: undefined,
        },
      ],
      lifeCycle: [
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
      functions: [],
    },
    {
      id: '64464a419c229310c169d487',
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
      id: '64464a419c229310c169d488',
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
      id: '644653eb9c229310c169da00',
      mate: {
        title: {
          type: 'data',
          mode: 'custom',
          args: {
            value: '人员录入页',
          },
        },
      },
      route: {
        query: [],
      },
      nodes: [
        {
          id: 'X995',
          preId: null,
          nextId: null,
          parentId: null,
          tagId: '613ecb25af722dc29c7fc3c5',
          packageId: '6352061254bb9b1c84ce3570',
          props: undefined,
          events: undefined,
        },
        {
          id: 'X995#641a7053cf44f6204642b9cd',
          preId: null,
          nextId: 'X995#641a7053cf44f6204642b9c9',
          parentId: 'X995',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G173',
          preId: null,
          nextId: null,
          parentId: 'X995#641a7053cf44f6204642b9cd',
          tagId: '613ecb25af722dc29c7fc3af',
          packageId: '6352061254bb9b1c84ce3570',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G173#641a7052cf44f6204642b856',
          preId: null,
          nextId: null,
          parentId: 'G173',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'K495',
          preId: null,
          nextId: 'W588',
          parentId: 'G173#641a7052cf44f6204642b856',
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
                  value: '学生名称',
                },
              },
            },
          ],
          events: undefined,
        },
        {
          id: 'K495#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'K495#641a7052cf44f6204642b86a',
          parentId: 'K495',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N735',
          preId: null,
          nextId: null,
          parentId: 'K495#641a7052cf44f6204642b86c',
          tagId: '613ecb25af722dc29c7fc3b1',
          packageId: '6352061254bb9b1c84ce3570',
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
        {
          id: 'W588',
          preId: 'K495',
          nextId: 'E399',
          parentId: 'G173#641a7052cf44f6204642b856',
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
                  value: '学生年龄',
                },
              },
            },
          ],
          events: undefined,
        },
        {
          id: 'W588#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'W588#641a7052cf44f6204642b86a',
          parentId: 'W588',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R618',
          preId: null,
          nextId: null,
          parentId: 'W588#641a7052cf44f6204642b86c',
          tagId: '613ecb25af722dc29c7fc3b6',
          packageId: '6352061254bb9b1c84ce3570',
          props: undefined,
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
        {
          id: 'E399',
          preId: 'W588',
          nextId: null,
          parentId: 'G173#641a7052cf44f6204642b856',
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
          events: undefined,
        },
        {
          id: 'E399#641a7052cf44f6204642b86c',
          preId: null,
          nextId: 'E399#641a7052cf44f6204642b86a',
          parentId: 'E399',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'E423',
          preId: null,
          nextId: 'V966',
          parentId: 'E399#641a7052cf44f6204642b86c',
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
        {
          id: 'E423#641a7052cf44f6204642b667',
          preId: null,
          nextId: 'E423#641a7052cf44f6204642b668',
          parentId: 'E423',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G606',
          preId: null,
          nextId: null,
          parentId: 'E423#641a7052cf44f6204642b667',
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
                  value: '提交表单',
                },
              },
            },
          ],
          events: undefined,
        },
        {
          id: 'V966',
          preId: 'E423',
          nextId: null,
          parentId: 'E399#641a7052cf44f6204642b86c',
          tagId: '613ecb25af722dc29c7fc387',
          packageId: '6352061254bb9b1c84ce3570',
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
                                mode: 'eq',
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
        {
          id: 'V966#641a7052cf44f6204642b667',
          preId: null,
          nextId: 'V966#641a7052cf44f6204642b668',
          parentId: 'V966',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'H105',
          preId: null,
          nextId: null,
          parentId: 'V966#641a7052cf44f6204642b667',
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
                  value: '保存',
                },
              },
            },
          ],
          events: undefined,
        },
      ],
      variables: [
        {
          id: '6454c8d32f633c035f506d50',
          name: '学生名称',
          key: 'xueshengmingcheng',
          desc: undefined,
          types: [
            {
              type: 'text',
            },
          ],
          extendPlatform: undefined,
        },
        {
          id: '645ca561aea28d56b0bdb3f8',
          name: '学生年龄',
          key: 'xueshengnianling',
          desc: undefined,
          types: [
            {
              type: 'number',
            },
          ],
          extendPlatform: undefined,
        },
      ],
      lifeCycle: [],
      functions: [],
    },
    {
      id: '6447315b9c229310c169e36c',
      mate: {
        title: {
          type: 'data',
          mode: 'custom',
          args: {
            value: '人员列表',
          },
        },
      },
      route: {
        query: [],
      },
      nodes: [
        {
          id: 'D157',
          preId: null,
          nextId: 'M687',
          parentId: null,
          tagId: '613ecb25af722dc29c7fc3d1',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'M687',
          preId: 'D157',
          nextId: 'L885',
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L885',
          preId: 'M687',
          nextId: 'L123',
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
          props: undefined,
          events: undefined,
        },
        {
          id: 'L123',
          preId: 'L885',
          nextId: null,
          parentId: null,
          tagId: '613ecb25af722dc29c7fc387',
          packageId: '6352061254bb9b1c84ce3570',
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
      functions: [],
    },
    {
      id: '645c3f07e94e7d605e79d523',
      mate: {
        title: {
          type: 'data',
          mode: 'custom',
          args: {
            value: '人员详情页',
          },
        },
      },
      route: {
        query: [
          {
            id: '645c3f3f62f62e7825159a5e',
            name: '人员id',
            key: 'renyuanid',
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
          id: 'R109',
          preId: null,
          nextId: 'F643',
          parentId: null,
          tagId: '613ecb25af722dc29c7fc38b',
          packageId: '6352061254bb9b1c84ce3570',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R109#641a7052cf44f6204642b68a',
          preId: null,
          nextId: 'R109#editableIcon',
          parentId: 'R109',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'G296',
          preId: null,
          nextId: null,
          parentId: 'R109#641a7052cf44f6204642b68a',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'F643',
          preId: 'R109',
          nextId: null,
          parentId: null,
          tagId: '62c68d5d27d4bddfa72888e1',
          packageId: '6352061a54bb9b1c84ce357d',
          props: undefined,
          events: undefined,
        },
        {
          id: 'F643#641a95e6cd3c6b0921a79f2a',
          preId: null,
          nextId: null,
          parentId: 'F643',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'N730',
          preId: null,
          nextId: null,
          parentId: 'F643#641a95e6cd3c6b0921a79f2a',
          tagId: '62d65a88e7021e08c65c462e',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'N730#641a7052cf44f6204642b607',
          preId: null,
          nextId: null,
          parentId: 'N730',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'F221',
          preId: null,
          nextId: null,
          parentId: 'N730#641a7052cf44f6204642b607',
          tagId: '62d65a88e7021e08c65c4630',
          packageId: '6455c49bc56f0402c3fd3436',
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
          events: undefined,
        },
        {
          id: 'F221#641a7052cf44f6204642b609',
          preId: null,
          nextId: 'F221#641a7052cf44f6204642b60a',
          parentId: 'F221',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'I275',
          preId: null,
          nextId: null,
          parentId: 'F221#641a7052cf44f6204642b609',
          tagId: '613ecb25af722dc29c7fc3c5',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'I275#641a7053cf44f6204642b9cd',
          preId: null,
          nextId: 'I275#641a7053cf44f6204642b9c9',
          parentId: 'I275',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R299',
          preId: null,
          nextId: 'H287',
          parentId: 'I275#641a7053cf44f6204642b9cd',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'H287',
          preId: 'R299',
          nextId: null,
          parentId: 'I275#641a7053cf44f6204642b9cd',
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
                  value: '小于6',
                },
              },
            },
          ],
          events: undefined,
        },
        {
          id: 'F221#641a7052cf44f6204642b60a',
          preId: 'F221#641a7052cf44f6204642b609',
          nextId: null,
          parentId: 'F221',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'U172',
          preId: null,
          nextId: null,
          parentId: 'F221#641a7052cf44f6204642b60a',
          tagId: '613ecb25af722dc29c7fc3c5',
          packageId: '6352061254bb9b1c84ce3570',
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
          events: undefined,
        },
        {
          id: 'U172#641a7053cf44f6204642b9cd',
          preId: null,
          nextId: 'U172#641a7053cf44f6204642b9c9',
          parentId: 'U172',
          tagId: '62d65a88e7021e08c65c4634',
          packageId: '6455c49bc56f0402c3fd3436',
          props: undefined,
          events: undefined,
        },
        {
          id: 'R154',
          preId: null,
          nextId: 'Z865',
          parentId: 'U172#641a7053cf44f6204642b9cd',
          tagId: '62c68d5d27d4bddfa72888fb',
          packageId: '6358fb8554bb9b1c84ce47a2',
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
          events: undefined,
        },
        {
          id: 'Z865',
          preId: 'R154',
          nextId: null,
          parentId: 'U172#641a7053cf44f6204642b9cd',
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
                  value: '大于等于6',
                },
              },
            },
          ],
          events: undefined,
        },
      ],
      variables: [],
      lifeCycle: [
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
      functions: [],
    },
  ],
  functions: [],
  apis: [
    {
      id: '64464dfe9c229310c169d72b',
      key: 'chuangjianyonghu',
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
                rules: {
                  minLength: 6,
                  maxLength: 20,
                  required: true,
                },
              },
            ],
            id: '64464e03442d4717949ba939',
            key: 'yonghuming',
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
            key: 'yonghunianling',
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
                      key: 'guojia',
                    },
                    {
                      name: '省份',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '64464e56442d4717949ba93e',
                      key: 'shengfen',
                    },
                    {
                      name: '市区',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '64464e5f442d4717949ba93f',
                      key: 'shiqu',
                    },
                  ],
                },
              },
            ],
            id: '64464e44442d4717949ba93c',
            key: 'yonghudizhi',
          },
        ],
      },
      response: {
        body: [],
      },
    },
    {
      id: '64464e939c229310c169d784',
      key: 'chuangjianbanji',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
          {
            name: '年级',
            types: [
              {
                type: 'text',
              },
            ],
            id: '64464e99442d4717949ba943',
            key: 'nianji',
          },
          {
            name: '班号',
            types: [
              {
                type: 'text',
              },
            ],
            id: '64464eb5442d4717949ba946',
            key: 'banhao',
          },
        ],
      },
      response: {
        body: [],
      },
    },
    {
      id: '64464ed79c229310c169d7c6',
      key: 'luruxueshengbanji',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
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
            key: 'xueshengid',
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
            key: 'banjiid',
          },
        ],
      },
      response: {
        body: [],
      },
    },
    {
      id: '64464f4e9c229310c169d7da',
      key: 'chaxunxueshengbanji',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
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
            key: 'xueshengid',
          },
        ],
      },
      response: {
        body: [
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
                      key: 'banjimingcheng',
                    },
                  ],
                },
              },
            ],
            id: '64464f8e442d4717949ba954',
            key: 'banjixinxi',
          },
        ],
      },
    },
    {
      id: '644731b09c229310c169e3fb',
      key: 'chaxunsuoyouyonghu',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
          {
            id: '64473259425c9a11a9a475aa',
            name: '参数',
            types: [
              {
                type: 'text',
              },
            ],
            key: 'canshu',
          },
        ],
      },
      response: {
        body: [
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
                      key: 'ID',
                    },
                    {
                      name: '用户名',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '6447328c425c9a11a9a475b1',
                      key: 'yonghuming',
                    },
                    {
                      name: '用户年龄',
                      types: [
                        {
                          type: 'number',
                        },
                      ],
                      id: '64473291425c9a11a9a475b2',
                      key: 'yonghunianling',
                    },
                  ],
                },
              },
            ],
            id: '64473279425c9a11a9a475af',
            key: 'yonghushuzu',
          },
        ],
      },
    },
    {
      id: '645c463fe94e7d605e79d693',
      key: 'chaxunyonghu',
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: [
          {
            name: '用户id',
            types: [
              {
                type: 'text',
              },
            ],
            id: '645c4643a257c532a654185f',
            required: true,
            key: 'yonghuid',
          },
        ],
      },
      response: {
        body: [
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
                      key: 'id',
                    },
                    {
                      name: '用户名',
                      types: [
                        {
                          type: 'text',
                        },
                      ],
                      id: '645c46aba257c532a6541867',
                      key: 'yonghuming',
                    },
                    {
                      name: '用户年龄',
                      types: [
                        {
                          type: 'number',
                        },
                      ],
                      id: '645c46b4a257c532a6541868',
                      key: 'yonghunianling',
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
                                key: 'guojia',
                              },
                              {
                                name: '省份',
                                types: [
                                  {
                                    type: 'text',
                                  },
                                ],
                                id: '645c46cda257c532a654186b',
                                key: 'shengfen',
                              },
                              {
                                name: '市区',
                                types: [
                                  {
                                    type: 'text',
                                  },
                                ],
                                id: '645c46d2a257c532a654186c',
                                key: 'shiqu',
                              },
                              {
                                name: '详细地址',
                                types: [
                                  {
                                    type: 'text',
                                  },
                                ],
                                id: '645c46d7a257c532a654186d',
                                key: 'xiangxidizhi',
                              },
                              {
                                name: 'id',
                                types: [
                                  {
                                    type: 'text',
                                  },
                                ],
                                id: '645c472ea257c532a654186f',
                                key: 'id',
                              },
                            ],
                          },
                        },
                      ],
                      id: '645c46bea257c532a6541869',
                      key: 'dizhi',
                    },
                  ],
                },
              },
            ],
            id: '645c4691a257c532a6541865',
            key: 'yonghuxinxi',
          },
        ],
      },
    },
  ],
  directories: [
    {
      id: '64464a419c229310c169d486',
      key: 'shouye',
      name: '首页',
      parentId: null,
      isDirectory: false,
      resourceType: 'page',
    },
    {
      id: '645c3f0ce94e7d605e79d538',
      key: 'renyuan',
      name: '人员',
      parentId: null,
      isDirectory: true,
      resourceType: undefined,
    },
    {
      id: '6447315b9c229310c169e36c',
      key: 'renyuanliebiao',
      name: '人员列表',
      parentId: '645c3f0ce94e7d605e79d538',
      isDirectory: false,
      resourceType: 'page',
    },
    {
      id: '645c3f07e94e7d605e79d523',
      key: 'renyuanxiangqingye',
      name: '人员详情页',
      parentId: '645c3f0ce94e7d605e79d538',
      isDirectory: false,
      resourceType: 'page',
    },
    {
      id: '644653eb9c229310c169da00',
      key: 'renyuanluruye',
      name: '人员录入页',
      parentId: '645c3f0ce94e7d605e79d538',
      isDirectory: false,
      resourceType: 'page',
    },
    {
      id: '64464a419c229310c169d487',
      key: '404',
      name: '404',
      parentId: null,
      isDirectory: false,
      resourceType: 'page',
    },
    {
      id: '64464a419c229310c169d488',
      key: '502',
      name: '502',
      parentId: null,
      isDirectory: false,
      resourceType: 'page',
    },
  ],
} as CodeSchema.Project;

export default codeSchema;
