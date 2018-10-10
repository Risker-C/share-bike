import React, { Component } from 'react'
import './index.less'
import { Link } from 'react-router-dom'
import utils from '../../utils'
import axios from 'axios'
const formDate = utils.formDate
export default class Header extends Component{
    constructor(props){
        super (props)
    }
    state = {
        time: '1233-12-23 12:12:12',
        weather: '发奖金的答复'
    }
    getTime () {
        this.timer = setInterval(() => {
            let date = new Date().getTime()
            let time = formDate(date)
            this.setState({
                time
            })
        }, 1000)
    }
    getWeather(){
        axios.get(`http://t.weather.sojson.com/api/weather/city/101010100`).then(res => {
            let weatherObj = res.data.data.forecast[0]
            let weather = `${weatherObj.low} ~ ${weatherObj.high} ${weatherObj.fx} ${weatherObj.fl}`
            this.setState({
                weather
            })
        })
    }
    componentWillMount(){
        this.getWeather()
        this.getTime()
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render () {
        return(
            <div className='header-warp'>
                <div className='user-info clearfix'>
                    <div className="flr">
                        <Link to='login'>退出</Link>
                    </div>
                    <div className='flr user-detail'>
                        欢迎，{' '}<span className='username'>陈特</span>
                    </div>
                </div>
                <div className="weather-wrap clearfix">
                    <div className="breadcrumb fll">
                        首页
                    </div>
                    <div className="weather flr clearfix">
                        <div className="weather-detail flr">{this.state.weather}</div>
                        <div className="date flr">{this.state.time}</div>
                    </div>
                </div>
            </div>
        )
    }
}