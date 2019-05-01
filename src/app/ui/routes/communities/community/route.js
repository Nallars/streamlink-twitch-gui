import Route from "@ember/routing/route";
import RefreshRouteMixin from "ui/routes/-mixins/routes/refresh";
import preload from "utils/preload";


export default class CommunitiesCommunityRoute extends Route.extend( RefreshRouteMixin ) {
	async model( params ) {
		const store = this.store;
		const { community_id } = params;

		/** @type {TwitchCommunity} */
		let record;
		try {
			record = await store.findRecord( "twitch-community", community_id, { reload: true } );
		} catch ( e ) {
			record = await store.queryRecord( "twitch-community", { name: community_id } );
		}
		await preload( record, "avatar_image_url" );

		return record;
	}
}
