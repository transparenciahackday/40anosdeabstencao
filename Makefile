build:
	gulp build

install:
	npm install

serve:
	gulp watch

deploy:
	gulp build
	rsync -aru --delete --progress dev/ -e ssh dh:~/www/datewithdata.pt/
dry-deploy:
	rsync -arun --delete --progress dev/ -e ssh dh:~/www/datewithdata.pt/
