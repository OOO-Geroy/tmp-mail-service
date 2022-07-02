<?php

/**
 * Fired during plugin activation
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Tmp_Mail
 * @subpackage Tmp_Mail/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Tmp_Mail
 * @subpackage Tmp_Mail/includes
 * @author     Your Name <email@example.com>
 */
class Tmp_Mail_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		$options = get_option('tms_settings');
		if (!$options || !isset($options['tms_api_domain_field'])) {
			update_option('tms_settings', [
				'tms_api_domain_field' => 'api-mts.vpntester.org'
			]);
		}
	}

}
