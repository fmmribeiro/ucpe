/**
 * @file
 * Main theme behaviors.
 */

// You can import a default behavior to distinguish blocks of code from each
// other.
import exampleJS from "./components/example_js.js";

(($, Drupal) => {
  /**
   * This calls the tsCardLink behavior into the main.js global file.
   */
  Drupal.behaviors.exampleJS = {
    attach: exampleJS
  };

})(jQuery, Drupal);
