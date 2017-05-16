/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './thread-list.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from './thread.component.ngfactory';
import * as import3 from './thread.component';
import * as import4 from '@angular/common';
import * as import5 from './thread-list.component';
import * as import6 from './message.service';
var styles_ThreadListComponent = [import0.styles];
export var RenderType_ThreadListComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_ThreadListComponent,
    data: {}
});
function View_ThreadListComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-thread', [], null, null, null, import2.View_ThreadComponent_0, import2.RenderType_ThreadComponent)),
        import1.ɵdid(24576, null, 0, import3.ThreadComponent, [], { thread: [
                0,
                'thread'
            ]
        }, null)
    ], function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    }, null);
}
export function View_ThreadListComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 10, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 7, 'ul', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'app-thread', [], null, null, null, import2.View_ThreadComponent_0, import2.RenderType_ThreadComponent)),
        import1.ɵdid(24576, null, 0, import3.ThreadComponent, [], { thread: [
                0,
                'thread'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_ThreadListComponent_1)),
        import1.ɵdid(401408, null, 0, import4.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = 'public';
        ck(v, 5, 0, currVal_0);
        var currVal_1 = co.threads;
        ck(v, 8, 0, currVal_1);
    }, null);
}
function View_ThreadListComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-thread-list', [], null, null, null, View_ThreadListComponent_0, RenderType_ThreadListComponent)),
        import1.ɵdid(57344, null, 0, import5.ThreadListComponent, [import6.MessageService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var ThreadListComponentNgFactory = import1.ɵccf('app-thread-list', import5.ThreadListComponent, View_ThreadListComponent_Host_0, {}, {}, []);
