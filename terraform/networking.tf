data "digitalocean_region" "sfo2" {
  slug = "sfo2"
}

resource "digitalocean_reserved_ip" "example" {
  region = data.digitalocean_region.sfo2.slug
}