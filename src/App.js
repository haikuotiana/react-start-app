import React from 'react'
import { Link } from "react-router-dom";
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
                    <Link to="/index">Invoices</Link> |{" "}
                    <Link to="/login">Expenses</Link>
                </nav>
            </div>
        )
    }
}
export default App