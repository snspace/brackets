/*
 * Copyright (c) 2013 - present Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * The FileSystemStats represents a particular FileSystemEntry's stats.
 */
define(function (require, exports, module) {
    "use strict";

    /**
     * @constructor
     * @param {{isFile: boolean, mtime: Date, size: Number, realPath: ?string, hash: object, cid: string}} options
     */
    function FileSystemStats(options) {
        var isFile = options.isFile;

        this._isFile = isFile;
        this._isDirectory = !isFile;
        // in case of stats transferred over a node-domain,
        // mtime will have JSON-ified value which needs to be restored
        this._mtime = options.mtime instanceof Date ? options.mtime : new Date(options.mtime);
        this._size = options.size;
        // hash is a property introduced by brackets and it's calculated
        // as a valueOf modification time -> calculate here if it's not present
        this._hash = options.hash || this._mtime.valueOf();

        // III
        this._cid = options.cid;

        var realPath = options.realPath;
        if (realPath) {
            if (!isFile && realPath[realPath.length - 1] !== "/") {
                realPath += "/";
            }

            this._realPath = realPath;
        }
    }

    // Add "isFile", "isDirectory", "mtime", "size" and "cid" getters
    Object.defineProperties(FileSystemStats.prototype, {
        "isFile": {
            get: function () { return this._isFile; },
            set: function () { throw new Error("Cannot set isFile"); }
        },
        "isDirectory": {
            get: function () { return this._isDirectory; },
            set: function () { throw new Error("Cannot set isDirectory"); }
        },
        "mtime": {
            get: function () { return this._mtime; },
            set: function () { throw new Error("Cannot set mtime"); }
        },
        "size": {
            get: function () { return this._size; },
            set: function () { throw new Error("Cannot set size"); }
        },
        "realPath": {
            get: function () { return this._realPath; },
            set: function () { throw new Error("Cannot set realPath"); }
        },
        "cid": {
            get: function () { return this._cid; },
            set: function () { throw new Error("Cannot set realPath"); }
        }
    });

    /**
     * Whether or not this is a stats object for a file
     * @type {boolean}
     */
    FileSystemStats.prototype._isFile = false;

    /**
     * Whether or not this is a stats object for a directory
     * @type {boolean}
     */
    FileSystemStats.prototype._isDirectory = false;

    /**
     * Modification time for a file
     * @type {Date}
     */
    FileSystemStats.prototype._mtime = null;

    /**
     * Size in bytes of a file
     * @type {Number}
     */
    FileSystemStats.prototype._size = null;

    /**
     * Consistency hash for a file
     * @type {object}
     */
    FileSystemStats.prototype._hash = null;

    /**
     * The canonical path of this file or directory ONLY if it is a symbolic link,
     * and null otherwise.
     *
     * @type {?string}
     */
    FileSystemStats.prototype._realPath = null;

    /**
     * Content-addressed cid for the entry
     * @type {object}
     */
    FileSystemStats.prototype._cid = null;

    module.exports = FileSystemStats;
});
