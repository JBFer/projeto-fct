import { api_url } from "../constants/host";

export async function products_user() {
    fetch( api_url+'products/all')
    .then(response => response.json())
    .then(json => console.warn(json))
}

export async function products_name() {
    fetch( api_url+'products/all')
    .then(response => response.json())
    .then(json => console.warn(json))
}

export async function products_id() {
    fetch( api_url+'products/all')
    .then(response => response.json())
    .then(json => console.warn(json))
}

export async function filter_subcatg() {
    fetch( api_url+'products/all')
    .then(response => response.json())
    .then(json => console.warn(json))
}

export async function updateStock() {
    fetch( api_url+'products/all')
    .then(response => response.json())
    .then(json => console.warn(json))
}

export async function updateViews() {
    fetch( api_url+'products/all')
    .then(response => response.json())
    .then(json => console.warn(json))
}