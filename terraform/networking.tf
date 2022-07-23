locals {
  record_names = toset([
    "www",
    "@"
  ])
}


data "digitalocean_region" "primary" {
  slug = "sfo3"
}

resource "digitalocean_reserved_ip" "example" {
  region = data.digitalocean_region.primary.slug
  droplet_id = digitalocean_droplet.website-portfolio.id
}

resource "digitalocean_domain" "default" {
  name = "seanbellinger.dev"
}


# Add an A record to the domain for www.example.com.
resource "digitalocean_record" "main" {
  for_each = local.record_names
  domain = digitalocean_domain.default.id
  type   = "A"
  name   = each.value
  value  = digitalocean_reserved_ip.example.ip_address
}