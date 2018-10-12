import React, { Component } from 'react'
import Header from '../../../components/header/newHeader'
import { Card } from 'antd'
import './index.less'
import axios from '../../../axios'
class Details extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.getData()
    }

    state = {
        orderInfo: {}
    }

    //请求数据
    getData = () => {
        let id = this.props.match.params.id
        axios.get(`/order/detail`, {id}).then(res => {
            console.log(res)
            if(res.code == 0){
                this.initMap(res.result)
                this.setState({
                    orderInfo: res.result
                })
            }

        })
    }
    //绘制地图
    initMap = (result) => {
        const BMap = window.BMap
        this.map = new BMap.Map("bd-map")              // 创建地图实例
        const point = new BMap.Point(result.position_list[0].lon, result.position_list[0].lat);  // 创建点坐标
        this.map.centerAndZoom(point, 11);        // 初始化地图，设置中心点坐标和地图级别
        this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        this.addMapControl()
        this.drawBikeRoute(result.position_list)
        this.drawServiceArea(result.area)
    }
    //添加地图小组件
    addMapControl = () => {
        const BMap = window.BMap
        this.map.addControl(new BMap.NavigationControl({
            anchor: window.BMAP_ANCHOR_TOP_RIGHT
        }));
        this.map.addControl(new BMap.ScaleControl({
            anchor: window.BMAP_ANCHOR_TOP_RIGHT
        }));
    }

    //绘制单车轨迹
    drawBikeRoute = (result) => {
        const BMap = window.BMap

        var startPoint = new BMap.Point(result[0].lon, result[0].lat);
        var endPoint = new BMap.Point(result[result.length - 1].lon, result[result.length - 1].lat);

        var startIcon = new BMap.Icon("/imgs/start_point.png", new BMap.Size(36, 42), {
            imageSize: new BMap.Size(36, 43)
        });
        var endIcon = new BMap.Icon("/imgs/end_point.png", new BMap.Size(36, 43), {
            imageSize: new BMap.Size(36, 43)
        });

        var startMarker = new BMap.Marker(startPoint, {icon: startIcon});        // 创建起始点标注
        var endMarker = new BMap.Marker(endPoint, {icon: endIcon});        // 创建重点标注

        this.map.addOverlay(startMarker);                // 将起始点标注添加到地图中
        this.map.addOverlay(endMarker);                // 将重点标注添加到地图中

        var polyline = new BMap.Polyline(
            result.map(item => new BMap.Point(item.lon, item.lat)),
            {strokeColor:"#1869AD", strokeWeight:3, strokeOpacity:1}
        );
        this.map.addOverlay(polyline);
    }
    //绘制限定区域
    drawServiceArea = (area) => {
        const BMap = window.BMap

        var polygon = new BMap.Polygon(
            area.map(item => new BMap.Point(item.lon, item.lat))
            , {strokeColor:"#ff0000", fillColor: '#ff6700', strokeWeight:3, strokeOpacity:1});  //创建多边形

        this.map.addOverlay(polygon);
    }
    render () {
        return(
            <div className='details'>
                <Header/>
                <Card>
                    <div className="bdMap" id="bd-map"></div>
                </Card>
            </div>
        )
    }
}
export default Details