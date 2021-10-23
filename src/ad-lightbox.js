class AdLightbox {
    constructor(options = {}) {
        this.options = {
            image: options.image || null,
            link: options.link || null,
            linkTarget: options.linkTarget || '_blank',
            closeButtonContent: options.closeButtonContent || 'Close',

            visibilityClass: options.visibilityClass || 'visible',
            wrapperClass: options.wrapperClass || 'ad-lightbox',
            overlayClass: options.overlayClass || 'ad-lightbox__overlay',
            closeButtonClass: options.closeButtonClass || 'ad-lightbox__button',
            contentClass: options.contentClass || 'ad-lightbox__content',
            imageClass: options.imageClass || 'ad-lightbox__image',
        }

        if(!document.querySelector('.' + this.options.wrapperClass)) {
            if(this.options.image !== null) {
                this.buildLightbox();
            } else {
                console.log('No image defined');
            }
        }

        this.lightbox = {
            closeButton: document.querySelector('.' + this.options.closeButtonClass),
            content: document.querySelector('.' + this.options.contentClass),
            image: document.querySelector('.' + this.options.imageClass),
            overlay: document.querySelector('.' + this.options.overlayClass),
            wrapper: document.querySelector('.' + this.options.wrapperClass)
        };

        this.controlAdLightbox();
    }

    /**
     * @desc toggle given class on given element
     * @param element
     * @param className
     */
    toggleClass = (element, className) => {
        element.classList.toggle(className);
    }

    /**
     * @desc add given class on given element
     * @param element
     * @param className
     */
    addClass = (element, className) => {
        element.classList.add(className)
    }

    /**
     * @desc set given attribute value on given element
     * @param element
     * @param attr
     */
    setAttribute = (element, attr, value) => {
        element.setAttribute(attr, value);
    }

    /**
     * @desc generate ad link
     * @returns {HTMLAnchorElement}
     */
    buildLink = () => {
        let link;

        if(this.options.link) {
            link = document.createElement('a');

            this.setAttribute(link, 'href', this.options.link);

            if(this.options.linkTarget !== null) {
                this.setAttribute(link, 'target', this.options.linkTarget);
            }
        } else {
            link = null;
        }

        return link;
    }

    /**
     * @desc generate ad image
     * @returns {HTMLImageElement}
     */
    buildImage = () => {
        let image = document.createElement('img');
        this.addClass(image, this.options.imageClass);
        this.setAttribute(image, 'src', this.options.image);

        return image;
    }

    /**
     * @desc generate lightboc close button
     */
    buildCloseButton = () => {
        let button = document.createElement('button');
        this.addClass(button, this.options.closeButtonClass);
        button.innerHTML = this.options.closeButtonContent;

        return button;
    }

    /**
     * @desc generate div with given class
     * @param classname
     * @returns {HTMLDivElement}
     */
    buildDiv = classname => {
        let element = document.createElement('div');
        this.addClass(element, classname);

        return element;
    }

    /**
     * @desc generate lightbox elements and add them into DOM
     */
    buildLightbox = () => {
        let wrapper = this.buildDiv(this.options.wrapperClass),
            overlay = this.buildDiv(this.options.overlayClass),
            content = this.buildDiv(this.options.contentClass),
            closeButton = this.buildCloseButton(),
            link = this.buildLink(),
            image = this.buildImage();

        if(link !== null) {
            link.appendChild(image);
            content.appendChild(link);
        } else {
            content.appendChild(image);
        }

        content.appendChild(closeButton);
        wrapper.appendChild(overlay);
        wrapper.appendChild(content);
        document.body.appendChild(wrapper);
    }

    /**
     * @desc toggle visibility of lightbox
     */
    toggleVisibility = () => {
        this.toggleClass(this.lightbox.wrapper, this.options.visibilityClass);
    }

    /**
     * @desc set position of lightbox based on image size
     */
    setImagePosition = () => {
        let windowH = window.innerHeight,
            windowW = window.innerWidth,
            imageW = this.lightbox.image.clientWidth,
            imageH = this.lightbox.image.clientHeight,
            marginHorizontal = ((windowH - imageH) / 2),
            marginVertical = ((windowW - imageW) / 2);

        this.lightbox.content.style.marginTop = marginHorizontal + 'px';
        this.lightbox.content.style.marginLeft = marginVertical + 'px';
    }

    /**
     * @desc register event listener
     * @param element
     * @param type
     * @param event
     */
    setEventListener = (element, type, event) => {
        element.addEventListener(type, event);
    }

    /**
     * @desc control lightbox
     */
    controlAdLightbox = () => {
        this.setEventListener(window, 'load', this.setImagePosition);
        this.setEventListener(window, 'load', this.toggleVisibility);
        this.setEventListener(window, 'resize', this.setImagePosition);
        this.setEventListener(this.lightbox.overlay, 'click', this.toggleVisibility);
        this.setEventListener(this.lightbox.closeButton, 'click', this.toggleVisibility);
    }
}

