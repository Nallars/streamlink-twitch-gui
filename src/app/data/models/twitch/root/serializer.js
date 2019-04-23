import TwitchSerializer from "data/models/twitch/serializer";


export default class TwitchRootSerializer extends TwitchSerializer {
	modelNameFromPayloadKey = () => "twitch-root";

	normalize( modelClass, resourceHash, prop ) {
		// add an ID to the record
		resourceHash[ this.primaryKey ] = 1;

		const { scopes, created_at, updated_at } = resourceHash.authorization || {};
		resourceHash.scopes = scopes;
		resourceHash.created_at = created_at;
		resourceHash.updated_at = updated_at;

		return super.normalize( modelClass, resourceHash, prop );
	}
}
