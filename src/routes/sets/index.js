import { h, Component } from 'preact';
import style from './style';
import Box from '../../components/box'

export default class Sets extends Component {

	render({ data }) {
		return (
			<div class={style.profile}>
				<h2>Sets</h2>
				<ul class={style.list}>	
				{ data.sets.map((set, index) => {
					return (
						<li>
							<Box link={`/sets/${index}`} headline={set.name} description={set.description}/>
						</li>					)
				})}
				</ul>
			</div>
		);
	}
}
