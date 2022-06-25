<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Tmp_Mail
 * @subpackage Tmp_Mail/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the tmp mail, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Tmp_Mail
 * @subpackage Tmp_Mail/public
 * @author     Your Name <email@example.com>
 */
class Tmp_Mail_Public
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
	 * @param      string    $tmp_mail       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($tmp_mail, $version)
	{

		$this->tmp_mail = $tmp_mail;
		$this->version = $version;
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function register_styles()
	{
		$ind = 0;
		foreach (glob(TMP_MAIL_FOLDER . '/build/static/css/*.css') as $file) {
			$ind++;
			$filename = substr($file, strrpos($file, '/') + 1);
			wp_register_style($this->tmp_mail . '_' . $ind,  TMP_MAIL_URL . 'build/static/css/' . $filename, [],  $this->version, true);
		}
	}

		/**
	 * Enqueue the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{
		$ind = 0;
		foreach (glob(TMP_MAIL_FOLDER . '/build/static/css/*.css') as $file) {
			$ind++;
			wp_enqueue_style($this->tmp_mail . '_' . $ind);
		}
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function register_scripts()
	{
		$ind = 0;
		foreach (glob(TMP_MAIL_FOLDER . '/build/static/js/*.js') as $file) {
			$ind++;
			$filename = substr($file, strrpos($file, '/') + 1);
			wp_register_script($this->tmp_mail . '_' . $ind,  TMP_MAIL_URL . 'build/static/js/' . $filename, [],  $this->version, true);
		}
	}

	/**
	 * Enqueue the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{
		$ind = 0;
		foreach (glob(TMP_MAIL_FOLDER . '/build/static/js/*.js') as $file) {
			$ind++;
			wp_enqueue_script($this->tmp_mail . '_' . $ind);
		}
	}
}
