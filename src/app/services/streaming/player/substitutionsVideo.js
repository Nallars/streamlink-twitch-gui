import Substitution from "utils/parameters/Substitution";


const base = "settings.player.args.substitutions";


/** @type {Substitution[]} */
export default [
	new Substitution(
		[ "name", "channel", "channelname" ],
		"stream.channel.display_name",
		`${base}.channel`
	),
	new Substitution(
		[ "status", "title" ],
		"stream.channel.status",
		`${base}.status`
	),
	new Substitution(
		[ "game", "gamename" ],
		"stream.video.game",
		`${base}.game`
	),
	new Substitution(
		[ "online", "since", "created" ],
		"stream.video.created_at",
		`${base}.created`
	),
	new Substitution(
		[ "viewers", "current" ],
		"stream.stream.views",
		`${base}.views`
	),
	new Substitution(
		[ "views", "overall" ],
		"stream.channel.views",
		`${base}.views`
	)
];
