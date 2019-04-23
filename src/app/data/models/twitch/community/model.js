import attr from "ember-data/attr";
import Model from "ember-data/model";
import { belongsTo } from "ember-data/relationships";
import { name } from "utils/decorators";


@name( "kraken/communities" )
export default class TwitchCommunity extends Model {
	/** @type {PromiseObject<TwitchChannel>} */
	@belongsTo( "twitch-channel", { async: true } )
	owner;
	@attr( "string" )
	name;
	@attr( "string" )
	summary;
	@attr( "string" )
	description;
	@attr( "string" )
	rules;
	@attr( "string" )
	language;
	@attr( "string" )
	avatar_image_url;
	@attr( "string" )
	cover_image_url;
}
