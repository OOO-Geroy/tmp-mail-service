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
class Tmp_Mail_Admin {

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
	public function __construct( $tmp_mail, $version ) {

		$this->tmp_mail = $tmp_mail;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

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

		wp_enqueue_style( $this->tmp_mail, plugin_dir_url( __FILE__ ) . 'css/tmp-mail-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

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

		wp_enqueue_script( $this->tmp_mail, plugin_dir_url( __FILE__ ) . 'js/tmp-mail-admin.js', array( 'jquery' ), $this->version, false );

	}

}
