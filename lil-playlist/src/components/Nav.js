import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Nav = () => {
    return (
        <Switch>
            <Route path="/about">
            <Link to="/">
            <div className='navigation'>
                Click here to go back!
            </div>
            </Link>
            </Route>
            <Route path="/">
            <Link to="/about">
            <div className='navigation'>
                Click here to learn my thoughts on this project!
            </div>
            </Link>
            </Route>
        </Switch>
    )
}


export default Nav