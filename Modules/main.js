"use strict";
// simply, modules are a different files.
// point.ts is a different file which is not accessible here in the main file or anywhere outside that file
// so we can say that it(point.ts) is not a module yet.
// inorder to use the file point.ts anywhere in the project, we need to export that file
// after export, we can call that file(point.ts) a module.
Object.defineProperty(exports, "__esModule", { value: true });
// to import a single module syntax: import { module } from 'file_path';
// to import multiple modules syntax: import { module1, module2, .... } from 'file_path';
var point_1 = require("./point");
var point = new point_1.Point(3, 5);
point.draw();
