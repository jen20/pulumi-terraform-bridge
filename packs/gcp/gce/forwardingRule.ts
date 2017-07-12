// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ForwardingRule extends lumi.NamedResource implements ForwardingRuleArgs {
    public readonly backendService?: string;
    public readonly description?: string;
    public readonly ipAddress?: string;
    public readonly ipProtocol?: string;
    public readonly loadBalancingScheme?: string;
    public readonly _name: string;
    public readonly network?: string;
    public readonly portRange?: string;
    public readonly ports?: string[];
    public readonly project?: string;
    public readonly region?: string;
    public readonly selfLink?: string;
    public readonly subnetwork?: string;
    public readonly target?: string;

    constructor(name: string, args: ForwardingRuleArgs) {
        super(name);
        this.backendService = args.backendService;
        this.description = args.description;
        this.ipAddress = args.ipAddress;
        this.ipProtocol = args.ipProtocol;
        this.loadBalancingScheme = args.loadBalancingScheme;
        this._name = args._name;
        this.network = args.network;
        this.portRange = args.portRange;
        this.ports = args.ports;
        this.project = args.project;
        this.region = args.region;
        this.selfLink = args.selfLink;
        this.subnetwork = args.subnetwork;
        this.target = args.target;
    }
}

export interface ForwardingRuleArgs {
    readonly backendService?: string;
    readonly description?: string;
    readonly ipAddress?: string;
    readonly ipProtocol?: string;
    readonly loadBalancingScheme?: string;
    readonly _name: string;
    readonly network?: string;
    readonly portRange?: string;
    readonly ports?: string[];
    readonly project?: string;
    readonly region?: string;
    readonly selfLink?: string;
    readonly subnetwork?: string;
    readonly target?: string;
}
