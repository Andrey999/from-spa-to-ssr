import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchTodos } from '../store/actions';

const Todo = ({ todo, fetchTodos }) => {
    // useEffect(() => {
    //     fetchTodos()
    // })
    return(
        <div>
            <h1>Todo</h1> 
            <Link to='/' >Home</Link>
            <br />
            { todo.map((item, key) => (
               <p key={ item.id }>{ item.id }: { item.title }</p>
            )) }
            <br />
            <button onClick={() => fetchTodos() }>Click todos</button>
        </div>
    ) 
}

//  for server  side  rendering
const loadData = (store, param) => { 
    return store.dispatch(fetchTodos(param))
}

const mapStateToProps = state => ({   // обращения к state, чтобы его можно было видеть в props
    todo: state.todo
})

const mapDispatchToProps = { fetchTodos }  // импортируем  action

// for spa
// export default connect(
//     mapStateToProps, 
//     mapDispatchToProps)(Todo);


// for server side rendering
export default {
    component:  connect(
    mapStateToProps, 
    mapDispatchToProps)(Todo),
    loadData
}