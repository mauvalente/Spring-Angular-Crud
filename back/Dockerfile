FROM openjdk:17-jdk-alpine

RUN addgroup -g 1000 -S spring && adduser -u 1000 -S spring -G spring

RUN mkdir /opt/maven
WORKDIR /opt/maven
RUN wget https://dlcdn.apache.org/maven/maven-3/3.8.4/binaries/apache-maven-3.8.4-bin.tar.gz -O /opt/maven/apache-maven.tar.gz
RUN tar xzvf /opt/maven/apache-maven.tar.gz
RUN mv apache-maven-* apache-maven

USER spring

RUN mkdir -p ~/app/back

ENV M2_HOME "/opt/maven/apache-maven"
ENV PATH "$PATH:$M2_HOME/bin"

WORKDIR /home/spring/app/back/

EXPOSE 8080

CMD mvn spring-boot:run