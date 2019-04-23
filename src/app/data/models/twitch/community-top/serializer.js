import TwitchSerializer from "data/models/twitch/serializer";


export default class TwitchCommunityTopSerializer extends TwitchSerializer {
	// the API documentation is wrong
	//primaryKey = "id";

	modelNameFromPayloadKey = () => "twitch-community-top";
}
