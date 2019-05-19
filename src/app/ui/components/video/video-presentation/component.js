import Component from "@ember/component";
import layout from "./template.hbs";
import "./styles.less";


export default Component.extend({
	layout,

	tagName: "section",
	classNameBindings: [ ":video-presentation-component", "class" ],
	"class": "",

	clickablePreview: true
});
