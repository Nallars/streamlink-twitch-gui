import { getOwner } from "@ember/application";
import Route from "@ember/routing/route";


export default class CommunitiesCommunityInfoRoute extends Route {
	async model() {
		const model = this.modelFor( "communities-community" );
		await model.owner.promise;

		return model;
	}

	refresh() {
		return getOwner( this ).lookup( "route:communities-community" ).refresh();
	}
}
