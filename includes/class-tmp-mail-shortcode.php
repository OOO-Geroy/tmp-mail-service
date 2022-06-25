<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Tmp_Mail
 * @subpackage Tmp_Mail/include
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the tmp mail, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Tmp_Mail
 * @subpackage Tmp_Mail/include
 * @author     Your Name <email@example.com>
 */
class Tmp_Mail_Shortcode
{
  private $shortcodes = ['tmp_mail'];
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

  private function load_dependencies()
  {
    $plugin_public = new Tmp_Mail_Public($this->get_tmp_mail(), $this->get_version());

    $plugin_public->enqueue_styles();
    $plugin_public->enqueue_scripts();
  }

  /**
   * 
   */
  private function init_shortcodes()
  {
    foreach ($this->shortcodes as $shortcode) {
      add_shortcode($shortcode, [$this, 'render']);
    }
  }

  /**
   * The name of the plugin used to uniquely identify it within the context of
   * WordPress and to define internationalization functionality.
   *
   * @since     1.0.0
   * @return    string    The name of the plugin.
   */
  public function get_tmp_mail()
  {
    return $this->tmp_mail;
  }

  /**
   * Retrieve the version number of the plugin.
   *
   * @since     1.0.0
   * @return    string    The version number of the plugin.
   */
  public function get_version()
  {
    return $this->version;
  }

  public function render($attrs)
  {
    $this->load_dependencies();
    ob_start();
    require_once plugin_dir_path(dirname(__FILE__)) . 'public/partials/shortcodes/tmp-mail-shortcode-display.php';
    return  ob_get_clean();
  }

  /**
   * 
   */
  public function init()
  {
    $this->init_shortcodes();
  }
}
