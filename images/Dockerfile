FROM java:alpine
ADD target/zhoubaoBoot-0.0.1-SNAPSHOT.jar /weekreport-server/weekreport.jar
# 切换软件源
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories \
    && apk update \
    && apk add tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone
WORKDIR /weekreport-server
CMD ["java","-jar","weekreport.jar"]
