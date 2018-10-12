import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
class NewHeader extends Component{

    constructor(props){
        super(props)
    }

    render () {
        return(
            <div className='newHeader-wrap clearfix'>
                <div className="left-text fll">
                    <h1>共享单车后台系统</h1>
                </div>
               <div className="right-wrap flr clearfix">
                   <div className="user fll">
                       <span>欢迎, <strong>张怡宁</strong></span>
                   </div>
                   <div className="logout fll">
                       <Link to='/login'>退出</Link>
                   </div>
               </div>
            </div>
        )
    }
}
export default NewHeader