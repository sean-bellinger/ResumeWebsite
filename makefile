build:
	cd ./app && docker build . -t registry.digitalocean.com/seanbportfolio/frontend:latest
	docker push registry.digitalocean.com/seanbportfolio/frontend:latest

deploy:
	ssh root@seanbellinger.dev 'docker pull registry.digitalocean.com/seanbportfolio/frontend:latest'
	ssh root@seanbellinger.dev 'docker kill $$(docker ps -q)'
	ssh root@seanbellinger.dev 'docker run -d -p 8080:80 registry.digitalocean.com/seanbportfolio/frontend:latest'