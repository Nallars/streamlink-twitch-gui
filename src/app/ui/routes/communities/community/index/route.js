import { getOwner } from "@ember/application";
import Route from "@ember/routing/route";
import InfiniteScrollOffsetMixin from "ui/routes/-mixins/routes/infinite-scroll/offset";
import FilterLanguagesMixin from "ui/routes/-mixins/routes/filter-languages";


export default class CommunitiesCommunityIndexRoute
extends Route.extend( InfiniteScrollOffsetMixin, FilterLanguagesMixin ) {
	itemSelector = ".stream-item-component";
	modelName = "twitch-stream";
	modelPreload = "preview.mediumLatest";

	model() {
		const model = this.modelFor( "communities-community" );
		const community_id = model.id;

		return super.model({ community_id });
	}

	refresh() {
		return getOwner( this ).lookup( "route:communities-community" ).refresh();
	}
}
