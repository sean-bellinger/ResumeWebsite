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

resource "digitalocean_firewall" "web" {
  name = "only-22-80-and-443"

  droplet_ids = [digitalocean_droplet.website-portfolio.id]

  //this is our ssh rule
  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["73.25.84.23"]
  }
  //http
  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }
  //https
  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }
  //ping
  inbound_rule {
    protocol         = "icmp"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }
}