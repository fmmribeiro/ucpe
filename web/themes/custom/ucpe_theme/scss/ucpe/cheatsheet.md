link to gotham

<link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6526092/7608412/css/fonts.css" />

Media Query

@include screen('tablet-wide') {}
"phone": 400px,
"phone-wide": 480px,
"phablet": 560px,
"tablet-small": 640px,
"tablet": 768px,
"tablet-wide": 1024px,
"desktop": 1248px,
"desktop-wide": 1440px

@include font($sans-serif-font, 1rem, $black, \$sans-serif-regular, 1.5rem);

$serif-font-family
$sans-serif-font-family

@include make-container();
@include make-container-fluid();

@include make-row();
@include make-lg-column();
@include make-md-column();
@include make-sm-column();
@include make-xs-column();

@inclinde make-sm-column-push();
@inclinde make-sm-column-pull();

// Box or specific size
@include size (16%, 300px);
@include size (width, height);

// gradient
@include gradient-horizontal(#1834cc, #1dc937, 0%, 100%);
@include gradient-horizontal($start-color, $end-color, $start-percentage, $end-percentage);
