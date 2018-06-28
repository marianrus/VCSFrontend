FROM webdevops/apache:ubuntu-14.04

RUN mkdir /var/log/apache2/
ADD web-frontend-app/ /app
#ADD apache-config.conf /etc/apache2/sites-enabled/000-default.conf
