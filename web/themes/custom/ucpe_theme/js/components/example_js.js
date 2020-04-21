/**
 * @file
 * TS Sticky Nav custom JS.
 *
 * Nav is transparent on homepage and needs to solidify in color upon scroll.
 */

export default function (context) {
  // // Alias global jQuery object.
  const $ = jQuery;
  if (context == document) {
    console.log('Custom JS here came from web/themes/custom/ucpe_theme/js/components/example_js.js');
  }
}
