
import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
  routeName: {
    home: 'home',
    administrator: 'administrator',
    operations: 'operations',
    permissions: 'permissions',
    pageControl: 'pageControl',
    systemSettings: 'systemSettings',
    crontab: 'crontab',
    log: 'log',
    login: 'login',
    test: 'test',
    demo: 'demo',
    ico: 'ico'
  },
  rightMenu: {
    close: 'close',
    closeOther: 'closeOther',
    closeAll: 'closeAll'
  },
  role: {
    superAdmin: 'superAdmin',
    admin: 'admin',
    ordinary: 'ordinary'
  },
  userDropdownMenu: {
    basicInfor: 'basicInfor',
    changePassword: 'changePassword',
    logout: 'logout'
  },

  ...enLocale //  合并element-ui内置翻译
}

export default en
