resource "digitalocean_droplet" "website-portfolio" {
    image = "ubuntu-20-04-x64"
    name = "website-portfolio"
    region = data.digitalocean_region.primary.slug
    size = "s-1vcpu-512mb-10gb"
    ssh_keys = [
      data.digitalocean_ssh_key.linux_laptop.fingerprint
    ]
}

data "digitalocean_ssh_key" "linux_laptop" {
  name = "Linux-Laptop"
}