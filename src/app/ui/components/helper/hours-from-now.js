import { inject as service } from "@ember/service";
import { helper as FromNowHelper } from "./-from-now";


const second = 1000;
const minute = 60 * second;
const hour   = 60 * minute;
const day    = 24 * hour;


export const helper = class HoursFromNowHelper extends FromNowHelper {
	/** @type {I18nService} */
	@service i18n;

	_compute( params ) {
		const diff = Date.now() - params[0];

		if ( diff < minute / 2 ) {
			return this.i18n.t( "helpers.hours-from-now.now" ).toString();

		} else if ( diff < hour ) {
			const minutes = diff < minute
				? 1
				: Math.floor( diff / minute );

			return this.i18n.t( "helpers.hours-from-now.minutes", {
				minutes: minutes < 10
					? `0${minutes}`
					: minutes.toFixed( 0 )
			}).toString();

		} else if ( diff < day ) {
			const remaining = diff % hour;

			if ( remaining > minute ) {
				return this.i18n.t( "helpers.hours-from-now.hours.extended", {
					hours: Math.floor( diff / hour ).toFixed( 0 ),
					minutes: Math.floor( remaining / minute ).toFixed( 0 )
				}).toString();

			} else {
				return this.i18n.t( "helpers.hours-from-now.hours.simple", {
					hours: Math.floor( diff / hour ).toFixed( 0 )
				}).toString();
			}

		} else {
			const remaining = diff % day;

			if ( remaining > hour ) {
				return this.i18n.t( "helpers.hours-from-now.days.extended", {
					days: Math.floor( diff / day ).toFixed( 0 ),
					hours: Math.floor( remaining / hour ).toFixed( 0 )
				}).toString();

			} else {
				return this.i18n.t( "helpers.hours-from-now.days.simple", {
					days: Math.floor( diff / day ).toFixed( 0 )
				}).toString();
			}
		}
	}
};
