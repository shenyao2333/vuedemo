import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
  routeName: {
    home: '主页',
    administrator: '管理员',
    operations: '运维',
    permissions: '权限管理',
    pageControl: '页面权限',
    systemSettings: '系统设置',
    crontab: '定时任务管理',
    log: '日志',
    login: '登陆',
    test: '测试'
  },
  rightMenu: {
    close: '关闭',
    closeOther: '关闭其他',
    closeAll: '全部关闭'
  },
  role: {
    superAdmin: '超级管理员',
    admin: '管理员',
    ordinary: '普通用户'
  },
  userDropdownMenu: {
    basicInfor: '基本资料',
    changePassword: '修改密码',
    logout: '退出'
  },

  ...zhLocale //  合并element-ui内置翻译
}

export default cn
