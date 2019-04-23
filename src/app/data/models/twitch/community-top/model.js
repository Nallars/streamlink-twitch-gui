import attr from "ember-data/attr";
import Model from "ember-data/model";
import { name } from "utils/decorators";


@name( "kraken/communities/top" )
export default class TwitchCommunityTop extends Model {
	@attr( "string" )
	avatar_image_url;
	@attr( "number" )
	channels;
	@attr( "string" )
	name;
	@attr( "number" )
	viewers;
}
