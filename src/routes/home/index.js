import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Box from '../../components/box'

export default class Home extends Component {

	randomNotification = () => {
		var notifTitle = 'Hello';
		var notifBody = 'Created by Malwine';
		// var notifImg = '../../assets/icons/android-chrome-192x192.png';
		var options = {
				body: notifBody,
				// icon: notifImg
		}
		let notification = new Notification(notifTitle, options);
	}

	handleReminderClick = () => {
		Notification.requestPermission().then( (result) => {
        if(result === 'granted') {
            console.log("permission granted")
						this.randomNotification()
        }
    }).catch((error) => console.log(error));
	}
	 
	render() {
		return (
			<div class={style.home}>
				<h2>Learn wherever you go!</h2>
				<div class={style.aboveBox}>
					<p>Flashcards is a web app that helps you practice your vocabulary wherever you go.
					Learn on your way to school or work. The app will be available independent of 
					your internet connection.</p>
				</div>

				<Box headline={ "four" } smaller />
				<Box headline={ "چهار" } description={ "(۴) shahar" } back={ true } smaller/>

				<div class={style.belowBox}>
					<p>
						Check out the <Link class={style.link} href="/sets">sample sets</Link>.
						Soon you will be able to create your own. Add the app to your home screen and start learning.
					</p>
					<button class={style.reminder} onClick={ this.handleReminderClick }>Add a reminder.</button>
					<p>This app was built by <a class={style.link} href="https://twitter.com/malweene">Malwine</a>.</p>
				</div>
			</div>
		)
	}
}
