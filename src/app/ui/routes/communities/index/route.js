import Route from "@ember/routing/route";
import InfiniteScrollCursorMixin from "ui/routes/-mixins/routes/infinite-scroll/cursor";
import RefreshRouteMixin from "ui/routes/-mixins/routes/refresh";


export default class CommunitiesIndexRoute
extends Route.extend( InfiniteScrollCursorMixin, RefreshRouteMixin ) {
	itemSelector = ".community-item-component";
	modelName = "twitch-community-top";
	modelPreload = "avatar_image_url";
}
