import React,{createContext,useContext,useState} from 'react';
import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
const AuthContext = createContext();
/**
 * 自定义hook，函数返回 Context 值，包括 authed状态、login、logout函数来修改authed状态
 */
function useAuth() {
    const token = Cookies.get("token");
    const [authed, setAuthed] = useState(token);
    return {
        authed,
        login() {
            return new Promise((res) => {
                setAuthed(true);
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false);
                res();
            });
        }
    };
}
// 将context值传递给了Context Provider，并返回该组件用于广播context值
export function AuthProvider({ children }) {
    const auth = useAuth();
    console.log('auth',auth)
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
// 返回 Context 值
export default function AuthConsumer() {
    return useContext(AuthContext);
}
/**
 * @description
 * 封装拦截组件,如果已登录，返回包括的children组件；
 * 未登录，返回 <Navigate to="/user" /> 组件跳转到登录页面。
 * 
 * @example
 * <RequireAuth>
 *   <ComponentNeedAuth />
 * </RequireAuth>
 */
export function RequireAuth({ children }) {
    const { authed } = AuthConsumer();
    return authed ? (
        children
    ) : (
        <Navigate to="/login" replace />
    );
}