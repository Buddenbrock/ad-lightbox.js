![layout][logo-advertisement-lightbox]

[logo-advertisement-lightbox]: src/logo.svg

# AdLightbox.js
![GitHub licenze](https://img.shields.io/github/license/Buddenbrock/ad-lightbox.js?style=for-the-badge)
![GitHub release](https://img.shields.io/github/package-json/version/Buddenbrock/ad-lightbox.js?style=for-the-badge)
![Last commit](https://img.shields.io/github/last-commit/buddenbrock/ad-lightbox.js?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/Buddenbrock/ad-lightbox.js?style=for-the-badge)

Javascript for adding an advertisement lightbox

## Installation
### Using npm
```sh
npm -i @buddenbrock/ad-lightbox.js --save
```

### Using yarn
```sh
yarn add @buddenbrock/ad-lightbox.js
```

## How to use
Take a look at the small example in the demo folder

### Add the script bundle to your footer script block
```html
<script src="./src/ad-lightbox.js"></script>
```

### Add options
Define your options. These given options are defaults.

```javascript
let adLightbox = new AdLightbox({
    image: 'https://via.placeholder.com/1400x500',
    link: 'https://www.google.com',
    linkTarget: '_blank',
    closeButtonContent: 'Close',
    
    visibilityClass: 'visible',
    wrapperClass: 'ad-lightbox',
    overlayClass: 'ad-lightbox__overlay',
    closeButtonClass: 'ad-lightbox__button',
    contentClass: 'ad-lightbox__content',
    imageClass: 'ad-lightbox__image'
});
```

## Donation
This is free, open-source software. If you'd like to support the development of future projects, or say thanks for this one, you can [donate](https://www.paypal.me/buddenbrock).

## License
GPL-3.0 &copy; [@buddenbrock/ad-lightbox.js](https://github.com/Buddenbrock/ad-lightbox.js/blob/master/LICENSE)