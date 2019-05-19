import TwitchSerializer from "data/models/twitch/serializer";


export default TwitchSerializer.extend({
	modelNameFromPayloadKey() {
		return "twitchVideos";
	},

	attrs: {
		channel: { deserialize: "records" },
		preview: { deserialize: "records" }
	},

	normalize( modelClass, resourceHash, prop ) {
		//const foreignKeyChannel = this.store.serializerFor( "twitchChannel" ).primaryKey;
		const foreignKeyImage = this.store.serializerFor( "twitchImage" ).primaryKey;

		//The Id is the Twitch videos' ID.
		const id = resourceHash._id;
		resourceHash[ this.primaryKey ] = id;

		// apply the id of this record on the embedded TwitchImage record (preview)
		if ( resourceHash.preview ) {
			resourceHash.preview[ foreignKeyImage ] = `stream/preview/${id}`;
		}

		return this._super( modelClass, resourceHash, prop );
	}
});
