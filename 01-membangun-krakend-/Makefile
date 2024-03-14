build:
	docker build keranjang-service/ -t keranjang-app:latest
	docker build user-service/ -t user-app:latest

install:
	docker run --name keranjang-app -p 3001:3000 --network krakend-net -d keranjang-app:latest
	docker run --name user-app -p 3002:3000 --network krakend-net -d user-app:latest

remove:
	docker stop keranjang-app && docker rm keranjang-app
	docker stop user-app && docker rm user-app