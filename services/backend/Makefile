.PHONY: build clean
# .PHONY: build clean deploy

build:
	# dep ensure -v
	# env GOARCH=amd64 GOOS=linux go build -modfile=src/go-functions/hello/go.mod -ldflags="-s -w" -o bin/hello src/go-functions/hello/main.go 
	env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/hello src/go-functions/hello/main.go 
	# env GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/world world/main.go

zip:
	zip hello.zip bin/hello

clean:
	rm -rf ./bin ./vendor Gopkg.lock

# deploy: clean build
# 	sls deploy --verbose