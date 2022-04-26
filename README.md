# @buddenbrock/ad-lightbox.js
![GitHub licenze](https://img.shields.io/github/license/Buddenbrock/ad-lightbox.js?style=for-the-badge)
![GitHub release](https://img.shields.io/github/package-json/version/Buddenbrock/ad-lightbox.js?style=for-the-badge)
![Last commit](https://img.shields.io/github/last-commit/buddenbrock/ad-lightbox.js?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/Buddenbrock/ad-lightbox.js?style=for-the-badge)

This JavaScript includes a solution for adding a lightbox with a linked images which opens automatically after page loaded.

## How to install
### Add package
#### Using npm
```sh
npm -i @buddenbrock/ad-lightbox.js --save
```

#### Using yarn
```sh
yarn add @buddenbrock/ad-lightbox.js
```

### Add the styles bundle to your head block
#### Using NPM or Yarn
```html
<link href="./src/ad-lightbox.min.css" rel="stylesheet" />
```

#### Using CDN
```html
<link href="https://unpkg.com/@buddenbrock/ad-lightbox.js@0.1.2/src/ad-lightbox.min.css" rel="stylesheet" />
```

### Add the script bundle to your footer script block
#### Using NPM or Yarn
```html
<script src="./src/ad-lightbox.min.js"></script>
```

#### Using NPM or Yarn
```html
<script src="https://unpkg.com/@buddenbrock/ad-lightbox.js@0.1.1/src/ad-lightbox.min.js"></script>
```

## How to use
### Initialise class
```javascript
let adLightbox = new AdLightbox();
```

### Add your options
Defining your options by adding settings array to class init. These options are supported. Not redefined options will be set by default values.

#### Settings

| Property             | Description                                                                                                                    | Options                      | Default              |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:---------------------|
| `image`              | ad image path                                                                                                                  | string                       |                      |
| `link`               | link for linked ad image                                                                                                       | string                       |                      |
| `linkTarget`         | defines the target window base of a reference.                                                                                 | _blank, _self, _parent, _top | _blank               |
| `closeButtonContent` | lightbox close button text                                                                                                     | string                       | Close                |
| `visibilityClass`    | class set if lightbox is shown                                                                                                 | string                       | visible              |
| `wrapperClass`       | class set for lightbox-wrapper                                                                                                 | string                       | ad-lightbox          |
| `overlayClass`       | class set for background overlay                                                                                               | string                       | ad-lightbox__overlay |
| `closeButtonClass`   | class set for lightbox close button                                                                                            | string                       | ad-lightbox__button  |
| `contentClass`       | class set for lightbox content wrapper                                                                                         | string                       | ad-lightbox__content |
| `imageClass`         | class set for lightbox ad image                                                                                                | string                       | ad-lightbox__image   |
| `dontOpenAgain`      | defines the timing behavior when the lightbox wound reopened (if it's true the lightbox would reopen after given expired days) | boolean                      | true                 |
| `localStorageKey`    | storage key in which settings will be saved                                                                                    | string                       | ad-lightbox          |
| `localStorageExpiry` | days after which the lightbox reopend again                                                                                    | int                          | 1                    |

### Example
```javascript
let adLightbox = new AdLightbox({
    image: 'https://via.placeholder.com/1400x500',
    link: 'https://www.google.com',
    linkTarget: '_blank',
    closeButtonContent: 'Close',
});
```

## Future features
- option to trigger lightbox after a special time

## Donation
This is free, open-source software. If you'd like to support the development of future projects, or say thanks for this one, you can [donate](https://www.paypal.me/buddenbrock).

## License
GPL-3.0 &copy; [@buddenbrock/ad-lightbox.js](https://github.com/Buddenbrock/ad-lightbox.js/blob/master/LICENSE)