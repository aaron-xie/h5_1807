import React,{Component} from 'react';
import {connect} from 'react-redux';


import {List,Stepper,Icon} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Cart extends Component{

	render(){
		return <div className="Cart">
			<List>
				{
					this.props.cartList.map(goods=>{
						return <Item
							key={goods.proId}
							thumb={goods.proImg}
							extra={<Icon type="cross" onClick={this.props.onRemoveGoods.bind(this,goods.proId)}/>}
						>
							{goods.proName}
							<Brief>{goods.slogan}</Brief>
							<Brief>价格：<span className="price">{goods.proPrice}</span></Brief>
							<Stepper showNumber size="small" defaultValue={goods.qty} onChange={this.props.onChangeQty.bind(this,goods.proId)} />
						</Item>
					})
				}
			</List>
		</div>
	}
}


export {Cart};