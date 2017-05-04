/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from './message-input.component.ngfactory';
import * as import2 from './message-input.component';
import * as import3 from './message.service';
import * as import4 from './message-list.component.ngfactory';
import * as import5 from './message-list.component';
import * as import6 from './messages.component';
var styles_MessagesComponent = [];
export var RenderType_MessagesComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_MessagesComponent,
    data: {}
});
export function View_MessagesComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 15, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'app-message-input', [], null, null, null, import1.View_MessageInputComponent_0, import1.RenderType_MessageInputComponent)),
        import0.ɵdid(57344, null, 0, import2.MessageInputComponent, [import3.MessageService], null, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'app-message-list', [], null, null, null, import4.View_MessageListComponent_0, import4.RenderType_MessageListComponent)),
        import0.ɵdid(57344, null, 0, import5.MessageListComponent, [import3.MessageService], null, null),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n    ']))
    ], function (ck, v) {
        ck(v, 6, 0);
        ck(v, 14, 0);
    }, null);
}
function View_MessagesComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-messages', [], null, null, null, View_MessagesComponent_0, RenderType_MessagesComponent)),
        import0.ɵdid(24576, null, 0, import6.MessagesComponent, [], null, null)
    ], null, null);
}
export var MessagesComponentNgFactory = import0.ɵccf('app-messages', import6.MessagesComponent, View_MessagesComponent_Host_0, {}, {}, []);
