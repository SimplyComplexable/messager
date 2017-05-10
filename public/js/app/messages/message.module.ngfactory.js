/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from './message.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from './message.service';
import * as import5 from '@angular/http';
import * as import6 from '../error/error.service';
var MessageModuleInjector = (function (_super) {
    __extends(MessageModuleInjector, _super);
    function MessageModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(MessageModuleInjector.prototype, "_NgLocalization_4", {
        get: function () {
            if ((this.__NgLocalization_4 == null)) {
                (this.__NgLocalization_4 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
            }
            return this.__NgLocalization_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageModuleInjector.prototype, "_\u0275i_5", {
        get: function () {
            if ((this.__ɵi_5 == null)) {
                (this.__ɵi_5 = new import3.ɵi());
            }
            return this.__ɵi_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageModuleInjector.prototype, "_MessageService_6", {
        get: function () {
            if ((this.__MessageService_6 == null)) {
                (this.__MessageService_6 = new import4.MessageService(this.parent.get(import5.Http), this.parent.get(import6.ErrorService)));
            }
            return this.__MessageService_6;
        },
        enumerable: true,
        configurable: true
    });
    MessageModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ɵba_1 = new import3.ɵba();
        this._FormsModule_2 = new import3.FormsModule();
        this._MessageModule_3 = new import1.MessageModule();
        return this._MessageModule_3;
    };
    MessageModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ɵba)) {
            return this._ɵba_1;
        }
        if ((token === import3.FormsModule)) {
            return this._FormsModule_2;
        }
        if ((token === import1.MessageModule)) {
            return this._MessageModule_3;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_4;
        }
        if ((token === import3.ɵi)) {
            return this._ɵi_5;
        }
        if ((token === import4.MessageService)) {
            return this._MessageService_6;
        }
        return notFoundResult;
    };
    MessageModuleInjector.prototype.destroyInternal = function () {
        (this.__MessageService_6 && this._MessageService_6.ngOnDestroy());
    };
    return MessageModuleInjector;
}(import0.ɵNgModuleInjector));
export var MessageModuleNgFactory = new import0.NgModuleFactory(MessageModuleInjector, import1.MessageModule);
