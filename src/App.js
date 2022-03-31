import React from 'react'
import { Link,Outlet } from "react-router-dom";
class App extends React.Component{
    render(){
        return (
            <div>
                <h3>126132123</h3>
                <nav
                    style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                    }}
                >
                    <Link to="/index">index</Link> |{" "}
                    <Link to="/login">login</Link>
                </nav>
                <Outlet/>
            </div>
        )
    }
}
export default App