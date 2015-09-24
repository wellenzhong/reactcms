// article detail component
var EmbedIframe = React.createClass({
    name: 'embediframe',
    mixins: [getCommonMixin],
    
    // attribute definitions
    getAttributes: function() {
        var attributes = [
            { name:'boxClass', type:'string', required:false, defaultValue:'', note:'container CSS class' },
            { name:'iconClass', type:'string', required:false, defaultValue:'', note:'icon CSS class' },
            { name:'id', type:'string', required:false, defaultValue:'', note:'list element id' },
            { name:'name', type:'string', required:false, defaultValue:'', note:'item name' },
            { name:'type', type:'string', required:false, defaultValue:'', note:'item type' },
            { name:'title', type:'string', required:false, defaultValue:'', note:'item title' },
            { name:'link', type:'string', required:false, defaultValue:'', note:'item web link' },
            { name:'style', type:'object', required:false, defaultValue:{ width:"100%" }, note:'style for iframe' }
        ];
        return attributes;
    },
    
    render: function() {
        var content = '';
        if (this.state.image) {
            var imageContent = '';
            var imageUrl = '/file/' + this.state.image.filename;
            if (this.state.image_link) {
                imageContent =
                    <a href={ this.state.image_link } >
                        <img src={ imageUrl} style={ this.state.image_style } />
                    </a>;
            } else {
                imageContent =
                    <img src={ imageUrl} style={ this.state.image_style } />;
            }
            content = 
                <div className="container articledetail-content">
                    <div className="articledetail-image-content col-md-4">
                        { imageContent }
                    </div>
                    <div className="articledetail-text-content col-md-8"
                        dangerouslySetInnerHTML={{__html: this.state.content}}
                    />
                </div>
        } else {
            content = 
                <div className="container articledetail-content"
                    dangerouslySetInnerHTML={{__html: this.state.content}}
                />
        }
        
        return (
            <div className={ this.state.containerClassNames.join(' ') } data-id={ this.state.id } >
                { content }
            </div>
        );
    }
});

