this.PKT_EXT=this.PKT_EXT||{},this.PKT_EXT.TEMPLATES=this.PKT_EXT.TEMPLATES||{},this.PKT_EXT.TEMPLATES.error=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){var s,i=null!=a?a:{},r=t.helperMissing,o="function",_=e.escapeExpression;return'<div class="pkt_ext_component_error">\n    <div class="pkt_ext_error_details pkt_ext_platter">\n        <div class="pkt_ext_error_panel">\n            <div class="pkt_ext_toolbar_main">\n                <div class="pkt_ext_error_header">\n                    <div class="pkt_ext_logo_error">\n                        <svg class="pkt_ext_icon" viewBox="0 0 22 22"><path d="M10.89,1A10,10,0,1,0,21,10.89,10,10,0,0,0,10.89,1h0ZM12,17.39a1.34,1.34,0,0,1-.92.36,1.38,1.38,0,0,1-.94-0.34,1.22,1.22,0,0,1-.41-1,1.31,1.31,0,0,1,2.22-.92A1.39,1.39,0,0,1,12,17.39Zm0.23-9.75L11.9,12a3.39,3.39,0,0,1-.25,1.19,0.69,0.69,0,0,1-.66.42,0.66,0.66,0,0,1-.66-0.39A4,4,0,0,1,10,12L9.72,7.78Q9.63,6.55,9.62,6A1.6,1.6,0,0,1,10,4.87a1.31,1.31,0,0,1,1-.42A1,1,0,0,1,12,5a3.53,3.53,0,0,1,.27,1.5Q12.28,7.07,12.23,7.64Z"/></svg>\n                    </div>\n                    <div class="pkt_ext_error_action_copy">'+_((s=null!=(s=t.title||(null!=a?a.title:a))?s:r,typeof s===o?s.call(i,{name:"title",hash:{},data:l}):s))+'</div>\n                </div>\n                <div class="pkt_ext_error_detail">\n                '+_((s=null!=(s=t.message||(null!=a?a.message:a))?s:r,typeof s===o?s.call(i,{name:"message",hash:{},data:l}):s))+"\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n"},useData:!0}),Handlebars.registerPartial("recommendItem",Handlebars.template({1:function(e,a,t,n,l){return"pkt_ext_has_image"},3:function(e,a,t,n,l){var s,i=e.lambda,r=e.escapeExpression;return'    <div class="pkt_ext_rec_image" style="background-image:url(\''+r(i(null!=(s=null!=a?a.image:a)?s.src:s,a))+'\'); background-size:cover; background-position:center center;" data-imgsrc="'+r(i(null!=(s=null!=a?a.image:a)?s.src:s,a))+'"></div>\n'},compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){var s,i=null!=a?a:{},r=e.lambda,o=e.escapeExpression;return'<li class="pkt_ext_recommendation '+(null!=(s=t["if"].call(i,null!=a?a.image:a,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?s:"")+'"\nrec_url="'+o(r(null!=a?a.resolved_url:a,a))+'"\nrec_title="'+o(r(null!=a?a.title:a,a))+'"\nrec_id="'+o(r(null!=a?a.resolved_id:a,a))+'"\nrec_source="'+o(r(null!=a?a.source_id:a,a))+'"\nrec_position="'+o(r(null!=a?a.sort_id:a,a))+'">\n'+(null!=(s=t["if"].call(i,null!=a?a.image:a,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?s:"")+'    <div class="pkt_ext_rec_title">\n        <a class="pkt_ext_rec_open" target="_blank" href="'+o(r(null!=a?a.resolved_url:a,a))+'">'+o(r(null!=a?a.title:a,a))+'</a>\n        <div class="pkt_ext_rec_source">'+o(r(null!=a?a.domain:a,a))+'</div>\n    </div>\n    <div class="pkt_ext_rec_details">\n        <a href="#" class="pkt_ext_rec_save"><svg class="pkt_ext_icon pkt_ext_icon_save" viewBox="0 0 22 22"><path d="M21.79,2.55a2,2,0,0,0-1.86-1.3H2.08a2,2,0,0,0-2,2V9.82l0.08,1.31a10.66,10.66,0,0,0,4.25,7.4l0.13,0.1,0,0a10.79,10.79,0,0,0,4.26,1.89,10.92,10.92,0,0,0,4.18,0l0.24,0,0.07,0a10.79,10.79,0,0,0,4.09-1.85l0,0,0.13-.1a10.66,10.66,0,0,0,4.25-7.4L21.9,9.82V3.23A2,2,0,0,0,21.79,2.55ZM17.18,9.42L12,14.34a1.49,1.49,0,0,1-2.07,0L4.85,9.42A1.5,1.5,0,0,1,6.92,7.26L11,11.19l4.09-3.93A1.5,1.5,0,0,1,17.18,9.42Z"/></svg><span class="pkt_ext_save_copy">Save</span> </a>\n    </div>\n</li>\n'},useData:!0})),this.PKT_EXT.TEMPLATES.save=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){var s;return'<div class="pkt_ext_component_save">\n\n    <div class="pkt_ext_save_details pkt_ext_platter">\n        <div class="pkt_ext_save_toolbar">\n'+(null!=(s=e.invokePartial(n.toolbar,a,{name:"toolbar",data:l,indent:"            ",helpers:t,partials:n,decorators:e.decorators}))?s:"")+(null!=(s=e.invokePartial(n.tagging,a,{name:"tagging",data:l,indent:"            ",helpers:t,partials:n,decorators:e.decorators}))?s:"")+'        </div>\n    </div>\n\n    <div id="pkt_ext_save_recs"></div>\n</div>\n'},usePartial:!0,useData:!0}),Handlebars.registerPartial("tagging",Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){return'<div class="pkt_ext_tag_detail">\n    <div id="pkt_ext_tag_input_wrapper" class="pkt_ext_tag_input_wrapper"></div>\n    <div id="pkt_ext_no_suggestions"></div>\n    <ul id="pkt_ext_suggested_tags" class="suggested_tags"></ul>\n</div>\n'},useData:!0})),this.PKT_EXT.TEMPLATES.recommend=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){var s;return'<div class="pkt_ext_recommendations pkt_ext_platter" id="pkt_ext_recommendations">\n    <div class="pkt_ext_loading" id="recommendations-trigger">\n        <div class="pkt_ext_loader">\n            <div class="loader-inner ball-clip-rotate-pulse">\n                <div></div>\n                <div></div>\n            </div>\n        </div>\n        '+e.escapeExpression((s=null!=(s=t.loading||(null!=a?a.loading:a))?s:t.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"loading",hash:{},data:l}):s))+'\n    </div>\n    <div id="pkt_ext_recommendations_list" id="pkt_ext_recommendations_list"></div>\n</div>\n'},useData:!0}),Handlebars.registerPartial("toolbar",Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){var s=e.lambda,i=e.escapeExpression;return'<div class="pkt_ext_toolbar_main">\n    <div class="pkt_ext_logo">\n        <svg class="pkt_ext_icon" viewBox="0 0 22 22"><path d="M21.79,2.55a2,2,0,0,0-1.86-1.3H2.08a2,2,0,0,0-2,2V9.82l0.08,1.31a10.66,10.66,0,0,0,4.25,7.4l0.13,0.1,0,0a10.79,10.79,0,0,0,4.26,1.89,10.92,10.92,0,0,0,4.18,0l0.24,0,0.07,0a10.79,10.79,0,0,0,4.09-1.85l0,0,0.13-.1a10.66,10.66,0,0,0,4.25-7.4L21.9,9.82V3.23A2,2,0,0,0,21.79,2.55ZM17.18,9.42L12,14.34a1.49,1.49,0,0,1-2.07,0L4.85,9.42A1.5,1.5,0,0,1,6.92,7.26L11,11.19l4.09-3.93A1.5,1.5,0,0,1,17.18,9.42Z"/></svg>\n    </div>\n    <div class="pkt_ext_logo_action_copy">'+i(s(null!=a?a.actionCopy:a,a))+'</div>\n    <div class="pkt_ext_actions">\n        <a href="#" alt="Archive Page" class="pkt_ext_action_overflow simple-tooltip">\n            <svg class="pkt_ext_icon" viewBox="0 0 100 100">\n                <path d="M15 40c5.46 0 10 4.54 10 10s-4.54 10-10 10S5 55.46 5 50s4.54-10 10-10zm60 10c0 5.46 4.54 10 10 10s10-4.54 10-10-4.54-10-10-10-10 4.54-10 10zm-35 0c0 5.46 4.54 10 10 10s10-4.54 10-10-4.54-10-10-10-10 4.54-10 10z"/>\n            </svg>\n        </a>\n        <ul class="pkt_ext_overflow">\n            <li class="pkt_ext_overflow_item">\n                <a href="#" alt="Archive Page" class="pkt_ext_action_archive simple-tooltip">\n                    <svg class="pkt_ext_icon" viewBox="0 0 16 16"><polygon points="1 9 3 7 6 10 14.02 2.02 16 4 6 14.02 1 9"/></svg>\n                    '+i(s(null!=a?a.archive_page:a,a))+'\n                </a>\n            </li>\n            <li class="pkt_ext_overflow_item divider">\n                <a href="#" alt="Remove Page" class="pkt_ext_action_removeitem simple-tooltip">\n                    <svg class="pkt_ext_icon" viewBox="0 0 16 16">\n                        <path d="M12,3V1H4V3H1V5H15V3ZM5,2h6V3H5V2Z"/>\n                        <polygon points="3.01 16 13.03 16 13.03 6 3.03 6 3.01 16"/>\n                    </svg>\n                    '+i(s(null!=a?a.remove_page:a,a))+'\n                </a>\n            </li>\n            <li class="pkt_ext_overflow_item">\n                <a alt="Open Pocket" href="http://getpocket.com/a'+i(s(null!=a?a.openPocket:a,a))+'" target="_blank" class="pkt_ext_action_home simple-tooltip">\n                    <svg class="pkt_ext_icon" viewBox="0 0 16 16">\n                        <path d="M14.05,13.95v-4a1,1,0,0,0-2,0V13h-9V5H6A1,1,0,0,0,6,3h-4a1,1,0,0,0-1,1V14a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1s0,0,0,0h0Z"/>\n                        <path d="M15.06,1h-5a1,1,0,1,0,0,2h1.58L6.17,8.28A1,1,0,1,0,7.56,9.72l5.5-5.31V6a1,1,0,0,0,2,0V2h0V1Z"/>\n                    </svg>\n                    '+i(s(null!=a?a.open_pocket:a,a))+'\n                </a>\n            </li>\n            <li class="pkt_ext_overflow_item">\n                <a alt="Open Pocket" href="#"  class="pkt_ext_action_options simple-tooltip">\n                   <svg class="pkt_ext_icon" viewBox="0 0 16 16">\n                      <path d="M15,9V7H13.4a5.53,5.53,0,0,0-1-2.21l1.39-1.39L12.41,2,11,3.41l0,0A5.45,5.45,0,0,0,9,2.6V1H7V2.6a5.49,5.49,0,0,0-2.22.95L3.41,2.18,2,3.59,3.4,5a5.48,5.48,0,0,0-.8,2H1V9H2.61a5.53,5.53,0,0,0,.8,2L2,12.41l1.41,1.41,1.38-1.38A5.46,5.46,0,0,0,7,13.4V15H9V13.39a5.53,5.53,0,0,0,2-.81L12.41,14l1.41-1.41L12.44,11.2a5.46,5.46,0,0,0,1-2.2H15ZM8,10.29A2.29,2.29,0,1,1,10.29,8,2.29,2.29,0,0,1,8,10.29Z"/>\n                    </svg>\n                    '+i(s(null!=a?a.settings:a,a))+"\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"},useData:!0})),this.PKT_EXT.TEMPLATES.recommendList=Handlebars.template({1:function(e,a,t,n,l){var s;return null!=(s=e.invokePartial(n.recommendItem,a,{name:"recommendItem",data:l,indent:"        ",helpers:t,partials:n,decorators:e.decorators}))?s:""},compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){var s,i,r=null!=a?a:{},o=t.helperMissing,_="function",c=e.escapeExpression;return'<div class="pkt_ext_recs_header">'+c((i=null!=(i=t.more||(null!=a?a.more:a))?i:o,typeof i===_?i.call(r,{name:"more",hash:{},data:l}):i))+c((i=null!=(i=t.reason||(null!=a?a.reason:a))?i:o,typeof i===_?i.call(r,{name:"reason",hash:{},data:l}):i))+':</div>\n<ul class="pkt_ext_recommendations_list">\n'+(null!=(s=t.each.call(r,null!=a?a.list:a,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?s:"")+'</ul>\n<div class="pkt_ext_timer_container"></div>\n'},usePartial:!0,useData:!0}),this.PKT_EXT.TEMPLATES.recommendNoResults=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){var s,i=null!=a?a:{},r=t.helperMissing,o="function",_=e.escapeExpression;return'<div class="pkt_ext_recs_header pkt_ext_recs_no_result">\n'+_((s=null!=(s=t.noresponse||(null!=a?a.noresponse:a))?s:r,typeof s===o?s.call(i,{name:"noresponse",hash:{},data:l}):s))+'\n<a class="pkt_ext_rec_cta" href="https://getpocket.com/a/recommended/?src=ext_recs" target="_blank">'+_((s=null!=(s=t.explore_recs||(null!=a?a.explore_recs:a))?s:r,typeof s===o?s.call(i,{name:"explore_recs",hash:{},data:l}):s))+" &rsaquo;</a>\n</div>\n"},useData:!0}),this.PKT_EXT.TEMPLATES.timer=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(e,a,t,n,l){var s;return'<div class="pkt_ext_component_timer">\n    <div class="pkt_ext_timer_progress" style="animation-duration: '+e.escapeExpression((s=null!=(s=t.duration||(null!=a?a.duration:a))?s:t.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"duration",hash:{},data:l}):s))+'ms"></div>\n</div>\n'},useData:!0});