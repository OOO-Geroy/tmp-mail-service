<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Tmp_Mail
 * @subpackage Tmp_Mail/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the tmp mail, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Tmp_Mail
 * @subpackage Tmp_Mail/admin
 * @author     Your Name <email@example.com>
 */
class Tmp_Mail_Admin
{

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $tmp_mail    The ID of this plugin.
	 */
	private $tmp_mail;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $tmp_mail       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($tmp_mail, $version)
	{

		$this->tmp_mail = $tmp_mail;
		$this->version = $version;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Tmp_Mail_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Tmp_Mail_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style($this->tmp_mail, plugin_dir_url(__FILE__) . 'css/tmp-mail-admin.css', array(), $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Tmp_Mail_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Tmp_Mail_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script($this->tmp_mail, plugin_dir_url(__FILE__) . 'js/tmp-mail-admin.js', array('jquery'), $this->version, false);
	}


	function add_menu_pages()
	{
		add_menu_page('Temp Mail Service', 'Temp Mail Service', 'manage_options', 'temp-mail', [$this, 'add_info_page'], '', 4);
		add_submenu_page('temp-mail', 'API Settings', 'Settings', 'manage_options', 'temp-mail-settings', [$this, 'tms_option_page']);
	}

	function tms_option_page()
	{

?>
		<form action='options.php' method='post'>

			<h1>Temp Mail Service</h1>

			<?php
			settings_fields('tms_plugin');
			do_settings_sections('tms_plugin');
			submit_button();
			?>

		</form>
	<?php

	}

	function settings_init()
	{

		register_setting('tms_plugin', 'tms_settings');

		add_settings_section(
			'tms_plugin_section',
			__('Settings', 'tmp-mail-service'),
			[$this, 'tms_settings_section_callback'],
			'tms_plugin'
		);

		add_settings_field(
			'tms_api_domain_field',
			__('API Domain', 'tmp-mail-service'),
			[$this, 'tms_api_domain_field_render'],
			'tms_plugin',
			'tms_plugin_section'
		);
	}

	function tms_api_domain_field_render()
	{

		$options = get_option('tms_settings');
	?>
		<input type='text' name='tms_settings[tms_api_domain_field]' placeholder="example.com" value='<?= isset($options['tms_api_domain_field'])? $options['tms_api_domain_field'] : ''; ?>'>
	<?php

	}
	function tms_settings_section_callback()
	{

		echo __('', 'tmp-mail-service');
	}


	function add_info_page()
	{
	?>
		<div class="wrap">
			<h2><?php echo get_admin_page_title() ?></h2>
			<h3><?= __('Shortcodes', 'tmp-mail-service') ?>:</h3>
			<p><strong>[tmp_mail]</strong> - <?= __('Add this shortcode to any page to show temporary mail interface.', 'tmp-mail-service') ?></p>
		</div>
<?php

	}
}
