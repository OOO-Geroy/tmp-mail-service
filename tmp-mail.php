<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://example.com
 * @since             1.0.0
 * @package           Tmp_Mail
 *
 * @wordpress-plugin
 * Tmp Mail:          Temporary Mail Service
 * Plugin URI:        http://example.com/tmp-mail-uri/
 * Description:       The plugin provides an interface for creating temporary mail.
 * Version:           1.0.0
 * Author:            Your Name or Your Company
 * Author URI:        http://example.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       tmp-mail
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('TMP_MAIL_VERSION', '1.0.0');

/**
 * Plugin folder path
 */
define('TMP_MAIL_FOLDER',  plugin_dir_path(__FILE__));
define('TMP_MAIL_URL', plugin_dir_url(__FILE__));


/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-tmp-mail-activator.php
 */
function activate_tmp_mail()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-tmp-mail-activator.php';
	Tmp_Mail_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-tmp-mail-deactivator.php
 */
function deactivate_tmp_mail()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-tmp-mail-deactivator.php';
	Tmp_Mail_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_tmp_mail');
register_deactivation_hook(__FILE__, 'deactivate_tmp_mail');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-tmp-mail.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_tmp_mail()
{

	$plugin = new Tmp_Mail();
	$plugin->run();
}
run_tmp_mail();
