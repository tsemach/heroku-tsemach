#!/bin/bash

readme() {
	name=$1; shift;
	project=$1; shift;
	branch=$1; shift;

	echo "curl http://localhost:8081/admin/content?name=${name}\&project=${project}\&branch=${branch}"
	curl http://localhost:8081/admin/content?name=${name}\&project=${project}\&branch=${branch}
}

function import() {
	collection=$1; shift
	file=$1; shift

	echo "mongoimport --host Center-1-shard-0/center-1-shard-00-00-kivdh.mongodb.net:27017,center-1-shard-00-01-kivdh.mongodb.net:27017,center-1-shard-00-02-kivdh.mongodb.net:27017 --ssl --username shell --password 'Ski!2021' --authenticationDatabase admin --db heruko --collection ${collection} --type json --file $file"

	mongoimport --host Center-1-shard-0/center-1-shard-00-00-kivdh.mongodb.net:27017,center-1-shard-00-01-kivdh.mongodb.net:27017,center-1-shard-00-02-kivdh.mongodb.net:27017 --ssl --username shell --password 'zubur1' --authenticationDatabase admin --db heruko --collection ${collection} --type json --file $file
}

if [ $# -eq 0 ]; then
	echo "going to import all"
	import applications application_01.json
	import applications application_02.json
	import applications application_03.json
	import applications application_04.json
	import applications application_05.json

	import descriptions descriptions_01.json
	import descriptions descriptions_02.json
	import descriptions descriptions_03.json
	import descriptions descriptions_04.json
	import descriptions descriptions_05.json

	readme tsemach.github.io tsemach.github.io source
	readme typescript-publisher typescript-publisher master
	readme typescript-txjs typescript-txjs master
	readme react-css react-css master
	readme react-code react-code master

	exit 0
fi

if [ $# -lt 2 ]; then
	echo ""
	echo "./import.sh <collection> <filename>"
	echo "./import.sh contents <name> <project> <branch>"
	echo ""
	echo "examples:"
	echo "	./import.sh applications application_05.json"
	echo "	./import.sh descriptions description_05.json"
	echo "	./import.sh contents react-code react-code master"
	echo ""
	echo ""
	exit 1
fi
collection=$1; shift

if [ $collection = 'contents' ]; then
	echo "found content collection, filename: $filename"

	if [ $# -lt 3 ]; then	
		echo ""
		echo "./import.sh contents <name> <project> <branch>"
		echo ""
		exit 1
	fi
	name=$1; shift;
	project=$1; shift;
	branch=$1; shift;

	readme $name $project $branch
	exit 0
fi

filename=$1; shift
import $collection $filename

