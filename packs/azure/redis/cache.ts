// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Cache extends lumi.NamedResource implements CacheArgs {
    public readonly capacity: number;
    public readonly enableNonSslPort?: boolean;
    public readonly family: string;
    public readonly hostname?: string;
    public readonly location: string;
    public readonly cacheName?: string;
    public readonly port?: number;
    public readonly primaryAccessKey?: string;
    public readonly redisConfiguration: { maxclients?: number, maxmemoryDelta?: number, maxmemoryPolicy?: string, maxmemoryReserved?: number, rdbBackupEnabled?: boolean, rdbBackupFrequency?: number, rdbBackupMaxSnapshotCount?: number, rdbStorageConnectionString?: string }[];
    public readonly resourceGroupName: string;
    public readonly secondaryAccessKey?: string;
    public readonly shardCount?: number;
    public readonly skuName: string;
    public readonly sslPort?: number;
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: CacheArgs) {
        super(name);
        if (args.capacity === undefined) {
            throw new Error("Property argument 'capacity' is required, but was missing");
        }
        this.capacity = args.capacity;
        this.enableNonSslPort = args.enableNonSslPort;
        if (args.family === undefined) {
            throw new Error("Property argument 'family' is required, but was missing");
        }
        this.family = args.family;
        this.hostname = args.hostname;
        if (args.location === undefined) {
            throw new Error("Property argument 'location' is required, but was missing");
        }
        this.location = args.location;
        this.cacheName = args.cacheName;
        this.port = args.port;
        this.primaryAccessKey = args.primaryAccessKey;
        if (args.redisConfiguration === undefined) {
            throw new Error("Property argument 'redisConfiguration' is required, but was missing");
        }
        this.redisConfiguration = args.redisConfiguration;
        if (args.resourceGroupName === undefined) {
            throw new Error("Property argument 'resourceGroupName' is required, but was missing");
        }
        this.resourceGroupName = args.resourceGroupName;
        this.secondaryAccessKey = args.secondaryAccessKey;
        this.shardCount = args.shardCount;
        if (args.skuName === undefined) {
            throw new Error("Property argument 'skuName' is required, but was missing");
        }
        this.skuName = args.skuName;
        this.sslPort = args.sslPort;
        this.tags = args.tags;
    }
}

export interface CacheArgs {
    readonly capacity: number;
    readonly enableNonSslPort?: boolean;
    readonly family: string;
    readonly hostname?: string;
    readonly location: string;
    readonly cacheName?: string;
    readonly port?: number;
    readonly primaryAccessKey?: string;
    readonly redisConfiguration: { maxclients?: number, maxmemoryDelta?: number, maxmemoryPolicy?: string, maxmemoryReserved?: number, rdbBackupEnabled?: boolean, rdbBackupFrequency?: number, rdbBackupMaxSnapshotCount?: number, rdbStorageConnectionString?: string }[];
    readonly resourceGroupName: string;
    readonly secondaryAccessKey?: string;
    readonly shardCount?: number;
    readonly skuName: string;
    readonly sslPort?: number;
    readonly tags?: {[key: string]: any};
}
