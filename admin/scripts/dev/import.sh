#!/bin/bash 

readme() {
	name=$1; shift;
	project=$1; shift;
	branch=$1; shift;

	echo "curl http://localhost:8081/admin/content?name=${name}\&project=${project}\&branch=${branch}"
	curl http://localhost:8081/admin/content?name=${name}\&project=${project}\&branch=${branch}
}

mongoimport applications.json -d heruko -c applications --jsonArray --drop
mongoimport descriptions.json -d heruko -c descriptions --jsonArray --drop

readme react-css react-css master
readme tsemach.github.io tsemach.github.io source
readme typescript-publisher typescript-publisher master
readme typescript-txjs typescript-txjs master

