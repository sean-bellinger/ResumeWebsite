resource "digitalocean_droplet" "website-portfolio" {
    image = "ubuntu-20-04-x64"
    name = "website-portfolio"
    region = data.digitalocean_region.primary.slug
    size = "s-1vcpu-512mb-10gb"
    ssh_keys = [
      digitalocean_ssh_key.default.fingerprint
    ]
}

resource "digitalocean_ssh_key" "default" {
  name       = "website-portfolio"
  public_key = file("/home/sean/.ssh/id_ed25519.pub")
}