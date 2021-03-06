/** @format */

/**
 * Internal dependencies
 */
import { getThemeCustomizeUrl, isThemeActive } from 'state/themes/selectors';
import isSiteUsingFullSiteEditing from 'state/selectors/is-site-using-full-site-editing';
import getFrontPageEditorUrl from 'state/selectors/get-front-page-editor-url';

/**
 * Returns the URL for opening customizing the given site in either the block editor with
 * Full Site Editing, or the Customizer for unsupported sites. Can be used wherever
 * @see getThemeCustomizeUrl is used as a drop-in replacement.
 *
 * Ensure that your view makes use of the `QueryBlogStickers` component to function properly.
 *
 * @param  {Object}   state   Global state tree
 * @param  {String}   themeId Theme ID
 * @param  {Number}   siteId  Site ID to open the customizer or block editor for
 * @return {String}           Customizer or Block Editor URL
 */
export default function getCustomizeOrEditFrontPageUrl( state, themeId, siteId ) {
	if (
		! isSiteUsingFullSiteEditing( state, siteId ) ||
		! isThemeActive( state, themeId, siteId )
	) {
		return getThemeCustomizeUrl( state, themeId, siteId );
	}
	return getFrontPageEditorUrl( state, siteId );
}
