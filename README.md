# ResumeWebsite

## build and tag docker image

```bash
cd app
docker build . -t registry.digitalocean.com/seanbportfolio/frontend:latest
docker push registry.digitalocean.com/seanbportfolio/frontend:latest
```