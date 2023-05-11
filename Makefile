# 构建镜像 make build version=1.0
build:
	docker build -f images/Dockerfile -t weekreport-server:v1.0 .
