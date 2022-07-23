resource "digitalocean_container_registry" "website-portfolio" {
  name                   = "seanbportfolio"
  subscription_tier_slug = "starter"
  region = data.digitalocean_region.primary.slug
}