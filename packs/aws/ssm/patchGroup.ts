// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class PatchGroup extends lumi.NamedResource implements PatchGroupArgs {
    public readonly baselineId: string;
    public readonly patchGroup: string;

    constructor(name: string, args: PatchGroupArgs) {
        super(name);
        this.baselineId = args.baselineId;
        this.patchGroup = args.patchGroup;
    }
}

export interface PatchGroupArgs {
    readonly baselineId: string;
    readonly patchGroup: string;
}
