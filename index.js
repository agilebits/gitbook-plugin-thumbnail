module.exports = {
    // Extend website resources and html
    website: {
        html: {
            "head:start": function () {
                var path = this.book.options.pluginsConfig.thumbnail || "cover_small.png";
                var icons = "<link rel='shortcut icon' type='image/x-icon' href='https://static.1password.com/favicon.ico'><link rel='apple-touch-icon-precomposed' href='/images/apple-touch-icon.png'><link rel='apple-touch-icon-precomposed' sizes='152x152' href='/images/apple-touch-icon.png'>";
                return "<meta name='thumbnail' content='"+path+"'>"+icons;
            },
            "head:end": "<link rel='shortcut icon' type='image/x-icon' href='https://static.1password.com/favicon.ico'><link rel='apple-touch-icon-precomposed' href='/images/apple-touch-icon.png'><link rel='apple-touch-icon-precomposed' sizes='152x152' href='/images/apple-touch-icon.png'>",
            "body:end": "<script src='/js/ug-history.js'></script>"
        }
    }
};