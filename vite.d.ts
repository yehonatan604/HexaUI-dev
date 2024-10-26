// vite.d.ts
declare module "vite" {
    import { FSWatcher as NodeFSWatcher } from "fs";
    export class FSWatcher extends NodeFSWatcher { }
}