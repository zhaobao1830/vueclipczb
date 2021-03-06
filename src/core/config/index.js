const Config = {
  baseUrl: process.env.VUE_APP_BASE_URL || '/api/',
  openAutoJumpOut: true, // 是否开启无操作跳出
  notLoginRoute: ['login'], // 无需登录即可访问的路由 name,
  sideBarLevel: 3, // 侧边栏层级限制, 3表示三级, 可设置 2 和 3
  showSidebarSearch: true, // 默认打开侧边栏搜索
  defaultRoute: '/systemManagement/userManagement/userManagement', // 默认打开的路由
  useFrontEndErrorMsg: false // 默认采用后端返回异常
}

export default Config
