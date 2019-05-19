import { get } from "@ember/object";
import Route from "@ember/routing/route";
import InfiniteScrollOffsetMixin from "ui/routes/-mixins/routes/infinite-scroll/offset";


export default Route.extend( InfiniteScrollOffsetMixin, {
	itemSelector: ".video-item-component",
	modelName: "twitchVideos",
	modelPreload: "preview.mediumLatest",

	model() {
		const { channel: parentModel } = this.modelFor( "channel" );
		const channel = get( parentModel, "id" );

		return this._super({ channel });
	}
});
