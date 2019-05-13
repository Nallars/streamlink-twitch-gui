import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { classNames, layout, tagName } from "@ember-decorators/component";
import HotkeyMixin from "ui/components/-mixins/hotkey";
import { isDarwin } from "utils/node/platform";
import template from "./template.hbs";
import "./styles.less";


const { isArray } = Array;


const routeHotkeys = {
	"about": "F1",
	"watching": "F10",
	"user.auth": "F11",
	"settings": "F12",
	"featured": "1",
	"games": "2",
	"communities": "3",
	"streams": "4",
	"user.subscriptions": "5",
	"user.followedStreams": "6",
	"user.hostedStreams": "7",
	"user.followedChannels": "8",
	"user.followedGames": "9"
};

/** @this {MainMenuComponent} */
function refresh() {
	// macOS has a menu bar with its own refresh hotkey
	if ( isDarwin ) { return; }
	this.router.refresh();
}


@layout( template )
@tagName( "aside" )
@classNames( "main-menu-component" )
export default class MainMenuComponent extends Component.extend( HotkeyMixin ) {
	/** @type {RouterService} */
	@service router;

	hotkeys = [
		{
			key: "F5",
			force: true,
			action: refresh
		},
		{
			key: "r",
			ctrlKey: true,
			force: true,
			action: refresh
		},
		{
			key: "ArrowLeft",
			altKey: true,
			force: true,
			/** @this {MainMenuComponent} */
			action() {
				this.router.history( -1 );
			}
		},
		{
			key: "ArrowRight",
			altKey: true,
			force: true,
			/** @this {MainMenuComponent} */
			action() {
				this.router.history( +1 );
			}
		},
		{
			key: "0",
			/** @this {MainMenuComponent} */
			action() {
				this.router.homepage();
			}
		},
		...Object.keys( routeHotkeys ).map( route => ({
			key: routeHotkeys[ route ],
			force: !isArray( routeHotkeys[ route ] ),
			/** @this {MainMenuComponent} */
			action() {
				this.router.transitionTo( route );
			}
		}) )
	]
}
