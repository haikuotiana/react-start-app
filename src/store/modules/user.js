import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
export default class User {
  ticket = ''
  userInfo={} 

  constructor () {
    /**
     * state
     */
    let token = Cookies.get("token");
    this.ticket = token || '' // 登录ticket
    this.userInfo = {} // 用户信息

    makeAutoObservable(this)
  }

  /**
   * computed
   */
  // 是否已登录
  get isLogin () {
    return !!this.ticket
  }

  // 是否已获取到userInfo
  get isGotUserInfo () {
    return this.userInfo.userId !== undefined
  }

  // userId
  get userId () {
    return this.userInfo.userId
  }

  // 用户所有权限id数组
  get accessIdList () {
    return this.userInfo.accessIdList || []
  }

  /**
   * action
   */
  setTicket (val) {
    this.ticket = val || ''
    window.localStorage.setItem('ticket', this.ticket)
  }

  async setUserInfo (userInfo) {
    this.userInfo = userInfo || {}
  }
}