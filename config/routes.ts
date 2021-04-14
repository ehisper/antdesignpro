// export default [
//   {
//     path: '/user',
//     layout: false,
//     routes: [
//       {
//         path: '/user',
//         routes: [
//           {
//             name: 'login',
//             path: '/user/login',
//             component: './user/Login',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: '/welcome',
//     name: 'welcome',
//     icon: 'smile',
//     component: './Welcome',
//   },
//   {
//     path: '/admin',
//     name: 'admin',
//     icon: 'crown',
//     access: 'canAdmin',
//     component: './Admin',
//     routes: [
//       {
//         path: '/admin/sub-page',
//         name: 'sub-page',
//         icon: 'smile',
//         component: './Welcome',
//       },
//     ],
//   },
//   {
//     name: 'list.table-list',
//     icon: 'table',
//     path: '/list',
//     component: './TableList',
//   },
//   {
//     path: '/',
//     redirect: '/welcome',
//   },
//   {
//     component: './404',
//   },
// ];
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      // {
      //   name: '注册',
      //   path: '/user/register',
      //   component: './user/Register',
      // },
    ],
  },
  // {
  //   path: '/welcome',
  //   name: '欢迎',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  {
    path: '/userinfo',
    name: '用户中心',
    routes: [
      {
        path: '/userinfo/a',
        name: '我的首页',
        icon: 'smile',
        component: './UserInfo',
      },
      {
        path: '/userinfo/b',
        name: '绑定手机',
        icon: 'crown',
        component: './UserInfo/phone',
      },
      {
        path: '/userinfo/c',
        name: '密码设置',
        icon: 'smile',
        component: './UserInfo/password',
      },
      {
        path: '/userinfo/d',
        name: '我的认证',
        icon: 'crown',
        component: './UserInfo/authentication',
      },
      {
        path: '/userinfo/e',
        name: '我的钱包',
        icon: 'smile',
        component: './UserInfo/wallet',
      },
      {
        path: '/userinfo/f',
        name: '公益机构认证',
        icon: 'crown',
        component: './Welcome',
      },
      {
        redirect: '/userinfo/a'
      }
    ],
  },
  {
    path: '/manage',
    name: '公益平台',
    access: 'canAdmin',
    routes: [
      {
        path: '/manage/project',
        name: '项目中心',
        icon: 'smile',
        routes: [
          {
            name: '项目列表',
            path: '/manage/project/a',
            component: './TableList',
          },
          {
            name: '发布项目',
            path: '/manage/project/b',
            component: './Welcome',
          },
          {
            name: '项目执行',
            path: '/manage/project/c',
            component: './Welcome',
          },
        ],
      },
      {
        path: '/manage/audit',
        name: '审核管理',
        icon: 'home',
        routes: [
          {
            name: '项目审核',
            path: '/manage/audit/a',
            component: './Welcome',
          },
          {
            name: '捐赠审核',
            path: '/manage/audit/b',
            component: './Welcome',
          },
          {
            name: '资金划拨',
            path: '/manage/audit/c',
            component: './Welcome',
          },
          {
            name: '干系人管理',
            path: '/manage/audit/d',
            component: './Welcome',
          }
        ],
      },
      {
        path: '/manage/donate',
        name: '捐赠管理',
        icon: 'setting',
        routes: [
          {
            name: '捐赠存证',
            path: '/manage/donate/b',
            component: './Welcome',
          },
          {
            name: '我的捐赠',
            path: '/manage/donate/a',
            component: './Welcome',
          },
        ],
      },
      {
        path: '/manage/plat',
        name: '平台管理',
        icon: 'sync',
        routes: [
          {
            name: '认证审核',
            path: '/manage/plat/a',
            component: './Welcome',
          },
          {
            name: '公益机构审核',
            path: '/manage/plat/b',
            component: './Welcome',
          },
        ],
      },
      {
        redirect: '/manage/project/a'
      }
    ],
  },
  {
    name: '列表页',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/userinfo/a',
  },
  {
    component: './404',
  },
];