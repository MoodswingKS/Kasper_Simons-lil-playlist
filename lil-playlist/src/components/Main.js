import {Component} from 'react'
import AddItem from './AddItem'
import List from './List'

class Main extends Component {

    render() {
        return( 
            <div>
                <AddItem />
                <List />
            </div>
        )
    }
}

export default Main