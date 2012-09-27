/*
 *  Value Remember ver 1.0 - jQuery plugin 
 *  Written by Iván Homolicsan homolicsan@gmail.com.
 *  
 *   Dual licensed under the MIT
 *   and GPL licenses.
 * 
 *   Built for jQuery library
 *   http://jquery.com
 *
 */

/*
*/
 ;
 (function($){

    $.fn.valuesToggle = function(custom_options)
    {

        $this = this;

        opt_default = {
            selector : '.mem'
        };

        var opt = $.extend(opt_default, custom_options);

        var init = function ()
        {

            orign_values = new Array();
            $elements = $this.find(opt.selector); 

            var el_each = function(i,el){
                $this = $(this);

                var $el = $(el);
                orign_values[i] = $el.val();

                var el_click = function(e){
                    if( this.value ==  orign_values[i] ){
                        this.value = '';
                    }
                };
                $el.on('click', el_click);

                var el_blur = function(){
                    $this = $(this);

                    if( !$.trim( $this.val() ) ){
                        $this.val( orign_values[i] );
                    }
                };
                $el.on('blur', el_blur);

            };
            $elements.each(el_each);

        }(); // end init

    };
}(jQuery));