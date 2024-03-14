export interface Page {
    number: number
}

export interface Pagination {
    total_pages: number,
    pages: Page[]
    tota_entities: number,
    current_page: number,
    from: number,
    to: number,
    per_page: number,
    first_page: number,
    last_page: number
}


