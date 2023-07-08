export interface VulnerabilitiesLinkType {
    url: null | string;
    label: string;
    active: Boolean;
}

export interface VulnerabilitiesExternalLinkType {
    url: string;
    title: string;
}

export interface VulnerabilitiesDataType {
    uuid: string;
    name: string;
    severity: string;
    category: string;
    description: string;
    remediation: string;
    exploit_available: number;
    cvss_score: number;
    cvss3_score: number;
    cves: string[];
    external_links: VulnerabilitiesExternalLinkType[];
    nessus_plugin_family: string;
    nessus_plugin_id: null;
    created_at: string;
    updated_at: string;
    deleted_at: null;
    additional_affected_asset_fields: string[];
    record_to_remove: null;
}

export default interface VulnerabilitiesType {
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    data: VulnerabilitiesDataType[];
    next_page_url: null;
    path: string;
    links: VulnerabilitiesLinkType[];
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}
