# deploy-backend.sh
#!/bin/bash
sudo apt update
sudo apt install -y unzip
wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.21/pocketbase_0.22.21_linux_amd64.zip
sudo unzip pocketbase_0.22.21_linux_amd64.zip -d /opt/pocketbase
sudo mkdir -p /opt/pocketbase/pb_data
cp pb_schema.json /opt/pocketbase/pb_migrations/
sudo /opt/pocketbase/pocketbase serve --http=0.0.0.0:8090 &